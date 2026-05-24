"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/data/projects";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/providers/LanguageProvider";

export function FeaturedProjects() {
  const { t, language } = useLanguage();
  const featured = getProjects(language).filter((p) => p.featured);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel text={t.featured.sectionLabel} />
            <SectionHeading
              title={t.featured.title}
              subtitle={t.featured.subtitle}
            />
          </div>
          <ScrollReveal delay={0.3}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-portfolio-primary dark:text-white hover:text-portfolio-accent dark:hover:text-blue-400 transition-colors group"
            >
              {t.featured.viewAll}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-portfolio-muted dark:border-neutral-800 hover:border-portfolio-secondary/30 dark:hover:border-neutral-600 transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-portfolio-light-gray to-portfolio-muted dark:from-neutral-800 dark:to-neutral-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold text-portfolio-muted dark:text-neutral-700">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-portfolio-primary/80 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Code size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white text-portfolio-primary flex items-center justify-center hover:bg-white/90 transition-colors"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-portfolio-accent dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-portfolio-secondary dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-secondary dark:text-neutral-400 border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="text-xs font-normal bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-secondary dark:text-neutral-400 border-0"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
