import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  guide: string;
  shortText: string;
  statistics: Array<{ value: string; label: string }>;
  ctaText: string;
  onCtaClick?: () => void;
}

export function HeroSection({
  headline,
  subheadline,
  guide,
  shortText,
  statistics,
  ctaText,
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] max-h-[920px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dark:from-blue-950/20 dark:via-green-950/20 dark:to-blue-950/20">
      {/* Subtle Medical Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      
      {/* Decorative Line Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal lines from top-left */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-1 bg-gradient-to-r from-blue-400/50 to-transparent rotate-45 dark:from-blue-300/40"></div>
          <div className="absolute top-32 left-20 w-32 h-1 bg-gradient-to-r from-green-400/50 to-transparent rotate-45 dark:from-green-300/40"></div>
          <div className="absolute top-44 left-5 w-28 h-0.5 bg-gradient-to-r from-blue-300/40 to-transparent rotate-45 dark:from-blue-300/30"></div>
        </div>
        
        {/* Diagonal lines from top-right */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-16 right-12 w-36 h-1 bg-gradient-to-l from-green-400/50 to-transparent -rotate-45 dark:from-green-300/40"></div>
          <div className="absolute top-28 right-24 w-28 h-1 bg-gradient-to-l from-blue-400/50 to-transparent -rotate-45 dark:from-blue-300/40"></div>
          <div className="absolute top-40 right-8 w-24 h-0.5 bg-gradient-to-l from-green-300/40 to-transparent -rotate-45 dark:from-green-300/30"></div>
        </div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-green-400/30 rounded-full dark:from-blue-300/20 dark:to-green-300/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Main Headline */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-primary to-green-600 dark:from-blue-400 dark:via-primary dark:to-green-400 bg-clip-text text-transparent">
                  {headline}
                </span>
              </h1>
              <p className="text-2xl sm:text-4xl font-semibold text-foreground">
                {subheadline}
              </p>
            </div>
            <p className="text-base sm:text-2xl text-muted-foreground font-medium">
              Guided by <span className="relative inline-block">
                <span className="text-foreground font-semibold">David Haye</span>
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-600 to-green-600 rounded-full opacity-80"></span>
              </span>
            </p>
          </div>

          {/* Short Text */}
          <p className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed">
            {shortText}
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              size="lg"
              onClick={onCtaClick}
              className="text-base sm:text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 dark:from-blue-500 dark:to-green-500 dark:hover:from-blue-600 dark:hover:to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {ctaText}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Statistics - Compact Block */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border rounded-2xl px-8 py-6 shadow-sm">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium text-left leading-tight">
                  {stat.label}
                </div>
                {index < statistics.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-border ml-4" />
                )}
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground">
            100% Free • No Credit Card Required • Science-Backed
          </p>
        </div>
      </div>
    </section>
  );
}
