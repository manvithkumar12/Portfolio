"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-neutral-950 z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-portfolio-muted dark:border-neutral-800">
                <span className="font-heading font-bold text-lg">Menu</span>
                <motion.button
                  onClick={onClose}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-portfolio-light-gray dark:hover:bg-neutral-800 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-3 text-lg font-medium text-portfolio-primary dark:text-white hover:text-portfolio-accent dark:hover:text-blue-400 transition-colors border-b border-portfolio-muted/50 dark:border-neutral-800/50"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-portfolio-muted dark:border-neutral-800">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full py-3 px-6 text-center bg-portfolio-primary dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
