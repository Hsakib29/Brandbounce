"use client"

import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { CheckCircle, Database, Layout } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#26A69A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7043]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                A BrandBounce Company
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="text-[#26A69A]">Task</span>
                <span className="text-[#FF7043]">bounce</span>
              </h1>
              <p className="text-xl text-gray-600 md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Outsourced Productivity, Powered by Global Talent
              </p>
              <p className="text-gray-500 md:text-xl">
                Affordable, high-quality virtual assistance for startups, creatives, and SMEs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#FF7043] hover:bg-[#F4511E] text-white group relative overflow-hidden">
                  <span className="relative z-10">Get Your First 5 Hours for £1.99/hour</span>
                  <motion.div
                    className="absolute inset-0 bg-[#F4511E]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                  />
                </Button>
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
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        <CheckCircle className="h-6 w-6 text-[#26A69A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Management</h3>
                        <p className="text-sm text-gray-500">From £2.99/hour</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        <Database className="h-6 w-6 text-[#26A69A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Data Entry</h3>
                        <p className="text-sm text-gray-500">From £2.99/hour</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        <Layout className="h-6 w-6 text-[#26A69A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Basic Design</h3>
                        <p className="text-sm text-gray-500">From £4.99/hour</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-sm text-gray-500">24/5 Support Available</p>
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
