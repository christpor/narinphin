/**
 * Design reminder — The Scholarly Atelier, revised:
 * real public learning work leads the visual story; the supporting imagery is contextual and never impersonates a named institution.
 */
import { PageHero, Reveal, SectionHeading } from "@/components/PagePrimitives";
import { Seo } from "@/components/Seo";
import { ASSETS, YOUTUBE_URL } from "@/lib/site";
import { ArrowUpRight, CirclePlay, Lightbulb, MessageCircleMore } from "lucide-react";

export default function Learn() {
  return <><Seo route="/learn" /><PageHero number="04" eyebrow="Public learning" khmer="ការរៀនសូត្រជាសាធារណៈ" title="Ideas for learning that travel beyond a lesson plan." intro="Narin’s public channel extends his educator identity with English-learning ideas, practical language examples, and reflections intended to be useful in daily life." image={ASSETS.studio} imageAlt="A refined learning studio environment" />
    <section className="learn-intro section-pad"><Reveal className="learn-intro-grid"><div><SectionHeading number="05" eyebrow="Narin on YouTube" khmer="រៀនជាមួយគ្រូណារិន" title="A continuing learning conversation." body="The channel is an outward-facing place for short language lessons, vocabulary examples, and life-skill reflections." /><a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="youtube-cta"><CirclePlay size={20} fill="currentColor"/> Visit @narinphin <ArrowUpRight size={17}/></a></div><img src={ASSETS.library} alt="Bookshelves representing ongoing learning and study" /></Reveal></section>
    <section className="learning-principles section-pad"><div className="principle-grid"><Reveal><article><Lightbulb size={22}/><h3>Learn by connecting meaning</h3><p>Strong language learning starts with how a word or idea works in a real situation—not only how it appears in a list.</p></article></Reveal><Reveal delay={.06}><article><MessageCircleMore size={22}/><h3>Keep knowledge shareable</h3><p>Useful teaching should travel: from lesson to conversation, screen to study group, and learner to learner.</p></article></Reveal></div></section>
  </>;
}
