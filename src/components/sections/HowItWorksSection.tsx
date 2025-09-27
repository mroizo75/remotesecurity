import { Activity, Zap, Radio } from "lucide-react";
import { AIBrainIcon } from "@/components/icons/SecurityIcons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How Our AI Detection Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced machine learning algorithms process multi-sensor data to identify 
            threats that would be invisible to human security personnel
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                <Activity className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">1. Multi-Sensor Data Fusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                Drones, cameras, and microphones continuously collect audio, visual, 
                and environmental data across the entire coverage area, creating 
                a comprehensive real-time security map.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                <AIBrainIcon className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">2. AI Threat Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                Deep learning models trained on millions of hours of security footage 
                identify behavioral anomalies, weapon detection, and threat patterns 
                that human operators would miss.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                <Radio className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">3. Instant Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                When threats are detected, autonomous drones can be deployed immediately 
                to the exact location, while security teams receive detailed threat assessments 
                and recommended response protocols.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
