"use client";

import { FadeInSection } from "@/components/ui/fade-in-section";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-screen py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/aboutbackground.webp')`, // Local image from public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(249, 250, 251, 0.9)", // Slightly opaque bg-gray-50
      }}
    >
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#26A69A]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7043]/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection>
            <div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                  About Taskbounce
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Story
                </h2>
                <h3 className="text-lg font-medium tracking-tight text-gray-500">
                  It's All About the Bounce
                </h3>
              </div>
              <div className="mt-4 space-y-4">
                <p className="text-gray-500">
                  Taskbounce was born in 2024 from the idea that productivity
                  shouldn't be a drag. Backed by BrandBounce, we're here to
                  inject energy and momentum into your workflow with affordable,
                  top-tier virtual assistance.
                </p>
                <p className="text-gray-500">
                  From our hub in Sylhet, Bangladesh, we've assembled a team
                  that blends global talent with a commitment to quality. Think
                  of us as your always-on crew, providing 24/5 support,
                  AI-powered precision, and the kind of security that lets you
                  sleep soundly. We're here to help startups, creatives, and
                  SMEs find their rhythm and really *bounce* forward.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-[#26A69A]/10 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-[#FF7043]/10 blur-3xl"></div>
                <motion.div
                  className="relative rounded-xl border bg-white p-8 shadow-lg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 1, 0, -1, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">24/5 Support</h3>
                        <p className="text-sm text-gray-500">
                          Your always-on productivity partner
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#FF7043]/10 p-2">
                        <CheckCircle className="h-6 w-6 text-[#FF7043]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">AI-Enhanced QC</h3>
                        <p className="text-sm text-gray-500">
                          Precision and quality, guaranteed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Encrypted Security</h3>
                        <p className="text-sm text-gray-500">
                          Protecting your data, building your trust
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
