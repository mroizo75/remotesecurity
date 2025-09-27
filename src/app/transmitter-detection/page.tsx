import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Radio, 
  Shield, 
  Zap, 
  Eye, 
  Target, 
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Building,
  MapPin,
  Globe,
  Lock,
  Activity,
  Brain,
  Wifi,
  Signal
} from "lucide-react";
import { TransmitterDetectionIcon, RFScannerIcon, DroneThreatIcon, PortableDeviceIcon } from "@/components/icons/SecurityIcons";

export default function TransmitterDetectionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge variant="secondary" className="mb-6">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Next-Generation Drone Warfare Defense
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Portable AI</span>
            <br />
            Transmitter Detection
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionary portable system that uses AI to detect, classify, and identify 
            all transmitters in an area. Essential protection against drone warfare threats 
            and unauthorized surveillance - saving lives through advanced technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Transmitter Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt;500ms</div>
              <div className="text-sm text-muted-foreground">Real-Time Classification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2km</div>
              <div className="text-sm text-muted-foreground">Detection Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Transmitter Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced machine learning algorithms instantly classify and identify 
              all radio frequency sources, distinguishing friend from foe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <TransmitterDetectionIcon className="h-8 w-8 text-primary" />
              </div>
                <CardTitle>Real-Time RF Detection</CardTitle>
                <CardDescription>
                  Continuously scans and detects all radio frequency transmissions 
                  within a 2km radius, identifying every transmitter in the area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-frequency spectrum analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Signal strength triangulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Frequency hopping detection
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>AI Classification Engine</CardTitle>
                <CardDescription>
                  Machine learning algorithms trained on millions of signal patterns 
                  to instantly identify transmitter types and threat levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Drone controller identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Military vs civilian classification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Threat level assessment
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <RFScannerIcon className="h-8 w-8 text-primary" />
              </div>
                <CardTitle>Precision Location Tracking</CardTitle>
                <CardDescription>
                  Advanced triangulation algorithms pinpoint exact transmitter locations 
                  with meter-level accuracy for rapid threat neutralization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    GPS coordinate mapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Movement pattern analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Predictive trajectory modeling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Our AI Detection System Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three-step process that transforms raw RF signals into actionable intelligence 
              for life-saving decision making
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-fit">
                <PortableDeviceIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. RF Spectrum Capture</h3>
              <p className="text-muted-foreground">
                Advanced antennas continuously capture all radio frequency signals 
                across multiple bands, creating a comprehensive RF map of the area.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-fit">
                <Brain className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. AI Signal Analysis</h3>
              <p className="text-muted-foreground">
                Deep learning models trained on military and civilian signal databases 
                instantly classify each transmitter, identifying potential threats 
                and their capabilities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-fit">
                <DroneThreatIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Threat Assessment</h3>
              <p className="text-muted-foreground">
                System provides real-time threat level assessment with precise 
                location data, enabling rapid response to protect lives and 
                critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Critical Protection Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential defense against drone warfare and unauthorized surveillance 
              across military, government, and civilian environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Military Base Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Detect enemy drone controllers and surveillance equipment 
                  attempting to infiltrate military installations and training areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Government Facility Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Protect embassies, government buildings, and diplomatic compounds 
                  from unauthorized surveillance and potential drone attacks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Critical Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Monitor power plants, airports, and transportation hubs 
                  for malicious drone activity and unauthorized transmissions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Public Event Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Ensure safety at large gatherings by detecting potential 
                  drone threats and unauthorized surveillance equipment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Border Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Monitor border areas for illegal drone crossings and 
                  smuggling operations using radio-controlled devices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Executive Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Protect high-value targets from drone surveillance 
                  and potential attacks during travel and public appearances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Transmitter Detection System?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Life-saving technology that provides the critical intelligence needed 
              to protect against emerging drone warfare threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Life-Saving Mission</h3>
              <p className="text-muted-foreground">
                Every detection could prevent a life-threatening attack. 
                Our technology exists to save lives and protect communities.
              </p>
            </div>
            
            <div className="text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Response</h3>
              <p className="text-muted-foreground">
                Sub-second detection and classification enables immediate 
                threat assessment and rapid protective action.
              </p>
            </div>
            
            <div className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Invisible Threats</h3>
              <p className="text-muted-foreground">
                Detect threats that are invisible to human operators, 
                including encrypted and frequency-hopping transmissions.
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Military-Grade</h3>
              <p className="text-muted-foreground">
                Built to military specifications with rugged, portable design 
                for deployment in any environment or situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Protect What Matters Most?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join military, government, and security professionals who trust our 
            AI-powered transmitter detection to save lives and prevent attacks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Request Military Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Security Team
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            Military-grade technology • Life-saving mission • 24/7 support
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
