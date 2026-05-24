"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getExperience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export function ExperienceTimeline() {
  const { language } = useLanguage();
  const experiences = getExperience(language);

  return (
    <div className="space-y-0">
      {experiences.map((exp, i) => (
        <ScrollReveal key={exp.id} delay={i * 0.1}>
          <div className="group border-b border-portfolio-muted dark:border-neutral-800 py-8 md:py-10">
            <div className="container-wide">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Left — Company & date */}
                <div className="md:col-span-4">
                  <h3 className="font-heading font-semibold text-lg md:text-xl">
                    {exp.organization}
                  </h3>
                  <p className="text-sm text-portfolio-secondary dark:text-neutral-400 mt-1">
                    • {exp.duration}
                  </p>
                  {exp.location && (
                    <p className="text-sm text-portfolio-secondary dark:text-neutral-400">
                      {exp.location}
                    </p>
                  )}
                </div>

                {/* Middle — Description */}
                <div className="md:col-span-5">
                  <p className="text-sm font-medium text-portfolio-primary dark:text-white mb-2">
                    {exp.role}
                  </p>
                  <p className="text-sm text-portfolio-secondary dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Right — Tags + Arrow */}
                <div className="md:col-span-3 flex flex-wrap items-start gap-2">
                  {exp.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-secondary dark:text-neutral-400 border-0 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-portfolio-primary dark:bg-white flex items-center justify-center ml-auto opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <ArrowUpRight size={16} className="text-white dark:text-black" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
