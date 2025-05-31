"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { motion } from "framer-motion";
import { FC } from "react";

export const TaskbounceNav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleGetStartedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Contact section not found!");
    }
  };

  const handleSmoothScroll = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`${sectionId} section not found!`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6">
        <div className="flex items-center pl-4 sm:pl-0">
          <Link href="/taskbounce" className="flex items-center">
            <AnimatedLogo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={handleSmoothScroll("services")}
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
          >
            Services
          </button>
          <button
            onClick={handleSmoothScroll("how-it-works")}
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
          >
            How It Works
          </button>
          <button
            onClick={handleSmoothScroll("about")}
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
          >
            About
          </button>
          <button
            onClick={handleSmoothScroll("contact")}
            className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2"
          >
            Contact
          </button>
          <Button
            asChild
            className="bg-transparent hover:bg-gray-100 text-sm font-medium transition-all duration-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md"
          >
            <Link href="/">
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-flex items-center"
              >
                <span className="text-[#26A69A] mr-2">Back to</span>
                <span className="font-[Poppins] font-bold text-[#1E90FF]">
                  Brand
                </span>
                <span className="font-[Poppins] font-medium text-[#FF7043]">
                  Bounce
                </span>
                <span className="ml-1 text-[#1E90FF]">←</span>
              </motion.span>
            </Link>
          </Button>
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
          <Button
            className="bg-[#26A69A] hover:bg-[#1E8A7E] text-white"
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>
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
          <div className="w-full py-4 flex flex-col space-y-4 items-center">
            <button
              onClick={handleSmoothScroll("services")}
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2 text-center"
            >
              Services
            </button>
            <button
              onClick={handleSmoothScroll("how-it-works")}
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2 text-center"
            >
              How It Works
            </button>
            <button
              onClick={handleSmoothScroll("about")}
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2 text-center"
            >
              About
            </button>
            <button
              onClick={handleSmoothScroll("contact")}
              className="text-sm font-medium text-gray-700 hover:text-[#26A69A] transition-colors py-2 text-center"
            >
              Contact
            </button>
            <Button
              asChild
              className="bg-transparent hover:bg-gray-100 text-sm font-medium transition-all duration-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md"
            >
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-flex items-center"
                >
                  <span className="text-[#26A69A] mr-2">Back to</span>
                  <span className="font-[Poppins] font-bold text-[#1E90FF]">
                    Brand
                  </span>
                  <span className="font-[Poppins] font-medium text-[#FF7043]">
                    Bounce
                  </span>
                  <span className="ml-1 text-[#1E90FF]">←</span>
                </motion.span>
              </Link>
            </Button>
            <Button
              className="bg-[#26A69A] hover:bg-[#1E8A7E] text-white w-full max-w-xs"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
