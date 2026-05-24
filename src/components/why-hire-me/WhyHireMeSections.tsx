"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getPersonal } from "@/data/personal";
import { getTestimonials } from "@/data/testimonials";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/shared/ScrollReveal";
import * as LucideIcons from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

export function ValuePropositions() {
  const { language } = useLanguage();
  const personal = getPersonal(language);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personal.whyHireMe.map((item) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[item.icon] || LucideIcons.Star;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-portfolio-muted dark:border-neutral-800 hover:border-portfolio-accent/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center mb-5 group-hover:bg-portfolio-accent/10 dark:group-hover:bg-blue-500/10 transition-colors">
                  <IconComponent size={24} className="text-portfolio-primary dark:text-white group-hover:text-portfolio-accent dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-portfolio-secondary dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function HireStats() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-portfolio-primary dark:bg-neutral-950 text-white">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 20, suffix: "+", label: t.hire.stats.projectsBuilt },
            { value: 15, suffix: "+", label: t.hire.stats.technologiesLearned },
            { value: 1000, suffix: "+", label: t.hire.stats.hoursPractice },
            { value: 50, suffix: "+", label: t.hire.stats.githubContributions },
          ].map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="text-4xl md:text-5xl font-heading font-bold text-white"
              labelClassName="text-white/60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { language, t } = useLanguage();
  const testimonials = getTestimonials(language);

  return (
    <section className="section-padding bg-white dark:bg-neutral-950">
      <div className="container-wide">
        <SectionLabel text={t.hire.testimonialsLabel} />
        <SectionHeading title={t.hire.whatPeopleSay} subtitle={t.hire.testimonialsSubtitle} />

        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-portfolio-primary dark:text-white mb-8">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div>
              <div className="w-12 h-12 rounded-full bg-portfolio-light-gray dark:bg-neutral-800 mx-auto mb-3 flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-portfolio-secondary dark:text-neutral-400">
                  {testimonials[active].name.charAt(0)}
                </span>
              </div>
              <p className="font-medium">{testimonials[active].name}</p>
              <p className="text-sm text-portfolio-secondary dark:text-neutral-400">
                {testimonials[active].role}, {testimonials[active].organization}
              </p>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active
                    ? "bg-portfolio-primary dark:bg-white w-8"
                    : "bg-portfolio-muted dark:bg-neutral-700 hover:bg-portfolio-secondary dark:hover:bg-neutral-500"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HireCTA() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-wide text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.hire.ctaTitle}
            <br />
            <span className="gradient-text">{t.hire.ctaTitleHighlight}</span>
          </h2>
          <p className="text-lg text-portfolio-secondary dark:text-neutral-400 max-w-lg mx-auto mb-8">
            {t.hire.ctaSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-portfolio-primary dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all hover:shadow-lg"
            >
              {t.hire.getInTouch}
              <ArrowUpRight size={16} />
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 border border-portfolio-primary dark:border-white text-portfolio-primary dark:text-white font-medium rounded-full hover:bg-portfolio-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              {t.hire.downloadResume}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
