"use client";

import { TaskbounceNav } from "@/components/taskbounce/taskbounce-nav";
import { HeroSection } from "@/components/taskbounce/hero-section";
import { StatsSection } from "@/components/taskbounce/stats-section";
import RealImpactSection from "@/components/taskbounce/RealImpactSection";
import { FeaturesSection } from "@/components/taskbounce/features-section";
import { ServicesSection } from "@/components/taskbounce/services-section";
import { BrandBouncePromo } from "@/components/taskbounce/brandbounce-promo";
import { PricingSection } from "@/components/taskbounce/pricing-section";
import { AboutSection } from "@/components/taskbounce/about-section";
import { ContactSection } from "@/components/taskbounce/ContactSection";
import IndustriesSection from "@/components/taskbounce/IndustriesSection";
import { HowItWorksSection } from "@/components/taskbounce/HowItWorksSection";

export default function TaskbouncePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <TaskbounceNav />
      <HeroSection />
      <StatsSection />
      <RealImpactSection />
      <FeaturesSection />
      <IndustriesSection />
      <ServicesSection />
      <HowItWorksSection />
      <BrandBouncePromo />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
