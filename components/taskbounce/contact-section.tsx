"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { Mail, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Delegate with Confidence?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to get started with your virtual assistance needs.
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12 min-h-[500px]">
          <FadeInSection delay={0.1}>
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-[#26A69A]/5 flex flex-col h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-[#26A69A]" />
                    <span className="text-gray-700">hello@taskbounce.com</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-[#26A69A]" />
                    <span className="text-gray-700">24/5 Support Available</span>
                  </div>
                </div>
                <div className="pt-6">
                  <Button className="w-full bg-[#FF7043] hover:bg-[#F4511E] relative overflow-hidden group">
                    <span className="relative z-10">Book a Call</span>
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
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-[#FF7043]/5 flex flex-col h-full">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <form className="flex flex-col flex-grow space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="border-[#26A69A]/20 focus:border-[#26A69A]"
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-[#26A69A]/20 focus:border-[#26A69A]"
                    />
                  </div>
                  <Input placeholder="Email" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                  <Input placeholder="Subject" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                  <textarea
                    className="flex-grow min-h-[100px] w-full rounded-md border border-[#26A69A]/20 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#26A69A] focus-visible:ring-2 focus-visible:ring-[#26A69A]/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="Your Message"
                  />
                  <Button className="w-full bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group mt-auto">
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      className="absolute inset-0 bg-[#1E8A7E]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

