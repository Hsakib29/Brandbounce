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

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          <FadeInSection delay={0.1}>
            <div className="h-full">
              <Card className="border-none shadow-lg h-full bg-gradient-to-br from-white to-[#26A69A]/5">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col h-[calc(100%-80px)] justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-[#26A69A]" />
                      <span>hello@taskbounce.com</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-[#26A69A]" />
                      <span>24/5 Support Available</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
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
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="h-full">
              <Card className="border-none shadow-lg h-full bg-gradient-to-br from-white to-[#FF7043]/5">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input placeholder="First Name" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Last Name" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Email" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Subject" className="border-[#26A69A]/20 focus:border-[#26A69A]" />
                    </div>
                    <div className="space-y-2">
                      <textarea
                        className="flex min-h-[100px] w-full rounded-md border border-[#26A69A]/20 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#26A69A] focus-visible:ring-2 focus-visible:ring-[#26A69A]/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your Message"
                      />
                    </div>
                    <Button className="w-full bg-[#26A69A] hover:bg-[#1E8A7E] relative overflow-hidden group">
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
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
