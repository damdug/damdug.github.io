# Site Rebuild Complete — March 2026

## Overview

Complete rebuild from scratch using Astro with Vercel deployment. Previous site archived to `/legacy/`.

## What Was Done

### 1. Legacy Preservation ✅
- All existing files moved to `/legacy` folder intact
- No legacy files modified or deleted
- Legacy site: Bootstrap 3, jQuery, static HTML
- Legacy preserved: index.html, about.html, services.html, contact.html, backoffice.html, header.html, footer.html, script.js, styles.css, Assets/

### 2. Astro Project Initialized ✅
- Framework: Astro v5.18.0
- Package manager: npm
- Output: Static site generation
- Build target: GitHub Pages

### 3. Design System Implemented ✅
**Color Palette:**
- Background: #0A0A0A (primary), #111111 (surface), #1A1A1A (elevated)
- Text: #E0E0E0 (primary), #909090 (secondary), #505050 (tertiary)
- Accent: #C9706A (muted red)
- Borders: #222222

**Typography:**
- Font: IBM Plex Mono (all weights: 300, 400, 500, 600)
- Monospace only — no other fonts
- Fluid type scale using clamp()

**Aesthetic:**
- "Systems laboratory" not "Matrix hacker"
- Minimal animations (terminal cursor blink only)
- No gradients, no shadows, no border-radius on structural elements
- 1px solid borders throughout

### 4. Site Structure ✅

```
src/
├── components/
│   ├── Header.astro       — Site header with logo and nav
│   ├── Footer.astro       — Footer with copyright and Esoteria link
│   └── Navigation.astro   — Main navigation menu
│
├── layouts/
│   ├── BaseLayout.astro       — Base HTML template
│   └── ArticleLayout.astro    — Article/blog post template
│
├── pages/
│   ├── index.astro           — Homepage
│   ├── about.astro           — About Douglas
│   ├── advisory.astro        — Advisory services
│   ├── contact.astro         — Contact form (Formspree)
│   ├── white-papers/
│   │   ├── index.astro       — Collection listing
│   │   └── [slug].astro      — Dynamic article pages
│   ├── field-notes/
│   │   ├── index.astro       — Collection listing
│   │   └── [slug].astro      — Dynamic article pages
│   └── hdk/
│       ├── index.astro       — Collection listing with sections
│       └── [slug].astro      — Dynamic article pages
│
├── content/
│   ├── config.ts             — Content Collections schema
│   ├── white-papers/         — Long-form essays (markdown)
│   ├── field-notes/          — Short observations (markdown)
│   │   └── first-note.md     — Sample content
│   └── hdk/                  — Human Development Kit entries
│       └── what-is-the-hdk.md — Sample content
│
└── styles/
    ├── global.css        — Base styles, resets, CSS variables
    ├── typography.css    — Type scale, heading styles
    └── components.css    — Reusable component styles
```

### 5. Content Collections ✅
Three collections configured:
- **White Papers** — Long-form frameworks and essays
- **Field Notes** — Short observations from the field
- **HDK** — Human Development Kit (~80 entries to be added)

Schema includes:
- title, description, date, tags, author, draft (all collections)
- section, order (HDK only — for grouping and sorting)

### 6. Pages Implemented ✅

**Homepage** (`/`)
- Hero section with "Intelligence Architect" tagline + terminal cursor
- Three collection cards (White Papers, Field Notes, HDK)
- Advisory callout
- Esoteria signal link

**About** (`/about`)
- Bio and background
- Current focus areas
- Links to Esoteria, GitHub, LinkedIn

**Advisory** (`/advisory`)
- Service offerings
- Engagement model
- Calendly CTA

**Contact** (`/contact`)
- Formspree contact form (preserved from legacy)
- Calendly link for advisory calls

**Collection Indexes** (`/white-papers`, `/field-notes`, `/hdk`)
- List all published articles
- Sort by date (descending)
- HDK groups by section
- Empty state messages when no content

**Dynamic Article Pages** (`/[collection]/[slug]`)
- Render markdown content
- Display metadata (date, tags, collection label)
- Styled prose (headings, lists, code blocks, blockquotes)

### 7. External Integrations Preserved ✅
- **Formspree** — Contact form backend (same endpoint)
- **Calendly** — Meeting scheduling (damdug)
- **Google Fonts** — IBM Plex Mono
- **Esoteria link** — esoteriaai.com

### 8. GitHub Pages Deployment ✅
Configured GitHub Action (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Node 20
- Builds with `npm run build`
- Deploys to GitHub Pages

### 9. Assets Migrated ✅
From `legacy/Assets/` to `public/assets/`:
- Logo: `dune.svg`
- Social icons: linkedin, whatsapp, twitter-x, facebook, instagram, github

## Build Verification

✅ `npm run build` — Successful (9 pages generated)
✅ `npm run dev` — Dev server runs on http://localhost:4321/
✅ All pages render correctly
✅ Sample content displays in collections
✅ Navigation works
✅ Responsive design functional

## Next Steps

### Content Migration
1. Convert legacy content from `services.html` into White Papers or Field Notes
2. Begin publishing HDK articles (~80 entries)
3. Add more Field Notes from ongoing work

### Additional Pages (Optional)
- Tools page (if building interactive tools)
- Updates/changelog page

### Optimization
- Add meta tags for social sharing (Open Graph, Twitter Cards)
- Consider adding RSS feeds for collections
- Optimize images if adding content images

### Deployment
1. Commit all changes to git
2. Push to `main` branch
3. GitHub Action will build and deploy automatically
4. Configure GitHub Pages to use `gh-pages` branch or `main` with `/dist` folder

## Commands

```bash
# Development
npm run dev              # Start dev server (localhost:4321)

# Build
npm run build            # Build for production (outputs to /dist)

# Preview
npm run preview          # Preview production build locally

# Deployment
git add .
git commit -m "Complete Astro migration"
git push origin main     # Triggers GitHub Action deployment
```

## Design Constraints Applied

✅ No Tailwind or CSS frameworks — plain CSS only
✅ No React or component frameworks — pure Astro
✅ IBM Plex Mono only — no other fonts
✅ No gradients, shadows, or border-radius on structural elements
✅ Minimal JavaScript — site functions without JS
✅ No analytics or tracking scripts (beyond Google Fonts)
✅ Legacy folder untouched
✅ Inline styles used sparingly in Astro components for layout-specific values

## File Counts

- **Legacy files preserved:** 13 files + Assets/
- **New Astro components:** 3
- **New layouts:** 2
- **New pages:** 10
- **Content files:** 2 (sample)
- **CSS files:** 3
- **Config files:** 2 (astro.config.mjs, content/config.ts)

## Migration Date

March 7, 2026

## Notes

- White Papers collection is empty (no sample content added)
- Field Notes has 1 sample entry: "On Structure Before Automation"
- HDK has 1 sample entry: "What Is the HDK"
- All collection indexes handle empty states gracefully
- Color palette is intentionally muted compared to legacy neon green (#33ff33)
- Design feels more "research notebook" than "hacker terminal"
- Site is content-ready — just add markdown files to collections

---

**Status:** ✅ Complete and ready for deployment
