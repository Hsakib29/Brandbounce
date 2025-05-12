"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "./project-carousel";
import { BlurFade } from "./blur-fade";

const projects = [
  {
    title: "ZuperMart",
    category: "Brand Identity",
    image: "/images/Project1.webp?height=600&width=800",
  },
  {
    title: "Visa Ground",
    category: "Social Media Design & Branding",
    image: "/images/Project2.webp?height=600&width=800",
    textColor: "Black",
  },
  {
    title: "Baseballturtles.com",
    category: "Video Editing",
    image: "/images/Project3.webp?height=600&width=800",
    textColor: "Black",
  },
  {
    title: "ALC",
    category: "Logo Design",
    image: "/images/Project4.webp?height=600&width=800",
    textColor: "Black",
  },
  {
    title: "Lovely Weddings",
    category: "Signage Design",
    image: "/images/Project5.webp?height=600&width=800",
    textColor: "Black",
  },
];

const OurWork = () => {
  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="group rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="relative overflow-hidden rounded-full">
                <h2 className="inline-flex items-center justify-center px-4 py-1 text-sm uppercase tracking-wider text-brand-blue transition ease-out">
                  Our Portfolio
                </h2>
                <div className="absolute inset-0 z-0">
                  <div className="animate-[shine_3s_ease-in-out_infinite] absolute -inset-[100%] h-[500%] w-[50%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">
            Showcasing Our Most Remarkable Creations
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of projects that embody creativity, innovation, and
            precision.
          </p>
        </div>

        <BlurFade delay={0.2} inView className="max-w-4xl mx-auto">
          <ProjectCarousel projects={projects} />
        </BlurFade>
      </div>
    </section>
  );
};

export default OurWork;
