# Garage Door Client Websites

> **Voluntary client work** — A full portfolio of production-ready websites built for **Joe Lucey Garage Door & Gate**, a family-owned business with 47+ years of service across Los Angeles and Orange County.

Over two months in Summer 2025, I independently designed and built **20+ full-stack websites** and **16 hyperlocal city landing pages** as pro-bono work — learning and applying modern full-stack web development in a real-world client context. Every site is live-deployable, mobile-responsive, and SEO-optimized for the local service market.

---

## Live Portfolio Showcase

### **[→ View Live Showcase](https://sreekant13.github.io/Garage-Door-Web-Portfolio/showcase/)**

An interactive portfolio page with cards for every site, the full tech stack, a development timeline, and links directly into each project's source code. Hosted on GitHub Pages.

---

## The Client

**Joe Lucey Garage Door & Gate Company** — Los Angeles & Orange County, California

Joseph Lucey has been repairing and installing garage doors and gates since 1978. The goal of this engagement was to build a modern web presence that:
- Captures local search traffic across dozens of cities
- Converts visitors into service calls with clear CTAs and trust signals
- Showcases specific products (Genie, Chamberlain, LiftMaster, Crusader)
- Scales across multiple service niches (springs, openers, new installations, repairs)

---

## Tech Stack

Every site in this portfolio shares the same modern full-stack architecture:

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui (Radix UI primitives) |
| **State Management** | TanStack Query (React Query) |
| **Routing** | Wouter |
| **Animations** | Framer Motion |
| **Maps** | Leaflet + React-Leaflet |
| **Backend** | Express.js + TypeScript |
| **Database ORM** | Drizzle ORM |
| **Database** | PostgreSQL via Neon (serverless) |
| **Build Tool** | Vite (frontend) + esbuild (backend) |
| **Icons** | Lucide React |
| **Charts** | Recharts |

