import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/polymet/components/hero-section";
import { DavidHayeSection } from "@/polymet/components/david-haye-section";
import { ProgramPhasesSection } from "@/polymet/components/program-phases-section";
import { ClinicalStudySection } from "@/polymet/components/clinical-study-section";
import { ComparisonSection } from "@/polymet/components/comparison-section";
import { BenefitsSection } from "@/polymet/components/benefits-section";
import { CtaSection } from "@/polymet/components/cta-section";
import { FoundationSection } from "@/polymet/components/foundation-section";
import {
  heroData,
  davidHayeData,
  programPhases,
  clinicalStudyData,
  comparisonData,
  benefitsData,
  ctaData,
  foundationData,
} from "@/polymet/data/smart-nicotine-data";

export function SmartNicotineLanding() {
  const navigate = useNavigate();
  
  const handleCtaClick = () => {
    navigate("/assessment");
  };

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <HeroSection
        headline={heroData.headline}
        subheadline={heroData.subheadline}
        guide={heroData.guide}
        shortText={heroData.shortText}
        statistics={heroData.statistics}
        ctaText={heroData.ctaText}
        onCtaClick={handleCtaClick}
      />

      {/* Section 2: About David Haye */}
      <DavidHayeSection
        heading={davidHayeData.heading}
        story={davidHayeData.story}
        imageUrl={davidHayeData.imageUrl}
      />

      {/* Section 3: The 6 Month Program */}
      <ProgramPhasesSection phases={programPhases} />

      {/* Section 4: Cambridge University Clinical Study */}
      <ClinicalStudySection
        heading={clinicalStudyData.heading}
        subheading={clinicalStudyData.subheading}
        results={clinicalStudyData.results}
      />

      {/* Section 5: Why This Works */}
      <ComparisonSection
        heading={comparisonData.heading}
        traditional={comparisonData.traditional}
        smartNicotine={comparisonData.smartNicotine}
      />

      {/* Section 6: What You Get */}
      <BenefitsSection
        heading={benefitsData.heading}
        subheading={benefitsData.subheading}
        benefits={benefitsData.benefits}
      />

      {/* Section 7: Join the Program */}
      <CtaSection
        heading={ctaData.heading}
        subheading={ctaData.subheading}
        ctaText={ctaData.ctaText}
        note={ctaData.note}
        onCtaClick={handleCtaClick}
      />

      {/* Section 8: Smart Nicotine Foundation */}
      <FoundationSection
        heading={foundationData.heading}
        mission={foundationData.mission}
        impact={foundationData.impact}
        footer={foundationData.footer}
      />
    </div>
  );
}
