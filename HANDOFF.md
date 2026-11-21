# Start here — Trinh Trinh Nguyen portfolio

This folder is the whole project. Nothing outside it is needed (Google Fonts load online).

**Read `CLAUDE.md` next.** It is the real documentation: every page and section, every number
measured off the reference, and every decision the owner has made, including the ones they turned
down. This file is only the quick orientation.

Last updated 21 Nov 2026.

## Run it

Serve the folder; do not open `index.html` from disk. The vines and the loading screen read image
pixels off a canvas, which browsers block on `file://` pages.

```
python3 serve.py 8001
```

Then open http://localhost:8001. `serve.py` is `http.server` plus `Cache-Control: no-cache`, so a
replaced picture shows at once instead of being cached for hours.

In the Claude Code desktop app the `portfolio` config in `.claude/launch.json` will **not** start,
because the preview runner is refused access to anything under `~/Documents`. Run the command above
yourself and attach with the `portfolio-attach` config. CLAUDE.md explains this in full.

## The files

| | |
|---|---|
| `index.html` | Home: loading screen, disc screen, hero, selected work, the process, My Craft, footer |
| `work.html` | Work: the seven projects |
| `about.html` | Info (the file keeps its old name) |
| `project.html` | Every case page, `?p=1` … `?p=7` |
| `pt.js` | Shared by all four: page transitions, the nav bar, film noise, smooth scrolling, the growing flower |
| `serve.py` | The local server |

Assets: `projects/` (each case's images and recordings, the bulk of the folder), `photos/` (the
owner's own photos), `vines/`, `fonts/`, `tracks/`, and `hero.jpg`, `cover.jpg`, `about.jpg`,
`lily.png`.

Supporting: `tools/retouch/` (the hero's grade as a runnable tool), `extras/` (earlier prototypes,
not live), `notes/` (measurements of the reference at four window sizes), `backups/` (saved versions
— CLAUDE.md points at these by name, so keep them).

## The work, in order

Best first, the owner's pick: **Mâm Việt, Penlo, SpitiMou, Omical, Nomu, Bliss, TL Studio.**
Each case keeps its own number in the address, so the lead project is a matter of list order only
and `project.html?p=5` is still Mâm Việt. The order lives in three places that must agree:
`PROJECTS` in `index.html`, `PROJECTS` in `work.html`, and `ORDER` in `project.html`
(`[5, 1, 2, 3, 4, 6, 7]`). `about.html`'s "Read the next story" card shows whichever leads.

## The reference

https://www.mason-wong.com — the owner's team site, used with permission for its layout and motion,
never its text, name or images. "Same as the reference" means **measure it and match it**, in the
owner's own fonts, colours and words. Its numbers throughout this project were taken by opening it
in a browser and reading computed styles, not by eye. Two things worth knowing if you go back to it:

- A plain fetch of its pages returns a markdown conversion with no markup. Open it in a browser.
- It is a Framer site, so its load animations are a JSON blob in the page itself
  (`window.__framer__appearAnimationsContent`), and its scroll reveals are inline styles driven by
  rAF. Neither shows up in CSS or `getAnimations()`.

## Still to fill in

- Done 21 Nov 2026: the footer's **Resume** opens `Trinh_resume.pdf` (site root) in a new tab, and
  **Email** is a mailto: link, on all three pages. To update the resume, replace that file.
- Project pictures: every case has its images; what is still marked is noted per project in
  CLAUDE.md. Bliss and TL Studio show no timeline (the owner's choice; their `time` is left out).
- The work section's closing line and where "View all work" points.
- Words in `[brackets]` anywhere are placeholders for the owner.
- `about.html` still uses the older 36px-rise scroll reveal; `work.html` and `project.html` use the
  reference's plain 0.4s opacity fade.

## How the owner works

- Short messages, often with a screenshot. They ask for things by eye and will say when something
  still looks wrong even if the numbers match — believe them and look for what is different in kind,
  not in degree.
- Palette only: paper `#faf8f5`, wine `#351E28`, accent purple `#8760af`, thistle `#cdb9dd`, aqua
  sparingly. Three fonts only: Koulen, IBM Plex Mono, La Belle Aurore.
- Writing must be plain and quick to scan. Short labels, not sentences. No poetic lines, no em
  dashes, no invented numbers, and never a line split in two halves with a comma — the owner reads
  that as AI-written.
- Koulen has no Vietnamese diacritics, so display words take the plain spelling (Mâm Việt →
  "Mam Viet"). Body text is mono and keeps the proper spelling.
- Check every visual change at 1440×900, 1280×720 and 390×844, and on tablets at 820×1180 (upright) and 1024×768 (sideways). Reaching a section means clicking
  past the loading and disc screens, or using the nav.
- Keep a copy before a big change. The owner often asks to go back to an earlier look.
