"use client"
import Link from "next/link"
import { ArrowRight, Palette, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function BrandBouncePromo() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#1E90FF]/5 to-[#FF6200]/5 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1E90FF]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF6200]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
            Elevate Your Brand with{' '}
            <span className="relative inline-block">
              <Image 
                src="/images/Brandbouncelogo-full.webp" 
                alt="BrandBounce" 
                width={280} 
                height={60}
                className="h-12 md:h-16 w-auto"
              />
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-4 -top-4 bg-white rounded-full p-1 shadow-md"
              >
                <Sparkles className="w-5 h-5 text-[#FF6200]" />
              </motion.span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            While TaskBounce handles your productivity needs, our parent company BrandBounce can transform your visual identity with professional design services.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
            <h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
            <p className="text-gray-600 mb-4">Professional logo design, color palettes, and brand guidelines.</p>
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
              <Zap className="w-7 h-7 text-[#FF6200]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Design</h3>
            <p className="text-gray-600 mb-4">Stunning, responsive websites that convert visitors into customers.</p>
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
              <Sparkles className="w-7 h-7 text-[#1E90FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing Materials</h3>
            <p className="text-gray-600 mb-4">Eye-catching social media graphics, brochures, and presentations.</p>
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
          <Link href="https://brandbounce.com" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-4 bg-white rounded-full shadow-lg border border-gray-200 group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="font-medium text-gray-800 group-hover:text-white transition-colors">
                  Visit BrandBounce
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-gray-800 group-hover:text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              <motion.span
                initial={{ scale: 0 }}
                whileHover={{ scale: 2.5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-[#1E90FF] to-[#FF6200] rounded-full opacity-0 group-hover:opacity-100"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}