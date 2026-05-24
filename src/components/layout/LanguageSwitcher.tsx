"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { languages } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { LanguageCode } from "@/locales";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  const selected = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (lang: (typeof languages)[number]) => {
    setLanguage(lang.code as LanguageCode);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-portfolio-muted dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-portfolio-light-gray dark:hover:bg-neutral-800 transition-colors text-sm"
        whileTap={{ scale: 0.95 }}
        aria-label="Switch language"
      >
        <Globe size={14} />
        <span className="hidden sm:inline">{selected.flag}</span>
        <span className="hidden sm:inline text-xs font-medium uppercase">{selected.code}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-white dark:bg-neutral-900 border border-portfolio-muted dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden z-50 min-w-[140px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-portfolio-light-gray dark:hover:bg-neutral-800 transition-colors ${
                  selected.code === lang.code
                    ? "bg-portfolio-light-gray dark:bg-neutral-800 font-medium"
                    : ""
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
