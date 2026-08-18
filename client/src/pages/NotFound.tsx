/**
 * Design reminder — The Scholarly Atelier, revised:
 * no dead ends; even an unknown route should preserve the portfolio’s calm editorial confidence.
 */
import { Seo } from "@/components/Seo";
import { Link } from "wouter";

export default function NotFound() {
  return <section className="not-found section-pad"><Seo route="/" /><span>404</span><h1>This page has moved on.</h1><p>The page you requested is not available. You can return to Narin’s introduction or continue to the professional journey.</p><div><Link href="/">Home</Link><Link href="/journey">Professional journey</Link></div></section>;
}
