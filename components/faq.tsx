"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How quickly can you start?",
    answer:
      "We can typically start on your project within 1-2 business days after receiving your brief and initial payment. For urgent projects, we also offer rush services for an additional fee.",
  },
  {
    question: "What if I don't like designs?",
    answer:
      "We believe in collaboration! If you're not satisfied with the initial designs, we'll work with you to understand what isn't working and provide revisions based on your feedback. Our packages include revision rounds to ensure you're completely happy with the final result.",
  },
  {
    question: "Why not hire a designers?",
    answer:
      "Hiring BrandBounce gives you access to a team of specialists rather than a single designer. This means you benefit from diverse skills and perspectives without the overhead costs of hiring full-time staff. We also handle project management, ensuring everything stays on track and on budget.",
  },
  {
    question: "How much design work will I get?",
    answer:
      "The amount of design work depends on the package you choose. Our packages range from single assets like logo design to comprehensive branding solutions. Each package clearly outlines what's included, and we're happy to create custom packages for specific needs.",
  },
  {
    question: "What software is used?",
    answer:
      "We use industry-standard design software including Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects), Figma for collaborative design work, and various specialized tools depending on your project needs. All deliverables are provided in formats that work for your specific requirements.",
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a2540] dark:text-white">Still have questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find quick answers to commonly asked questions about BrandBounce. Have a question not listed?
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="text-gray-900 dark:text-white">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <ChevronDown size={20} className="text-gray-700 dark:text-gray-300" />
                )}
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer"
                  >
                    <p className="text-gray-600 dark:text-gray-300 py-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
