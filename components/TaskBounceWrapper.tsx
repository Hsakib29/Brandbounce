"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";

export default function TaskBounceWrapper() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Measure content height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, []);

  const handleBannerClick = () => {
    setIsVisible((prev) => !prev);
    setShowBanner(false);
  };

  return (
    <div className="w-full">
      {showBanner && (
        <motion.div
          className="mb-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Collapsed State: Banner */}
          <motion.div
            className="bg-blue-50 dark:bg-[#111827] dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl shadow-md p-4 flex items-center justify-between w-full max-w-5xl mx-auto cursor-pointer"
            onClick={handleBannerClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center gap-6">
              {/* Virtual Assistant Image */}
              <img
                src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=100&h=100&fit=crop"
                alt="Virtual Assistant"
                className="rounded-full"
                width={100}
                height={100}
              />
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  🚀 Need a Virtual Assistant?
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Boost your productivity with affordable, skilled virtual
                  assistants.
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Powered by TaskBounce
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-teal-600 dark:text-teal-400 font-medium mr-2">
                Learn More
              </span>
              <motion.div
                animate={{ rotate: isVisible ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: contentHeight || "auto",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0.0, 0.2, 1],
              opacity: { duration: 0.3 },
            }}
            className="overflow-hidden"
            style={{ willChange: "height, opacity" }}
          >
            <div ref={contentRef}>
              <TaskBouncePromo />
            </div>
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

  // Stagger animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#26A69A]/5 to-[#FF7043]/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#26A69A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF7043]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-sm mb-6"
          >
            <span className="bg-gradient-to-r from-[#26A69A] to-[#FF7043] bg-clip-text text-transparent font-medium">
              From BrandBounce
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-[#26A69A]">Task</span>
            <span className="text-[#FF7043]">Bounce</span>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-2 bg-white rounded-full p-1 shadow-md inline-flex"
            >
              <Sparkles className="w-5 h-5 text-[#FF7043]" />
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#37474F] text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Affordable, high-quality virtual assistance and back-office support
            for startups, creatives, and SMEs. Get Western-standard productivity
            at Bangladesh-competitive rates.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group"
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="h-40 relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="p-6">
                <motion.div
                  className={`w-14 h-14 ${
                    index % 2 === 0 ? "bg-[#26A69A]/10" : "bg-[#FF7043]/10"
                  } rounded-2xl flex items-center justify-center mb-4 -mt-12 relative z-10 bg-white border border-gray-100`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-[#37474F]">
                  {feature.title}
                </h3>
                <p className="text-[#37474F]/80 mb-4">{feature.description}</p>
                <div className="flex justify-end">
                  <motion.div
                    className={`w-8 h-8 rounded-full ${
                      index % 2 === 0 ? "bg-[#26A69A]/10" : "bg-[#FF7043]/10"
                    } flex items-center justify-center`}
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200"
                alt="Virtual team collaboration"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 text-[#26A69A] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-[#37474F]/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-center"
        >
          <Link href="/taskbounce">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(38, 166, 154, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#26A69A] to-[#FF7043] rounded-full shadow-lg group"
              style={{ willChange: "transform" }}
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
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
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
