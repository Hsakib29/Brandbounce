"use client";
import {
  Lightbulb,
  DollarSign,
  Users,
  Sparkles,
  Smile,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { BlurFade } from "./blur-fade";
import React from "react";

const benefits = [
  {
    title: "Creativity That Pops",
    description:
      "Bold, unique designs for logos and social media, bringing fresh ideas to every project.",
    icon: Lightbulb,
  },
  {
    title: "Affordable Excellence",
    description:
      "High-quality design services tailored for startups and small businesses at reasonable costs.",
    icon: DollarSign,
  },
  {
    title: "Personalized Approach",
    description:
      "We listen to your vision and craft solutions that feel uniquely yours, ensuring your brand stands out.",
    icon: Users,
  },
  {
    title: "Fresh Perspective",
    description:
      "As a new agency, we bring innovative approaches to help your brand shine in a crowded market.",
    icon: Sparkles,
  },
  {
    title: "Playful Energy",
    description:
      "We infuse our projects with a fun, energetic vibe that makes them memorable and engaging.",
    icon: Smile,
  },
  {
    title: "Seamless Collaboration",
    description:
      "We work closely with you every step of the way for a smooth, transparent, and stress-free design process.",
    icon: Handshake,
  },
  {
    title: "Growth-Focused Design",
    description:
      "We aim to build a scalable brand with strategic designs that attract customers and support growth.",
    icon: TrendingUp,
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="relative overflow-hidden rounded-full">
                <h2 className="inline-flex items-center justify-center px-4 py-1 text-sm uppercase tracking-wider text-brand-blue transition ease-out">
                  Benefits
                </h2>
                <div className="absolute inset-0 z-0">
                  <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">
            Here's How We Make Your Brand Bounce
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First card - spans 2 columns */}
          <BlurFade delay={0.1} inView className="lg:col-span-2">
            <div className="bento-card bg-white dark:bg-gray-800 p-6 shadow-lg h-full">
              <div className="mb-4 text-brand-blue">
                <Lightbulb size={32} className="text-brand-orange" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {benefits[0].title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {benefits[0].description}
              </p>
            </div>
          </BlurFade>

          {/* Next two cards - single column each */}
          {benefits.slice(1, 3).map((benefit, index) => (
            <BlurFade
              key={`benefit-${index + 1}`}
              delay={0.1 + (index + 1) * 0.1}
              inView
            >
              <div className="bento-card bg-white dark:bg-gray-800 p-6 shadow-lg h-full">
                <div className="mb-4 text-brand-blue">
                  {React.createElement(benefit.icon, {
                    size: 32,
                    className: "text-brand-orange",
                  })}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </BlurFade>
          ))}

          {/* Fourth card - spans 2 columns */}
          <BlurFade delay={0.4} inView className="lg:col-span-2">
            <div className="bento-card bg-white dark:bg-gray-800 p-6 shadow-lg h-full">
              <div className="mb-4 text-brand-blue">
                <Sparkles size={32} className="text-brand-orange" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {benefits[3].title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {benefits[3].description}
              </p>
            </div>
          </BlurFade>

          {/* Remaining cards - single column each */}
          {benefits.slice(4).map((benefit, index) => (
            <BlurFade
              key={`benefit-${index + 4}`}
              delay={0.5 + index * 0.1}
              inView
            >
              <div className="bento-card bg-white dark:bg-gray-800 p-6 shadow-lg h-full">
                <div className="mb-4 text-brand-blue">
                  {React.createElement(benefit.icon, {
                    size: 32,
                    className: "text-brand-orange",
                  })}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
