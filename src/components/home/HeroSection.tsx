"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPersonal } from "@/data/personal";
import { useLanguage } from "@/providers/LanguageProvider";

export function HeroSection() {
  const { t, language } = useLanguage();
  const personal = getPersonal(language);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="container-wide relative z-10 pt-24 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Small metrics above hero */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-bold font-heading">7+</span>
                <span className="text-xs text-portfolio-secondary dark:text-neutral-400">
                  (including minor Projects) {t.hero.completed}
                </span>
              </div>
              <div className="w-px h-6 bg-portfolio-muted dark:bg-neutral-700" />
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-bold font-heading">+3</span>
                <span className="text-xs text-portfolio-secondary dark:text-neutral-400">
                  {t.hero.yearsJourney}
                </span>
              </div>
            </motion.div>

            {/* Main hero text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-hero font-heading"
            >
              <span className="block text-portfolio-primary dark:text-white">{t.hero.hello}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 mb-6"
            >
              <p className="text-xl md:text-2xl text-portfolio-secondary dark:text-neutral-300 font-light">
                {t.hero.im} <span className="text-portfolio-primary dark:text-white font-medium">{personal.name}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {personal.roles.map((role, i) => (
                  <span
                    key={role}
                    className="text-sm px-3 py-1 rounded-full bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-secondary dark:text-neutral-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="text-hero-sub text-portfolio-secondary dark:text-neutral-400 max-w-xl mb-10"
            >
              {personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-portfolio-primary dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all hover:shadow-lg"
              >
                {t.hero.viewProjects}
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-portfolio-primary dark:border-white text-portfolio-primary dark:text-white font-medium rounded-full hover:bg-portfolio-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                {t.hero.downloadCv}
                <Download size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right — Portrait area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-gradient-to-br from-portfolio-light-gray to-portfolio-muted dark:from-neutral-800 dark:to-neutral-900">
              <Image
                src="/MyImage.jpeg"
                alt="Manvith Kumar portrait"
                fill
                className="object-cover"
                priority
              />

              {/* Decorative floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-portfolio-success animate-pulse" />
                  <span className="text-xs font-medium">{t.hero.availableForOpportunities}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-portfolio-secondary dark:text-neutral-500 tracking-wider uppercase">
          {t.hero.scrollDown}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-portfolio-secondary dark:text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
