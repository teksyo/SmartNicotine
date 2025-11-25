import { ReactNode } from "react";
import { HeartPulseIcon } from "lucide-react";

interface LandingLayoutProps {
  children: ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                <HeartPulseIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">
                  Smart Nicotine
                </div>
                <div className="text-xs text-muted-foreground">
                  Science-Backed Cessation
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex items-center gap-6">
              <a 
                href="/" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a 
                href="/chat" 
                className="text-sm font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-green-700 transition-all"
              >
                Chat
              </a>
            </nav>

            {/* Trust Badge */}
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">
                Registered UK Charity
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                <HeartPulseIcon className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm text-muted-foreground">
                © 2026 Smart Nicotine Foundation
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
