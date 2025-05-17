"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react"; // Ensuring all icons are imported

export default function TaskBounceWrapper() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full">
      <div className="mb-4">
        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="w-full bg-gradient-to-r from-indigo-50 to-blue-100 text-indigo-700 py-5 px-6 rounded-md shadow-sm flex items-center justify-center font-semibold transition-colors hover:bg-indigo-100"
        >
          <span className="mr-2 text-lg md:text-xl text-center">
            Explore Affordable Virtual Assistant & Back-Office Support
          </span>
          {!isVisible ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2"
          >
            <TaskBouncePromo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TaskBouncePromo() {
  const features = [
    {
      icon: <Clock className="w-5 h-5 text-[#26A69A]" />,
      title: "24-Hour Onboarding",
      description: "Get started with your dedicated assistant in just one day",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#FF7043]" />,
      title: "Global Talent, Local Rates",
      description: "Western-standard work at Bangladesh-competitive prices",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#26A69A]" />,
      title: "Quality Guaranteed",
      description: "Backed by BrandBounce's rigorous quality standards",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#26A69A]/5 to-[#FF7043]/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#26A69A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF7043]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-sm mb-6"
          >
            <span className="bg-gradient-to-r from-[#26A69A] to-[#FF7043] bg-clip-text text-transparent font-medium">
              From BrandBounce
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-[#26A69A]">Task</span>
            <span className="text-[#FF7043]">Bounce</span>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 bg-white rounded-full p-1 shadow-md inline-flex"
            >
              <Sparkles className="w-5 h-5 text-[#FF7043]" />
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#37474F] text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Affordable, high-quality virtual assistance and back-office support
            for startups, creatives, and SMEs. Get Western-standard productivity
            at Bangladesh-competitive rates.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div
                  className={`w-14 h-14 ${
                    index % 2 === 0 ? "bg-[#26A69A]/10" : "bg-[#FF7043]/10"
                  } rounded-2xl flex items-center justify-center mb-4 -mt-12 relative z-10 bg-white border border-gray-100`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#37474F]">
                  {feature.title}
                </h3>
                <p className="text-[#37474F]/80 mb-4">{feature.description}</p>
                <div className="flex justify-end">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      index % 2 === 0 ? "bg-[#26A69A]/10" : "bg-[#FF7043]/10"
                    } flex items-center justify-center`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200"
                alt="Virtual team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#37474F]">
                Why Clients Choose TaskBounce
              </h3>
              <div className="space-y-4">
                {[
                  "£2.99--£9.99/hour rates (vs. £15--£30 for Western VAs)",
                  "Dedicated account managers (not just freelancers)",
                  "24-hour onboarding (vs. 3--7 day hiring processes)",
                  "BrandBounce's quality control (vs. variable freelance quality)",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 text-[#26A69A] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-[#37474F]/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/taskbounce" passHref legacyBehavior>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#26A69A] to-[#FF7043] rounded-full shadow-lg group transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="font-medium text-white">
                  Get Started from £2.99/hour
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-white"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
          <p className="mt-4 text-[#37474F]/70">
            First 5 hours just £1.99/hour for new clients
          </p>
        </motion.div>
      </div>
    </section>
  );
}
