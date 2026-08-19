# Deep Reference & Architecture Laws — Narin Phin Portfolio

## Law 1: The Scholarly Atelier Design System
- **Background:** Mineral white (`#FAFAF8`), parchment cards (`#F3F3EF`), surface borders (`#E5E5DF`).
- **Accent & Brand:** Evergreen Ink (`#173F37`), Terracotta-Copper (`#C46849`).
- **Typography Matrix:**
  - Display / Editorial: `DM Serif Display`, `Source Serif 4`.
  - Body & UI: `Manrope`, `Instrument Sans`.
  - Khmer Script: `Kantumruy Pro` with line-height at least 1.7 (`leading-snug`) to avoid clipping diacritics.

## Law 2: Content Attribution & Zero Fabrication
- All career history, qualifications, and claims must derive from verified sources in `content-inventory.md`.
- No fake endorsements, invented testimonials, or unapproved contact information.
- YouTube statistics should link directly to `@narinphin` public channel.

## Law 3: Bilingual Routing & State Preservation
- Language choice (`en` vs `km`) must be saved in `localStorage` under `narin_pref_lang`.
- Switching language updates `document.documentElement.lang` and translates page titles, headings, and CTAs.

## Law 4: Performance & Prerendering
- The build script `scripts/prerender-routes.mjs` generates static HTML for all core routes (`/`, `/about`, `/expertise`, `/journey`, `/learn`, `/contact`) for SEO indexing.
- Zero horizontal scrolling on all viewports down to 320px width.
