# BharatSoni_Bio — Claude Development Guide

## What This Project Is

A personal portfolio and biography website for Bharat Soni, Economic and Strategic Advisor. This is a pure frontend React application — no backend, no database, no API calls. All content is static.

The site is deployed via GitHub Pages and self-hosted as a static site.

## Owner

Bharat Soni — Economic Advisory practice. Background in Python, R, SQL, C#, HTML, CSS. Claude handles most implementation; Bharat manages direction and content.

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS 3 + shadcn/ui |
| Animations | framer-motion |
| Routing | React Router v6 |
| Icons | lucide-react + custom SVG social icons |
| Hosting | GitHub Pages (static) |

## Project Structure

```
BharatSoni_Bio/
├── CLAUDE.md                     ← you are here
└── frontend/
    ├── index.html
    ├── vite.config.ts            ← @ alias configured
    ├── tailwind.config.ts        ← CSS variable-based theming
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx               ← BrowserRouter, route /
    │   ├── index.css             ← CSS variables (light + dark), Tailwind directives
    │   ├── data/
    │   │   ├── profile.ts        ← ALL content lives here — owner edits this file only
    │   │   └── sectionPhotos.ts  ← maps section IDs to photo file paths
    │   ├── types/
    │   │   └── profile.ts        ← TypeScript interfaces for all profile data
    │   ├── hooks/
    │   │   ├── useTheme.ts       ← light/dark toggle, persists to localStorage
    │   │   └── useActiveSection.ts ← IntersectionObserver, drives photo + nav state
    │   ├── lib/
    │   │   └── utils.ts          ← cn() helper for Tailwind class merging
    │   └── components/
    │       ├── ui/               ← shadcn button, badge, custom social-icons SVGs
    │       ├── BackgroundPhoto/  ← fixed full-screen photo layer, framer-motion cross-fade
    │       ├── Layout/           ← owns activeSection state, wraps all pages
    │       ├── Nav/              ← sticky glass nav, animated active section indicator
    │       └── Landing/          ← 8 section components (one folder each)
    │           ├── Hero/         ← full-screen, text at bottom, photo is the background
    │           ├── Bio/
    │           ├── AcademicExperience/
    │           ├── ProfessionalExperience/
    │           ├── CaseCompetitions/
    │           ├── Leadership/
    │           ├── Projects/     ← includes ProjectCard/ subfolder
    │           └── Contact/
    └── public/
        ├── bharat_soni.jpg       ← hero background photo
        └── photos/               ← section photos (one per section)
```

## The Two Files the Owner Edits

### `src/data/profile.ts`
Every piece of text content — name, bio, education, experience, competitions, leadership, projects, contact info. Edit this file to update the site. TypeScript catches missing or wrong-type fields immediately.

### `src/data/sectionPhotos.ts`
Maps section IDs to photo file paths. Drop photos into `public/photos/` with the exact filenames listed there.

## Design

- **Aesthetic:** Cinematic, scroll-driven. Full-bleed background photos cross-fade as the user scrolls between sections. Glass panel content areas (`backdrop-blur-md bg-black/40`).
- **Hero:** Full viewport height, text at bottom-left, photo fills the screen.
- **Sections:** Each is `min-h-screen`, content animates in with `whileInView` on scroll.
- **Nav:** Glass bar (`bg-black/30 backdrop-blur-md`), active section highlighted with animated blue underline using framer-motion `layoutId`.
- **Colours:** CSS variables in `index.css` — change them there to retheme everything. Colour selection intentionally deferred.

## Key Conventions

- All content in `profile.ts` — never hardcode strings in components
- Section components use white-based text classes (`text-white`, `text-white/80`) — they always render over a dark photo overlay
- Component files stay under 200 lines
- Named exports only

## Running Locally

```bash
cd frontend
npm install    # first time only
npm run dev    # localhost:5173
npm run build  # production build → dist/
```

## GitHub Pages Deployment

Build output is `frontend/dist/`. After each change: run `npm run build`, then push to GitHub. GitHub Pages serves the built files automatically.

## Current Status

- ✅ All 8 sections built and wired with real content
- ✅ Scroll-driven photo backgrounds with cross-fade animations
- ✅ Hero photo in place (bharat_soni.jpg)
- ⏳ Section photos (public/photos/) — selecting from personal photo library
- ⏳ GitHub Pages deployment — Git setup in progress
- ⏳ Custom domain — deferred, GitHub Pages URL for now
