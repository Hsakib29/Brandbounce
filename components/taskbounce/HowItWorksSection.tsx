"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeInSection } from "@/components/ui/fade-in-section";
import {
  CheckCircle,
  MessageSquare,
  UserPlus,
  ListChecks,
  ALargeSmall as ArrowsUpDown,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorksSection: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Contact section not found!");
    }
  };

  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
            How Taskbounce Works
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Unlock Your Productivity in 7 Simple Steps
          </h2>
          <p className="text-gray-500 mt-4">
            Experience seamless delegation and focus on what truly matters for
            your business growth.
          </p>
        </div>

        <div className="flex flex-col space-y-8">
          {steps.map((step) => (
            <FadeInSection key={step.id} delay={step.id * 0.1}>
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-6 p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#26A69A]/20 to-[#FF7043]/20 flex items-center justify-center mb-4 md:mb-0 text-xl text-gray-700">
                  <step.icon className="w-6 h-6 text-gradient-to-r from-[#26A69A] to-[#FF7043]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            className="bg-[#FF7043] hover:bg-[#F4511E] text-white font-semibold rounded-full py-3 px-8 transition-colors duration-300"
            onClick={handleScrollToContact}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    id: 1,
    title: "Tell Us What You Need",
    description:
      "Share your requirements in minutes—whether it’s admin support, data entry, design, or industry-specific expertise. Our team reviews your needs to ensure a perfect match.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Meet Your Dedicated Assistant",
    description:
      "Within 24 hours, we’ll introduce you to a vetted professional from our Sylhet-based talent pool. You’ll get a brief profile and can connect directly to discuss your workflow.",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Seamless Onboarding",
    description:
      "Your assistant gets up to speed fast. We handle onboarding, set up secure communication channels, and ensure all your tools and preferences are integrated.",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Delegate & Track Progress",
    description:
      "Start assigning tasks right away via your preferred platform (email, chat, or project management tool). Track progress in real time and get regular updates.",
    icon: ListChecks,
  },
  {
    id: 5,
    title: "Scale Effortlessly",
    description:
      "Need more hours or a different skill set? Scale your support up or down at any time—no contracts, no hassle. Our flexible plans grow with your business.",
    icon: ArrowsUpDown,
  },
  {
    id: 6,
    title: "Quality & Security Guaranteed",
    description:
      "Every task is quality-checked using AI-enhanced controls. Your data stays protected with end-to-end encryption and strict privacy protocols.",
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: "Ongoing Support",
    description:
      "Our client success team is available 24/5 to resolve issues, provide feedback, or help you get the most from your assistant.",
    icon: Headset,
  },
];

export default HowItWorksSection;
