# Trinh Trinh Nguyen — Portfolio

Personal portfolio site for Trinh Trinh Nguyen, a UI/UX & web designer. Built with React and Vite, featuring animated navigation, a project showcase, and an illustration gallery.

## Tech stack

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/) — UI and client-side routing
- [Vite 7](https://vite.dev/) — dev server and build tooling
- [GSAP](https://gsap.com/) + [mouse-follower](https://github.com/Cuberto/mouse-follower) — custom cursor
- [ESLint 9](https://eslint.org/) — linting

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project structure

```
public/
  illustrations/     media for the Illustration page (image + hover-preview video pairs)
  projects/           background/mockup image pairs for the Projects page
  *.png, *.svg        shared static assets (logo, profile photo, icons)

src/
  animations/         reusable Framer Motion variants
  assets/fonts/        self-hosted "ZT Formom" display typeface
  components/          shared UI: Navbar, Footer, CursorDot, ScrollToTop,
                        WaveText (per-letter hover animation), MediaHover
                        (image → video hover swap)
  data/                content for the Projects and Illustration pages,
                        kept separate from markup so it's easy to edit
  pages/               route-level views: Home, Projects, Illustration
  styles/              one CSS file per page/component
  App.jsx              route definitions
  main.jsx             app entry point
```

Routes:

| Path             | Page          |
| ---------------- | ------------- |
| `/`               | Home (About)  |
| `/projects`       | Projects      |
| `/illustration`   | Illustration  |

## Deployment

The site is a static SPA. `vercel.json` rewrites all paths to `index.html` so client-side routes resolve correctly on [Vercel](https://vercel.com/).

## Notes

- Illustration hover previews use `.mov`/`.MP4` source files. These play back reliably in Chrome/Edge/Safari on macOS and Windows; browsers without native QuickTime codec support (e.g. some Linux builds of Chrome) may not play them. Re-encoding to H.264 `.mp4` would maximize compatibility.
- `src/animations/pagemotion.js` contains ready-to-use Framer Motion fade/scale variants that aren't wired into any page yet — a starting point for future page-transition work.

## Credits

- Design: **Trinh Trinh Nguyen**
- Development: **Linn Htin Nyo**
