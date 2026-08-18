/**
 * Design reminder — The Scholarly Atelier, revised:
 * paper-like editorial pacing, typographic restraint, and motion that never competes with reading.
 */
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS } from "@/lib/site";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}

export function PageHero({ number, eyebrow, khmer, title, intro, khmerTitle, khmerIntro, image, imageAlt }: { number: string; eyebrow: string; khmer: string; title: string; intro: string; khmerTitle?: string; khmerIntro?: string; image: string; imageAlt: string }) {
  const { locale } = useLanguage();
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <div className="page-brand-stamp"><img src={ASSETS.mark} alt="" /><span>Narin <strong>Phin</strong></span></div>
        <div className={`route-kicker ${locale === "km" ? "kh" : ""}`}><span>{number}</span>{locale === "km" ? khmer : eyebrow}</div>
        <h1 className={locale === "km" ? "kh" : ""}>{locale === "km" && khmerTitle ? khmerTitle : title}</h1>
        <p className={`page-hero-intro ${locale === "km" ? "kh" : ""}`}>{locale === "km" && khmerIntro ? khmerIntro : intro}</p>
      </div>
      <div className="page-hero-media"><img src={image} alt={imageAlt} /></div>
    </section>
  );
}

export function SectionHeading({ number, eyebrow, khmer, title, body }: { number: string; eyebrow: string; khmer?: string; title: string; body?: string }) {
  const { locale } = useLanguage();
  return (
    <div className="section-heading">
      <div className={`route-kicker ${locale === "km" ? "kh" : ""}`}><span>{number}</span>{locale === "km" && khmer ? khmer : eyebrow}</div>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
