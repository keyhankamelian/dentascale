"use client";

import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Final numeric value to count up to. */
  value: number;
  /** Number of decimal places to display (e.g. 2 for "7.38"). */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  durationSeconds?: number;
};

/**
 * Counts up from 0 to `value` when scrolled into view (once).
 * Respects prefers-reduced-motion by showing the final value immediately.
 */
export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  durationSeconds = 1.4,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Reduced-motion renders `value` directly during render (see below) —
    // no animation, so no effect needed for that case.
    if (!inView || reduceMotion) return;

    const controls = animate(0, value, {
      duration: durationSeconds,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [inView, value, reduceMotion, durationSeconds]);

  const shown = reduceMotion ? value : display;
  const formatted = shown.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
