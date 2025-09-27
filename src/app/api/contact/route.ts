import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 requests per 15 minutes per IP

// Spam keywords to detect
const SPAM_KEYWORDS = [
  'viagra', 'casino', 'lottery', 'winner', 'congratulations',
  'click here', 'free money', 'make money', 'work from home',
  'crypto', 'bitcoin', 'investment', 'loan', 'credit',
  'weight loss', 'diet pills', 'supplements', 'pharmacy'
];

// Suspicious patterns
const SUSPICIOUS_PATTERNS = [
  /https?:\/\/[^\s]+/g, // URLs
  /[A-Z]{5,}/g, // Excessive caps
  /!{3,}/g, // Multiple exclamation marks
  /\${2,}/g, // Multiple dollar signs
];

function isSpamContent(text: string): boolean {
  const lowerText = text.toLowerCase();
  
  // Check for spam keywords
  if (SPAM_KEYWORDS.some(keyword => lowerText.includes(keyword))) {
    return true;
  }
  
  // Check for suspicious patterns
  if (SUSPICIOUS_PATTERNS.some(pattern => pattern.test(text))) {
    return true;
  }
  
  // Check for excessive repetition
  const words = text.split(/\s+/);
  const wordCount = new Map<string, number>();
  words.forEach(word => {
    const lowerWord = word.toLowerCase();
    wordCount.set(lowerWord, (wordCount.get(lowerWord) || 0) + 1);
  });
  
  // If any word appears more than 30% of the time, it's likely spam
  const maxRepetition = Math.max(...wordCount.values());
  if (maxRepetition > words.length * 0.3) {
    return true;
  }
  
  return false;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }
  
  // Reset if window has passed
  if (now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }
  
  // Check if under limit
  if (userLimit.count < RATE_LIMIT_MAX_REQUESTS) {
    userLimit.count++;
    return true;
  }
  
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;
    
    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Honeypot check - if filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Field length exceeds maximum allowed' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Spam content detection
    const fullText = `${name} ${subject} ${message}`.toLowerCase();
    if (isSpamContent(fullText)) {
      return NextResponse.json(
        { error: 'Message content not allowed' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Remote Secure Systems <noreply@licensguard.com>',
      to: ['kenneth@kksas.no'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This message was sent from the Remote Secure Systems contact form.</p>
            <p>Reply directly to this email to respond to ${name} at ${email}</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