Each project follows a **full-stack monorepo** structure:
```
project/
├── client/          ← React + TypeScript frontend (Vite)
├── server/          ← Express.js backend (TypeScript)
├── shared/          ← Shared types, schemas (Drizzle + Zod)
├── attached_assets/ ← Client content briefs and reference materials
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

---

## Main Websites

| Site | Description | Key Features |
|---|---|---|
| [Joe Lucey Garage Door & Gate](./Joe%20Lucey%20Garage%20Door%20And%20Gate%20Company/) | **Flagship business site** — primary web presence for the client | Service listings, pricing, 47-year story, contact form, full service area |
| [CrusaderDoorInfo](./CrusaderDoorInfo/) | Crusader 202SS garage door opener **product landing page** | Image gallery with zoom, tabbed specs, sticky nav, mobile-responsive |
| [GenieGarageOpener](./GenieGarageOpener/) | Genie opener **installation & repair showcase** for LA County | Product catalog, FAQ, local SEO, customer conversion flow |
| [InteractiveShowcase](./InteractiveShowcase/) | **Pricing calculator + lead generation** platform | Live pricing tool, appointment booking, product comparison |
| [BrokenGarageDoorSprings](./BrokenGarageDoorSprings/) | Springs **repair & service site** for LA & Orange County | Service pricing, emergency repair, contact form |
| [Rossmoor](./Rossmoor/) | **Hyperlocal landing page** for Rossmoor, CA | 47-year legacy section, service listing, modern shadcn/ui components |
| [ReactiveLanding](./ReactiveLanding/) | High-conversion **reactive landing page** prototype | Above-fold CTA, trust signals, minimal-friction contact flow |
| [OfficialGenie](./OfficialGenie/) | Genie authorized **dealer directory** for LA & Orange County | Dealer listings, product showcase, repair services |
| [Genie Pro Garage Door Opener Repair](./Genie%20Pro%20Garage%20Door%20Opener%20Repair/) | Genie Pro **repair services** across Southern California | Transparent pricing, service area map, contact capture |
| [New Garage Opener](./New%20Garage%20Opener/) | **Multi-brand opener installation** booking site | Genie / Chamberlain / LiftMaster comparison + appointment scheduler |
| [New Garage Doors and Gate](./New%20Garage%20Doors%20and%20Gate/) | **New installations** showcase for doors & gates | Style gallery, material comparisons, financing info |
| [Repair Broken Garage Door](./Repair%20Broken%20Garage%20Door/) | San Fernando Valley **emergency repair** site | 24/7 availability, fast response, flat-rate pricing |
| [Replace Broken Garage Door Springs](./Replace%20Broken%20Garage%20Door%20Springs/) | Springs **replacement service** — Valley area | Step-by-step process, safety-first messaging, quote request |
| [Sectional Garage Door Springs](./Sectional%20Garage%20Door%20Springs/) | **Sectional door springs** education + service | Spring types, safety guide, professional installation case |
| [New Sectional Garage Door Springs](./New%20Sectional%20Garage%20Door%20Springs/) | Updated sectional springs site with **modern UI** | Improved inquiry workflow, expanded service descriptions |
| [Stolle Garage Door Springs](./Stolle%20Garage%20Door%20Springs/) | Springs repair for **Stolle-area** customers | Service options, pricing guide, contact flow |
| [Garage Door Springs Template](./Garage%20Door%20Springs%20Template%20-%20Copy/) | **Reusable site template** for rapid deployment | Shared layouts, configurable service area sections, plug-and-play components |
| [CoachConnect](./CoachConnect/) | **FitCoach Pro** — fitness coaching platform *(separate client)* | Client management, workout builder, nutrition planning, progress tracking |

---

## City Landing Pages

16 **hyperlocal landing pages** built to capture city-specific search traffic — each tailored with local references, service area details, and optimized for "[city] + garage door" search queries.

| City | Region |
|---|---|
| [Agoura Hills](./Cities/Agoura%20Hills/) | LA County |
| [Granada Hills](./Cities/Granada%20Hills/) | San Fernando Valley |
| [Hollywood Hills](./Cities/Hollywood%20Hills/) | Los Angeles |
| [La Cañada](./Cities/La%20Ca%C3%B1ada/) | Foothills Area |
| [Lake View Terrace](./Cities/Lake%20View%20Terrace/) | San Fernando Valley |
| [North Hills](./Cities/North%20Hills/) | San Fernando Valley |
| [North Hollywood](./Cities/North%20Hollywood/) | Los Angeles |
| [Palos Verdes](./Cities/Palos%20Verdes/) | South Bay |
| [Pasadena](./Cities/Pasadena/) | San Gabriel Valley |
| [Rossmoor](./Cities/Rossmoor/) | Orange County |
| [San Pedro](./Cities/San%20Pedro/) | Port of LA |
| [Seal Beach](./Cities/Seal%20Beach/) | Orange County |
| [Torrance](./Cities/Torrence/) | South Bay |
| [Westwood](./Cities/Westwood/) | Los Angeles |
| [Whittier](./Cities/Whittier/) | Southeast LA County |
| [Woodland Hills](./Cities/Woodland%20Hills/) | San Fernando Valley |

---

## Development Timeline

```
Jun 13  ──  CrusaderDoorInfo        First build — Crusader 202SS product page
Jun 14  ──  ReactiveLanding         First service site — Rossmoor landing
Jun 20  ──  Rossmoor + 15 cities    Scale: main site + all city pages deployed
Jun 30  ──  New Garage Opener       Multi-brand installation booking site
Jul  1  ──  GenieGarageOpener       Genie products showcase for LA County
Jul  2  ──  InteractiveShowcase     Pricing calculator + lead gen platform
Jul  5  ──  Genie Pro               SoCal repair service site
Jul  7  ──  Replace + Repair        Valley-area springs & repair sites
Jul  8  ──  6 sites in one day      Template, New Sectional, New Doors,
                                    Stolle, Sectional, Joe Lucey flagship
Jul 11  ──  OfficialGenie           Authorized dealer directory
Jul 14  ──  BrokenGarageDoorSprings Springs repair + e-commerce
Aug 12  ──  CoachConnect            New client: fitness coaching platform
```

---

## Running a Site Locally

Each site is a standalone full-stack application:

```bash
cd <site-folder>
npm install
npm run dev     # starts both frontend (Vite) and backend (Express) in dev mode
```

Open `http://localhost:5000` — the Express server serves the React frontend.

For production build:
```bash
npm run build   # builds Vite frontend + bundles Express backend
npm run start   # serves the production build
```

> **Database**: Sites use Drizzle ORM with PostgreSQL (Neon). For local dev, an in-memory storage implementation is used — no database setup needed to explore the UI.

---

## What I Learned

Working on real client websites — rather than academic projects — pushed me into challenges that textbooks don't cover:

- **Hyperlocal SEO at scale**: Structuring 16+ city pages without duplicate content penalties
- **Conversion-first design**: Every layout decision driven by getting visitors to call or fill a form
- **Rapid iteration**: Going from design to deployment in hours per site, week after week
- **Reusable architecture**: Building a shared template (Garage Door Springs Template) to stop reinventing the wheel
- **Full-stack ownership**: Owning the React frontend, Express API, database schema, and deployment config end-to-end

---

## Tech

- **Language**: TypeScript (full-stack)
- **Framework**: React 18 + Express.js
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL (Neon) via Drizzle ORM
- **Build**: Vite + esbuild
- **Platform**: Originally developed on Replit
