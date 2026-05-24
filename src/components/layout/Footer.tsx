"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code, Globe, Mail, ArrowUp } from "lucide-react";
import { socialLinks, navLinks } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { getPersonal } from "@/data/personal";

const iconMap: Record<string, React.ElementType> = {
  Github: Code,
  Linkedin: Globe,
  Mail,
};

export function Footer() {
  const { t, language } = useLanguage();
  const personal = getPersonal(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getNavLabel = (label: string) => {
    const key = label.toLowerCase() as keyof typeof t.nav;
    return t.nav[key] || label;
  };

  return (
    <footer className="relative bg-portfolio-primary dark:bg-neutral-950 text-white">
      {/* Top CTA band */}
      <div className="border-b border-white/10">
        <div className="container-wide py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-white/50 uppercase tracking-wider mb-3">
                {t.footer?.collab || "Let's collaborate"}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-lg">
                {t.footer?.projectInMind || "Have a project in mind?"}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-portfolio-primary font-medium rounded-full hover:bg-white/90 transition-colors text-sm"
              >
                {t.nav.contact}
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Links + Info */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-portfolio-primary font-bold text-sm">M</span>
              </div>
              <span className="font-heading font-bold text-lg">{personal.name}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {personal.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-white/30 mb-4">
              {t.footer?.navigation || "Navigation"}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {getNavLabel(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-white/30 mb-4">
              {t.footer?.more || "More"}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {getNavLabel(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-white/30 mb-4">
              {t.footer?.socials || "Connect"}
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {Icon && <Icon size={14} />}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {personal.name}. {t.footer.rights}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-white transition-colors"
          >
            {t.footer?.backToTop || "Back to top"}
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
