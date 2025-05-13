"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          y: isHovered ? [0, -5, 0] : 0,
          transition: {
            duration: 0.5,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            repeatType: "loop",
          },
        }}
      >
        <Image
          src="/images/taskbounce-logo.png"
          alt="TaskBounce Logo"
          width={180}
          height={50}
          className="h-auto"
          priority
        />
      </motion.div>
    </div>
  )
}
