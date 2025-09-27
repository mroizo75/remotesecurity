"use client";

import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Remote Secure Systems</span>
        </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/transmitter-detection" className="text-muted-foreground hover:text-foreground transition-colors">
                Transmitter Detection
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <ThemeToggle />
              <Button>Get Started</Button>
            </div>
      </div>
    </nav>
  );
}
