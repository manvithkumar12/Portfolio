"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
  label?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  labelClassName = "",
  label,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return (
    <div ref={ref} className="text-center">
      <div className={`flex items-baseline justify-center gap-0.5 ${className}`}>
        {prefix && <span>{prefix}</span>}
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      {label && (
        <p className={`mt-1 text-sm text-portfolio-secondary dark:text-neutral-400 ${labelClassName}`}>
          {label}
        </p>
      )}
    </div>
  );
}
