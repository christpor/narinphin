import fs from "node:fs";
import path from "node:path";

const origin = process.env.SITE_ORIGIN || "https://narinphin-one.vercel.app";
const outputDirectory = path.resolve("dist/public");
const rootHtml = fs.readFileSync(path.join(outputDirectory, "index.html"), "utf8");

const routes = [
  ["/about", "About Narin Phin | English Educator & Academic Leader", "Learn about Narin Phin’s 30+ years in English education, bilingual communication, academic leadership, and community learning."],
  ["/expertise", "Expertise | Narin Phin — English Education & Curriculum Leadership", "Explore Narin Phin’s experience in English language teaching, curriculum design, assessment, academic leadership, and teacher mentoring."],
  ["/journey", "Professional Journey | Narin Phin", "A selected professional journey through English teaching, university education, curriculum leadership, community education, and interpretation work."],
  ["/learn", "Learn with Narin | English Lessons & Life Skills", "Explore Narin Phin’s public teaching and life-skills learning pathway through his YouTube channel and educator resources."],
  ["/contact", "Contact Narin Phin | English Educator in Phnom Penh", "Contact Narin Phin about English education, curriculum work, academic leadership, and professional collaboration."],
];

function replaceAttribute(html, selector, value) {
  const escaped = value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  return html.replace(selector, `$1${escaped}$2`);
}

for (const [route, title, description] of routes) {
  const canonical = `${origin}${route}`;
  let html = rootHtml.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = replaceAttribute(html, /(<meta name="description" content=")[^"]*(")/, description);
  html = replaceAttribute(html, /(<link rel="canonical" href=")[^"]*(")/, canonical);
  html = replaceAttribute(html, /(<meta property="og:url" content=")[^"]*(")/, canonical);
  html = replaceAttribute(html, /(<meta property="og:title" content=")[^"]*(")/, title);
  html = replaceAttribute(html, /(<meta property="og:description" content=")[^"]*(")/, description);
  html = replaceAttribute(html, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  html = replaceAttribute(html, /(<meta name="twitter:description" content=")[^"]*(")/, description);
  const destination = path.join(outputDirectory, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
}

const sitemapEntries = ["/", ...routes.map(([route]) => route)]
  .map((route) => `  <url>\n    <loc>${origin}${route}</loc>\n    <lastmod>2026-08-19</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n  </url>`)
  .join("\n");

fs.writeFileSync(path.join(outputDirectory, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`);
