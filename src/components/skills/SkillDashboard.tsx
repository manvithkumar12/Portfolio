"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getSkillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import * as LucideIcons from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function SkillDashboard() {
  const { language } = useLanguage();
  const skillCategories = getSkillCategories(language);

  return (
    <section className="section-padding !pt-8 md:!pt-12">
      <div className="container-wide">
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[category.icon] || LucideIcons.Star;
            return (
              <ScrollReveal key={category.title} delay={catIdx * 0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center">
                      <IconComponent size={18} className="text-portfolio-primary dark:text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIdx * 0.05, duration: 0.4 }}
                        className="group p-4 rounded-xl bg-white dark:bg-neutral-900 border border-portfolio-muted dark:border-neutral-800 hover:border-portfolio-accent/30 dark:hover:border-blue-500/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          {skill.image ? (
                            <div className="relative w-8 h-8 flex-shrink-0">
                              <Image
                                src={skill.image}
                                alt={skill.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-lg bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center text-sm font-bold flex-shrink-0 text-portfolio-secondary dark:text-neutral-400">
                              {skill.name.charAt(0)}
                            </div>
                          )}
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
