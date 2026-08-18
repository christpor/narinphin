/**
 * Design reminder — The Scholarly Atelier, revised:
 * paper-like editorial pacing, typographic restraint, and motion that never competes with reading.
 */
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}

export function PageHero({ number, eyebrow, khmer, title, intro, image, imageAlt }: { number: string; eyebrow: string; khmer: string; title: string; intro: string; image: string; imageAlt: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <div className="route-kicker"><span>{number}</span>{eyebrow}</div>
        <p className="kh route-kh">{khmer}</p>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
      </div>
      <div className="page-hero-media"><img src={image} alt={imageAlt} /></div>
    </section>
  );
}

export function SectionHeading({ number, eyebrow, khmer, title, body }: { number: string; eyebrow: string; khmer?: string; title: string; body?: string }) {
  return (
    <div className="section-heading">
      <div className="route-kicker"><span>{number}</span>{eyebrow}</div>
      {khmer && <p className="kh route-kh">{khmer}</p>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
