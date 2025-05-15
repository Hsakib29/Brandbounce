"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/ui/animated-logo"
import { motion } from "framer-motion"

export function TaskbounceNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/taskbounce" className="flex items-center">
            <AnimatedLogo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/taskbounce#features"
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/taskbounce#services"
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/taskbounce#about"
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors"
          >
            About
          </Link>
          <Link
            href="/taskbounce#contact"
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#1E90FF] hover:text-[#0066CC] transition-colors flex items-center"
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ← Back to BrandBounce
            </motion.span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-[#26A69A] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:block">
          <Button className="bg-[#26A69A] hover:bg-[#1E8A7E] text-white">Get Started</Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link
              href="/taskbounce#features"
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/taskbounce#services"
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/taskbounce#about"
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/taskbounce#contact"
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-[#1E90FF] hover:text-[#0066CC] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ← Back to BrandBounce
            </Link>
            <Button className="bg-[#26A69A] hover:bg-[#1E8A7E] text-white w-full">Get Started</Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
