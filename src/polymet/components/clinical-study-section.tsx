import { TrendingUpIcon, AwardIcon } from "lucide-react";

interface StudyResult {
  method: string;
  successRate: string;
  description: string;
  highlighted?: boolean;
}

interface ClinicalStudySectionProps {
  heading: string;
  subheading: string;
  results: StudyResult[];
}

export function ClinicalStudySection({
  heading,
  subheading,
  results,
}: ClinicalStudySectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 mb-6">
              <TrendingUpIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground">{subheading}</p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                  result.highlighted
                    ? "bg-gradient-to-br from-blue-600 to-green-600 border-transparent shadow-2xl scale-105"
                    : "bg-card border-border shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Highlighted Badge */}
                {result.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-white dark:bg-card px-4 py-1 rounded-full flex items-center gap-2 shadow-lg">
                      <AwardIcon className="w-4 h-4 text-green-600 dark:text-green-400" />

                      <span className="text-sm font-semibold text-foreground">
                        Best Results
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="text-center space-y-4 pt-4">
                  <h3
                    className={`text-xl font-bold ${
                      result.highlighted ? "text-white" : "text-foreground"
                    }`}
                  >
                    {result.method}
                  </h3>

                  <div
                    className={`text-6xl font-bold ${
                      result.highlighted
                        ? "text-white"
                        : "text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {result.successRate}
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      result.highlighted
                        ? "text-blue-50"
                        : "text-muted-foreground"
                    }`}
                  >
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Study conducted with 1,247 participants over 12 months. Success
              defined as complete cessation of combustible tobacco or sustained
              use of safer alternatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
