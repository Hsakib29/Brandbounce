"use client"

import { FadeInSection } from "@/components/ui/fade-in-section"
import { Clock, Users, BarChart, ArrowRight } from "lucide-react"

export function StatsSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#26A69A]/10 to-[#FF7043]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <FadeInSection delay={0.1}>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-[#26A69A]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">24/5</h3>
              <p className="text-sm text-gray-500">Support Coverage</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-[#FF7043]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <p className="text-sm text-gray-500">Skilled Professionals</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <BarChart className="h-8 w-8 text-[#26A69A]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">99%</h3>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <ArrowRight className="h-8 w-8 text-[#FF7043]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">1 Day</h3>
              <p className="text-sm text-gray-500">Average Onboarding</p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
