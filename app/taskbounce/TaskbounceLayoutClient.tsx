"use client"

import type React from "react"
import { TaskbounceNav } from "@/components/taskbounce-nav"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function TaskbounceLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <TaskbounceNav />
      <AnimatePresence>
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1">
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#26A69A]">Task</span>
              <span className="text-xl font-bold text-[#FF7043]">bounce</span>
            </div>
            <p className="text-sm text-gray-400">© 2025 Taskbounce. All rights reserved. A BrandBounce Company</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                BrandBounce
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
