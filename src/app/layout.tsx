import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/CookieConsent";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remote Secure Systems - Next-Generation Event Security",
  description: "Revolutionary AI-powered security system for events, concerts, and public gatherings. Proactive threat detection with acoustic monitoring, visual analysis, and distributed sensor networks.",
  keywords: [
    "event security",
    "AI security systems",
    "acoustic monitoring",
    "visual analysis",
    "threat detection",
    "concert security",
    "festival security",
    "public safety",
    "smart security",
    "IoT security",
    "proactive security",
    "distributed sensors"
  ],
  authors: [{ name: "Remote Secure Systems" }],
  creator: "Remote Secure Systems",
  publisher: "Remote Secure Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remotesecuresystems.com",
    siteName: "Remote Secure Systems",
    title: "Remote Secure Systems - Next-Generation Event Security",
    description: "Revolutionary AI-powered security system for events, concerts, and public gatherings. Proactive threat detection with acoustic monitoring, visual analysis, and distributed sensor networks.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Remote Secure Systems - AI-Powered Event Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Secure Systems - Next-Generation Event Security",
    description: "Revolutionary AI-powered security system for events, concerts, and public gatherings.",
    images: ["/twitter-image.svg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://remotesecuresystems.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
          <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Remote Secure Systems",
                  "url": "https://remotesecuresystems.com",
                  "logo": "https://remotesecuresystems.com/favicon.svg",
                  "description": "Revolutionary AI-powered security system for events, concerts, and public gatherings. Proactive threat detection with acoustic monitoring, visual analysis, and distributed sensor networks.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kongsberg",
                    "addressCountry": "Norway"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "kenneth@kksas.no",
                    "telephone": "+47 915 40 824",
                    "contactType": "customer service"
                  },
                  "sameAs": [
                    "https://remotesecuresystems.com"
                  ],
                  "foundingDate": "2024",
                  "industry": "Security Technology",
                  "knowsAbout": [
                    "AI Security Systems",
                    "Threat Detection",
                    "Drone Networks",
                    "Acoustic Monitoring",
                    "Visual Analysis",
                    "Military Security"
                  ]
                })
              }}
            />
          </head>
          <body
            className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <CookieConsent />
              <Toaster richColors position="top-right" />
            </ThemeProvider>
          </body>
        </html>
  );
}
