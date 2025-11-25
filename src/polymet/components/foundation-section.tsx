import {
  HeartHandshakeIcon,
  TrendingUpIcon,
  FlaskConicalIcon,
} from "lucide-react";

interface ImpactItem {
  title: string;
  description: string;
}

interface FoundationSectionProps {
  heading: string;
  mission: string;
  impact: ImpactItem[];
  footer: string;
}

const impactIcons = [TrendingUpIcon, HeartHandshakeIcon, FlaskConicalIcon];

export function FoundationSection({
  heading,
  mission,
  impact,
  footer,
}: FoundationSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 mb-6">
              <HeartHandshakeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {mission}
            </p>
          </div>

          {/* Impact Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {impact.map((item, index) => {
              const IconComponent = impactIcons[index];

              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">{footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
