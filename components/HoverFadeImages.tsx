"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HoverFadeImagesProps {
  imageA: string;
  imageB: string;
}

export function HoverFadeImages({ imageA, imageB }: HoverFadeImagesProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[300px] aspect-square overflow-hidden rounded-lg"
      onMouseEnter={() => {
        console.log("Mouse entered, setting hovered to true");
        setHovered(true);
      }}
      onMouseLeave={() => {
        console.log("Mouse left, setting hovered to false");
        setHovered(false);
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        style={{ zIndex: hovered ? 0 : 1 }}
      >
        <Image
          src={imageA}
          alt="Hover Image A"
          fill
          priority
          className="object-contain"
          sizes="300px"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        style={{ zIndex: hovered ? 1 : 0 }}
      >
        <Image
          src={imageB}
          alt="Hover Image B"
          fill
          className="object-contain"
          sizes="300px"
        />
      </motion.div>
    </div>
  );
}

export default HoverFadeImages;