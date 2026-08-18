/**
 * Design reminder — The Scholarly Atelier, refined:
 * a visible, respectful Khmer–English choice without pretending incomplete long-form translations are exhaustive.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "en" | "km";

type LanguageState = {
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageState | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem("narin-portfolio-locale") === "km" ? "km" : "en"));

  useEffect(() => {
    localStorage.setItem("narin-portfolio-locale", locale);
    document.documentElement.lang = locale === "km" ? "km" : "en";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, toggleLocale: () => setLocale((current) => current === "en" ? "km" : "en") }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
