"use client";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Sparkles,
  Zap,
  Video,
  Megaphone,
  Edit,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BrandBouncePromo() {
  // Sparkles animation variants
  const sparklesVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: -45,
    },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.8],
      rotate: [-45, 0, 45],
      x: [0, i % 2 === 0 ? -10 : 10, 0],
      y: [0, i % 3 === 0 ? -15 : 10, 0],
      transition: {
        duration: 2 + Math.random() * 3,
        delay: i * 0.3,
        repeat: Infinity,
        repeatDelay: 5 + Math.random() * 10,
        ease: "easeInOut",
      },
    }),
  };

  // Generate multiple sparkles
  const generateSparkles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={sparklesVariants}
        initial="initial"
        animate="animate"
        className="absolute text-[#FF6200]"
        style={{
          left: `${10 + (i % 5) * 15}%`,
          top: `${10 + (i % 3) * 25}%`,
          fontSize: `${0.5 + Math.random()}rem`,
        }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.span>
    ));
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#1E90FF]/5 to-[#FF6200]/5 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1E90FF]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF6200]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Floating sparkles in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {generateSparkles(12)}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-sm mb-6"
          >
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#FF6200] bg-clip-text text-transparent font-medium">
              Need Design Services?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Elevate Your Brand with{" "}
            <span className="relative inline-block">
              <Image
                src="/images/Brandbouncelogo-full.webp"
                alt="BrandBounce"
                width={280}
                height={60}
                className="h-12 md:h-16 w-auto"
              />
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute -right-4 -top-4 bg-white rounded-full p-1 shadow-md"
              >
                <Sparkles className="w-5 h-5 text-[#FF6200]" />
              </motion.span>
              {/* Small sparkles around the logo */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    x:
                      i === 0
                        ? [-10, 0, 10]
                        : i === 1
                        ? [0, 10, 0]
                        : [10, 0, -10],
                    y:
                      i === 0
                        ? [0, -10, 0]
                        : i === 1
                        ? [-10, 0, 10]
                        : [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                  className="absolute text-[#FF6200]/80"
                  style={{
                    left: i === 0 ? "20%" : i === 1 ? "50%" : "80%",
                    top: i === 0 ? "0%" : i === 1 ? "-20%" : "10%",
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                </motion.span>
              ))}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            While TaskBounce handles your productivity needs, our parent company
            BrandBounce can transform your visual identity with professional
            design services.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {" "}
          {/* Adjusted grid for 5 columns on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-[#1E90FF]/10 rounded-2xl flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-[#1E90FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Logo Design</h3>
            <p className="text-gray-600 mb-4">
              Create a unique, memorable logo that captures the heart of your
              brand.
            </p>
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-[#1E90FF]/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#1E90FF]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-[#FF6200]/10 rounded-2xl flex items-center justify-center mb-6">
              <Video className="w-7 h-7 text-[#FF6200]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Video Editing</h3>
            <p className="text-gray-600 mb-4">
              Bring your story to life with professional video editing.
            </p>
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-[#FF6200]/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#FF6200]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 rounded-2xl flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-[#1E90FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Branding</h3>
            <p className="text-gray-600 mb-4">
              Develop a cohesive brand identity, including color schemes and
              typography.
            </p>
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#FF6200]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 rounded-2xl flex items-center justify-center mb-6">
              <Megaphone className="w-7 h-7 text-[#1E90FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Social Media Marketing
            </h3>
            <p className="text-gray-600 mb-4">
              Grow your online presence with engaging content and targeted
              strategies.
            </p>
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#FF6200]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 rounded-2xl flex items-center justify-center mb-6">
              <Edit className="w-7 h-7 text-[#FF6200]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
            <p className="text-gray-600 mb-4">
              Custom designs for all your marketing needs.
            </p>
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E90FF]/10 to-[#FF6200]/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#FF6200]" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/" passHref legacyBehavior>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-4 bg-white rounded-full shadow-lg border border-gray-200 group transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                  Visit BrandBounce
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-gray-800 group-hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              <span className="absolute inset-0 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Button sparkles */}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0],
                  transition: { duration: 1.5 },
                }}
                className="absolute -right-2 -top-2 text-[#FF6200]"
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
