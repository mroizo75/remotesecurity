import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Privacy</span>
            <br />
            Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy and data protection are our top priorities
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <p className="text-muted-foreground">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  1. Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Remote Secure Systems ("we," "our," or "us") is committed to protecting your privacy and personal data. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website or use our services.
                </p>
                <p className="text-muted-foreground mt-4">
                  We comply with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), 
                  and other applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-6 w-6 mr-2 text-primary" />
                  2. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Name and contact information (email, phone)</li>
                      <li>• Company information and job title</li>
                      <li>• Communication preferences</li>
                      <li>• Security requirements and project details</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Information</h4>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• IP address and device information</li>
                      <li>• Browser type and version</li>
                      <li>• Website usage data and analytics</li>
                      <li>• Cookie data (with your consent)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-primary" />
                  3. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Legitimate Business Purposes</h4>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Provide and improve our security services</li>
                      <li>• Respond to your inquiries and support requests</li>
                      <li>• Send important service updates and notifications</li>
                      <li>• Comply with legal obligations and security requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketing Communications</h4>
                    <p className="text-muted-foreground">
                      We may send you marketing communications only with your explicit consent. 
                      You can opt-out at any time by contacting us or using the unsubscribe link.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-primary" />
                  4. Data Security and Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your personal data:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Encryption of data in transit and at rest</li>
                    <li>• Access controls and authentication systems</li>
                    <li>• Regular security audits and assessments</li>
                    <li>• Employee training on data protection</li>
                    <li>• Secure data centers with physical security</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-primary" />
                  5. Your Data Protection Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Under GDPR and other applicable laws, you have the following rights:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Access & Portability</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Right to access your personal data</li>
                        <li>• Right to data portability</li>
                        <li>• Right to receive copies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Control & Deletion</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Right to rectification</li>
                        <li>• Right to erasure ("right to be forgotten")</li>
                        <li>• Right to restrict processing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>To exercise your rights:</strong> Contact us at kenneth@kksas.no with your request. 
                      We will respond within 30 days as required by law.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">Essential Cookies</span>
                      <span className="text-sm text-muted-foreground">Always active</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">Analytics Cookies</span>
                      <span className="text-sm text-muted-foreground">With consent</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">Marketing Cookies</span>
                      <span className="text-sm text-muted-foreground">With consent</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You can manage your cookie preferences using our cookie consent banner.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-primary" />
                  7. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    For any privacy-related questions or concerns, please contact us:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="font-semibold">Remote Secure Systems</p>
                    <p className="text-muted-foreground">Email: kenneth@kksas.no</p>
                    <p className="text-muted-foreground">Location: Kongsberg, Norway</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We will respond to all privacy inquiries within 30 days as required by GDPR.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
