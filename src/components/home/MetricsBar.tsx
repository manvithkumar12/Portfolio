"use client";

import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { metrics } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export function MetricsBar() {
  const { t } = useLanguage();

  const translatedMetrics = [
    { value: 7, suffix: "+", label: t.hero.projectsCompleted },
    { value: 3, suffix: "+", label: t.hero.yearsLearningJourney },
    { value: 10, suffix: "+", label: t.hero.technologies },
    { value: 1000, suffix: "+", label: t.hero.hoursCoding },
  ];

  return (
    <section className="section-padding-sm border-y border-portfolio-muted dark:border-neutral-800">
      <div className="container-wide">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {translatedMetrics.map((metric) => (
              <AnimatedCounter
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                className="text-4xl md:text-5xl font-heading font-bold text-portfolio-primary dark:text-white"
                labelClassName="text-sm text-portfolio-secondary dark:text-neutral-400"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
