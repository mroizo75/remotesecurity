import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertTriangle, Users, Gavel } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Terms of</span>
            <br />
            Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Terms and conditions for using our security services
          </p>
        </div>
      </section>

      {/* Terms Content */}
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
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  1. Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using Remote Secure Systems' website and services, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using our services.
                </p>
                <p className="text-muted-foreground mt-4">
                  These terms apply to all users of our website, including visitors, clients, and partners.
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  2. Service Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Remote Secure Systems provides advanced AI-powered security solutions including:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• AI-powered threat detection systems</li>
                    <li>• Acoustic monitoring and visual analysis</li>
                    <li>• Autonomous drone networks for surveillance</li>
                    <li>• Portable transmitter detection systems</li>
                    <li>• Security consulting and implementation services</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    All services are provided subject to availability and applicable security regulations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-primary" />
                  3. User Responsibilities and Restrictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Permitted Use</h4>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Use our services for legitimate security purposes only</li>
                      <li>• Comply with all applicable laws and regulations</li>
                      <li>• Provide accurate information when contacting us</li>
                      <li>• Respect intellectual property rights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prohibited Activities</h4>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Unauthorized access to our systems or data</li>
                      <li>• Use of services for illegal or harmful purposes</li>
                      <li>• Reverse engineering or tampering with our technology</li>
                      <li>• Violation of security protocols or confidentiality</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 mr-2 text-primary" />
                  4. Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    All content, technology, and intellectual property on our website and in our services are owned by 
                    Remote Secure Systems or our licensors. This includes:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Software, algorithms, and AI models</li>
                    <li>• Website design, text, and graphics</li>
                    <li>• Trademarks, logos, and brand elements</li>
                    <li>• Patents, trade secrets, and proprietary technology</li>
                  </ul>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Important:</strong> Unauthorized use of our intellectual property is strictly prohibited 
                      and may result in legal action.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liability and Disclaimers */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-primary" />
                  5. Disclaimers and Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Service Availability</h4>
                    <p className="text-muted-foreground">
                      We strive to provide reliable services, but cannot guarantee uninterrupted access. 
                      Services are provided "as is" without warranties of any kind.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                    <p className="text-muted-foreground">
                      To the maximum extent permitted by law, Remote Secure Systems shall not be liable for any 
                      indirect, incidental, special, or consequential damages arising from the use of our services.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Security Notice:</strong> While our systems are designed for high security, 
                      no system can guarantee 100% protection against all threats.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle>6. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Our collection and use of personal information is governed by our 
                    Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">GDPR compliance for EU users</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">CCPA compliance for California users</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Industry-standard data security</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="h-6 w-6 mr-2 text-primary" />
                  7. Governing Law and Dispute Resolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Applicable Law</h4>
                    <p className="text-muted-foreground">
                      These Terms are governed by Norwegian law, without regard to conflict of law principles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                    <p className="text-muted-foreground">
                      Any disputes arising from these Terms shall be resolved through binding arbitration in Kongsberg, Norway, 
                      or through the competent courts of Norway.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Contact:</strong> For legal matters, contact us at kenneth@kksas.no
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle>8. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
                    posting on our website. Continued use of our services after changes constitutes acceptance of the new Terms.
                  </p>
                  <p className="text-muted-foreground">
                    We will notify users of significant changes via email or website notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8 hover-lift gradient-card">
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="font-semibold">Remote Secure Systems</p>
                    <p className="text-muted-foreground">Email: kenneth@kksas.no</p>
                    <p className="text-muted-foreground">Location: Kongsberg, Norway</p>
                  </div>
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
