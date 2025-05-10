"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface HoverFadeImagesProps {
  imageA: string
  imageB: string
}

export function HoverFadeImages({ imageA, imageB }: HoverFadeImagesProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative w-full h-full min-h-[300px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center-top"
        style={{ backgroundImage: `url(${imageA})` }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center-top"
        style={{ backgroundImage: `url(${imageB})` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  )
}
