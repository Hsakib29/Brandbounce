"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

const CallToAction = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            your design, elevated instantly
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a2540] dark:text-white">Ready when you are</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
            We already think it's a match. Go ahead and schedule our first date. We want to chat about your idea and
            learn your middle name.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-full font-medium shadow-lg"
            >
              Schedule A Call
            </motion.a>

            <motion.a
              href="mailto:info@brandbounce.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline px-8 py-3 rounded-full font-medium flex items-center justify-center"
            >
              <Mail className="mr-2" size={18} />
              Send an email
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
