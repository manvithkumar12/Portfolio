"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, X } from "lucide-react";
import Image from "next/image";
import { getCertifications, Certification } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, staggerItem } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export function CertificationGallery() {
  const { language } = useLanguage();
  const certifications = getCertifications(language);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className="section-padding !pt-8 md:!pt-12">
      <div className="container-wide">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-portfolio-muted dark:border-neutral-800 hover:border-portfolio-accent/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Certificate image area */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-portfolio-light-gray to-portfolio-muted dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center overflow-hidden">
                {cert.image ? (
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <Award size={40} className="text-portfolio-muted dark:text-neutral-700" />
                )}
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-white/90 dark:bg-black/70 text-portfolio-primary dark:text-white text-xs border-0 backdrop-blur-sm shadow-sm">
                    {cert.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-semibold mb-1 line-clamp-2">{cert.title}</h3>
                <p className="text-sm text-portfolio-secondary dark:text-neutral-400 mb-1">{cert.organization}</p>
                <p className="text-xs text-portfolio-secondary dark:text-neutral-500 mb-4">{cert.date}</p>

                {cert.credentialId && (
                  <p className="text-xs text-portfolio-secondary dark:text-neutral-500 mb-3 break-all">
                    ID: {cert.credentialId}
                  </p>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-portfolio-accent dark:text-blue-400 hover:underline"
                  >
                    Verify Credential
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 z-20 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative w-full flex-grow bg-portfolio-light-gray dark:bg-neutral-950 flex items-center justify-center p-4 min-h-0">
                {selectedCert.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center">
                    <Award size={80} className="text-portfolio-muted dark:text-neutral-800 mb-4" />
                    <p className="text-portfolio-secondary dark:text-neutral-500 font-medium">No certificate image available</p>
                  </div>
                )}
              </div>
              
              <div className="p-5 md:p-6 bg-white dark:bg-neutral-900 border-t border-portfolio-muted dark:border-neutral-800 shrink-0">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg md:text-xl mb-1">{selectedCert.title}</h3>
                    <p className="text-sm text-portfolio-secondary dark:text-neutral-400">
                      {selectedCert.organization} &bull; {selectedCert.date}
                    </p>
                    {selectedCert.credentialId && (
                      <p className="text-xs text-portfolio-secondary dark:text-neutral-500 mt-2 break-all">
                        Credential ID: {selectedCert.credentialId}
                      </p>
                    )}
                  </div>
                  
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 px-4 py-2 bg-portfolio-primary dark:bg-white text-white dark:text-portfolio-primary rounded-lg text-sm font-medium hover:bg-portfolio-primary/90 dark:hover:bg-neutral-200 transition-colors"
                    >
                      Verify Credential
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
