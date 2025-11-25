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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-blue-50/30 to-background dark:from-background dark:via-blue-950/10 dark:to-background">
      {/* Subtle Medical Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />

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
              <p className="text-2xl sm:text-3xl font-semibold text-foreground">
                {subheadline}
              </p>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              {guide}
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
