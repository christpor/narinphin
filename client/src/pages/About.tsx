/**
 * Design reminder — The Scholarly Atelier, revised:
 * an evidence-led educator profile with balanced Cambodian and international professional context.
 */
import { PageHero, Reveal, SectionHeading } from "@/components/PagePrimitives";
import { Seo } from "@/components/Seo";
import { ASSETS } from "@/lib/site";
import { BookOpen, Globe2, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return <><Seo route="/about" /><PageHero number="01" eyebrow="About Narin" khmer="អំពីគ្រូណារិន" title="An educator shaped by classrooms, communities, and continual learning." intro="A professional profile built around English education, academic leadership, and a belief that language opens practical pathways." image={ASSETS.portrait} imageAlt="Narin Phin in a formal professional portrait" />
    <section className="story-section section-pad"><Reveal className="story-layout"><div className="story-quote">“Teaching is most meaningful when learners can use what they know with confidence.”</div><div><SectionHeading number="02" eyebrow="Professional profile" khmer="បទពិសោធន៍ និងគោលបំណង" title="Grounded in Cambodia. Ready for a wider world." /><div className="prose"><p>Narin Phin has spent more than thirty years working in English-language teaching, curriculum development, academic administration, and faculty leadership. His experience spans language centres, universities, international-school settings, NGO work, and community education.</p><p>He brings a rare blend of patient classroom practice and practical leadership: designing learning pathways, guiding teachers, supporting students, and helping English become a working language for study, collaboration, and opportunity.</p></div></div></Reveal></section>
    <section className="fact-section section-pad"><div className="fact-grid"><Reveal><article><GraduationCap size={22}/><span>Education</span><h3>Master of Arts in English</h3><p>Norton University · Phnom Penh</p></article></Reveal><Reveal delay={.05}><article><BookOpen size={22}/><span>Education</span><h3>Bachelor of Education in English</h3><p>Norton University · Phnom Penh</p></article></Reveal><Reveal delay={.1}><article><Globe2 size={22}/><span>Languages</span><h3>Khmer & English</h3><p>Native Khmer and professional English communication.</p></article></Reveal></div></section>
    <section className="image-statement section-pad"><Reveal className="image-statement-grid"><img src={ASSETS.campus} alt="University corridor with natural light" /><div><div className="route-kicker"><span>03</span> A continuing practice</div><p className="kh route-kh">ការរីកចម្រើនចាប់ផ្តើមពីការរៀនជាបន្តបន្ទាប់</p><h2>Learning is not a moment. It is a relationship built over time.</h2><Link href="/expertise" className="quiet-link">Explore areas of practice →</Link></div></Reveal></section>
  </>;
}
