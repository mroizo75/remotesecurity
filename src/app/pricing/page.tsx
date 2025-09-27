import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  Users,
  Building,
  MapPin,
  Zap,
  Globe,
  Lock,
  Crown,
  Award
} from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-hero">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge variant="secondary" className="mb-6 accent-blue text-white">
            <Crown className="h-4 w-4 mr-2" />
            Military-Grade Security Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Security</span>
            <br />
            Investment Plans
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Security is priceless. Our investment plans are tailored to protect what matters most 
            to you - whether it's lives, infrastructure, or critical operations.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Portable Detection Plan */}
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-blue rounded-full w-fit">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Field Operations</CardTitle>
                <CardDescription>
                  Essential protection for mobile security teams and field operations
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-success">Investment</span>
                  <span className="text-muted-foreground block">Based on Value</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Portable RF detection device</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>2km detection radius</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>AI-powered classification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Real-time threat assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>GPS location tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>24/7 technical support</span>
                  </li>
                </ul>
                <Button className="w-full accent-blue hover:accent-green transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Standard Security Plan */}
            <Card className="group hover-lift gradient-card border-gradient">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-green rounded-full w-fit">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <Badge className="mb-2 accent-green text-white">Most Popular</Badge>
                <CardTitle className="text-2xl">Facility Protection</CardTitle>
                <CardDescription>
                  Comprehensive security for critical facilities and installations
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-success">Custom</span>
                  <span className="text-muted-foreground block">Investment</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Everything in Portable Detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>5 autonomous drones</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>20 high-resolution cameras</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>50 acoustic sensors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>2km² coverage area</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>AI threat analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full accent-green hover:accent-blue transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-purple rounded-full w-fit">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Mission Critical</CardTitle>
                <CardDescription>
                  Ultimate protection for military bases and critical infrastructure
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-warning">Premium</span>
                  <span className="text-muted-foreground block">Investment</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Everything in Standard Security</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Unlimited drones & sensors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Custom coverage areas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Advanced AI customization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Military-grade encryption</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    <span>On-site installation</span>
                  </li>
                </ul>
                <Button className="w-full accent-purple hover:accent-orange transition-all duration-300">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Value-Based Investment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Security investment is based on the value of what you're protecting, 
              not arbitrary pricing tiers
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Protection Level</th>
                  <th className="text-center p-4 font-semibold">Field Operations</th>
                  <th className="text-center p-4 font-semibold">Facility Protection</th>
                  <th className="text-center p-4 font-semibold">Mission Critical</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">What You're Protecting</td>
                  <td className="text-center p-4">Field Teams</td>
                  <td className="text-center p-4">Critical Facilities</td>
                  <td className="text-center p-4">National Security</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Investment Philosophy</td>
                  <td className="text-center p-4">Essential Protection</td>
                  <td className="text-center p-4">Comprehensive Security</td>
                  <td className="text-center p-4">No Compromise</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Risk Level</td>
                  <td className="text-center p-4">Medium</td>
                  <td className="text-center p-4">High</td>
                  <td className="text-center p-4">Critical</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Response Time</td>
                  <td className="text-center p-4">&lt;5 minutes</td>
                  <td className="text-center p-4">&lt;1 minute</td>
                  <td className="text-center p-4">&lt;30 seconds</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Support Level</td>
                  <td className="text-center p-4">Standard</td>
                  <td className="text-center p-4">Priority</td>
                  <td className="text-center p-4">Dedicated</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Customization</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4">Advanced</td>
                  <td className="text-center p-4">Complete</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Value Proposition</td>
                  <td className="text-center p-4">Cost-Effective</td>
                  <td className="text-center p-4">Balanced</td>
                  <td className="text-center p-4">Premium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investment Questions</h2>
            <p className="text-xl text-muted-foreground">
              Understanding the value of security investment
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle>How do you determine investment levels?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Investment is based on the value of what you're protecting. We assess your 
                  specific risks, the criticality of your operations, and the potential 
                  consequences of security failures to recommend appropriate protection levels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle>What's the ROI of security investment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Security investment prevents losses that could cost 10-100x more than the 
                  protection itself. A single prevented incident can justify years of security 
                  investment. We help quantify potential losses vs. protection costs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle>Can investment levels be adjusted?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, security needs evolve. We regularly reassess your risk profile and 
                  adjust protection levels accordingly. Investment can be scaled up or down 
                  based on changing threats and operational requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle>What kind of support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All investment levels include comprehensive support. Higher investment levels 
                  receive dedicated support teams, faster response times, and priority access 
                  to our security experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Invest in Security?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss what you're protecting and determine the right investment level for your needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Discuss Investment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
