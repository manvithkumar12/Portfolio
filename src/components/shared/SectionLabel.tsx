"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-2 mb-4 ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-portfolio-primary dark:bg-white" />
      <span className="text-sm font-medium tracking-wide uppercase text-portfolio-secondary dark:text-neutral-400">
        {text}
      </span>
    </motion.div>
  );
}
