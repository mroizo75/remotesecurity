import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
      <section className="pt-24 pb-16 px-4 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Star className="h-4 w-4 mr-2" />
            Military-Grade AI Security Systems
          </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">AI-Powered</span>
          <br />
          Threat Detection Network
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Advanced sensor networks with drones, cameras, and microphones that detect 
          abnormal behavior and threats beyond human perception. Protecting military installations, 
          public spaces, and high-security environments with next-generation AI.
        </p>
        
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300">
              Start Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5 transition-all duration-300">
              Watch Video
            </Button>
          </div>
        
        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">AI Detection Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">&lt;1s</div>
            <div className="text-sm text-muted-foreground">Threat Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5km²</div>
            <div className="text-sm text-muted-foreground">Coverage Area</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">360°</div>
            <div className="text-sm text-muted-foreground">Full Spectrum Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}
