"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HoverFadeImages from "./HoverFadeImages";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { BlurFade } from "./blur-fade";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-white dark:bg-gray-900 relative">
      <AuroraBackground className="absolute top-0 left-0 w-full h-full z-0 opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile-only image above the text */}
        <div className="block md:hidden relative z-20 mb-8">
          <HoverFadeImages
            imageA="/images/hoverimage1.webp"
            imageB="/images/hoverimage2.webp"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <BlurFade delay={0.1} inView>
              <div className="group relative w-fit flex items-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-6 bg-transparent dark:bg-white">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent animate-gradient bg-[length:300%_100%]">
                  100% Focused on Your Brand's Success
                </span>
                <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0a2540] dark:text-white">
                <span className="text-brand-blue">Designs</span> That Build{" "}
                <span className="text-brand-orange">Brands</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Empowering small businesses with strategic branding, bespoke
                logos, and impactful video editing. Elevate your brand's
                identity and connect with your audience through thoughtful,
                creative design.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="flex flex-wrap gap-4">
                <Link href="#work">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline px-6 py-3 rounded-full font-medium"
                  >
                    Our Work
                  </motion.button>
                </Link>

                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary px-6 py-3 rounded-full font-medium shadow-lg"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Desktop-only image beside text */}
          <div className="hidden md:block md:w-1/2">
            <div className="relative h-[300px] w-full flex justify-center items-center">
              <HoverFadeImages
                imageA="/images/hoverimage1.webp"
                imageB="/images/hoverimage2.webp"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <BlurFade delay={0.6} inView>
            <h3 className="text-center text-xl font-medium mb-8 text-gray-900 dark:text-white">
              Featured Highlights of Our Work
            </h3>
          </BlurFade>

          <BlurFade delay={0.7} inView>
            <div className="logo-ticker-wrapper w-full overflow-hidden">
  <div className="logo-ticker-container w-screen">
    <div className="flex items-center logo-ticker space-x-8 py-4 animate-ticker">
      {[...Array(3)].flatMap((_, repeatIndex) =>
        [...Array(8)].map((_, index) => (
          <div
            key={`${repeatIndex}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={`/images/logo${index + 1}.webp`}
              alt={`Client logo ${index + 1}`}
              width={80}
              height={80}
              className="h-auto max-h-20 w-auto object-contain dark:hidden"
            />
            <Image
              src={`/images/logo${index + 1}-white.webp`}
              alt={`Client logo ${index + 1}`}
              width={80}
              height={80}
              className="h-auto max-h-20 w-auto object-contain hidden dark:block"
            />
          </div>
        )),
      )}
    </div>
  </div>
</div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Hero;