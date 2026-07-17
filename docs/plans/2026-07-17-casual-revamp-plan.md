# Casual Visual Revamp Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restyle the personal site (tan/beige + handwritten font), add a scattered polaroid photo collage of 7 personal interests, and trim the professional copy per the approved design.

**Architecture:** Single Next.js page (`app/page.tsx`) rewrite plus global theme changes (`app/globals.css`, `app/layout.tsx`). No new routes, no test framework in this repo — verification is "run `next dev`, curl/grep the rendered HTML for expected content, and visually confirm in a browser" rather than unit tests.

**Tech Stack:** Next.js 15, Tailwind CSS, shadcn/ui components (Card, Badge, Button, Tabs), next/font/google.

**Design doc:** `docs/plans/2026-07-17-casual-revamp-design.md`

---

### Task 0: Prepare photo assets

**Files:**
- Create: `public/photos/outdoors.jpg`
- Create: `public/photos/superheroes.jpg`
- Create: `public/photos/poker.jpg`
- Create: `public/photos/board-games.jpg`
- Create: `public/photos/chiefs.jpg`
- Create: `public/photos/drumming.jpg`
- Create: `public/photos/soccer.jpg`

**Step 1: Convert and resize the source HEIC/JPG files to web-friendly JPGs**

Source files live in `/Users/rahulchavali/Downloads/photos`. Mapping (confirmed by viewing each photo):
- `IMG_1873.HEIC` → outdoors (river hike)
- `IMG_1927.jpg` → superheroes (Spider-Man face paint)
- `IMG_2306.HEIC` → poker (chip stacks)
- `IMG_2628.HEIC` → board games (Catan)
- `IMG_2870.HEIC` → KC Chiefs (group photo)
- `IMG_3277.HEIC` → drumming (on stage)
- `IMG_7584.HEIC` → soccer (World Cup stadium)

Run:
```bash
mkdir -p public/photos
SRC="/Users/rahulchavali/Downloads/photos"
sips -s format jpeg -s formatOptions 80 "$SRC/IMG_1873.HEIC" --resampleHeightWidthMax 1000 --out public/photos/outdoors.jpg
sips -s format jpeg -s formatOptions 80 "$SRC/IMG_1927.jpg"  --resampleHeightWidthMax 1000 --out public/photos/superheroes.jpg
sips -s format jpeg -s formatOptions 80 "$SRC/IMG_2306.HEIC" --resampleHeightWidthMax 1000 --out public/photos/poker.jpg
sips -s format jpeg -s formatOptions 80 "$SRC/IMG_2628.HEIC" --resampleHeightWidthMax 1000 --out public/photos/board-games.jpg
sips -s format jpeg -s formatOptions 80 "$SRC/IMG_2870.HEIC" --resampleHeightWidthMax 1000 --out public/photos/chiefs.jpg
sips -s format jpeg -s formatOptions 80 "$SRC/IMG_3277.HEIC" --resampleHeightWidthMax 1000 --out public/photos/drumming.jpg
sips -s format jpeg -s formatOptions 80 "$SRC/IMG_7584.HEIC" --resampleHeightWidthMax 1000 --out public/photos/soccer.jpg
```

**Step 2: Verify files exist and are reasonably sized**

Run: `ls -la public/photos && file public/photos/*.jpg`
Expected: 7 files, each under ~400KB, all reported as JPEG image data.

**Step 3: Commit**

```bash
git add public/photos
git commit -m "Add optimized interest photos for About page collage"
```

---

