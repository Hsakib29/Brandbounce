"use client"

import { FC, useEffect } from "react"
import { motion } from "framer-motion"

const ImpactSection: FC = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide")
    let currentSlide = 0

    const changeSlide = () => {
      slides.forEach((slide) => (slide as HTMLElement).style.opacity = "0");
      currentSlide = (currentSlide + 1) % slides.length;
      (slides[currentSlide] as HTMLElement).style.opacity = "1";
    }

    const interval = setInterval(changeSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [])

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="slide absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')] bg-cover bg-center opacity-0 transition-opacity duration-1000"></div>
        <div className="slide absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506784928022-8b12b2e9c649')] bg-cover bg-center opacity-0 transition-opacity duration-1000"></div>
        <div className="slide absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-0 transition-opacity duration-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-white">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center font-montserrat"
        >
          Real Work, Real Impact
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-center max-w-3xl mx-auto font-source-sans-pro"
        >
          Behind every delegated task is a dedicated professional. At TaskBounce, we power growth for founders, creatives, and teams — one task at a time.
        </motion.p>

        {/* Client Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto relative"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-orange" />
          <blockquote className="pl-6 italic text-lg md:text-xl font-source-sans-pro">
            “I went from inbox chaos to inbox zero in 48 hours. TaskBounce is the secret weapon I didn’t know I needed.”
            <footer className="mt-4 text-sm font-bold">— Hannah R., UK Startup Founder</footer>
          </blockquote>
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold text-orange font-montserrat">+97%</p>
            <p className="mt-2 text-sm font-source-sans-pro">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-orange font-montserrat">24 hr</p>
            <p className="mt-2 text-sm font-source-sans-pro">Avg Onboarding Time</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-orange font-montserrat">£0.10</p>
            <p className="mt-2 text-sm font-source-sans-pro">Per Entry Lead Lists</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection