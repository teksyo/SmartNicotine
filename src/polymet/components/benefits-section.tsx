import {
  ClipboardCheckIcon,
  MessageSquareIcon,
  MapIcon,
  GraduationCapIcon,
  LifeBuoyIcon,
  UsersIcon,
} from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface BenefitsSectionProps {
  heading: string;
  subheading: string;
  benefits: Benefit[];
}

const iconMap = {
  ClipboardCheck: ClipboardCheckIcon,
  MessageSquare: MessageSquareIcon,
  Map: MapIcon,
  GraduationCap: GraduationCapIcon,
  LifeBuoy: LifeBuoyIcon,
  Users: UsersIcon,
};

export function BenefitsSection({
  heading,
  subheading,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {heading}
            </h2>
            <p className="text-xl text-muted-foreground">{subheading}</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent =
                iconMap[benefit.icon as keyof typeof iconMap];

              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-2xl px-8 py-6 border border-border">
              <p className="text-lg font-semibold text-foreground mb-2">
                All features are 100% free, forever
              </p>
              <p className="text-sm text-muted-foreground">
                No hidden costs, no premium tiers, no credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
