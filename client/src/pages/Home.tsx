/**
 * Design reminder — The Scholarly Atelier, revised:
 * a personal, white-led front page that invites deeper routed reading rather than pretending to be a one-page template.
 */
import { Button } from "@/components/ui/button";
import { PageHero, Reveal } from "@/components/PagePrimitives";
import { Seo } from "@/components/Seo";
import { ASSETS, NAV_ITEMS, YOUTUBE_URL } from "@/lib/site";
import { ArrowRight, ArrowUpRight, BookOpen, GraduationCap, Languages, Play } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <Seo route="/" />
      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="route-kicker"><span>01</span> English educator · Phnom Penh</div>
          <p className="kh route-kh">ការអប់រំដោយភាពច្បាស់លាស់ និងទំនុកចិត្ត</p>
          <h1>Teaching English<br />with depth, <em>care,</em><br />and direction.</h1>
          <p className="home-lede">Narin Phin is an English teacher, academic leader, and curriculum specialist whose work has grown through more than three decades in education.</p>
          <div className="hero-actions">
            <Button asChild className="primary-cta"><Link href="/journey">View professional journey <ArrowRight size={16} /></Link></Button>
            <Link href="/contact" className="text-cta">Start a conversation <ArrowUpRight size={16} /></Link>
          </div>
          <div className="home-credentials" aria-label="Key professional credentials">
            <div><strong>30+</strong><span>Years in education</span></div>
            <div><strong>M.A.</strong><span>English</span></div>
            <div><strong>KH / EN</strong><span>Bilingual practice</span></div>
          </div>
        </div>
        <div className="home-hero-visual">
          <div className="hero-context"><img src={ASSETS.library} alt="A library environment representing academic learning" /></div>
          <figure className="hero-portrait"><img src={ASSETS.portrait} alt="Narin Phin in a professional portrait" /><figcaption>English teacher<br /><span>Academic leader</span></figcaption></figure>
          <p className="portrait-note">A career in learning,<br />built one classroom at a time.</p>
        </div>
      </section>

      <section className="home-intro section-pad">
        <Reveal className="intro-grid">
          <div className="intro-image"><img src={ASSETS.classroom} alt="Teacher speaking with students in a classroom" /></div>
          <div className="intro-copy">
            <div className="route-kicker"><span>02</span> A practical education</div>
            <p className="kh route-kh">ការរៀនដែលមានន័យ ចាប់ផ្តើមពីការយល់ច្បាស់</p>
            <h2>Language learning should give people more ways to participate.</h2>
            <p>Across schools, universities, language centres, and community settings, Narin’s work has focused on clear communication, learner confidence, and thoughtful academic support.</p>
            <Link href="/about" className="quiet-link">Read the introduction <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>

      <section className="route-grid-section section-pad">
        <div className="route-grid-heading"><div><div className="route-kicker"><span>03</span> Explore the work</div><h2>Choose the conversation that matters to you.</h2></div><p>Each page offers a direct route into Narin’s teaching, leadership, public learning, and professional background.</p></div>
        <div className="route-grid">
          {NAV_ITEMS.slice(0, 4).map((item, index) => {
            const Icon = [GraduationCap, BookOpen, Languages, Play][index];
            return <Reveal key={item.href} delay={index * 0.055}><Link href={item.href} className="route-card"><div className="route-card-top"><Icon size={21} strokeWidth={1.55} /><span>0{index + 1}</span></div><h3>{item.label}</h3><p className="kh">{item.khmer}</p><ArrowUpRight className="route-card-arrow" size={20} /></Link></Reveal>;
          })}
        </div>
      </section>

      <section className="channel-band">
        <div className="channel-band-image"><img src={ASSETS.studio} alt="A refined study environment representing public learning content" /></div>
        <div><div className="route-kicker route-kicker--light"><span>04</span> Public learning</div><h2>Lessons and life skills continue beyond the classroom.</h2><p>Narin shares English-learning ideas and practical reflections with a public audience through his YouTube channel.</p><a href={YOUTUBE_URL} className="light-link" target="_blank" rel="noreferrer"><Play size={15} fill="currentColor" /> Visit @narinphin <ArrowUpRight size={16} /></a></div>
      </section>
    </>
  );
}
