/**
 * Design reminder — The Scholarly Atelier, revised:
 * articulate working strengths presented with academic clarity instead of generic service-card language.
 */
import { PageHero, Reveal, SectionHeading } from "@/components/PagePrimitives";
import { Seo } from "@/components/Seo";
import { ASSETS } from "@/lib/site";
import { BookOpen, BriefcaseBusiness, Languages, PenLine, Presentation, UsersRound } from "lucide-react";
import { Link } from "wouter";

const expertise = [
  [BookOpen, "English language teaching", "ការបង្រៀនភាសាអង់គ្លេស", "Learner-centred English teaching shaped by work with varied ages, proficiency levels, and learning ambitions."],
  [PenLine, "Curriculum & assessment", "កម្មវិធីសិក្សា និងការវាយតម្លៃ", "Purposeful syllabi, materials, and assessment practices that give learning a clear direction."],
  [BriefcaseBusiness, "Academic leadership", "ការដឹកនាំផ្នែកសិក្សា", "Departmental coordination, quality assurance, academic administration, and a strong sense of shared responsibility."],
  [UsersRound, "Teacher mentoring", "ការណែនាំគ្រូបង្រៀន", "Classroom observation, professional feedback, and practical development support for teaching teams."],
  [Languages, "Bilingual communication", "ការទំនាក់ទំនងពីរភាសា", "Khmer–English communication, interpretation, and cross-cultural liaison grounded in real institutional and community work."],
  [Presentation, "Public speaking", "ការនិយាយជាសាធារណៈ", "Clear, considered communication for learning, collaboration, and professional audiences."],
] as const;

export default function Expertise() {
  return <><Seo route="/expertise" /><PageHero number="02" eyebrow="Areas of practice" khmer="ជំនាញ និងការអនុវត្ត" title="The work of education is practical, precise, and deeply human." intro="A focused view of the skills Narin has developed across English teaching, curriculum work, academic leadership, and communication." image={ASSETS.classroom} imageAlt="A teacher leading a small classroom discussion" />
    <section className="expertise-page section-pad"><div className="expertise-page-head"><SectionHeading number="03" eyebrow="Core strengths" khmer="ជំនាញសំខាន់ៗ" title="Experience that supports learners and the people who teach them." /></div><div className="expertise-page-list">{expertise.map(([Icon, title, khmer, copy], index) => <Reveal key={title} delay={index * .045}><article className="expertise-detail"><span>0{index + 1}</span><Icon size={23} strokeWidth={1.5}/><div><h3>{title}</h3><p className="kh">{khmer}</p><p>{copy}</p></div></article></Reveal>)}</div></section>
    <section className="editorial-callout section-pad"><Reveal><p>For Narin, the value of English education is not only fluency. It is the ability to participate with clarity, confidence, and respect.</p><Link href="/contact" className="callout-link">Discuss an educational enquiry →</Link></Reveal></section>
  </>;
}
