import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  Mic, 
  Network, 
  Zap, 
  Users, 
  Building, 
  Music, 
  Trophy,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Lock,
  Activity,
  Radio,
  Brain,
  Target,
  AlertTriangle
} from "lucide-react";
import { 
  AcousticSensorIcon, 
  VisualAnalysisIcon, 
  DroneIcon, 
  AIBrainIcon,
  TransmitterDetectionIcon,
  RFScannerIcon,
  DroneThreatIcon,
  PortableDeviceIcon
} from "@/components/icons/SecurityIcons";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-hero">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge variant="secondary" className="mb-6 accent-blue text-white">
            <Star className="h-4 w-4 mr-2" />
            Complete Feature Overview
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Advanced Security</span>
            <br />
            Technologies
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive overview of our cutting-edge security technologies, 
            from AI-powered detection systems to portable transmitter analysis.
          </p>
        </div>
      </section>

      {/* Primary Security System Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Primary Security System</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security infrastructure combining autonomous drones, 
              advanced sensors, and AI-powered analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-blue rounded-full w-fit">
                  <AcousticSensorIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Ultra-Sensitive Audio Detection</CardTitle>
                <CardDescription>
                  Military-grade microphones with AI-powered sound classification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Long-range acoustic detection (2km+)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    AI-powered sound classification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Directional audio triangulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Real-time threat identification
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-green rounded-full w-fit">
                  <VisualAnalysisIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>AI-Powered Visual Analysis</CardTitle>
                <CardDescription>
                  High-resolution cameras with behavioral anomaly detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Behavioral anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Weapon and object recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Crowd density and flow analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Facial recognition capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-purple rounded-full w-fit">
                  <DroneIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Autonomous Drone Networks</CardTitle>
                <CardDescription>
                  Self-deploying drone swarms with advanced sensors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Autonomous flight coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Real-time aerial surveillance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Self-healing network topology
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Rapid response deployment
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portable Transmitter Detection Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portable Transmitter Detection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handheld AI-powered system for detecting and classifying all radio 
              frequency transmissions in the area
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-orange rounded-full w-fit">
                  <TransmitterDetectionIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Real-Time RF Detection</CardTitle>
                <CardDescription>
                  Continuously scans and detects all radio frequency transmissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Multi-frequency spectrum analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Signal strength triangulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Frequency hopping detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    2km detection radius
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-blue rounded-full w-fit">
                  <AIBrainIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>AI Classification Engine</CardTitle>
                <CardDescription>
                  Machine learning algorithms trained on millions of signal patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Drone controller identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Military vs civilian classification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Threat level assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Encrypted signal detection
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover-lift gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 accent-green rounded-full w-fit">
                  <RFScannerIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Precision Location Tracking</CardTitle>
                <CardDescription>
                  Advanced triangulation algorithms with meter-level accuracy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    GPS coordinate mapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Movement pattern analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Predictive trajectory modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Real-time location updates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Military-grade specifications and performance metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 accent-blue rounded-full w-fit">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Detection Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">AI Detection Accuracy</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 accent-green rounded-full w-fit">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">&lt;1s</div>
                <p className="text-sm text-muted-foreground">Threat Response Time</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 accent-purple rounded-full w-fit">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Coverage Area</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">5km²</div>
                <p className="text-sm text-muted-foreground">Primary System Coverage</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 accent-orange rounded-full w-fit">
                  <Radio className="h-8 w-8 text-white" />
                </div>
                <CardTitle>RF Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">2km</div>
                <p className="text-sm text-muted-foreground">Transmitter Detection Range</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Experience Our Technology?</h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule a comprehensive demo to see our advanced security systems in action
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
