"use client"

import { HeroSection } from "@/components/taskbounce/hero-section"
import { StatsSection } from "@/components/taskbounce/stats-section"
import RealImpactSection from "@/components/taskbounce/RealImpactSection" // ✅ Corrected
import { FeaturesSection } from "@/components/taskbounce/features-section"
import { ServicesSection } from "@/components/taskbounce/services-section"
import { BrandBouncePromo } from "@/components/taskbounce/brandbounce-promo"
import { PricingSection } from "@/components/taskbounce/pricing-section"
import { AboutSection } from "@/components/taskbounce/about-section"
import { ContactSection } from "@/components/taskbounce/contact-section"
import IndustriesSection from "@/components/taskbounce/IndustriesSection"

export default function TaskbouncePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RealImpactSection /> {/* ✅ Correct usage */}
      <FeaturesSection />
      <IndustriesSection/>
      <ServicesSection />
      <BrandBouncePromo />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
