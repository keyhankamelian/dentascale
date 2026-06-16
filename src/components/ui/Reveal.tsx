"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds (e.g. index * 0.1 for a row of cards). */
  delay?: number;
  className?: string;
  /** Render as a different element when needed (e.g. "li", "article"). */
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Fades + lifts its children into view on scroll:
 * opacity 0 -> 1, y 20px -> 0, 0.6s ease-out, once.
 * Respects prefers-reduced-motion (renders without movement).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
