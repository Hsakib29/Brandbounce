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
    title: "Virtual Assistance",
    description: "Flexible hourly support for admin tasks",
    price: "£3.20 / £4.50",
    unit: "/hour",
    details: "Basic & Premium options available",
    features: [
      "Email & calendar management",
      "Admin support",
      "Priority support & task coordinator (Premium)",
    ],
    badgeText: "Most Popular",
    delay: 0.1,
    colors: {
      primary: "#26A69A",
      secondary: "#FF7043",
    },
  },
  {
    title: "Data Entry",
    description: "Accurate entry, uploads & management",
    price: "£2.80 / £3.80",
    unit: "/hour",
    details: "Basic & Premium options available",
    features: [
      "Product uploads & database updates",
      "Basic data processing",
      "QA checks & priority support (Premium)",
    ],
    badgeText: null,
    delay: 0.2,
    colors: {
      primary: "#FF7043",
      secondary: "#F4511E",
    },
  },
  {
    title: "Research & Leads",
    description: "Lead generation & market insights",
    price: "£3.50 / £5.00",
    unit: "/hour",
    details: "Basic & Premium options available",
    features: [
      "Web research & lead list building",
      "Market/competitor analysis",
      "Dedicated researcher & reports (Premium)",
    ],
    badgeText: null,
    delay: 0.3,
    colors: {
      primary: "#26A69A",
      secondary: "#1E8A7E",
    },
  },
  {
    title: "Task Packs",
    description: "Pre-paid bulk data services",
    price: "£29",
    unit: "/pack",
    details: "500 data entries (~£0.058/entry)",
    features: ["Ideal for bulk uploads", "Quick turnaround", "No expiry"],
    badgeText: "Best Value",
    delay: 0.4,
    colors: {
      primary: "#FF7043",
      secondary: "#F4511E",
    },
  },
];

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  unit: string;
  details: string;
  features: string[];
  badgeText: string | null;
  delay: number;
  colors: {
    primary: string;
    secondary: string;
  };
  onGetStartedClick: () => void;
}

function PricingCard({
  title,
  description,
  price,
  unit,
  details,
  features,
  badgeText,
  delay,
  colors,
  onGetStartedClick,
}: PricingCardProps) {
  return (
    <FadeInSection delay={delay}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex h-full"
      >
        <Card className="relative flex flex-col w-full border-none shadow-xl h-[480px]">
          {" "}
          {/* Fixed height */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
            }}
          />
          <CardHeader className="relative pt-6 pb-4 z-10">
            {badgeText && (
              <div
                className="mb-4 text-center bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 shadow"
                style={{ backgroundColor: colors.primary }}
              >
                {badgeText}
              </div>
            )}
            <CardTitle className="text-xl text-center">{title}</CardTitle>
            <CardDescription className="text-base text-center">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex flex-col flex-grow justify-between z-10 pt-2">
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-center">
                {price}
                <span className="text-lg font-normal text-gray-500">
                  {" "}
                  {unit}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {details}
              </p>
              <ul className="mt-4 space-y-2 flex-grow max-h-32 overflow-hidden">
                {" "}
                {/* Limit feature list height */}
                {features.map((feature: string) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <Button
                className="w-full"
                style={{ backgroundColor: colors.primary }}
                onClick={onGetStartedClick}
              >
                Get Started
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
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="text-center space-y-4">
            <div className="inline-block bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm rounded-full font-medium">
              Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Affordable Rates, Premium Quality
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto md:text-xl">
              Flexible pricing options to suit your needs and budget.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              onGetStartedClick={handleGetStartedClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
