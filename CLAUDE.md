# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fytaal Rebuild — a React SPA for a Dutch gym/physiotherapy/vitality center (Baarn, Netherlands). Multi-page website with animated transitions, built on the "Organic Flow" design direction. Dutch-language content throughout.

## Commands

```bash
npm run dev       # Start dev server (--host enabled for network access)
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```

Vitest is configured but tests are minimal. Run tests with `npx vitest` or `npx vitest run`. Run a single test file with `npx vitest src/pages/Team.test.jsx`.

## Tech Stack

- React 18 + Vite 5 (SWC plugin) + React Router v7
- Tailwind CSS 3 with custom theme + PostCSS/Autoprefixer
- Framer Motion for all animations
- Lucide React for icons
- clsx + tailwind-merge for className composition

## Architecture

**Routing (App.jsx):** Nested routes under a shared `<Layout>` component that provides Navbar, Footer, animated background blobs, and route transitions via `<Outlet />`.

| Route | Component |
|---|---|
| `/` | Home |
| `/aanbod` | ServicesOverview |
| `/aanbod/:slug` | ServicePage (data-driven) |
| `/onze-aanpak` | Approach |
| `/team` | Team |
| `/contact` | Contact |
| `/rooster` | Schedule (top-level service) |

**Data-driven service pages:** `src/data/services.js` contains all service content as structured objects. `ServicePage.jsx` renders dynamically based on the `:slug` param, supporting content block types: `p`, `h3`, `list`, `bold`, `divider`.

**Animation patterns:** Framer Motion is used pervasively — entrance animations (whileInView, staggered children), scroll-driven parallax (useScroll/useTransform), route transitions (AnimatePresence), hover/click interactions, and the 3D flip cards on the Team page.

**Layout.jsx** is the shell: persistent Navbar + Footer, animated gradient background blobs, GlobalGrain texture overlay, and AnimatePresence for page transitions.

## Brand & Design Tokens

Defined in `tailwind.config.js` and `src/index.css`:

- **Primary:** `#0d6452` (Deep Teal) — CTAs, highlights
- **Accent:** `#1A3128` (Dark Green) — links, secondary
- **Gold:** `#CA8A04` — accent details
- **Fonts:** Barlow Condensed (headings), Barlow (body), Cormorant Garamond (serif display)
- **Border radius:** 10px (`--radius` CSS variable)

Custom CSS utilities in index.css: `.gradient-text`, `.premium-card`, `.grain-overlay`, 3D flip utilities.

Full brand identity documented in `BRAND_GUIDELINES.md`. Tagline: "Van Klacht Naar Kracht."

## Key Files

- `src/App.jsx` — Router configuration
- `src/components/Layout.jsx` — Page shell with global UI
- `src/components/Navbar.jsx` — Floating island nav with scroll-responsive behavior, service dropdown, mobile menu
- `src/components/VideoHero.jsx` — YouTube background hero with parallax
- `src/data/services.js` — All service page content
- `content/` — Markdown content files (not yet integrated into React)
- `src/test/setup.js` — Vitest setup mocking IntersectionObserver, ResizeObserver, matchMedia

## Conventions

- All images in `/public` use WebP format
- Mobile-first responsive design using Tailwind breakpoints (sm/md/lg)
- Components use Framer Motion `motion.*` elements directly (no animation wrapper abstraction)
- Service data uses slug-based lookup from a flat object, not an API