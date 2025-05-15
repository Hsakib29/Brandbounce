"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Affordable Rates, Premium Quality
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Flexible pricing options to suit your needs and budget.
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          <FadeInSection delay={0.1}>
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="border-none shadow-lg h-full relative overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-[#26A69A]/5 to-transparent"></div>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF7043] text-white px-4 py-1 rounded-full text-xs font-medium z-10 shadow-md whitespace-nowrap">
          Most Popular
        </div>
        <CardHeader className="relative pt-12 pb-4">
          <CardTitle className="text-xl">Hourly Rates</CardTitle>
          <CardDescription className="text-base">Pay only for what you use</CardDescription>
        </CardHeader>
        <CardContent className="relative">
                  <div className="text-4xl font-bold">
                    £2.99<span className="text-lg font-normal text-gray-500">/hour</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Basic administrative tasks</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                      <span>Email management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                      <span>Data entry</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                      <span>Calendar management</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group">
                      <span className="relative z-10">Get Started</span>
                      <motion.div
                        className="absolute inset-0 bg-[#1E8A7E]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="border-none shadow-lg h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF7043]/5 to-transparent"></div>
        <CardHeader className="relative pt-12 pb-4">
          <CardTitle className="text-xl">Task Packs</CardTitle>
          <CardDescription className="text-base">Pre-purchased task bundles</CardDescription>
        </CardHeader>
        <CardContent className="relative">
                  <div className="text-4xl font-bold">
                    £29<span className="text-lg font-normal text-gray-500">/pack</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">500 data entries or equivalent</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#FF7043]" />
                      <span>Lead list building</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#FF7043]" />
                      <span>Product uploads</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#FF7043]" />
                      <span>Research tasks</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-[#FF7043] hover:bg-[#F4511E] relative overflow-hidden group">
                      <span className="relative z-10">Get Started</span>
                      <motion.div
                        className="absolute inset-0 bg-[#F4511E]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="border-none shadow-lg h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#26A69A]/5 to-transparent"></div>
        <CardHeader className="relative pt-12 pb-4">
          <CardTitle className="text-xl">Retainers</CardTitle>
          <CardDescription className="text-base">Monthly dedicated support</CardDescription>
        </CardHeader>
        <CardContent className="relative">
                  <div className="text-4xl font-bold">
                    £99<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">20 hours of support</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                      <span>Dedicated assistant</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-[#26A69A]" />
                      <span>All service types</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group">
                      <span className="relative z-10">Get Started</span>
                      <motion.div
                        className="absolute inset-0 bg-[#1E8A7E]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
