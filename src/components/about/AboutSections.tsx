"use client";

import { motion } from "framer-motion";
import { getPersonal } from "@/data/personal";
import Image from "next/image";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/shared/ScrollReveal";
import * as LucideIcons from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function AboutHero() {
  const { language, t } = useLanguage();
  const personal = getPersonal(language);

  return (
    <section className="section-padding !pt-8 md:!pt-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text */}
          <div>
            <SectionLabel text={t.aboutPage.hero.label} />
            <SectionHeading title={t.aboutPage.hero.title} />

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-portfolio-secondary dark:text-neutral-400 leading-relaxed">
                {personal.about.short}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-portfolio-secondary dark:text-neutral-400 leading-relaxed">
                {personal.about.academicJourney}
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-portfolio-muted dark:border-neutral-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center">
                      <LucideIcons.GraduationCap size={16} className="text-portfolio-accent" />
                    </div>
                  </div>
                  <p className="text-2xl font-heading font-bold">{personal.cgpa}</p>
                  <p className="text-xs text-portfolio-secondary dark:text-neutral-400 mt-1">{t.aboutPage.hero.cgpaLabel}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-portfolio-muted dark:border-neutral-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center">
                      <LucideIcons.Code2 size={16} className="text-portfolio-accent" />
                    </div>
                  </div>
                  <p className="text-2xl font-heading font-bold">7+</p>
                  <p className="text-xs text-portfolio-secondary dark:text-neutral-400 mt-1">{t.aboutPage.hero.projectsLabel}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Portrait + decorative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-portfolio-light-gray to-portfolio-muted dark:from-neutral-800 dark:to-neutral-900">
              <Image
                src="/MyImage.jpeg"
                alt="Manvith Kumar portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating info cards */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-xl border border-portfolio-muted dark:border-neutral-700"
            >
              <div className="flex items-center gap-3">
                <LucideIcons.MapPin size={16} className="text-portfolio-accent" />
                <div>
                  <p className="text-sm font-medium">{personal.location}</p>
                  <p className="text-xs text-portfolio-secondary dark:text-neutral-400">{t.aboutPage.hero.basedIn}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 md:-right-8 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-xl border border-portfolio-muted dark:border-neutral-700"
            >
              <div className="flex items-center gap-3">
                <LucideIcons.Briefcase size={16} className="text-portfolio-success" />
                <div>
                  <p className="text-sm font-medium">{t.aboutPage.hero.yearsNum}</p>
                  <p className="text-xs text-portfolio-secondary dark:text-neutral-400">{t.aboutPage.hero.yearsText}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function JourneyTimeline() {
  const { language, t } = useLanguage();
  const personal = getPersonal(language);

  return (
    <section className="section-padding bg-white dark:bg-neutral-950">
      <div className="container-wide">
        <SectionLabel text={t.aboutPage.journey.label} />
        <SectionHeading title={t.aboutPage.journey.title} subtitle={t.aboutPage.journey.subtitle} />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-portfolio-muted dark:bg-neutral-800 md:-translate-x-px" />

          {personal.timeline.map((item, i) => (
            <ScrollReveal
              key={item.year + i}
              delay={i * 0.15}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-portfolio-primary dark:bg-white text-white dark:text-black rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm text-portfolio-secondary dark:text-neutral-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-portfolio-primary dark:bg-white md:-translate-x-1.5 translate-y-2 ring-4 ring-portfolio-bg dark:ring-neutral-950 z-10" />

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoreValues() {
  const { language, t } = useLanguage();
  const personal = getPersonal(language);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionLabel text={t.aboutPage.values.label} />
        <SectionHeading title={t.aboutPage.values.title} />

        <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {personal.coreValues.map((value) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[value.icon] || LucideIcons.Star;
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-portfolio-muted dark:border-neutral-800 hover:border-portfolio-accent/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-portfolio-accent/10 dark:group-hover:bg-blue-500/10 transition-colors">
                  <IconComponent size={18} className="text-portfolio-primary dark:text-white group-hover:text-portfolio-accent dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1">{value.title}</h3>
                <p className="text-xs text-portfolio-secondary dark:text-neutral-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
