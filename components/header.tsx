"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useModal } from "@/components/ModalContext";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

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
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
              className="mr-0"
            >
              <Image
                src="/bbicon.gif"
                alt="Brand Logo"
                width={60}
                height={60}
                className="rounded-full"
                unoptimized
              />
            </motion.div>
            <div className="text-xl font-bold">
              <span className="text-brand-blue font-bold">Brand</span>
              <span className="text-brand-orange font-medium">Bounce</span>
            </div>
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
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group"
          >
            <Link href="/taskbounce">
              <div className="flex items-center relative cursor-pointer">
                <Image
                  src="/images/taskbounce-logo.webp"
                  alt="TaskBounce Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  Sub-brand of BrandBounce
                </span>
              </div>
            </Link>
          </motion.div>

          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            type="button"
            className="btn-primary px-6 py-2 rounded-full font-medium shadow-lg"
            aria-label="Get a quote for our services"
          >
            Get a quote
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            type="button"
            className="text-gray-800 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
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
            <Link
              href="/taskbounce"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              TaskBounce
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                openModal();
                setMobileMenuOpen(false);
              }}
              type="button"
              className="btn-primary px-6 py-2 rounded-full font-medium shadow-lg"
              aria-label="Get a quote for our services"
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
