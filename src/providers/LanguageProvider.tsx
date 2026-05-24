"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, LanguageCode } from "@/locales";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("portfolio-lang") as LanguageCode;
    if (stored && (stored === "en" || stored === "de")) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-lang", lang);
    // Let other components know the language changed (optional)
    window.dispatchEvent(new Event("languagechange"));
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  // We return children without waiting for mount, so SSR still works (it will default to 'en').
  // Once mounted, if a different lang was in localStorage, it will hydrate and update.
  return (
    <LanguageContext.Provider value={value}>
      <div key={mounted ? "mounted" : "unmounted"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
