"use client";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FadeInSection } from "../ui/fade-in-section";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Hourly Rates",
    description: "Pay only for what you use",
    price: "£2.99",
    unit: "/hour",
    details: "Basic administrative tasks",
    features: ["Email management", "Data entry", "Calendar management"],
    colors: {
      gradientFrom: "#26A69A",
      gradientTo: "#FF7043",
      badgeBg: "#FF7043",
      badgeText: "white",
      checkIcon: "#26A69A",
      buttonBg: "#26A69A",
      buttonHoverBg: "#1E8A7E",
      motionBg: "#1E8A7E",
    },
    badgeText: "Most Popular",
    delay: 0.1,
  },
  {
    title: "Task Packs",
    description: "Pre-purchased task bundles",
    price: "£29",
    unit: "/pack",
    details: "500 data entries or equivalent",
    features: ["Lead list building", "Product uploads", "Research tasks"],
    colors: {
      gradientFrom: "#FF7043",
      gradientTo: "transparent",
      badgeBg: "#FF7043",
      badgeText: "white",
      checkIcon: "#FF7043",
      buttonBg: "#FF7043",
      buttonHoverBg: "#F4511E",
      motionBg: "#F4511E",
    },
    badgeText: null,
    delay: 0.2,
  },
  {
    title: "Retainers",
    description: "Monthly dedicated support",
    price: "£99",
    unit: "/month",
    details: "20 hours of support",
    features: ["Dedicated assistant", "Priority support", "All service types"],
    colors: {
      gradientFrom: "#26A69A",
      gradientTo: "transparent",
      badgeBg: "#26A69A",
      badgeText: "white",
      checkIcon: "#26A69A",
      buttonBg: "#26A69A",
      buttonHoverBg: "#1E8A7E",
      motionBg: "#1E8A7E",
    },
    badgeText: null,
    delay: 0.3,
  },
];

function PricingCard({
  title,
  description,
  price,
  unit,
  details,
  features,
  colors,
  badgeText,
  delay,
  onGetStartedClick,
}: {
  title: string;
  description: string;
  price: string;
  unit: string;
  details: string;
  features: string[];
  colors: {
    gradientFrom: string;
    gradientTo: string;
    badgeBg: string;
    badgeText: string;
    checkIcon: string;
    buttonBg: string;
    buttonHoverBg: string;
    motionBg: string;
  };
  badgeText: string | null;
  delay: number;
  onGetStartedClick: () => void;
}) {
  return (
    <FadeInSection delay={delay}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="border-none shadow-lg h-full relative overflow-visible">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${colors.gradientFrom}/5, ${colors.gradientTo})`,
            }}
          />
          {badgeText && (
            <div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 rounded-full text-xs font-medium z-10 shadow-md whitespace-nowrap"
              style={{ backgroundColor: colors.badgeBg }}
            >
              {badgeText}
            </div>
          )}
          <CardHeader className="relative pt-12 pb-4">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-4xl font-bold">
              {price}
              <span className="text-lg font-normal text-gray-500">{unit}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{details}</p>
            <ul className="mt-4 space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckCircle
                    className="mr-2 h-4 w-4"
                    style={{ color: colors.checkIcon }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                className="w-full relative overflow-hidden group"
                style={{ backgroundColor: colors.buttonBg }}
                onClick={onGetStartedClick}
                onMouseEnter={(e) => {
                  (
                    e.currentTarget.querySelector("div") as HTMLElement
                  ).style.transform = "translateX(0)";
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget.querySelector("div") as HTMLElement
                  ).style.transform = "translateX(-100%)";
                }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: colors.motionBg }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "-100%" }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.3,
                  }}
                />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </FadeInSection>
  );
}

export function PricingSection() {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Contact section not found!");
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Affordable Rates, Premium Quality
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Flexible pricing options to suit your needs and budget.
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              unit={plan.unit}
              details={plan.details}
              features={plan.features}
              colors={plan.colors}
              badgeText={plan.badgeText}
              delay={plan.delay}
              onGetStartedClick={handleGetStartedClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
