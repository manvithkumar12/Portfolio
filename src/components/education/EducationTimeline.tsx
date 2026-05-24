"use client";

import { getEducation } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function EducationTimeline() {
  const { language } = useLanguage();
  const education = getEducation(language);

  return (
    <div className="space-y-0">
      {education.map((edu, i) => (
        <ScrollReveal key={edu.id} delay={i * 0.1}>
          <div className="group border-b border-portfolio-muted dark:border-neutral-800 py-8 md:py-12">
            <div className="container-wide">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">

                {/* Left — Institution & Icon */}
                <div className="md:col-span-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-portfolio-accent/10 dark:group-hover:bg-blue-500/10 transition-colors">
                    <GraduationCap size={20} className="text-portfolio-primary dark:text-white group-hover:text-portfolio-accent dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg md:text-xl">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-portfolio-secondary dark:text-neutral-400 mt-1">
                      {edu.duration}
                    </p>
                    {edu.location && (
                      <p className="text-sm text-portfolio-secondary dark:text-neutral-400">
                        {edu.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Middle — Degree & Description */}
                <div className="md:col-span-5">
                  <p className="text-base font-medium text-portfolio-primary dark:text-white mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-portfolio-secondary dark:text-neutral-400 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  {edu.cgpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-portfolio-light-gray dark:bg-neutral-900 border border-portfolio-muted dark:border-neutral-800">
                      <span className="text-xs font-medium text-portfolio-secondary dark:text-neutral-500 uppercase tracking-wider">Score</span>
                      <span className="text-sm font-semibold">{edu.cgpa}</span>
                    </div>
                  )}
                </div>

                {/* Right — Courses */}
                <div className="md:col-span-3">
                  <p className="text-xs font-medium text-portfolio-secondary dark:text-neutral-500 uppercase tracking-wider mb-3">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap items-start gap-2">
                    {edu.courses.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="text-xs bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-secondary dark:text-neutral-400 border-0 rounded-md font-normal"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
