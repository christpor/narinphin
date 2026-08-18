/**
 * Design reminder — The Scholarly Atelier:
 * an asymmetric, white editorial folio with evergreen rules, copper annotations, portrait apertures,
 * and calm transform/opacity-only motion that follows the reading order.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  GraduationCap,
  Languages,
  Menu,
  PenLine,
  Play,
  Quote,
  X,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const YOUTUBE_URL = "https://www.youtube.com/@narinphin";
const EMAIL_URL = "mailto:narinphin05@gmail.com";
const ASSETS = {
  mark: "/manus-storage/narin-np-mark_19cfd537.png",
  portrait: "/manus-storage/narin-portrait-vertical_1667cb38.png",
  portraitSquare: "/manus-storage/narin-portrait-square_4840a4f9.jpg",
  hero: "/manus-storage/narin-editorial-hero_4b29d3b3.jpg",
  teaching: "/manus-storage/narin-teaching-approach_1e66d36d.jpg",
  studio: "/manus-storage/narin-youtube-studio_89c2990c.jpg",
};

const expertise = [
  {
    number: "01",
    icon: BookOpen,
    title: "English language teaching",
    text: "Learner-centred teaching shaped by long experience across English-language classrooms and varied learning levels.",
  },
  {
    number: "02",
    icon: PenLine,
    title: "Curriculum & assessment",
    text: "Clear learning pathways, purposeful materials, and assessment design that support steady academic progress.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Academic leadership",
    text: "Department leadership, academic operations, teacher supervision, and sustained support for quality teaching.",
  },
  {
    number: "04",
    icon: Languages,
    title: "Bilingual communication",
    text: "Khmer–English communication, public speaking, interpretation, and cross-cultural liaison built on real practice.",
  },
];

const timeline = [
  {
    period: "2014 — Present",
    role: "English Teacher & Community Educator",
    place: "Cambodian Children’s Fund · Phnom Penh",
    detail: "Voluntary English instruction and educational support for children and young adults, with a focus on language development and academic confidence.",
  },
  {
    period: "2007 — 2012",
    role: "English Lecturer",
    place: "Western University · Phnom Penh",
    detail: "Undergraduate English language and communication courses delivered for diverse student cohorts.",
  },
  {
    period: "2007 — 2010",
    role: "Dean of English Department & Lecturer",
    place: "Management and International College · Phnom Penh",
    detail: "Curriculum delivery, faculty management, student services, and communicative language teaching leadership.",
  },
  {
    period: "1997 — 2014",
    role: "Head of English Department",
    place: "Open Gate Center for Education · Phnom Penh",
    detail: "English-language academic operations, curriculum implementation, team leadership, and quality assurance.",
  },
  {
    period: "1992 — 1997",
    role: "English Teacher, Interpreter & Community Liaison",
    place: "UNTAC and community-development organisations · Cambodia",
    detail: "English instruction, English–Khmer interpretation, and coordination work in high-responsibility international and community settings.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({ index, eyebrow, title, text }: { index: string; eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <div className="section-kicker"><span>{index}</span>{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Narin Phin, back to top" onClick={closeMenu}>
          <img src={ASSETS.mark} alt="" className="brand-mark" />
          <span className="brand-type">Narin <strong>Phin</strong></span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#learn" onClick={closeMenu}>Learn</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <a className="header-youtube" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
            <Play size={14} fill="currentColor" aria-hidden="true" />
            <span>YouTube</span>
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-inner">
            <div className="hero-copy">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.54, ease: [0.23, 1, 0.32, 1] }} className="hero-kicker">
                <span className="pulse-dot" /> English Educator · Phnom Penh
              </motion.div>
              <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.08, ease: [0.23, 1, 0.32, 1] }}>
                Teaching English<br />as a pathway to<br /><em>possibility.</em>
              </motion.h1>
              <motion.p className="hero-summary" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: reduceMotion ? 0 : 0.18, ease: [0.23, 1, 0.32, 1] }}>
                Narin Phin is an English educator, academic leader, and curriculum specialist with more than three decades of experience helping learners and teachers move forward.
              </motion.p>
              <motion.div className="hero-buttons" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.52, delay: reduceMotion ? 0 : 0.28, ease: [0.23, 1, 0.32, 1] }}>
                <Button asChild className="primary-cta">
                  <a href="#about">Explore my work <ArrowDown size={16} /></a>
                </Button>
                <a className="text-cta" href={YOUTUBE_URL} target="_blank" rel="noreferrer">Visit the channel <ArrowUpRight size={16} /></a>
              </motion.div>
            </div>

            <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, y: 26 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.78, delay: reduceMotion ? 0 : 0.12, ease: [0.23, 1, 0.32, 1] }}>
              <div className="hero-art" style={{ backgroundImage: `url(${ASSETS.hero})` }} />
              <div className="portrait-frame portrait-frame--hero">
                <img src={ASSETS.portrait} alt="Narin Phin in a formal professional portrait" />
              </div>
              <div className="hero-note hero-note--top"><span>30+</span> years<br />in education</div>
              <div className="hero-note hero-note--bottom">English Teacher<br /><span>Academic Leader</span></div>
              <div className="hero-rule" />
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to the introduction"><span>Scroll to read</span><ArrowDown size={16} /></a>
        </section>

        <section id="about" className="about-section section-pad" aria-labelledby="about-title">
          <div className="folio-number" aria-hidden="true">01</div>
          <Reveal className="about-layout">
            <div className="about-aside">
              <p className="vertical-label">A lifetime in learning</p>
              <div className="about-portrait">
                <img src={ASSETS.portraitSquare} alt="Narin Phin" />
              </div>
            </div>
            <div className="about-main">
              <SectionIntro index="01" eyebrow="Introduction" title="Rooted in Cambodia. Shaped by a world of learning." text="A career built across classrooms, universities, language centres, NGOs, and academic leadership roles." />
              <div className="intro-statement">
                <Quote aria-hidden="true" />
                <p>“The best language learning gives people more than words. It gives them the confidence to take part.”</p>
              </div>
              <div className="about-body">
                <p>For more than thirty years, Narin Phin has dedicated his professional life to English education. His work brings together deep classroom expertise, curriculum design, departmental leadership, mentoring, and bilingual communication.</p>
                <p>From undergraduate lecture halls to community education, his focus remains clear: helping learners build practical language, academic confidence, and a wider sense of possibility.</p>
              </div>
              <div className="credential-row" aria-label="Narin Phin’s education credentials">
                <div><span>M.A.</span><small>English</small></div>
                <div><span>B.Ed.</span><small>English</small></div>
                <div><span>KH / EN</span><small>Bilingual</small></div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="expertise" className="expertise-section section-pad" aria-labelledby="expertise-title">
          <Reveal className="expertise-top">
            <SectionIntro index="02" eyebrow="Areas of practice" title="A teacher’s work extends beyond the lesson." text="Experience that moves between student learning, academic quality, team development, and meaningful communication." />
            <div className="expertise-intro-note"><span>Core practice</span><ChevronRight size={18} /></div>
          </Reveal>
          <div className="expertise-list">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="expertise-item">
                  <div className="expertise-index">{item.number}</div>
                  <div className="expertise-icon"><Icon size={22} strokeWidth={1.6} /></div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <ArrowUpRight className="expertise-arrow" size={20} aria-hidden="true" />
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="philosophy-section section-pad" aria-labelledby="philosophy-title">
          <Reveal className="philosophy-visual">
            <div className="philosophy-image" style={{ backgroundImage: `url(${ASSETS.teaching})` }} />
            <div className="image-caption">A practice of attention <span>— 03</span></div>
          </Reveal>
          <Reveal delay={0.08} className="philosophy-copy">
            <SectionIntro index="03" eyebrow="Teaching philosophy" title="Clarity first. Confidence next. Progress always." text="Thoughtful language learning is not about memorising more. It is about understanding how to use English with purpose." />
            <div className="philosophy-lines">
              <p><span>01</span> Build a strong foundation in meaning, communication, and practical use.</p>
              <p><span>02</span> Meet learners with respect for their backgrounds and individual ambitions.</p>
              <p><span>03</span> Create lessons that encourage curiosity, cooperation, and independence.</p>
            </div>
          </Reveal>
        </section>

        <section id="journey" className="journey-section section-pad" aria-labelledby="journey-title">
          <Reveal className="journey-heading">
            <SectionIntro index="04" eyebrow="Professional journey" title="Experience that has grown with every learner." text="Selected chapters from a long career in English teaching, academic administration, curriculum leadership, and community service." />
          </Reveal>
          <div className="timeline" role="list">
            {timeline.map((item, index) => (
              <Reveal key={`${item.period}-${item.role}`} delay={index * 0.045} className="timeline-item" >
                <div className="timeline-marker"><span /></div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-role"><h3>{item.role}</h3><p>{item.place}</p></div>
                <p className="timeline-detail">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="learn" className="learn-section section-pad" aria-labelledby="learn-title">
          <Reveal className="learn-card">
            <div className="learn-image" style={{ backgroundImage: `url(${ASSETS.studio})` }} />
            <div className="learn-copy">
              <div className="section-kicker"><span>05</span> Beyond the classroom</div>
              <h2>Lessons and life skills for a wider audience.</h2>
              <p>On YouTube, Narin shares English-learning ideas, practical language examples, and experiences intended to help viewers keep learning in their everyday lives.</p>
              <a className="video-button" href={YOUTUBE_URL} target="_blank" rel="noreferrer"><span className="play-circle"><Play size={16} fill="currentColor" /></span> Watch on YouTube <ArrowUpRight size={17} /></a>
              <p className="channel-note">@narinphin <span /> 1.03K subscribers · 223 videos</p>
            </div>
          </Reveal>
        </section>

        <section className="credentials-section section-pad" aria-labelledby="credentials-title">
          <Reveal className="credentials-layout">
            <div className="credentials-title">
              <div className="section-kicker"><span>06</span> Foundations</div>
              <h2 id="credentials-title">Education, training, and language.</h2>
            </div>
            <div className="credentials-grid">
              <article><GraduationCap size={22} /><span>Education</span><h3>Master of Arts in English</h3><p>Norton University · Phnom Penh</p></article>
              <article><BookOpen size={22} /><span>Education</span><h3>Bachelor of Education in English</h3><p>Norton University · Phnom Penh</p></article>
              <article><PenLine size={22} /><span>Training</span><h3>CamTESOL Certificate</h3><p>With continued professional learning in teaching and writing practice.</p></article>
              <article><Languages size={22} /><span>Languages</span><h3>Khmer & English</h3><p>Native Khmer and professional English communication.</p></article>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <Reveal className="contact-inner">
            <div className="contact-mark"><img src={ASSETS.mark} alt="" /></div>
            <div className="contact-copy">
              <p className="section-kicker section-kicker--light"><span>07</span> Let’s connect</p>
              <h2 id="contact-title">Education begins with a meaningful conversation.</h2>
              <p>For teaching, academic, and educational collaboration enquiries, get in touch or explore Narin’s public learning channel.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={EMAIL_URL}>Write an email <ArrowUpRight size={18} /></a>
              <a className="contact-youtube" href={YOUTUBE_URL} target="_blank" rel="noreferrer">YouTube channel <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
          <footer><span>© {new Date().getFullYear()} Narin Phin</span><span>English Educator · Phnom Penh, Cambodia</span></footer>
        </section>
      </main>
    </div>
  );
}
