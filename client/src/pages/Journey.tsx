/**
 * Design reminder — The Scholarly Atelier, revised:
 * an accessible, fact-led timeline that makes a long career easy to read without reducing it to a résumé grid.
 */
import { PageHero, Reveal, SectionHeading } from "@/components/PagePrimitives";
import { Seo } from "@/components/Seo";
import { ASSETS } from "@/lib/site";
import { Link } from "wouter";

const timeline = [
  ["2014 — Present", "English Teacher & Community Educator", "Cambodian Children’s Fund · Phnom Penh", "Voluntary English teaching and learning support for children and young adults."],
  ["2010 — 2012", "English Supervisor", "Grace International School · Phnom Penh", "Secondary English oversight, curriculum review, staff coaching, and assessment."],
  ["2007 — 2012", "English Lecturer", "Western University · Phnom Penh", "Undergraduate English language and communication courses."],
  ["2007 — 2010", "Dean of English Department & Lecturer", "Management and International College · Phnom Penh", "Curriculum delivery, faculty leadership, and lecturer development."],
  ["2006 — 2014", "Head of English Department", "Open Gate Center for Education · Phnom Penh", "Academic operations, competency-based curriculum, and quality assurance."],
  ["1992 — 1997", "English Teacher, Interpreter & Community Liaison", "UNTAC and community-development organisations · Cambodia", "English–Khmer interpretation, teaching, and community liaison."],
] as const;

export default function Journey() {
  return <><Seo route="/journey" /><PageHero number="03" eyebrow="Professional journey" khmer="បទពិសោធន៍វិជ្ជាជីវៈ" title="A career that has kept growing with every learner." intro="Selected chapters from a long record of teaching, academic leadership, university education, community learning, and bilingual communication." khmerTitle="អាជីពដែលរីកចម្រើនជាមួយអ្នករៀនគ្រប់រូប។" khmerIntro="ជំពូកជ្រើសរើសពីបទពិសោធន៍ក្នុងការបង្រៀន ភាពជាអ្នកដឹកនាំ ការអប់រំនៅសាកលវិទ្យាល័យ និងការប្រើភាសាពីរភាសា។" image={ASSETS.campus} imageAlt="Academic corridor representing a university learning environment" />
    <section className="journey-content section-pad"><Reveal><SectionHeading number="04" eyebrow="Selected timeline" khmer="ដំណើរវិជ្ជាជីវៈ" title="Experience you can trace." body="The following roles are selected from Narin’s CV to provide a clear professional record for recruiters, collaborators, and educational organisations." /></Reveal><div className="route-timeline">{timeline.map(([period, role, place, detail], index) => <Reveal key={`${period}-${role}`} delay={index * .035}><article><div className="timeline-dot"/><p className="timeline-period">{period}</p><div><h3>{role}</h3><p className="timeline-place">{place}</p></div><p className="timeline-detail">{detail}</p></article></Reveal>)}</div></section>
    <section className="journey-end section-pad"><Reveal><p className="kh">ជំនាញដ៏រឹងមាំ ចាប់ផ្តើមពីបទពិសោធន៍ពិតប្រាកដ</p><h2>Three decades of work, kept accountable to the next learner in the room.</h2><Link href="/contact" className="light-link">Contact Narin <span>→</span></Link></Reveal></section>
  </>;
}
