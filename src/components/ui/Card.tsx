"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Enable hover lift + border shift to accent. Default true. */
  interactive?: boolean;
  as?: "div" | "article" | "li";
};

/**
 * Surface card: #141414 bg, #232323 border, 12px radius.
 * On hover (when interactive): border shifts to accent purple and the
 * card lifts 2px. Respects prefers-reduced-motion.
 */
export function Card({
  children,
  className = "",
  interactive = true,
  as = "div",
}: CardProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={`rounded-[12px] border border-card-border bg-card transition-colors duration-200 ${
        interactive ? "hover:border-accent" : ""
      } ${className}`}
      whileHover={
        interactive && !reduceMotion ? { y: -2 } : undefined
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