### Task 1: Switch font to Patrick Hand and lock the theme to light/tan

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Replace the Inter font import with Patrick Hand, and force light theme (no system/dark toggle since there's no theme-switch UI on this site)**

```tsx
import type React from "react"
import type { Metadata } from "next"
import { Patrick_Hand } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Rahul Chavali",
  description: "Personal portfolio website showcasing projects and experience",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={patrickHand.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Step 2: Verify it compiles**

Run: `npm run dev` (in background), then `curl -s http://localhost:3000 | grep -o 'font-family[^;]*' | head -5`
Expected: dev server starts without errors (check with `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` → `200`).

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "Switch site font to Patrick Hand and lock theme to light"
```

---

### Task 2: Retheme globals.css to tan/beige + black

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace the `:root` and `.dark` color tokens with a single warm tan/beige palette**

Since the theme is now locked to light (Task 1), the `.dark` block is dead code — remove it and just set `:root` to the tan palette so every shadcn component (Card, Badge, Button, Tabs) picks it up automatically without touching each component file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 39 46% 90%;
    --foreground: 0 0% 8%;
    --card: 39 40% 95%;
    --card-foreground: 0 0% 8%;
    --popover: 39 40% 95%;
    --popover-foreground: 0 0% 8%;
    --primary: 0 0% 8%;
    --primary-foreground: 39 46% 95%;
    --secondary: 35 35% 85%;
    --secondary-foreground: 0 0% 8%;
    --muted: 35 35% 85%;
    --muted-foreground: 0 0% 30%;
    --accent: 0 68% 45%;
    --accent-foreground: 39 46% 95%;
    --destructive: 0 70% 45%;
    --destructive-foreground: 39 46% 95%;
    --border: 30 25% 75%;
    --input: 30 25% 75%;
    --ring: 0 0% 8%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**Step 2: Verify visually**

With `npm run dev` running, open `http://localhost:3000` in a browser and confirm the page background reads as tan/beige, not the old dark gradient (page.tsx still has hardcoded `bg-gradient-to-b from-gray-950 to-gray-900` at this point, which will visually override — that's fixed in Task 3, so for this step just confirm no CSS errors: `curl -s http://localhost:3000 | grep -c "Cannot read\|Error:"` → `0`).

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "Retheme site to warm tan/beige palette"
```

---

### Task 3: Rewrite the header section (profile, name, tagline, socials)

**Files:**
- Modify: `app/page.tsx:8-58`

**Step 1: Replace the `<main>` wrapper and header block**

Remove the dark gradient wrapper, drop the gray-700/gray-300 hardcoded classes in favor of theme tokens, and update the tagline/badges to be less corporate.

```tsx
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-foreground rotate-[-2deg]">
            <Image
              src="/profile.JPG?height=400&width=400"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl mb-2">Hi there, I'm Rahul 👋</h1>
            <p className="text-2xl mb-4">I love building things, trying new things, and a good game of poker.</p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
              <Badge variant="outline" className="px-3 py-1 text-base border-foreground">
                Builder
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-base border-foreground">
                Product Person
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-base border-foreground">
                Drummer
              </Badge>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/rschavali02" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/rahul-chavali/" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:rahul.chavali1@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
```

Note: this task only touches through the end of the header `<div>` (line 58 in the original file, closing the header section right before `{/* Main Content */}`). Leave the rest of the file (Tabs and everything after) untouched for now — later tasks replace those blocks.

**Step 2: Verify**

Run: `curl -s http://localhost:3000 | grep -o "I love building things[^<]*"`
Expected: prints the new tagline text.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Restyle header section with tan theme and looser tagline"
```

---

### Task 4: Rewrite the About tab — bio, polaroid photo collage, new-things callout, education

**Files:**
- Modify: `app/page.tsx` (the `<TabsContent value="about">` block)

**Step 1: Build a small in-file `Polaroid` helper component and the About tab content**

Add this component above `export default function Home()`:

```tsx
function Polaroid({
  src,
  alt,
  caption,
  rotate,
  className,
}: {
  src: string
  alt: string
  caption: string
  rotate: number
  className?: string
}) {
  return (
    <div
      className={`bg-card border border-border shadow-md p-3 pb-6 w-40 sm:w-48 ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative w-full h-32 sm:h-40 overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <p className="text-center text-lg mt-2">{caption}</p>
    </div>
  )
}
```

Replace the `<TabsContent value="about">` block with:

```tsx
<TabsContent value="about" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle className="text-3xl">About Me</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <p className="text-lg">
        I'm a builder who loves working on products people actually enjoy using — currently doing that
        with voice AI and agents. Outside of building, I'm usually chasing a new hobby, watching the
        Chiefs, or arguing about whether I had the right poker read.
      </p>

      <div className="flex flex-wrap justify-center gap-4 py-4">
        <Polaroid src="/photos/outdoors.jpg" alt="Hiking outdoors" caption="Outdoors" rotate={-6} className="mt-4" />
        <Polaroid src="/photos/superheroes.jpg" alt="Superhero face paint" caption="Superheroes" rotate={4} />
        <Polaroid src="/photos/poker.jpg" alt="Poker chips" caption="Poker" rotate={-3} className="mt-6" />
        <Polaroid src="/photos/board-games.jpg" alt="Playing Catan" caption="Board Games" rotate={5} />
        <Polaroid src="/photos/chiefs.jpg" alt="KC Chiefs fans" caption="KC Chiefs" rotate={-4} className="mt-4" />
        <Polaroid src="/photos/drumming.jpg" alt="Drumming on stage" caption="Drumming" rotate={3} />
        <Polaroid src="/photos/soccer.jpg" alt="Soccer stadium" caption="Soccer" rotate={-5} className="mt-6" />
      </div>

      <div>
        <h3 className="text-2xl mb-2">I love trying new things!</h3>
        <p className="mb-2">Here are some recent attempts at getting out of my comfort zone:</p>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Learning to surf</li>
          <li>Went to the driving range (once)</li>
          <li>Joined a morning workout group</li>
          <li>Volunteered for trash pickup in the Mission district</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl mb-2">Education</h3>
        <p className="text-lg">
          Graduated with a B.S. in Math &amp; Computer Science from Washington University in St. Louis —
          now finishing up a Master's there too.
        </p>
      </div>
    </CardContent>
  </Card>
</TabsContent>
```

**Step 2: Verify**

Run: `curl -s http://localhost:3000 | grep -o "getting out of my comfort zone"`
Expected: match found. Then open the browser and confirm the 7 polaroids render, are rotated/scattered, and show captions.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Rebuild About tab with polaroid photo collage and new-things list"
```

---

### Task 5: Rewrite the Experience tab (trimmed)

**Files:**
- Modify: `app/page.tsx` (the `<TabsContent value="experience">` block)

**Step 1: Replace with a short, high-level version**

```tsx
<TabsContent value="experience" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle className="text-3xl">Experience</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6 text-lg">
      <div className="flex gap-3">
        <span className="text-2xl">▹</span>
        <div>
          <p className="font-bold">Associate Product Manager Intern, Agentic Commerce — Salesforce</p>
          <p>Building agentic shopping experiences on the Agentforce Commerce team.</p>
        </div>
      </div>
      <div className="flex gap-3">
        <span className="text-2xl">▹</span>
        <div>
          <p className="font-bold">Voice AI Engineering &amp; Product Associate — Deepgram (YC16)</p>
          <p>
            About a year across the company: built new Voice AI + Agent tech on Deepgram Labs, and worked
            under the Chief Strategy Officer touching Applied Engineering, Product, GTM, Dev Experience,
            Strategy, and Sales Engineering along the way.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <span className="text-2xl">▹</span>
        <div>
          <p className="font-bold">Math &amp; Computer Science — Washington University in St. Louis</p>
          <p>Graduated undergrad, now finishing a Master's.</p>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>
```

**Step 2: Verify**

Run: `curl -s http://localhost:3000 | grep -o "Voice AI Engineering &amp; Product Associate"`
Expected: match found (confirms the corrected, non-intern title is live).

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Trim Experience tab to a high-level summary"
```

---

### Task 6: Add EVA to the Projects tab

**Files:**
- Modify: `app/page.tsx` (inside the `<TabsContent value="projects">` grid, add one more `<Card>`)

**Step 1: Add a new project card for EVA, matching the existing GitHub-card format**

Insert as the first card in the projects grid (most recent project first):

```tsx
<Card>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>EVA (EMT Virtual Assistant)</CardTitle>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://github.com/koji0701/devfest-2026" target="_blank">
          <ExternalLink className="h-4 w-4" />
        </Link>
      </Button>
    </div>
    <CardDescription>XR / Voice AI</CardDescription>
  </CardHeader>
  <CardContent>
    <p>
      An XR voice assistant for EMTs that automates ePCR hospital forms — records patient interactions,
      diarizes and cleans audio, generates report content, and fills out the form via browser agents
      before the ambulance even arrives.
    </p>
  </CardContent>
  <CardFooter>
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">XR</Badge>
      <Badge variant="secondary">11Labs</Badge>
      <Badge variant="secondary">Gemini</Badge>
      <Badge variant="secondary">Browser Use</Badge>
      <Badge variant="secondary">Google DevFest Hackathon Winner</Badge>
    </div>
  </CardFooter>
</Card>
```

Also do a global replace within this tab's existing cards: every `className="bg-gray-800 border-gray-700"` on a `<Card>` becomes no className override at all (Card already defaults to the themed `bg-card`/`border-border` tokens from Task 2) — just remove the hardcoded className prop from each `<Card className="bg-gray-800 border-gray-700">` in the Projects tab so they pick up the tan theme.

**Step 2: Verify**

Run: `curl -s http://localhost:3000 | grep -o "EVA (EMT Virtual Assistant)"` → match found.
Run: `curl -s http://localhost:3000 | grep -c "bg-gray-800"` → `0` (confirms no leftover dark hardcoded cards in Projects tab).

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Add EVA project card and remove hardcoded dark styling from Projects tab"
```

---

### Task 7: Restyle the Contact tab and footer, remove remaining hardcoded dark classes

**Files:**
- Modify: `app/page.tsx` (the `<TabsContent value="contact">` block and the `<footer>`)

**Step 1: Replace hardcoded gray-* classes with theme tokens**

In the Contact tab: remove `className="bg-gray-800 border-gray-700"` from its `<Card>`, change `text-gray-400` → remove (defaults to `text-muted-foreground` already used contextually) or replace with `text-muted-foreground`, and `text-blue-400` → `text-accent underline`.

Footer:
```tsx
<footer className="text-center text-muted-foreground mt-12">
  <p>© {new Date().getFullYear()} Rahul Chavali. All rights reserved.</p>
  <p className="text-sm mt-1">Built with Next.js and Tailwind CSS</p>
</footer>
```

**Step 2: Verify no hardcoded dark classes remain anywhere in the file**

Run: `grep -n "gray-[0-9]\|blue-400\|green-400" app/page.tsx`
Expected: no output (empty).

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Restyle Contact tab and footer, remove all leftover dark-theme classes"
```

---

### Task 8: Final visual QA pass

**Step 1: Confirm the dev server is running and do a full-page check**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` → expect `200`.

Use claude-in-chrome (or manually) to open `http://localhost:3000`, and check:
- Background is tan/beige, text is black, font is the handwritten Patrick Hand everywhere (not just headings).
- All 4 tabs (About, Experience, Projects, Contact) switch correctly.
- The 7 polaroids render with real photos (not broken images) and readable captions.
- EVA project card appears in Projects and its GitHub link opens correctly.
- Header GitHub icon and Contact tab both link to `github.com/rschavali02`.
- Check mobile width (~375px) — polaroids and header don't overflow horizontally.

**Step 2: Fix any visual issues found, then commit**

```bash
git add -A
git commit -m "Final visual QA fixes for casual revamp"
```
(Only if changes were needed — skip if QA passed clean.)

---

### Task 9: Stop the dev server

Run: kill the background `npm run dev` process started in Task 1.
