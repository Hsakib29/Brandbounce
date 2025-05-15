"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedLogoProps {
  width?: number
  height?: number
  className?: string
}

export function AnimatedLogo({ width = 180, height = 50, className = "" }: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative cursor-pointer ${className}`}
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
          src="/images/taskbounce-logo.webp"
          alt="TaskBounce Logo"
          width={width}
          height={height}
          className="h-auto"
          priority
        />
      </motion.div>
    </div>
  )
}
