"use client"

import Link from "next/link"
import { ArrowRight, Palette, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FadeInSection } from "@/components/ui/fade-in-section"

export function BrandBouncePromo() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1E90FF]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF6200]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1E90FF] to-[#FF6200] text-white rounded-full text-sm font-medium mb-4">
              Need Design Services?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Elevate Your Brand with <span className="text-[#1E90FF]">Brand</span>
              <span className="text-[#FF6200]">Bounce</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              While TaskBounce handles your productivity needs, BrandBounce can transform your visual identity with
              professional design services.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FadeInSection delay={0.1}>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1E90FF]/10 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-[#1E90FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
              <p className="text-gray-600">Professional logo design, color palettes, and brand guidelines.</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#FF6200]/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#FF6200]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-gray-600">Stunning, responsive websites that convert visitors into customers.</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#1E90FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing Materials</h3>
              <p className="text-gray-600">Eye-catching social media graphics, brochures, and presentations.</p>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.4}>
          <div className="text-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-[#1E90FF] to-[#FF6200] hover:from-[#0066CC] hover:to-[#E65100] text-white px-8 py-6 text-lg h-auto group">
                <span>Visit BrandBounce</span>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </motion.div>
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
