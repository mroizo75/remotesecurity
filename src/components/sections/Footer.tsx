import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-lg font-bold text-white">Remote Secure Systems</span>
            </div>
            <p className="text-sm text-white/80">
              Next-generation security technology for modern events.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/demo" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="/api" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 border-white/20" />
        
        <div className="text-center text-sm text-white/70">
          © {new Date().getFullYear()} Remote Secure Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
