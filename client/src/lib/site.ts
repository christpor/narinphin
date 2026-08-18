/**
 * Design reminder — The Scholarly Atelier, revised:
 * bilingual editorial clarity, real page routes, considered teaching imagery, and no decorative emoji.
 */
export const SITE_ORIGIN = "https://narinphin.vercel.app";
export const SITE_NAME = "Narin Phin";
export const EMAIL = "narinphin05@gmail.com";
export const YOUTUBE_URL = "https://www.youtube.com/@narinphin";

export const ASSETS = {
  mark: "/manus-storage/narin-np-mark_19cfd537.png",
  portrait: "/manus-storage/narin-portrait-vertical_1667cb38.png",
  portraitSquare: "/manus-storage/narin-portrait-square_4840a4f9.jpg",
  classroom: "/manus-storage/narin-classroom_1a26022f.jpg",
  library: "/manus-storage/narin-library_7c0de128.jpg",
  campus: "/manus-storage/narin-campus-corridor_00728bec.jpg",
  studio: "/manus-storage/narin-youtube-studio_89c2990c.jpg",
};

export const NAV_ITEMS = [
  { href: "/about", label: "About", khmer: "អំពីខ្ញុំ" },
  { href: "/expertise", label: "Expertise", khmer: "ជំនាញ" },
  { href: "/journey", label: "Journey", khmer: "បទពិសោធន៍" },
  { href: "/learn", label: "Learn", khmer: "រៀនជាមួយគ្នា" },
  { href: "/contact", label: "Contact", khmer: "ទំនាក់ទំនង" },
];

export type RouteMeta = {
  title: string;
  description: string;
  path: string;
};

export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Narin Phin | English Teacher & Academic Leader in Phnom Penh",
    description: "Narin Phin is an English teacher, academic leader, and curriculum specialist in Phnom Penh with more than 30 years of experience in education.",
    path: "/",
  },
  "/about": {
    title: "About Narin Phin | English Educator & Academic Leader",
    description: "Learn about Narin Phin’s 30+ years in English education, bilingual communication, academic leadership, and community learning.",
    path: "/about",
  },
  "/expertise": {
    title: "Expertise | Narin Phin — English Education & Curriculum Leadership",
    description: "Explore Narin Phin’s experience in English language teaching, curriculum design, assessment, academic leadership, and teacher mentoring.",
    path: "/expertise",
  },
  "/journey": {
    title: "Professional Journey | Narin Phin",
    description: "A selected professional journey through English teaching, university education, curriculum leadership, community education, and interpretation work.",
    path: "/journey",
  },
  "/learn": {
    title: "Learn with Narin | English Lessons & Life Skills",
    description: "Explore Narin Phin’s public teaching and life-skills learning pathway through his YouTube channel and educator resources.",
    path: "/learn",
  },
  "/contact": {
    title: "Contact Narin Phin | English Educator in Phnom Penh",
    description: "Contact Narin Phin about English education, curriculum work, academic leadership, and professional collaboration.",
    path: "/contact",
  },
};

export function gmailComposeUrl(source: string) {
  const subject = `Portfolio enquiry — ${source}`;
  const body = `Dear Narin,\n\nI found your portfolio through ${source}.\n\nI would like to discuss [teaching, curriculum, academic leadership, or another enquiry].\n\nMy name:\nOrganisation:\nBest contact number or email:\n\nKind regards,`;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function mailtoUrl(source: string) {
  const subject = `Portfolio enquiry — ${source}`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}
