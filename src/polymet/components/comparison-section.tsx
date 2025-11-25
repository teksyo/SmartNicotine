import { XIcon, CheckIcon } from "lucide-react";

interface ComparisonItem {
  title: string;
  items: string[];
}

interface ComparisonSectionProps {
  heading: string;
  traditional: ComparisonItem;
  smartNicotine: ComparisonItem;
}

export function ComparisonSection({
  heading,
  traditional,
  smartNicotine,
}: ComparisonSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50/50 via-background to-green-50/50 dark:from-blue-950/10 dark:via-background dark:to-green-950/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {heading}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our science-based approach compares to traditional quit
              methods
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Methods */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-border">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                  <XIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {traditional.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {traditional.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XIcon className="w-3 h-3 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Nicotine */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 shadow-2xl border-2 border-transparent relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {smartNicotine.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {smartNicotine.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-50 leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
