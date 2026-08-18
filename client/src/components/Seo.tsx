/**
 * Design reminder — The Scholarly Atelier, revised:
 * truthful route-level metadata supports a calm, credible educator identity across search and social sharing.
 */
import { useEffect } from "react";
import { ROUTE_META, SITE_ORIGIN, type RouteMeta } from "@/lib/site";

function setMeta(attribute: "name" | "property", key: string, value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = value;
}

export function Seo({ route }: { route: keyof typeof ROUTE_META }) {
  useEffect(() => {
    const meta: RouteMeta = ROUTE_META[route] ?? ROUTE_META["/"];
    const canonicalUrl = `${SITE_ORIGIN}${meta.path}`;
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = canonicalUrl;
  }, [route]);

  return null;
}
