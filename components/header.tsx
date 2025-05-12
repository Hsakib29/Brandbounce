"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useModal } from "@/components/ModalContext"; // Changed import
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal(); // Get openModal from context

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
            className="mr-2"
          >
            <img
              src="/bbicon.gif"
              alt="Brand Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </motion.div>

          <div className="text-xl font-bold">
            <span className="text-brand-blue font-bold">Brand</span>
            <span className="text-brand-orange font-medium">Bounce</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="text-gray-800 dark:text-gray-200 nav-link transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-gray-800 dark:text-gray-200 nav-link transition-colors"
          >
            Our Works
          </Link>
          <Link
            href="#about"
            className="text-gray-800 dark:text-gray-200 nav-link transition-colors"
          >
            Who we are
          </Link>
          <Link
            href="#pricing"
            className="text-gray-800 dark:text-gray-200 nav-link transition-colors"
          >
            Pricing
          </Link>
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal} // Use openModal from context
            className="btn-primary px-6 py-2 rounded-full font-medium shadow-lg"
          >
            Get a quote
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-gray-800 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Works
            </Link>
            <Link
              href="#about"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who we are
            </Link>
            <Link
              href="#pricing"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                openModal();
                setMobileMenuOpen(false);
              }}
              className="btn-primary px-6 py-2 rounded-full font-medium shadow-lg"
            >
              Get a quote
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
