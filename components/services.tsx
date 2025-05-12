"use client";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurFade } from "./blur-fade";

// Update the AnimatedShinyText component to have a white background and no icons
const AnimatedShinyText = ({ children, className }) => {
  return (
    <div className={cn("relative overflow-hidden rounded-full", className)}>
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 z-0">
        <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
      </div>
    </div>
  );
};

const services = [
  {
    title: "Brand Identity Design",
    items: ["Logo Design", "Brand Guidelines", "Stationery Design"],
  },
  {
    title: "Visual Content Creation",
    items: ["Social Media Design", "Presentation Design", "Print Design"],
  },
  {
    title: "Video Editing & Motion",
    items: ["Video Editing", "Motion Graphics", "Reels, Shorts"],
  },
  {
    title: "Social Media Marketing",
    items: ["Social Media Management", "Ad Management", "Strategy & Analytics"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
                <span className="text-sm uppercase tracking-wider text-brand-blue">
                  What We Offer
                </span>
              </AnimatedShinyText>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">
            Designs and Campaigns Tailored to Build Brands and Drive Results
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.1} inView>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all h-full">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h4>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        className={`mr-2 flex-shrink-0 ${idx % 2 === 0 ? "text-brand-blue" : "text-brand-orange"}`}
                        size={20}
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
