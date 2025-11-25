import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";

interface CtaSectionProps {
  heading: string;
  subheading: string;
  ctaText: string;
  note: string;
  onCtaClick?: () => void;
}

export function CtaSection({
  heading,
  subheading,
  ctaText,
  note,
  onCtaClick,
}: CtaSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50/50 via-background to-green-50/50 dark:from-blue-950/10 dark:via-background dark:to-green-950/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-12 sm:p-16 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  {heading}
                </h2>
                <p className="text-xl sm:text-2xl text-blue-50 font-medium">
                  {subheading}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={onCtaClick}
                  className="text-lg px-10 py-7 h-auto bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {ctaText}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Note */}
              <p className="text-blue-50 text-sm max-w-md mx-auto">{note}</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Free Forever</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                6 Months
              </div>
              <div className="text-sm text-muted-foreground">
                Structured Program
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                88%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
