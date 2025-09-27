import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, Music, Trophy, Shield, MapPin } from "lucide-react";

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Critical Security Applications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From military installations to public spaces, our AI-powered detection systems 
            provide unmatched security across diverse environments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Military Installations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Protect military bases, training facilities, and critical infrastructure 
                with advanced perimeter monitoring and threat detection.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Government Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Secure embassies, government buildings, and diplomatic compounds 
                with comprehensive surveillance and rapid response capabilities.
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
                Monitor power plants, airports, ports, and transportation hubs 
                with AI-powered anomaly detection and threat assessment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Music className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Public Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Secure concerts, festivals, and large gatherings with crowd monitoring 
                and early threat detection in high-energy environments.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Sports Venues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Protect stadiums and arenas with comprehensive monitoring 
                for athletes, staff, and spectators during major events.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Urban Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Monitor city centers, shopping districts, and public spaces 
                for suspicious activity and potential security threats.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
