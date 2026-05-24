"use client";

import { techStack } from "@/data/skills";

export function TechMarquee() {
  return (
    <section className="py-12 md:py-16 overflow-hidden border-y border-portfolio-muted dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10" />

        {/* Marquee row 1 */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-6 md:mx-10 text-2xl md:text-4xl font-heading font-bold text-portfolio-muted dark:text-neutral-800 hover:text-portfolio-primary dark:hover:text-white transition-colors duration-300 cursor-default select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
