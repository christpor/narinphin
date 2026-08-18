/**
 * Design reminder — The Scholarly Atelier, revised:
 * bilingual editorial navigation, unhurried desktop reading, and direct routes over anchor-only interaction.
 */
import { Button } from "@/components/ui/button";
import { ASSETS, NAV_ITEMS, YOUTUBE_URL } from "@/lib/site";
import Lenis from "lenis";
import { Menu, Play, X } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

function useDesktopLenis() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !window.matchMedia("(min-width: 900px) and (pointer: fine)").matches) return;
    const lenis = new Lenis({
      lerp: 0.085,
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      syncTouch: false,
    });
    let animationFrame = 0;
    const frame = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(frame);
    };
    animationFrame = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, [reducedMotion]);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useDesktopLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <Link href="/" className="brand-lockup" aria-label="Narin Phin home">
          <img src={ASSETS.mark} alt="" className="brand-mark" />
          <span className="brand-type">Narin <strong>Phin</strong></span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "nav-link nav-link--active" : "nav-link"}>
              <span>{item.label}</span><small className="kh">{item.khmer}</small>
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-youtube" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
            <Play size={13} fill="currentColor" aria-hidden="true" /><span>YouTube</span>
          </a>
          <Button variant="ghost" size="icon" className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-brand"><img src={ASSETS.mark} alt="" /><span>Narin <strong>Phin</strong></span></div>
        <p>English educator · Academic leader · Curriculum specialist</p>
        <p className="kh footer-kh">ការអប់រំដោយភាពច្បាស់លាស់ និងទំនុកចិត្ត</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Narin Phin</span><Link href="/contact">Contact</Link></div>
      </footer>
    </div>
  );
}
