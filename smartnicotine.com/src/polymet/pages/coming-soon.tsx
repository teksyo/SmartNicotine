import { ComingSoonHero } from "@/polymet/components/coming-soon-hero";
import { AICoachPreview } from "@/polymet/components/ai-coach-preview";
import { ComingSoonFooter } from "@/polymet/components/coming-soon-footer";

export function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Waitlist Form */}
      <ComingSoonHero />

      {/* AI Coach Preview Section */}
      <AICoachPreview />

      {/* Footer */}
      <ComingSoonFooter />
    </div>
  );
}
