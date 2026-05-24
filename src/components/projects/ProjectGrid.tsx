"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code, ImageOff, X } from "lucide-react";
import { getProjects, Project } from "@/data/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, staggerItem } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  return (
    <>
      <div>
        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onReadMore={() => setSelectedProject(project)} 
              t={t}
            />
          ))}
        </StaggerContainer>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-10 z-10 custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-secondary dark:text-neutral-400 hover:text-portfolio-primary dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 pr-10 text-portfolio-primary dark:text-white">
                {selectedProject.title}
              </h2>
              
              <div className="flex gap-2 flex-wrap mb-8">
                <Badge className="bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-primary dark:text-white border-0">
                  {selectedProject.category}
                </Badge>
                {selectedProject.ongoing && (
                  <Badge className="bg-portfolio-accent/90 text-white border-0">
                    {t.common.ongoing}
                  </Badge>
                )}
              </div>

              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-portfolio-secondary dark:text-neutral-300">
                <p className="whitespace-pre-line leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              <div className="mt-10">
                <h4 className="font-semibold text-portfolio-primary dark:text-white mb-4">{t.common.technologiesUsed}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-secondary dark:text-neutral-400 border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectCard({ project, onReadMore, t }: { project: Project; onReadMore: () => void; t: any }) {
  const hasMoreContent = project.longDescription || project.description.length > 100;

  return (
    <motion.div
      variants={staggerItem}
      layout
      className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-portfolio-muted dark:border-neutral-800 hover:border-portfolio-secondary/30 dark:hover:border-neutral-600 transition-all duration-500 hover:shadow-xl"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-portfolio-light-gray to-portfolio-muted dark:from-neutral-800 dark:to-neutral-900">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-portfolio-light-gray dark:bg-neutral-800">
            <ImageOff className="w-8 h-8 text-portfolio-secondary dark:text-neutral-500 opacity-50" />
            <span className="text-sm font-medium text-portfolio-secondary dark:text-neutral-500">
              {t.common.noPreview}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        {!project.ongoing && (
          <div className="absolute inset-0 bg-portfolio-primary/80 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label={`${project.title} GitHub`}
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
                aria-label={`${project.title} Live Demo`}
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <Badge className="bg-white/90 dark:bg-black/70 text-portfolio-primary dark:text-white text-xs border-0 backdrop-blur-sm">
            {project.category}
          </Badge>
          {project.ongoing && (
            <Badge className="bg-portfolio-accent/90 text-white text-xs border-0 backdrop-blur-sm">
              {t.common.ongoing}
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-portfolio-accent dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-portfolio-secondary dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {hasMoreContent && (
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={onReadMore}
            className="w-full mb-4 bg-portfolio-light-gray dark:bg-neutral-800 text-portfolio-primary dark:text-white hover:bg-portfolio-muted dark:hover:bg-neutral-700 transition-colors border-0"
          >
            {t.common.readMore}
          </Button>
        )}

        <div className="flex flex-wrap gap-1.5 mt-2">
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
  );
}
