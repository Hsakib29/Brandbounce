"use client";

import { CheckCircle, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function FeaturesSection() {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default link behavior
    const contactSection = document.getElementById("contact"); // Assuming your contact section has the ID "contact"
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#26A69A]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF7043]/5 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto md:px-6 relative">
        {/* Header section */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-lg bg-gradient-to-r from-[#26A69A]/20 to-[#FF7043]/20">
            Why Taskbounce?
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl">
            Delegate with Confidence
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
            Our unique approach combines global talent with local quality
            standards.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3 lg:gap-12">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
          >
            <div className="h-full p-6 bg-white rounded-lg shadow-lg flex flex-col border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#26A69A]/10">
                <CheckCircle className="w-6 h-6 text-[#26A69A]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#26A69A]">
                Built on BrandBounce Trust
              </h3>
              <p className="mt-auto text-gray-600">
                Backed by BrandBounce, we deliver reliable, high-quality support
                you can count on.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
          >
            <div className="h-full p-6 bg-white rounded-lg shadow-lg flex flex-col border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#26A69A]/10">
                <Globe className="w-6 h-6 text-[#26A69A]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#FF7043]">
                Global Talent, Local Value
              </h3>
              <p className="mt-auto text-gray-600">
                Dhaka-based experts deliver Western-quality work from
                £2.99–£9.99/hour.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
          >
            <div className="h-full p-6 bg-white rounded-lg shadow-lg flex flex-col border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#26A69A]/10">
                <ArrowRight className="w-6 h-6 text-[#26A69A]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#26A69A]">
                Scale Effortlessly
              </h3>
              <p className="mt-auto text-gray-600">
                Ramp up or down in minutes—no hiring hassles, just results.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA button */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="px-6 py-3 text-lg font-medium text-white transition-colors rounded-lg bg-[#FF7043] hover:bg-[#FF7043]/90"
          >
            Ready to Delegate? Start Now
          </button>
        </div>
      </div>
    </section>
  );
}
