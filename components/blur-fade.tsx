"use client";
import type React from "react";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  inView?: boolean;
  className?: string;
  initial?: any;
  animate?: any;
  style?: React.CSSProperties;
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.4, // Reduced from 0.5
  inView = false,
  className = "",
  initial,
  animate,
  style,
}: BlurFadeProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px", // Pre-trigger animation slightly before element enters viewport
  });

  const shouldAnimate = inView ? isInView : true;

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [shouldAnimate, hasAnimated]);

  // Memoize animation states to prevent unnecessary re-renders
  const animationStates = useMemo(() => {
    const defaultInitial = {
      opacity: 0,
      filter: "blur(6px)", // Reduced from 10px
      y: 20, // Added subtle y movement for better visual flow
    };
    const defaultAnimate = {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    };

    return {
      initial: initial || defaultInitial,
      animate: animate || defaultAnimate,
    };
  }, [initial, animate]);

  // Optimized transition with better easing
  const transition = useMemo(
    () => ({
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // Smoother easing curve
      opacity: { duration: duration * 0.8 }, // Opacity animates faster
      filter: { duration: duration * 1.2 }, // Blur animates slightly slower for smoothness
      y: { duration: duration * 0.9 },
    }),
    [duration, delay]
  );

  return (
    <motion.div
      ref={inView ? ref : undefined}
      initial={animationStates.initial}
      animate={
        shouldAnimate || hasAnimated
          ? animationStates.animate
          : animationStates.initial
      }
      transition={transition}
      className={className}
      style={style}
      // Performance optimizations
      will-change="transform, opacity, filter"
    >
      {children}
    </motion.div>
  );
}
