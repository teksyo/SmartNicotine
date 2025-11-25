import { CheckCircle2Icon, MicIcon } from "lucide-react";

interface ProgramPhase {
  phase: string;
  title: string;
  description: string;
  duration: string;
}

interface ProgramPhasesSectionProps {
  phases: ProgramPhase[];
}

export function ProgramPhasesSection({ phases }: ProgramPhasesSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50/50 via-background to-green-50/50 dark:from-blue-950/10 dark:via-background dark:to-green-950/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The 6-Month Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A scientifically designed journey to help you break free from
              smoking, one phase at a time
            </p>
          </div>

          {/* Phases */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="relative bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                {/* Phase Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6 space-y-4">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="pt-2 flex items-center text-sm text-muted-foreground">
                    <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />

                    {phase.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <MicIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Free Weekly Check-ins with David's AI Voice
            </h3>
            <p className="text-blue-50 text-lg max-w-2xl mx-auto">
              Stay accountable with personalized conversations that adapt to
              your progress and challenges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
