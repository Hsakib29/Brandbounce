"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react"; // Added MapPin and Phone icons

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
              Get in Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Delegate with Confidence?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to get started with your virtual assistance
              needs.
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 min-h-[500px]">
          {/* Contact Information Card */}
          <Card className="flex h-full flex-col border-none bg-gradient-to-br from-white to-[#26A69A]/5 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-6">
                {/* Email Section */}
                <div className="flex items-start space-x-4">
                  <Mail className="min-w-[32px] h-8 w-8 text-[#26A69A]" />
                  <div>
                    <p className="text-lg font-semibold">Email Us</p>
                    <p className="text-gray-600 text-sm">
                      For general inquiries:
                    </p>
                    <p className="text-[#26A69A] font-medium text-sm">
                      hello@taskbounce.com
                    </p>
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-start space-x-4">
                  <MapPin className="min-w-[32px] h-8 w-8 text-[#FF7043]" />
                  <div>
                    <p className="text-lg font-semibold">Our Hub</p>
                    <p className="text-gray-600 text-sm">Find us in Sylhet:</p>
                    <p className="text-[#FF7043] font-medium text-sm">
                      Sylhet, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Outreach Message */}
                <div className="flex items-start space-x-4">
                  <Send className="min-w-[32px] h-8 w-8 text-[#26A69A]" />
                  <div>
                    <p className="text-lg font-semibold">Let's Connect</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Our global team is ready to boost your productivity. Share
                      your details, and we'll get in touch within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Button */}
              <a
                href="https://calendly.com/hsakib29/taskbounce-consultation-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="relative w-full overflow-hidden bg-[#FF7043] hover:bg-[#F4511E] group text-white text-base font-semibold">
                  <span className="relative z-10">Schedule a Call</span>
                  <motion.div
                    className="absolute inset-0 bg-[#F4511E]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                  />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Send Message Form Card */}
          <Card className="flex h-full flex-col border-none bg-gradient-to-br from-white to-[#FF7043]/5 shadow-lg">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <form
                action="https://formspree.io/f/xanovlod"
                method="POST"
                className="flex flex-col flex-grow space-y-4"
              >
                {/* Name Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    className="border-[#26A69A]/20 focus:border-[#26A69A]"
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    className="border-[#26A69A]/20 focus:border-[#26A69A]"
                  />
                </div>

                {/* Email & Subject */}
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  className="border-[#26A69A]/20 focus:border-[#26A69A]"
                />
                <Input
                  placeholder="Subject"
                  name="subject"
                  className="border-[#26A69A]/20 focus:border-[#26A69A]"
                />

                {/* Message Area */}
                <textarea
                  className="flex-grow min-h-[100px] w-full resize-none rounded-md border border-[#26A69A]/20 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#26A69A] focus-visible:ring-2 focus-visible:ring-[#26A69A]/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your Message"
                  name="message"
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="relative w-full overflow-hidden bg-[#26A69A] hover:bg-[#1E8A7E] group mt-auto"
                >
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    className="absolute inset-0 bg-[#1E8A7E]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                  />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
