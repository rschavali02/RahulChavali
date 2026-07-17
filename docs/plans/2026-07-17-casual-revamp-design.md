# Personal Site Casual Revamp — Design

## Goal
Make the site feel less corporate/serious: handwritten font, warm tan background, scattered personal photos, and trimmed-down professional copy.

## Visual system
- **Font**: Patrick Hand (Google Font), applied site-wide (headings, nav, body, badges).
- **Colors**: warm tan/beige background (`#f3e9d8`-ish), black text. Remove the dark gradient theme and gray-800 card styling entirely. Sparing use of an accent (e.g. Chiefs red) for hover/links only.
- **Structure**: Keep the existing shadcn `Tabs` layout (About / Experience / Projects / Contact) — restyle, don't rebuild.

## About tab
- Loosened bio paragraph (drop "I specialize in AI/ML solutions" corporate tone).
- **Polaroid photo collage**: 7 photos, scattered/rotated, each with a handwritten caption, sourced from `/Users/rahulchavali/Downloads/photos` (converted HEIC → optimized JPG/WebP in `public/photos/`):
  - `IMG_1873` → Outdoors (river hike)
  - `IMG_1927` → Superheroes (Spider-Man face paint)
  - `IMG_2306` → Poker (chip stacks)
  - `IMG_2628` → Board games (Catan)
  - `IMG_2870` → KC Chiefs (group photo)
  - `IMG_3277` → Drumming (on stage)
  - `IMG_7584` → Soccer (World Cup stadium)
- New callout block: *"I love trying new things! Here are some recent attempts at getting out of my comfort zone:"* — learning to surf, went to the driving range (once), joined a morning workout group, volunteered for trash pickup in the Mission district.
- Education line: "Graduated with a B.S. in Math & Computer Science from WashU — now finishing up a Master's there too." No specific graduation date (kept ambiguous per request).

## Experience tab (trimmed, not resume-dense)
- **Salesforce** — Associate Product Manager Intern, Agentic Commerce.
- **Deepgram** — ~1 year across teams: built new Voice AI + Agent tech at Deepgram Labs, and worked under the Chief Strategy Officer; touched Labs, Applied Eng, Product, GTM, Dev Exp, Strategy, and Sales Eng.
- Drop the old McKelvey Fellowship / Quture / GSDC / TA bullets — this tab stays high-level per request ("do not go overly into it").

## Projects tab
- Keep existing GitHub-card format and current projects.
- Add **EVA** (EMT Virtual Assistant) — link to `https://github.com/koji0701/devfest-2026`, description from resume (XR voice assistant for EMTs, Google DevFest Hackathon winner).
- Ensure `github.com/rschavali02` stays clearly linked (header icon + Contact tab).

## Out of scope
- No new pages/routes, no CMS, no dark/light theme toggle changes beyond removing the dark styling — this is a single `page.tsx` + `globals.css` + `layout.tsx` restyle plus new photo assets.
