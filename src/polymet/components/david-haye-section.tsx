import { HeartIcon } from "lucide-react";

interface DavidHayeSectionProps {
  heading: string;
  story: string[];
  imageUrl: string;
}

export function DavidHayeSection({
  heading,
  story,
  imageUrl,
}: DavidHayeSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 mb-6">
              <HeartIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              {heading}
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl blur-2xl" />

                <img
                  src={imageUrl}
                  alt="David Haye"
                  className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-border"
                />
              </div>
            </div>

            {/* Story */}
            <div className="order-1 lg:order-2 space-y-6">
              {story.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}

              {/* Signature */}
              <div className="pt-6 border-t border-border">
                <p className="text-xl font-semibold text-foreground">
                  David Haye
                </p>
                <p className="text-sm text-muted-foreground">
                  Former Heavyweight Boxing Champion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
