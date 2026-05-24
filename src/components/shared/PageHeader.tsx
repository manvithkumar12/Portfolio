"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";

import { useLanguage } from "@/providers/LanguageProvider";

interface PageHeaderProps {
  label?: string;
  title?: string;
  subtitle?: string;
  pageKey?: "about" | "certifications" | "contact" | "education" | "experience" | "projects" | "skills";
  className?: string;
}

export function PageHeader({ label, title, subtitle, pageKey, className = "" }: PageHeaderProps) {
  const { t } = useLanguage();
  
  const finalLabel = pageKey ? t.pageHeaders[pageKey].label : label;
  const finalTitle = pageKey ? t.pageHeaders[pageKey].title : title;
  const finalSubtitle = pageKey ? t.pageHeaders[pageKey].subtitle : subtitle;

  return (
    <section className={`pt-32 md:pt-40 pb-8 md:pb-12 ${className}`}>
      <div className="container-wide">
        <SectionLabel text={finalLabel || ""} />
        <SectionHeading title={finalTitle || ""} subtitle={finalSubtitle} />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-px bg-portfolio-muted dark:bg-neutral-800 origin-left"
        />
      </div>
    </section>
  );
}
