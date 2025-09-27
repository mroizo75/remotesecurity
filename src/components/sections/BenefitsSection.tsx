import { Globe, Lock, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our AI Detection System?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Military-grade technology that detects threats beyond human perception, 
            providing unprecedented security for critical environments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Military-Grade Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                Advanced encryption and secure data handling meeting the highest 
                military and government security standards.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Massive Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                Monitor areas up to 5km² with autonomous drone networks 
                and distributed sensor arrays.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Superhuman Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                AI trained to detect threats invisible to human operators, 
                including micro-expressions and subtle behavioral changes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Predictive Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                Machine learning algorithms predict and prevent threats 
                before they materialize, not after incidents occur.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
