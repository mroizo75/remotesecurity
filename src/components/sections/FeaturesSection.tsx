import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { AcousticSensorIcon, VisualAnalysisIcon, DroneIcon } from "@/components/icons/SecurityIcons";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Detection Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multi-layered sensor networks combining drones, cameras, and microphones 
            with AI trained to detect threats invisible to human operators
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <AcousticSensorIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Ultra-Sensitive Audio Detection</CardTitle>
              <CardDescription className="text-base">
                Military-grade microphones detect gunshots, explosions, screams, 
                and even footsteps at distances up to 2km with pinpoint accuracy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Long-range acoustic detection (2km+)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  AI-powered sound classification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Directional audio triangulation
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <VisualAnalysisIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">AI-Powered Visual Analysis</CardTitle>
              <CardDescription className="text-base">
                High-resolution cameras with AI trained to detect suspicious behavior, 
                weapons, unusual objects, and abnormal movement patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Behavioral anomaly detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Weapon and object recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Crowd density and flow analysis
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="group hover-lift gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <DroneIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Autonomous Drone Networks</CardTitle>
              <CardDescription className="text-base">
                Self-deploying drone swarms with advanced sensors that provide 
                aerial surveillance and rapid response capabilities across large areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Autonomous flight coordination
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time aerial surveillance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Self-healing network topology
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
