"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import {
  TaskbounceDiscountModal,
  TaskbounceDiscountModalHandle,
} from "@/components/taskbounce/TaskbounceDiscountModal";
import { CheckCircle, Database, Layout } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const modalRef = useRef<TaskbounceDiscountModalHandle>(null);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#26A69A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7043]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection>
            <div className="space-y-5">
              <div className="inline-block rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20 px-3 py-1 text-sm font-medium">
                A BrandBounce Company
              </div>
              <div className="relative w-[320px] h-[60px] sm:w-[400px] sm:h-[75px] md:w-[512px] md:h-[96px]">
                <Image
                  src="/images/taskbounce-large.webp"
                  alt="Taskbounce Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 512px"
                  priority
                />
              </div>
              <p className="text-xl text-gray-600 md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Outsourced Productivity, Powered by Global Talent
              </p>
              <p className="text-gray-500 md:text-xl">
                Affordable, high-quality virtual assistance for startups,
                creatives, and SMEs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  className="bg-[#FF7043] hover:bg-[#F4511E] text-white group relative overflow-hidden"
                  onClick={() => modalRef.current?.open()}
                >
                  <span className="relative z-10">
                    Get Your First 5 Hours for £1.99/hour
                  </span>
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
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex justify-center">
              {/* Animated feature card */}
              <motion.div
                className="relative rounded-xl border bg-white p-8 shadow-lg"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="space-y-4">
                  {[
                    {
                      title: "Email Management",
                      price: "£2.99/hour",
                      icon: <CheckCircle className="h-6 w-6 text-[#26A69A]" />,
                    },
                    {
                      title: "Data Entry",
                      price: "£2.99/hour",
                      icon: <Database className="h-6 w-6 text-[#26A69A]" />,
                    },
                    {
                      title: "Basic Design",
                      price: "£4.99/hour",
                      icon: <Layout className="h-6 w-6 text-[#26A69A]" />,
                    },
                  ].map(({ title, price, icon }, i) => (
                    <div className="flex items-center gap-4" key={i}>
                      <div className="rounded-full bg-[#26A69A]/10 p-2">
                        {icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{title}</h3>
                        <p className="text-sm text-gray-500">From {price}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-center">
                    <p className="text-sm text-gray-500">
                      24/5 Support Available
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Modal Component Mounted Here */}
      <TaskbounceDiscountModal ref={modalRef} />
    </section>
  );
}
