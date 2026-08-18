/**
 * Design reminder — The Scholarly Atelier, revised:
 * a calm conversion moment with an explicit Gmail compose action and a human, polite enquiry structure.
 */
import { Button } from "@/components/ui/button";
import { PageHero, Reveal } from "@/components/PagePrimitives";
import { Seo } from "@/components/Seo";
import { ASSETS, EMAIL, gmailComposeUrl, mailtoUrl } from "@/lib/site";
import { ArrowUpRight, Mail, Send } from "lucide-react";

export default function Contact() {
  return <><Seo route="/contact" /><PageHero number="05" eyebrow="Contact" khmer="ទំនាក់ទំនង" title="A good conversation is a strong place to begin." intro="For teaching, curriculum, academic leadership, and educational collaboration enquiries, write to Narin directly." image={ASSETS.portraitSquare} imageAlt="Narin Phin in a professional profile portrait" />
    <section className="contact-page section-pad"><Reveal className="contact-layout"><div><div className="route-kicker"><span>06</span> Write directly</div><p className="kh route-kh">សូមសរសេរមកគ្រូណារិនដោយផ្ទាល់</p><h2>Start with a clear, considered enquiry.</h2><p>Choose Gmail for a ready-to-edit message template, or use your preferred email application. Both options direct your message to Narin’s professional inbox.</p></div><aside className="gmail-panel"><div className="gmail-icon" aria-hidden="true"><Mail size={29}/></div><span>Professional enquiry</span><h3>Write to Narin via Gmail</h3><p>The subject and message are prefilled with a polite structure. You can edit every detail before sending.</p><Button asChild className="gmail-button"><a href={gmailComposeUrl("Narin Phin portfolio") } target="_blank" rel="noreferrer"><Send size={16}/> Open Gmail compose</a></Button><a className="email-fallback" href={mailtoUrl("Narin Phin portfolio")}>Use another email app <ArrowUpRight size={15}/></a></aside></Reveal></section>
    <section className="contact-template section-pad"><Reveal><div className="route-kicker"><span>07</span> A helpful starting point</div><div className="mail-template"><p>Dear Narin,</p><p>I found your portfolio through <span>[page or source]</span>.</p><p>I would like to discuss <span>[teaching, curriculum, academic leadership, or another enquiry]</span>.</p><p>My name:<br/>Organisation:<br/>Best contact number or email:</p><p>Kind regards,</p></div><p className="contact-address">Direct email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p></Reveal></section>
  </>;
}
