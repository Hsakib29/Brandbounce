"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface HoverFadeImagesProps {
  imageA: string
  imageB: string
}

export function HoverFadeImages({ imageA, imageB }: HoverFadeImagesProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex justify-center mt-8"> {/* ✅ Add vertical margin here */}
      <div
        className="relative w-full max-w-[300px] aspect-square overflow-hidden rounded-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Image
            src={imageA}
            alt="Hover Image A"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Image
            src={imageB}
            alt="Hover Image B"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HoverFadeImages
