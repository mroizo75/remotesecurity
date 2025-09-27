"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { X, Cookie, Settings, Shield, BarChart3, Target } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <Card className="hover-lift gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">We use cookies</h3>
                    <p className="text-muted-foreground mb-4">
                      We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. 
                      Essential cookies are required for the website to function properly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button onClick={handleAcceptAll} className="flex-1 sm:flex-none">
                        Accept All
                      </Button>
                      <Button variant="outline" onClick={handleRejectAll} className="flex-1 sm:flex-none">
                        Reject All
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowSettings(true)}
                        className="flex-1 sm:flex-none"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto hover-lift gradient-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Settings className="h-6 w-6 mr-2 text-primary" />
                  Cookie Preferences
                </CardTitle>
                <CardDescription>
                  Manage your cookie preferences for this website
                </CardDescription>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowSettings(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Essential Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Label className="text-base font-medium">Essential Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Required for basic website functionality
                      </p>
                    </div>
                  </div>
                  <Switch checked={true} disabled />
                </div>
                <p className="text-sm text-muted-foreground ml-12">
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They include session cookies, security cookies, and language preferences.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Label className="text-base font-medium">Analytics Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                  />
                </div>
                <p className="text-sm text-muted-foreground ml-12">
                  These cookies collect information about how visitors use our website, such as which pages 
                  are visited most often. This helps us improve our website performance.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Label className="text-base font-medium">Marketing Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Used to deliver relevant advertisements and marketing campaigns
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                  />
                </div>
                <p className="text-sm text-muted-foreground ml-12">
                  These cookies are used to track visitors across websites to display relevant and engaging 
                  advertisements. They may also be used to measure the effectiveness of advertising campaigns.
                </p>
              </div>

              {/* Privacy Notice */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Your Privacy Rights</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  You have the right to control your personal data. You can:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Withdraw consent at any time</li>
                  <li>• Request access to your data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Object to processing of your data</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  For more information, see our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button onClick={handleSavePreferences} className="flex-1">
                  Save Preferences
                </Button>
                <Button variant="outline" onClick={handleAcceptAll} className="flex-1">
                  Accept All
                </Button>
                <Button variant="outline" onClick={handleRejectAll} className="flex-1">
                  Reject All
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
