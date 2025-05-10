"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface BlurFadeProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  inView?: boolean
  className?: string
  initial?: any
  animate?: any
  style?: React.CSSProperties
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.5,
  inView = false,
  className = "",
  initial,
  animate,
  style,
}: BlurFadeProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const shouldAnimate = inView ? isInView : true

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [shouldAnimate, hasAnimated])

  const defaultInitial = { opacity: 0, filter: "blur(10px)" }
  const defaultAnimate = { opacity: 1, filter: "blur(0px)" }

  return (
    <motion.div
      ref={inView ? ref : undefined}
      initial={initial || defaultInitial}
      animate={shouldAnimate || hasAnimated ? animate || defaultAnimate : initial || defaultInitial}
      transition={{ duration, delay, ease: [0.4, 0.0, 0.2, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
