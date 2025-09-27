import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Deploy Advanced AI Security?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join military, government, and critical infrastructure organizations 
          who trust our AI-powered detection systems to protect their most valuable assets.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Schedule Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Contact Sales
          </Button>
        </div>
        
        <p className="text-sm opacity-75">
          Military-grade security • Classified deployment • 24/7 support
        </p>
      </div>
    </section>
  );
}
