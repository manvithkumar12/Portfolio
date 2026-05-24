"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { useLanguage } from "@/providers/LanguageProvider";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Helper to map English labels to translation keys
  const getNavLabel = (label: string) => {
    const key = label.toLowerCase() as keyof typeof t.nav;
    return t.nav[key] || label;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-portfolio-primary dark:bg-white rounded-lg flex items-center justify-center"
              >
                <span className="text-white dark:text-black font-bold text-sm">M</span>
              </motion.div>
              <span className="font-heading font-bold text-lg tracking-tight hidden sm:block">
                Manvith
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? "text-portfolio-primary dark:text-white"
                        : "text-portfolio-secondary dark:text-neutral-400 hover:text-portfolio-primary dark:hover:text-white"
                    }`}
                  >
                    {getNavLabel(link.label)}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-portfolio-light-gray dark:bg-neutral-800 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 md:gap-3">
              <LanguageSwitcher />
              <ThemeToggle />

              {/* Contact CTA — desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-portfolio-primary dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                {t.nav.contact}
                <ArrowUpRight size={14} />
              </Link>

              {/* Hamburger — mobile */}
              <motion.button
                onClick={() => setMobileOpen(true)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-portfolio-light-gray dark:hover:bg-neutral-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
