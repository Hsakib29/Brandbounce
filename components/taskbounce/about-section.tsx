"use client"

import { FadeInSection } from "@/components/ui/fade-in-section"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#26A69A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7043]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection>
            <div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                  About Taskbounce
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              </div>
              <div className="mt-4 space-y-4">
                <p className="text-gray-500">
                  Founded in 2024, Taskbounce is a BrandBounce-backed service offering affordable, high-quality virtual
                  assistance and back-office support.
                </p>
                <p className="text-gray-500">
                  Based in Dhaka, Bangladesh, we harness global talent to deliver Western-standard work at local rates.
                  With 24/5 coverage, AI-enhanced quality control, and encrypted security, we empower startups,
                  creatives, and SMEs to scale effortlessly.
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
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">24/5 Support</h3>
                        <p className="text-sm text-gray-500">Always available when you need us</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#FF7043]/10 p-2">
                        <CheckCircle className="h-6 w-6 text-[#FF7043]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">AI-Enhanced QC</h3>
                        <p className="text-sm text-gray-500">Quality control at every step</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Encrypted Security</h3>
                        <p className="text-sm text-gray-500">Your data is always protected</p>
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
  )
}
