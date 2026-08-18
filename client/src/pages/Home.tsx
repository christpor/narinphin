/**
 * Design reminder — The Scholarly Atelier, revised:
 * a personal, white-led front page that invites deeper routed reading rather than pretending to be a one-page template.
 */
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/PagePrimitives";
import { Seo } from "@/components/Seo";
import { ASSETS, NAV_ITEMS, YOUTUBE_URL } from "@/lib/site";
import { ArrowRight, ArrowUpRight, BookOpen, GraduationCap, Languages, Play } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { locale } = useLanguage();
  const isKhmer = locale === "km";
  return (
    <>
      <Seo route="/" />
      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="home-brand-stamp"><img src={ASSETS.mark} alt="" /><span>Narin <strong>Phin</strong></span><i>Professional portfolio</i></div>
          <div className={`route-kicker ${isKhmer ? "kh" : ""}`}><span>01</span>{isKhmer ? "គ្រូបង្រៀនភាសាអង់គ្លេស · ភ្នំពេញ" : "English educator · Phnom Penh"}</div>
          <h1 className={isKhmer ? "kh" : ""}>{isKhmer ? <>បង្រៀនភាសា<br />អង់គ្លេសដោយ<br /><em>ការយកចិត្តទុកដាក់</em></> : <>Teaching English<br />with depth, <em>care,</em><br />and direction.</>}</h1>
          <p className={`home-lede ${isKhmer ? "kh" : ""}`}>{isKhmer ? "គ្រូណារិន ជាគ្រូបង្រៀនភាសាអង់គ្លេស អ្នកដឹកនាំផ្នែកសិក្សា និងអ្នកជំនាញកម្មវិធីសិក្សា ដែលមានបទពិសោធន៍ជាង ៣០ ឆ្នាំ។" : "English teacher, academic leader, and curriculum specialist with more than 30 years in education."}</p>
          <div className="hero-actions">
            <Button asChild className="primary-cta"><Link href="/journey" className={isKhmer ? "kh" : ""}>{isKhmer ? "មើលបទពិសោធន៍វិជ្ជាជីវៈ" : "View professional journey"} <ArrowRight size={16} /></Link></Button>
            <Link href="/contact" className={`text-cta ${isKhmer ? "kh" : ""}`}>{isKhmer ? "ចាប់ផ្តើមការសន្ទនា" : "Start a conversation"} <ArrowUpRight size={16} /></Link>
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
          <p className={`portrait-note ${isKhmer ? "kh" : ""}`}>{isKhmer ? <>អាជីពក្នុងការអប់រំ<br />ដែលសាងសង់តាមរយៈថ្នាក់រៀន</> : <>A career in learning,<br />built one classroom at a time.</>}</p>
        </div>
      </section>

      <section className="route-grid-section section-pad">
        <div className="route-grid-heading"><div><div className={`route-kicker ${isKhmer ? "kh" : ""}`}><span>02</span>{isKhmer ? "ស្វែងយល់អំពីការងារ" : "Explore the work"}</div><h2 className={isKhmer ? "kh" : ""}>{isKhmer ? "ជ្រើសរើសប្រធានបទដែលសំខាន់សម្រាប់អ្នក។" : "A career you can explore in your own direction."}</h2></div><p className={isKhmer ? "kh" : ""}>{isKhmer ? "ស្វែងយល់ពីការបង្រៀន ភាពជាអ្នកដឹកនាំ និងការរៀនសូត្រជាសាធារណៈ។" : "Use a focused route for Narin’s teaching, leadership, public learning, or professional story."}</p></div>
        <div className="route-grid">
          {NAV_ITEMS.slice(0, 4).map((item, index) => {
            const Icon = [GraduationCap, BookOpen, Languages, Play][index];
            return <Reveal key={item.href} delay={index * 0.055}><Link href={item.href} className="route-card"><div className="route-card-top"><Icon size={21} strokeWidth={1.55} /><span>0{index + 1}</span></div><h3 className={isKhmer ? "kh" : ""}>{isKhmer ? item.khmer : item.label}</h3>{isKhmer && <p>{item.label}</p>}<ArrowUpRight className="route-card-arrow" size={20} /></Link></Reveal>;
          })}
        </div>
      </section>

      <section className="channel-band">
        <div className="channel-band-image"><img src={ASSETS.studio} alt="A refined study environment representing public learning content" /></div>
        <div><div className={`route-kicker route-kicker--light ${isKhmer ? "kh" : ""}`}><span>03</span>{isKhmer ? "ការរៀនសូត្រជាសាធារណៈ" : "Public learning"}</div><h2 className={isKhmer ? "kh" : ""}>{isKhmer ? "មេរៀន និងជំនាញជីវិត បន្តលើសពីថ្នាក់រៀន។" : "Lessons and life skills, beyond the classroom."}</h2><p className={isKhmer ? "kh" : ""}>{isKhmer ? "គ្រូណារិន ចែករំលែកគំនិតសម្រាប់រៀនភាសាអង់គ្លេស និងជីវិតប្រចាំថ្ងៃ។" : "Narin shares practical English and life-skills ideas through his YouTube channel."}</p><a href={YOUTUBE_URL} className={`light-link ${isKhmer ? "kh" : ""}`} target="_blank" rel="noreferrer"><Play size={15} fill="currentColor" /> {isKhmer ? "ចូលមើល @narinphin" : "Visit @narinphin"} <ArrowUpRight size={16} /></a></div>
      </section>
    </>
  );
}
