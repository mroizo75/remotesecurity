import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Users, Target, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Remote Secure Systems | AI Security Solutions",
  description: "Learn about Remote Secure Systems, founded in Kongsberg, Norway. We provide AI-powered security solutions for military personnel, security professionals, and critical infrastructure protection.",
  keywords: [
    "about remote secure systems",
    "AI security company",
    "Kongsberg security",
    "military security solutions",
    "threat detection company",
    "security technology Norway"
  ],
  openGraph: {
    title: "About Us - Remote Secure Systems",
    description: "Learn about Remote Secure Systems, founded in Kongsberg, Norway. We provide AI-powered security solutions for military personnel and security professionals.",
    url: "https://remotesecuresystems.com/about",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Remote Secure Systems",
    description: "Learn about Remote Secure Systems, founded in Kongsberg, Norway. We provide AI-powered security solutions.",
    images: ["/twitter-image.svg"],
  },
  alternates: {
    canonical: "https://remotesecuresystems.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="pt-20 pb-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs items={[{ label: "About" }]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About</span>
            <br />
            Remote Secure Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Born from a vision to create better security solutions for those who protect us
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Remote Secure Systems was founded on a simple yet powerful idea: 
              to provide better security solutions for personnel working in security and military operations.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-muted-foreground mb-6">
              We recognized that traditional security systems often fall short when it comes to 
              protecting those who protect us. Military personnel, security professionals, and 
              first responders face increasingly complex threats that require equally sophisticated solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              Our AI-powered detection systems were designed specifically to address these challenges, 
              providing advanced threat detection capabilities that go beyond human perception. 
              We believe that technology should enhance human capabilities, not replace them.
            </p>
            <p className="text-muted-foreground">
              Based in Kongsberg, Norway, we combine Nordic innovation with global security expertise 
              to deliver solutions that make a real difference in protecting lives and critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Protection First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-base">
                  Every decision we make prioritizes the safety and security of those who serve.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Human-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-base">
                  Technology should enhance human capabilities, not replace human judgment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-base">
                  We focus on accuracy and reliability in every aspect of our solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-base">
                  We're driven by the mission to save lives and protect what matters most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Based in Kongsberg, Norway</h2>
          <p className="text-lg text-muted-foreground mb-8">
            From the heart of Norwegian innovation, we serve security professionals worldwide
          </p>
          <div className="bg-muted/50 rounded-lg p-8">
            <p className="text-muted-foreground">
              Kongsberg has a rich history of technological innovation and defense expertise. 
              It's the perfect location for developing cutting-edge security solutions that 
              meet the highest standards of quality and reliability.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
