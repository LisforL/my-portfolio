# Trinh Trinh Nguyen — portfolio

A one-page portfolio built around a vinyl record. Plain HTML, CSS and JavaScript in a single
`index.html` (no build step, no framework). Assets live beside it.

## Run it

Serve the folder; don't open `index.html` straight from disk. The vines and the loading screen
read image pixels on a canvas, which browsers block for `file://` pages.

```
python3 serve.py 8001            # then open http://localhost:8001
```

`serve.py` is `http.server` that sends `Cache-Control: no-cache`, so a replaced picture or page shows at
once (plain `http.server` let Chrome keep old copies for hours: the owner saw an old SpitiMou cover).

## Files

- `index.html`: everything: styles, markup, and four inline scripts (main page, loading screen).
- Arriving and the nav bar (owner's rules, 21 Nov 2026), both in `pt.js`: the home page plays the loading
  screen and the disc screen only on a reload or a first visit in the tab (`window.ptSkipIntro`, from the
  navigation type, the referrer and a `ptIn` flag in sessionStorage); arriving from another page it opens
  straight on the hero (`SKIP_INTRO` in index.html), with the same page change as every page. One nav bar
  everywhere: pt.js styles `header.nav` on Work and Info with the home bar's own numbers (mono, clamp(12px,
  0.95vw, 15px), 22px down, 24px in, the list at 56vw, 50vw under 760; light grey over `.dark`, ink over
  `.paper`) and slides it up while scrolling down, back while scrolling up (over 120px, 0.55s); a case
  page's `header.bar` slides the same way, and since 21 Nov 2026 it drops in again when the page opens,
  as the reference's does (the owner asked for it back; see project.html below). The section once called
  On the home page the square stays on Home however far you scroll (it marks the page, not the section).
  The work is shown best first everywhere (21 Nov 2026, the owner's pick): **Mâm Việt**, Penlo, SpitiMou,
  Omical, Nomu, Bliss, TL Studio (index.html and work.html list them in that order; project.html's
  `ORDER` is `[5, 1, 2, 3, 4, 6, 7]` and sets each case's next project, the last wrapping to Mâm Việt;
  about.html's "Read the next story" card shows the leader too, so it moves with this list). Each case
  keeps its own number in the address (`project.html?p=5` is still Mâm Việt), so the lead project is a
  matter of list order only. Backups: `backups/*.before-mamviet-first.html`.
  About is now **Info** in every nav (about.html keeps its file name). Backups: `backups/*.before-shared-nav.*`.
- `pt.js`: the change between pages, in the `<head>` of every page. Read off the reference's own code
  (mason-wong.com/work, 20 Nov 2026): a Framer site whose one global page transition runs through the
  browser's View Transitions API on every link, case pages included. Ours is the cross-document form
  (`@view-transition`): the old page drifts up 50px, shrinks to 0.99 and fades to 0.2 (1 s,
  `cubic-bezier(.58,.01,.31,.99)`) while the new page slides up over it from the foot of the screen
  (1 s, `cubic-bezier(.73,.01,.37,.99)`). Behind the fading page the reference shows its black; ours
  the wine. The case page's own rise (`pt-rise`, from 0.8 s) starts as the slide lands. Browsers
  without cross-document view transitions (Firefox) keep the earlier panel (the next page's ground
  rises, then lifts). Reduced motion: no transition. Backup of the panel-only version:
  `backups/pt.before-view-transition.js`. Testing note: a phone-sized emulated viewport can skip it
  ("Viewport size changed", the emulator resizes between pages); a real phone doesn't.
- Smooth wheel scrolling (`pt.js`, first block): on work.html, about.html and project.html the wheel
  eases the page as the reference's Lenis does (measured 20 Nov 2026: half the distance left every 100ms,
  settled by about 0.8s; ours matches it frame for frame). Touch, keys and the scrollbar stay native;
  `html` gets `scroll-behavior: auto` while it runs; boxes that scroll themselves keep their wheel. The
  home page has its own glide and is left out. `window.ptScrollTo(y)` glides to a place.
- `project.html`: a project's own page, built on the reference's case page and measured off
  mason-wong.com/work/airbp at 1720×986 on 19 Nov 2026, at the owner's asking: its type and its
  rhythm are now the reference's own numbers rather than vw approximations.
  <b>Type</b> (fixed px, with the reference's second breakpoint at <b>1441</b>: measured, 1440 still
  sets 47px and 1450 already sets 57): the project's name
  167/150.3 (127 under 1500), a headline 57/51.3 (47), the facts and a section's sub-head 37/33.3
  (31), labels 14/19.6, body 14/19.6, and every display word tracked `-1.5px` (`--name`, `--disp`,
  `--sub`, `--lab`, `--body`, `--track`). Koulen for the display words, mono for the labels and the
  body, as before.
  <b>Rhythm</b>: 40px between every block, nothing else. A picture is one screen tall (`100vh`:
  cover, `full`, `over`, the picture in a `pair`), a text section is `85vh` with its words centred
  (`min-height`, so a long section grows instead of spilling). The name sits 157 from the top, the
  facts 110 under it (`padding-top: 417px`, 381 under 1500), the label 8px over its value, and the
  cover 34px under the facts. Inside a text block: label, 16px, headline, 30px, body; a headline is
  <b>40%</b> of the padded content width and the body <b>35%</b> — the reference's own proportions,
  checked at 1440 (557/487), 1450 (561/491), 1510 (585/512) and 1720 (669/585). They are percentages,
  not pixels: the type steps at the breakpoint, the columns flow. The body is the one number set against the reference on
  purpose: it uses 12px, but its text blocks are a sentence or two while these carry whole sections,
  so the owner settled on <b>14/19.6</b> (19 Nov 2026, after seeing both sizes side by side — do not
  shrink it back). 585px then holds 70 characters a line instead of 81, and a `pair`'s centred column
  is 480px rather than 417. The other deliberate differences: the mono is the owner's IBM Plex Mono,
  not Roboto Mono, and the ink is the site's wine, not near-black. A section's sub-head takes 48px of air
  above it. No call to action anywhere — the reference's case pages have none.
  In order: a pinned bar ("Collection of work", "Close project"); the name big in Koulen; the four
  facts, reading Deliverables, Industry, Role, Services, each as wide as its own words with the same
  air between all four (`display: flex; justify-content: space-between`, the last right-aligned);
  the cover; then the project's own parts; then the next project, the page's last screen,
  as the reference's (mason-wong.com/work/thenorwegiancapsule, measured 20 Nov 2026): "Next project" in
  Koulen 24 accent 150px down, the name at the title's size 46px under it, a 349x198 picture 49px under
  the name (pointing at it: it eases to 0.98 and 0.6 while a 262x139 copy slides down into a window
  inside it), and the foot line 38px off the bottom: Collection of work, a centred ↑ to the top,
  Copyright 2026. Words rise out of a soft blur and pictures open
  upwards as they scroll in (`[data-rv]`). One page for every project: `project.html?p=1`…`7`.
  Each project in `PROJECTS` lists its parts in order in `blocks`, following the sections the
  owner's own case copy has: [Overview], [The challenges], then [The discovery] and [Key design
  decisions] on the two research-led cases, or [The brand] on the brand-led ones, and [Visual
  design] last ([Design direction] and [Content & structure] on TL Studio). The kinds:
  `half` text in the right half (the overview, always first) · `over` text over a dark picture
  (73.6vw, or 68.75vw with `tall`) · `mid` centred text on paper · `left` a narrow column at the
  left · `pair` a picture in one half with notes in the other (`flip` puts the notes at the left) ·
  `full` a picture on its own, which takes a `lab` (and `head`) to carry a section's label above it,
  for a run of screens · `set` small parts in columns (`cols: 2, 3, 4`; each part takes `n` a mono
  kicker in purple, `t` a Koulen name, `q`/`by` a quote with who said it, and `lines`) ·
  `tbl` a table (`cols`, `rows`, `note`) · `sw` a palette (`hex`, `t`, `lines`). `set`, `tbl` and
  `sw` are there for a case that needs them; none of the seven uses one, because the owner's copy
  is a document and is pasted as one: a `lines` entry is a paragraph, or `{ sub: "…" }` a Koulen
  sub-head inside the section, or `{ ul: […] }` a bullet list — so a section's text keeps the
  owner's own sub-heads, bullets and order instead of being split into columns. Every block takes `lab` (optional:
  a set of bullets that continues the block above it carries none), `head`, `lines` and an optional
  `btn: { label, href, ink }` — `ink` is the dark button for paper ground, plain is the paper button
  for a dark one. A headline over 85 characters takes `.head.sm` (2.2vw) on its own, since the
  owner's overview headlines run to 100–140 characters. `p` says which of `pics` a block shows;
  pictures show a palette colour until a path is set (`cover`, `pics: [...]`).
  A `pics` path ending in `.mp4` is a screen recording: it plays muted on a loop only while on screen
  (paused for reduced motion), and a `full` one keeps its own shape (`.full.vid`, 1920/1104) instead of
  one screen tall, so no edge of the recorded site is cut. Nomu (20 Nov 2026), in `projects/nomu/`, from `Project Visual/Nomu/Image final` by number: 01 cover
  (and its card), 03 under [The challenges], 04 beside [The brand], 05 under [Visual design], then 06,
  07 (a recording, `video-07.mp4`, 1920 wide), 08, 09, 10 as `fig` blocks; no 02, so a placeholder
  under the overview. Omical (20 Nov 2026), in `projects/omical/`: the home page's sections (`home-hero`, `-welcome`,
  `-rooms`, `-services`, `-experience`, `-offers`, `-gallery`, `-footer`) cut pixel for pixel from the
  owner's full home page (`Project Visual/Omical/Homepage.png`, 3840×19008) at 2880 wide; the arch mark
  (`logo.jpg`) and a 2x capture of the palette and type (`brand-style.jpg`) from trinhtrinhnguyen.com/
  projects/omical; the room page, the booking flow (`screen-08…13`) and four recordings from tlstudio.site
  /#case/omical-hotel. Those recordings are 1600px web copies at about 1 Mbit/s, so they sit two by two
  in `row` blocks (two pictures side by side across the margins, 40px apart; one column on phones).
  Trimmed at the owner's asking (20 Nov 2026): nothing under the overview, only the logo in [The brand],
  no guest form (screen-12), its four recordings full width between the margins (a `reel`, 40px apart;
  the owner's choice, though they are 1600px web copies), no home page section on its own in [Visual design] (the recordings show them; the cut files stay in the
  folder, unused); [The challenges] stands on the owner's dark lobby picture (`challenges.jpg`). SpitiMou (20 Nov 2026) takes its pictures from the owner's own case page (trinhtrinhnguyen.com/
  projects/spitimou) in `projects/spitimou/`: its hero as the cover (and its card), then 2x captures as
  `fig` blocks: the product map under [Overview], the three users under [The challenges], the comparison
  table under [The discovery], the six wireframes and the two trade-offs under [Key design decisions].
  Its `live` button goes to spitimou.cy. It is the one case with an **[Outcome]** section (the owner's
  asking, 21 Nov 2026, after a reference they sent): an opening line, a list of what the project
  shipped with, then one closing line. The reference showed that content split left and right, with a
  big word at the left; this page keeps its own layout instead, a `half` block like every other section
  here, so it stays centred with the rest and does not break the owner's rule that only [Overview] sits
  in the right half. Every number in it is already stated in the sections above. Backup:
  `backups/project.before-outcome-mamviet.html`. Bliss (20 Nov 2026) has the owner's visuals in `projects/bliss/`: `image-01.jpg` the cover (and its
  card on the home and work pages), `image-03.jpg` the food pattern under [The challenges], `image-04.jpg`
  the brand board beside [The brand], `visual-01…05.mp4` (full 2990×1726) as a `reel` for [Visual design],
  and `footer.jpg` last; the picture under its overview was taken out. TL Studio (20 Nov 2026) has the owner's own
  visuals in `projects/tl-studio/`: `image-01.jpg` the cover (also its card on the home and work pages),
  `image-03.jpg` under [Design direction], `image-04.png` beside [Content & structure], and
  `visual-01.mp4`…`05` for [Visual design] (Hero, Sections 01–04, re-encoded to 1080p H.264 from the
  owner's .mov files in `Project Visual/TL Studio`, outside this folder). The picture under its
  overview was taken out.
  `stage` (`bg`, `ps`, `caps`): a project's recordings shown smaller, as browser windows on its own
  backdrop, the first large and centred, the next two a staggered pair, the fourth centred, each with a
  numbered caption; one column on phones. Mâm Việt uses it for its four recordings on `stage-bg.jpg`
  (the owner's Image 05.2, the seam-free BG, 2160 wide), at the start of [Visual design]; since 21 Nov
  2026 [Visual design] holds only that showcase and the owner's Image 06 (a collage of the site's pages,
  `image-06.jpg`, 2880 wide) at its end; the TL Studio stills were taken off the page.
  A `pics` entry may also be `{ src, fit: "contain", bg }`: a capture with words in it, shown whole with
  air round it on its own edge colour (`.pic.fit`; on phones it takes the picture's own height). `reel`
  is a run of recordings (`ps: [...]`), each the full width between the page's margins and 15vh apart, one playing at a time; TL Studio's
  [Visual design] uses it (videos re-encoded at full 2994×1724, 35 MB in all). A project's `live:
  { label, href }` puts a dark button under its name (TL Studio → tlstudio.site, the owner's asking:
  the one call to action on a case page). Penlo (20 Nov 2026) takes its pictures from the owner's own
  case page (trinhtrinhnguyen.com/projects/penlo) in `projects/penlo/`: its hero as the cover, the old
  version, and 2x captures of its "where the trust breaks" curve (the owner's choice over the findings cards), Ghost Mode, the marker card's three rounds and the
  key screens; under its overview, Image 02 (`image-02.jpg`, made 21 Nov 2026): five finished screens in
  phone frames fanned on Penlo's dark gradient, built in HTML from the owner's screens and captured at 2x.
  Text on a case page (owner's rule, 20 Nov 2026): only [Overview] sits left-aligned in the right half;
  every other text section is centred, as the reference's (mason-wong.com/work/england-rfu), in one 40%
  column, with the reference's white space: each has a screen of its own (`min-height: 100vh`), its words
  in the middle, at least 160px of air above and below, so the reader sees that text only. Do not
  restructure the owner's sections to get there: the point is the white space, not a new layout.
  (A version that put every section left in the right half was turned down.) Penlo's Ghost Mode and
  map-first parts are `pair` blocks, its captures `fig` blocks at their own height between the margins.
  Pictures sit 40px apart; TL Studio's recordings too.
Backup: `backups/project.before-penlo-layout.html`.
  The page's opening (21 Nov 2026, the owner's asking that it match the reference): these are the
  reference's own numbers, not an approximation. A Framer site ships its load animations as JSON in the
  page itself (`window.__framer__appearAnimationsContent`), and reading it off
  mason-wong.com/work/global-esports gives, for the title, the facts, the cover and the element beside
  the title: `initial { y: 700 }`, `animate { y: 0 }`, `transition { duration: 1, ease: [.03, 1.01,
  .59, .98] }` — which is what `.pt-rise` already did. Only the **delays** were out: they had been
  counted as `0.8 + 0.1` per element, so the facts landed at 1.0s and the cover at 1.1s, and a case
  without a `live` button shifted them again. The reference holds the title at **0.8s**, the two
  elements beside it at **0.9s** and the cover at **1.0s**, so `RISE` now lists each selector with its
  own delay instead of counting, and adding an element cannot shift the others. Verified on a case with
  a live button and one without: both read 0.8 / 0.9 / 0.9 / 1.0 at 1s on that ease.
  **The bar drops in too** (the owner asked for it back on 21 Nov 2026, having had it off earlier the
  same day), on the reference's own numbers (appear id 1kjfo8m): from `y: -70` and `opacity: 0.001`,
  **0.7s delay, 0.8s, ease [.44, 0, .56, 1]**. It is a CSS **animation** (`pt-bar-in`), not a
  transition, and that matters: pt.js owns `transition` on `header.bar` for the scroll slide and would
  overwrite a transition set here. It also slides with the `translate` property while the opening uses
  `transform`, so the two compose instead of fighting — checked: after the opening settles, scrolling
  down still gives `translate: 0 -150px` and scrolling up still brings the bar back to top 20. It runs
  off `.pt-up`, the same clock as the rise, so all the delays share one moment. Reduced motion has the
  bar simply there (`animation: none`), as the rise does.
  **The rise is masked** (21 Nov 2026, the last thing that still looked unlike the reference). The
  numbers had been right for a while and it still read differently, because on the reference nothing
  is ever seen travelling: its title sits in a 110px `overflow: hidden` box barely taller than the
  103px text, and its facts and cover are inside the hero's own hidden box, so each one wipes up into
  its place. Ours moved the elements themselves with nothing clipping them, so the title flew up
  across the page. Now a `.pt-clip` box holds still and clips while `.pt-rise` goes on what is inside
  it: the heading's text (wrapped in a `.pt-in-wrap` span, since an h1 has no element child of its
  own), the facts' four columns, and the cover's figure. The cover's section already clipped, so only
  its figure needed moving. Layout is untouched by this — the title is still 157 from the top at 114
  tall, the facts 436, the cover 859, and the page the same height.
  One consequence worth keeping in mind: because the content is clipped now, a case page where
  `pt-up` never arrived would be **blank**, not merely low. A view transition that gets skipped can
  leave its `ready` promise unsettled, so there is a `setTimeout(up, 400)` backstop beside the
  `vt.ready` trigger. Do not remove it. Backups: `backups/project.before-open-delays.html`,
  `backups/project.before-bar-dropin.html`, `backups/project.before-masked-rise.html`.
  (A note for testing: a finished transform transition computes to `matrix(1, 0, 0, 1, 0, 0)`, not
  `none`, so a check for the string "none" reports a settled rise as unfinished.)
  Closing a project ("Close project" or "Collection of work", which set `workBack`) opens the work
  page where it was left: work.html keeps its scroll on `pagehide` (`workY`) and jumps back there
  (instantly; the page's smooth scrolling would glide) with the row in its place.
  The words are the owner's own case copy, supplied 19 Nov 2026 and kept close to verbatim; the
  house voice for it is the `portfolio-overview-copy` skill (all-caps plain headline of 18–25 words,
  then flat practical paragraphs, no em dashes, no invented numbers). The seven: 1 Penlo (iOS app
  redesign, App Store link), 2 SpitiMou (real estate marketplace, Cyprus, live at spitimou.cy),
  3 Omical (a resort on Phú Quốc, Figma prototype), 4 Nomu (food-delivery concept with its own
  mascot), 5 Mâm Việt (brand, system and 16 pages, Figma prototype), 6 Bliss (restaurant website),
  7 TL Studio (a digital agency's own site). Koulen has no Vietnamese diacritics, so a name that
  needs them carries `big` as well (Mâm Việt → "Mam Viet"), used only for the big display words.
  **That applies to every Koulen word, not just the name field** (the owner's asking, 21 Nov 2026):
  a `head`, `sub` or any other display string takes the plain spelling too, or the diacritics fall
  back to another face in the middle of the line and the headline reads in two fonts. Mâm Việt's
  [The challenges] headline was the one that still had them. Body text (`lines`) is IBM Plex Mono,
  which has the diacritics, so it keeps the proper spelling: do not strip them there. Checked by
  walking the rendered pages for the name and reading each element's computed font; the only other
  places it appears in Koulen are the case title and the "Next project" name, which already take
  `big`. index.html's remaining one sits in `#workList`, which is `display: none`.
- `about.html`: the about page, built on the reference's info page (mason-wong.com/info, the
  owner's team site, used with permission). It follows the reference's four layouts and their
  breakpoints, measured on the live page (its assets come from framerusercontent.com, now allowed):
  large ≥1500 (the owner's window is about 1560×817), desktop 1200–1499, tablet 810–1199, phone
  <810, each in the reference's own pixels (base CSS is large; each smaller layout overrides it).
  The same kind of content written for the owner (plain words, unknown facts in [brackets]); its
  Selected Clients, Prequel and "built bold / made human" sections left out at the owner's asking.
  In order: the hero on wine over `hero.jpg` (first screen: INFO on the bottom edge of the screen,
  the flower in the middle of the gap between IN and FO; then "A product designer / for digital products", "born in [your
  city] / now based in hcmc" and "2k26 · Folio of Trinh" with two paragraphs, anchored from the
  right as the reference's; the feet [Nice to meet you] typing in, [Scroll down], [Rất vui được gặp
  bạn]); on paper a count to [06], two lines, the big centred statement, two beliefs (centred, a
  hairline under each title); a divider with "[ beliefs ]" upright; Expertise and Skills (the
  heading holds still at the left while a 90vh picture and six rows go by at the right; hovering a
  related project shows its thumbnail where "Related work" was); on wine over a dark blurred photo
  "always designing / with intention" round the flower and three centred goals ([03] a little
  lower); on bright paper (the owner's asking) "Read the next story", its card (70% of the screen
  high but capped so title, count and card fit one screen), a line and View all work (its words
  roll on hover); the home page's footer. Pictures: the owner's photos in `photos/` (see above). Koulen, mono, La Belle Aurore; film noise over all. The nav's Info opens it. Its last section shows the first of the seven, now Mâm Việt, as its cover alone (`projects/mamviet/image-01.jpg`) under "[1 out of 7 selected projects]"; the name and kind that used to lie across the middle of that picture (`.card .tags`) were taken off at the owner's asking (21 Nov 2026), so the picture carries no words and the name survives only in its alt text. The count near the top runs to 07. Change the cover and the link whenever the lead project changes. Backup: `backups/about.before-card-tags-out.html`.
- `vines/flower-dots.png`: the home footer's flower (dots and 0s and 1s), captured for about.html.
  Since 21 Nov 2026 it is only the fallback and the ruler: pt.js rebuilds the flower live on Work and
  Info (see below), and measures this capture's ink box to know what size to draw at.
- The growing flower on Work and Info (pt.js, last block, 21 Nov 2026, the owner's asking: it should
  grow as the home page's and the footer's do). Those pages used to show `flower-dots.png` as a CSS
  background, a flat picture, so it could only fade in with `[data-rv]`. pt.js now carries index.html's
  own `textify` engine, copied as it stands (with `rng` and `rowStream`), and builds the flower from
  the real drawing, `vines/vine-right.png`, turned by the same `FW_TURN` (126°) and rooted at the same
  `FW_ROOT`, exactly as `buildFtVine` does: each dot and digit knows how far along the ink it lies from
  the stem's root, so it grows out from the root over 2.6s, the front flickering as digits. It starts
  when the flower is a quarter in view (IntersectionObserver) and runs once; reduced motion simply has
  it whole. Three things to know before touching it:
  · **Size.** The live crop is tight to the ink, while the capture had padding, so `contain` would blow
    it up (the owner turned that down). `prep()` measures the capture's ink box, and the drawing is
    fitted inside the box that box occupied, so the flower keeps the size and place it always had.
  · **The canvas's CSS size.** `textify` makes its canvas in device pixels and leaves the CSS size to
    the page (index.html does it with `.fw-vine canvas { width/height: 100% }`). pt.js sets
    `style.width/height` after building, or a 2x screen draws the flower at twice the size.
  · **Keep off the home page.** index.html grows its own vines on its own frame loop and its hosts
    carry `.vine` too, so pt.js bails out when `window.__textify` is already there and skips
    `.fw-vine`, `.ab-bloom` and `.bloom`. Without that it overwrites their `data-root`.
  A host becomes `.live`, losing the background, only once its canvas is in place, so a page that
  cannot read the pixels keeps the flat picture. Backups: `backups/pt.before-live-vine.js`,
  `backups/{work,about}.before-live-vine.html`.
- `cover.jpg`: the cover photo printed on the disc.
- `lily.png`: the lily printed on the About's record, as ink for textify (from a picture the owner sent).
- `hero.jpg`: the hero's background photo (already retouched and graded; edit the image file to
  change its look, the page adds only a light blur).
- `photos/` (back to the first version, 21 Nov 2026, the owner's asking: "comeback to the first time you
  apply the image for me"): the owner's own photos, named by the owner for their places, carrying the full
  zine retouch (`tools/retouch/`, the hero's code and settings, not tone-matched to `hero.jpg`):
  **Leave the photos alone: matching Work's and Info's heroes to the home hero was tried twice on
  21 Nov 2026 and turned down both times.** The first go gave them the hero's brightness spread with
  `tools/retouch/match.py` (that output is `backups/photos-heavy/`, which already existed). The
  second added the hero's haze, halation and vignette and matched the colour channel by channel,
  and brought sharpness, local contrast, vignette and colour cast all within a few per cent of
  `hero.jpg` by measurement; the owner still said it did not look alike, so it was reverted and the
  trial images and the scripts written for it were deleted at their asking. Nothing of the second
  attempt remains. Do not try it again unless the owner raises it.
  The lesson, so it is not repeated: matching the numbers does not make two photographs read alike.
  The home hero's source is soft and hazy to begin with; the bridge and the lilies on the boards are
  sharp, and no grade changes what the picture is. The original un-retouched photos are not in this
  folder or beside it, so the hero's full pipeline (`run.py`) cannot simply be re-run on them either.
  `info-hero.jpg` (the bridge, Info's hero, 200px higher), `work-hero.jpg` (the lilies and bag on the
  boards, Work's hero, framed at 50% 45%), `footer.jpg` (the hands and lilies, every footer, 160px lower:
  `min(calc(30% + 160px), 0px)`, the min() capping it at 0 so no gap opens on a phone),
  `info-intention.jpg` (the red window, Info's "always designing / with intention", 250px higher),
  `expertise.jpg` (the baton poster; **no longer on the page** — the owner asked it out again on
  21 Nov 2026, so Info's Expertise and Skills has no picture and its list starts beside the heading. The
  file stays in `photos/` unused; `backups/about.before-expertise-pic-out.html` has the page with it).
  Every page shows them as that first version did: dim under the old wine gradients
  (the photos at 0.4, the footers at 0.55), not at full strength. The two lifts are made with
  `height: calc(100% + Npx)` and `translate: 0 -Npx` on the image, `overflow: hidden` on its box, so the
  foot still meets the bottom edge; the footer's drop is in `object-position`, which cannot leave a gap. Copies of the three
  versions tried after it, all turned down: `backups/photos-gentle/` (the blend that was live before this
  restore), `backups/photos-heavy/`, `backups/photos-light/`; the pages as they were with the gentle blend
  are `backups/index.before-photos-first.html`, `backups/work.…`, `backups/about.…`, which also hold the
  moves the owner asked for after seeing this first version (Info hero 200px up, intention 250px up, footer
  120px down, no Expertise picture) in case any of them should come back. `about.jpg` (the mosaic wall,
  My Craft on the home page) is the owner's photo as taken, not retouched, at their asking. `hero.jpg`
  stays the home hero, the About sleeve and nothing else.
- `tools/retouch/`: the hero's retouch as a tool (README there); re-run on the hero's source it gives
  `hero.jpg` back exactly.
- Film noise: the home page's own (`.noise`, `makeNoise()`) on every page, laid on by `pt.js` (the same
  256px tile, 5%, 8s steps; still for reduced motion); the pages' old SVG noise is gone.
- Work pictures: each project's own `img` in `PROJECTS`; until one is set the picture is a flat
  placeholder in a palette colour (`PH`), labelled "Image 01"…. (The live page no longer has
  `drawShot()`; the extras keep their own copies.)
- `tracks/late-bloom.mp3`, `tracks/night-bus.mp3`: the record's two songs.
- `vines/vine-left.png`, `vines/vine-right.png`: hand-drawn vines, turned into dots and 0/1
  digits at runtime (search `textify`).
- `fonts/`: PP Editorial New (free personal-use licence; a commercial site needs a paid licence),
  now unused on the live page; La Belle Aurore (`LaBelleAurore-latin*.woff2`, SIL Open Font
  Licence, from Google Fonts): the script used for every italic and the hero's big "Trinh".
- `extras/pixel-loader.html`: a saved alternative loading screen (pixel version), not in use.
- `extras/disc-screen-options.html`: static sketches of the disc screen's wording ("Let it … ?").
- `extras/work-options.html`: four working scroll sketches for the Selected work, all from the
  record world and none with a disc, to choose from: A crate digging (sleeves in a wine crate,
  flicked through as you scroll, notes beside), B turn it over (each sleeve turns to a printed
  back with the credits, ℗ year and a 0/1 barcode), C the booklet (the liner notes as a booklet
  whose pages turn), D staff picks (a record shop wall walked sideways, staff pick cards under
  the sleeves). The sleeve is the loading screen's, printed with each project. It carries its
  own copy of `PROJECTS` and `drawShot()`; the tabs switch between them (`#a`…`#d`). (An earlier
  set, not in the record world, was turned down: a folder stack, a gallery, a desk, a vine.)
- `extras/work-stack.html`: the newest prototype for the Selected work, built from a screen
  recording the user sent of a studio's cases page, then reshaped round records at the user's
  asking. A stand-in hero, the work on one screen, a stand-in About. The six covers are large
  record sleeves, a little shorter than square (`AR`), standing upright one behind the other in
  perspective and overlapping on one screen: the front one about 60% of the width, running off
  the foot, the far one about two thirds of it under the bar (`sAt()`, `yAt()`: `RATE`, a
  vanishing point high above; a slight `LEAN`). Nothing moves with the scroll.
  Point at a cover: after a moment (`settle()`) it glides over the others to the middle, large
  (`SO`, `yO`), standing straight; the covers behind it stay under a paper veil (`BEHIND`), the
  ones in front gather close below it, a little wider each, tipping towards you (`TIP`). It
  stays open while the pointer is in the stack's column and changes only over another cover.
  No record shows on hover any more (an earlier version raised one).
  Click a cover (on a phone, tap to open it, tap again) and its record is the way into the
  project (`startPlay()`, `stepPlay()`): out, the sleeve slides down and its record (plain
  matte black, `DISC` of the sleeve's width, label colour per project, `label`, with its number
  and "Side A") slides up out of it; fly, it flies to the top of the project's page as the page
  comes up round it, and what was inside the sleeve shows as the sleeve goes (the record is
  drawn in `.fx`, over everything, clipped to the sleeve's top edge until then); on, it plays
  there: spins up, a slim tonearm swings onto it, the details come in (kind and year, name,
  what it is, a line, Role / Team / Time / Result, two picture placeholders), with "Back to the
  work" and the count in a bar. Back (or Esc): the arm lifts, it slows, flies back over its
  sleeve as the page goes, and sinks in as the sleeve rises back to the middle. The page holds
  still meanwhile. The left shows the open one's kind and name, the right the count, the foot
  "Records I'd play again." and "View all work"; a round "View project" follows the pointer.
  Pictures: each project's `img`, or a solid colour (`color`). Words are the site's.
- `extras/work-sleeves.html`: mock-ups for the Selected work, to choose a
  direction from before a prototype is built. Six projects in two columns and three rows, each
  only its cover (a grey placeholder sleeve) and its name. Point at one (tap, on a phone) and
  its record slides half out of the sleeve, rolling as it comes, with a few words about the
  project printed on it; the first project shows its record until you point at one. A lift: the
  record rises out of the top, the words in lines above its label (what it is, role, time; kind
  and year on the label). B side out: on wine, it rolls out of the side and the words run round
  its grooves (SVG text on arcs: what it is over the top, onto a second arc when long, role and
  time round the foot; the number on the label). C mirror: two staggered columns meeting in the
  middle, the records coming out towards the page's edges, the words on a large label like a
  real record's (side, number, what it is, role, year). Tabs `#a`…`#c`.
- `extras/work-player.html`: a proposal for the Selected work (after a music-site
  reference the user sent, the ElevenLabs music carousel): a stand-in wine hero, then the work.
  Scrolling down, the seven grey covers rise from a small stack and land in the reference's
  shape: the record in play large in the middle, the next one and the one before at the edges,
  big and turned side-on, the rest small beside the middle. It is a ring of covers seen from
  close by, and scrolling turns it, so every cover travels round the circle: the next record
  swings in from the edge to the middle, the one in play swings out to the other edge, the far
  ones pass round the back (showing their backs; the one passing behind the middle fades).
  `ROW.wide` / `ROW.phone` hold the shape at each whole place round the ring (how far out, how
  big, how far turned; past 90° a cover shows its back), and smooth monotone curves run between
  them (`curve()`), so a turn has no corners. Made for seven covers. (Two other versions were
  turned down: the same shape where the next cover grew from small to large in place, which
  read as coming from the back to the front, and a whole 3D ring seen from above, which lost
  the reference's shape.) A record's place is counted the short way round from the one in play
  (`off()`); the buttons, the keys and clicks loop past either end (`goTo()`, `base` counts the
  whole turns, the scroll moves to the other end without a jump).
  Scrolling on turns the ring a record at a time (it rests on each); under it,
  prev / play / next, a caption ("( 04 ) [Project name]" and what it is) and the heading in two
  tones. Clicking the middle cover (or play) puts the record on: the cover flies to the top of
  the project's page, rounds off, shrinks to the label as the vinyl grooves come up round it,
  and spins up; the page has the name, what it is, kind and year, a line, the credits, two grey
  picture placeholders and "Next record". "Back to the playlist" (or Esc) slows the spin to a
  stop and puts the cover back in the row. No turntable is drawn.
- `extras/work-playlist.html`: an earlier proposal for the Selected work, built to the user's
  references (a playlist poster with seven covers round a title, and a ring of covers). Seven
  projects, grey placeholder covers. When the section comes into view the covers stand in a
  turning ring for a moment (round-cornered, lifted), then move by themselves (no scrolling) to
  the poster's places, square and flat; then the title ("Records I'd play again.", "playlist"
  in purple pixels from a small bitmap in the script, the name) and the labels come up. Each
  label is "( 01 )" and "[Project name], what it is", placed as on the poster (`POSTER`: under
  the cover, to its right, number above and name below, or both above; some covers run off the
  edges). Positions are the poster's, from the middle (`u`, `v`); `vw` nudges two on wide
  screens. A Replay button replays it (prototype only).
- `extras/work-prototype.html`: an earlier proposal for the Selected work, kept simple on
  purpose (the 3D spines below felt dated): the six records spine-on as six flat bands in the
  site's colours, number at the top and name up the spine. Click one and it opens out to most of
  the width with only a few lines (number, kind, year, name, what it is, role, "View case
  study") and its cover; the others close up into thin spines. Click again or Esc to close, the
  arrows step through, a round label follows the pointer ("Open" / "Close"). Phones: stacked
  bands that open downwards. Own copy of `drawShot()`; projects trimmed to the fields it shows.
- `extras/work-collection.html`: three directions for the Selected work as a vinyl collection,
  no disc, each record the loading screen's sleeve in one of the site's colours (`THEMES`):
  1 the spines (the favourite: a row of thin minimal spines standing on the page, no shelf, only
  each record's number on its spine; nothing to read until a spine is clicked, then that record
  slides out, turns to a minimal cover beside the row and its notes come up on the other side,
  the page washed in its colour; the cover or Esc puts it back, the arrows step through. It
  replaced an earlier "shelf" with a wine cubby, judged old-fashioned), 2 the wall (framed covers on a
  wall; the view walks up to each frame with a collector's card), 3 the flow (covers flowing past
  like a music library, notes underneath, arrow keys too). Own copy of `PROJECTS` and
  `drawShot()`; tabs `#a`…`#c`.

## Design system

- Colours: paper `#faf8f5`, wine/ink `#351E28` (also the wine panels: the hero, About), accent purple `#8760af`,
  thistle `#cdb9dd`, icy aqua `#beffea` (sparingly). Defined as CSS variables in `:root`.
- Type: three fonts only, on every page: Koulen (big words; saved as `fonts/Koulen-latin.woff2`),
  IBM Plex Mono (labels and body text, `--font-body` and `--font-code`) and La Belle Aurore (script
  words). The titles' family "TTN Title" (`--font-title`, `--font-display`) is Koulen upright and
  La Belle Aurore italic, so every `<em>` or italic in a title turns to the script. Each font has
  one weight; `font-synthesis: none` stops the browser faking bold or slant. One exception: on
  `project.html` a highlighted phrase in the body (`<b>`) is IBM Plex Mono Bold (700, loaded from
  Google Fonts), with no thistle marker under it (the owner's asking, 20 Nov 2026). Every Koulen title,
  on every page, is set the same way: weight 400, letter-spacing 0, never stretched (no scaleY),
  so all the big words look like one type. `--font-big` is defined in `:root`. Hanken Grotesk, PP
  Editorial New and Instrument Serif are no longer used on the site (the PP files stay in
  `fonts/` for the old prototypes in `extras/`).
- Spacing: one scale on every page (`index.html`, `about.html`, `work.html`), read off the reference
  (mason-wong.com, its info and work pages measured at 1720: its gaps fall into bands of 178-238,
  148-150, 106, 65-75 and 38-48). `--space-section` 200 (a section's own padding, and the gap
  between its main blocks), `--space-block` 150 (one block to the next inside a section),
  `--space-label` 115 (a label or caption to its block), `--space-row` 72 (one row of a list to the
  next), `--space-tight` 48 (round a picture, or a line to its button). Each window size sets the
  five once: 170/128/90/64/48 at 1200-1499, 150/112/90/56/40 on tablet, 96/72/64/40/32 on phones.
  `--space-dark` is `--space-section` and a half (300 at desktop): a section standing on a photo
  takes more air than one on paper, which is what the reference does (on its info page the two
  gaps either side of its photo section measure 540 and 568, against 184-238 where two paper
  sections meet). Use it on any section over a photo (about.html's goals, work.html's closing
  lines). Nothing else should hard-code a gap of this size; the heroes keep their own measured
  numbers (300 / 150 / 180), and project.html keeps the case page's own 40px rhythm.
- The hero flower (21 Nov 2026, the owner's asking): on Work and Info the big word is split in two
  halves either side of the flower (WO|RK, IN|FO). The halves are unequal, so the flower used to sit at
  the screen's centre and read off to one side (49px out on Work, 53px on Info). Above 810px wide
  `.first` is now a flex row with `justify-content: space-between`, which puts an equal gap either side
  of the flower — the middle of the gap by definition — and the flower carries half its own width as a
  negative margin on each side, so it takes no layout width, still overlaps the letters as it did, and
  the halves stay flush to the margins. Phones are untouched (the word is whole there and the flower
  floats above it). The home hero already did this: `fitInit()` sets `--init-w` from the middle of
  `.mw-gap`, the space where the i of Trinh would be. Backups: `backups/*.before-flower-centred.html`.
- Motion: eased, unhurried; always respect `prefers-reduced-motion`.
- Layout: no frame round the page. The nav (`.topbar`), after the reference site: no bar, just
  type. "Trinh" at the left as the logo, in the nav links' own mono font and size (`.wm-script` inherits them; it was the hero's script, and before that TRINH.N in bold mono); the sections (Home, Work, About, Contact) as a short
  mono list a little right of centre, a small square marking the one you are in (`stepNav()`);
  the player's record at the right, alone (a click plays and pauses; the song title and play
  button are hidden). The bar element is one line tall (the list hangs below it), so everything
  that measures under the bar is unchanged. As on the reference: the reference's light grey ink, rgb(231,229,223), over the
  hero and About, and the site's ink over the paper (`.nav-dark`, set in `stepNav()`) (light on the dark label, dark on the paper), and scrolling down
  slides the name and list up out of sight, scrolling up brings them back (`.nav-hide`); the
  record stays.

## The page, in order

1. Loading screen (search `Loading screen: the record comes out of its sleeve`; about 3 s: `MIN_LOAD` 1500, `OPEN` 1300): a wine sleeve
   with the record sliding out (smoothed 21 Nov 2026 at the owner's asking, "more smooth and natural": the
   record eases out for the whole count, rolling about 64° as it comes, with no dead stop; the count
   creeps towards 96% instead of freezing while the page still loads; the hand-off starts as the slide
   ends, the sleeve drawn away in one eased move while the record is lifted in a gentle arc (its shadow
   growing), finishing its whole turn at about a third of the old speed and settling exactly on the real
   disc; the paper then fades over 0.26 s, the needle lowers after a 140 ms beat with an ease at both ends; one disc all the way: the loader's copy carries no print and never fades, and at the landing the copy stops and only the paper fades, round a hole cut where the real disc lies; it lands on the record as drawn (`window.__rec`, 1.06 × `big.r` on the disc screen), not on `window.__disc`, which left the outer ring to fade in (21 Nov 2026, backups `backups/index.before-one-disc.html`, `backups/index.before-true-size-disc.html`),
   and the disc screen's words rise and focus without the old bounce; while music plays the record spins
   up and coasts to a stop, `playVel`; backup `backups/index.before-loader-smooth.html`); its vine grows from the stem's root (top right of the drawing,
   `data-root` 99% 7%) out to the petals as the page loads; the record shown is a live copy of the real disc canvas, so it
   lands seamlessly. The needle is held back with `window.__arm` until the record is down.
2. Disc screen (`.intro`): the record alone in the middle, completing one sentence: "Let it"
   before it, "play?" after it (on upright screens, above and below it), the answers under it,
   the songs and the scroll cue in the bottom corners. While the record plays the "?" becomes
   "." and the first answer becomes Pause. A strip at the top, in the nav bar's box: Side A,
   33⅓ RPM, Stereo and the sound's state spread evenly with the same margin at both ends (the
   name and the line under it were taken out at the owner's asking; phones: Side A and the sound). `layoutIntro()` (called from `resize()`) sizes the record from the room the
   text leaves (`big.x`, `big.y`, `big.r`), places the sentence on its axis, and measures the
   fence (`keep`) that the needle and the binary trail keep inside. On wide screens the record is 80px
   across smaller than the room allows and the needle about 80px shorter (the owner's asking), and
   while the music plays "Let it play." and the two answers fade out (`body.playing`), so the
   needle and the trail never cross words; the songs and the scroll cue stay. The loader carries the
   record from the middle of the screen to wherever it lies.
3. Hero (`.hero`): the record's other side ("Side B", after the strip's "Side A"). The first
   scroll (a 1.9 s glide, `INTO_HERO_MS`) turns the record over: the needle lifts, the record
   rises with a shadow and turns about its upright axis in perspective (`drawFlipFace()`, drawn
   in thin strips); its back is wine with fine grooves, a label ring and SIDE B (`backFace()`),
   and it then grows to fill the screen (`stepSideB()` sets it from the move's progress, so
   scrolling back plays it backwards). The hero shows only inside it. It is
   laid out after a reference site the user's company asked for: mason-wong.com's hero;
   their layout and motion, the user's own words, fonts and colours. The hero runs 2.75
   screens (`--hero-h` on `.works`; 2.35 on phones). Screen one: "Trinh" in La Belle Aurore, huge along the foot of the screen from
   the left (`.mw-init`, white in true soft light, as the owner's Figma: the hero lives in the fixed `#works` layer, which a blend can't reach through, so a copy (`.mw-sl`, added by the last script) sits on the photo canvas's layer with `mix-blend-mode: soft-light` and is kept on `.mw-init` every frame; `.mw-init` itself is transparent (`.sl-src`); the letters
   come up one by one, out of a 10px blur and 50px low, 60ms apart, once the label is open:
   `decodeSlogan()` adds `.is-in`; then they scroll away with the page); `fitInit()` sizes it to
   about two thirds of the width (nearly all of it on a phone), capped by the screen's height
   (at 1440 wide: 473px type). It replaced the earlier TRINH.N in Hanken capitals (backup outside the folder). Round it, after a zine
   layout the owner sent: one note in small light lowercase mono (clamp(12px, 0.78vw + 2px, 15px); the same style
   sets the role block and intro paragraph lower down, `.hero .kicker`, `.hero .lb-intro`, so
   the label's mono is one voice; the paragraph wraps at 38ch), near the right edge a little
   below the middle (`.mw-note-2`; lines break where written; it was numbered [2] and once
   had a note [1]), and a short line in Hanken 800 capitals, a muted mauve grey (rgb 165 150 164, from a zine page the owner sent), sharp,
   right-aligned at the foot (`.mw-manifesto`); they come up after the name's letters (`.mw-side`,
   in `initLetters`). Their words are plain, as the owner asked for the whole site: the note
   "[ a little about me ] Curious about people, drawn to details, and always looking for a
   better way to make things work.", the line "Product designer / for digital products." (two lines, aligned left, at the right of the screen) (they replaced poetic lines about records and growing). Phones: the note higher on the right, the
   manifesto above the name. Then, each word coming up once its line is in view, as on the
   reference (out of a 10 px blur and 50 px low over 0.7 s, a word every 60 ms; `.mw-wd`,
   `appearGroups` in `stepHeroText()`): "Trinh.N [Home] is the portfolio of Trinh Trinh Nguyen ↓"; the
   slogan right of centre, uppercase (both, `.mw-who` and `.hero h1`, in Koulen, the reference's tall condensed
   display face (`--font-big`, Google Fonts), the slogan's first line fitted to end on the right margin (`fitSlogan()`, `--sfs`;
   it starts at 25.35%, 15.5% under 1200 wide, as the reference; the who lines take the same size, set on `.hero` as `--tfs`, unless they would run past the margin; phones keep their own sizes), in the original solid paper white, not blurred (a soft blurred white made the owner's eyes swim); the [Home] tag and the script last line keep their own look), its rotating last line (`PHRASES`) in the serif italic;
   and a mono block (role @ company, city, the line about you; the two buttons, Say hello and
   Selected work, were taken out at the owner's asking, their `.cta` styles and guarded handlers kept). Spaced as the reference measures at 1440×900
   (checked in a browser against mason-wong.com): the who lines start 1.39 screens down at the
   left margin, the same size as the slogan (`--tfs`, 6vw), lines 1.12 apart; the slogan starts
   11.7vw under them on the quarter line (`.mw-more`, 25.35%); the role block 8.5vw under the
   slogan, the paragraph 20px under that. At 1440 they land within 10px of the reference's
   positions (1251 / 1613 / 1908; the work section at 2475). Behind it all,
   in the flower layer so it shows only on the label: the user's photo `hero.jpg`: first retouched in dark wine-rose, then made
   over as a faded zine print after a zine the user sent (dusty mauve, lifted blacks, light
   leaks, crumpled-paper relief, stains, dust, scratches and grain, all baked into the photo, so
   no tiles or seams; no collage squares); blurred 0.6px, a little shade at its foot; the film
   noise stays on top (`.mw-bg`, a round window for the nav's record), taller than the screen and drifting
   up at 0.6 of the scroll (`PARALLAX`), and three mono labels pinned along the foot
   (`.mw-foot`, in once the initials start to go). Over the whole site (not only the label)
   lies film noise made as the reference's is, replacing the old grain (`.noise`, `makeNoise()`, `noiseGrain`) and the nav bar has no background. There is no closing circle: as on the reference, the work list's opaque paper (`.works-sec`
   background) scrolls up over the hero with a straight edge; the label closes into the nav's
   player only once that paper covers the screen (`label.y0`, `label.y1`), out of sight. The blossom branch that used to cross the hero is switched off (`BRANCH = false` in
   `layoutBlooms()`; its code and its halftone style are kept). Words in `[brackets]` are
   placeholders.
4. Selected work (`.works-sec`), after the reference site's featured projects (mason-wong.com),
   in the user's fonts and colours. A held screen (`.fw-stick`, sticky inside `.fw-pin`): the
   words SELECTED and PROJECTS in Hanken 600 capitals either side of an upright column: the loading
   cover's blossom vine turned upright, turned 126° so the stem stands nearly upright (root at the
   foot, blossom fan at the top, buds hanging left, as in the user's sketch; `FW_TURN`), cropped
   to its ink, in the drawing's own fine lines like the cover's, all in the accent purple, no brackets
   (`.fw-col`, `buildFwVine()`; for the reference's 作品集), from about a sixth of the way down to
   near the foot. It grows like the cover's, from the stem's root to the petals (`data-root`),
   over 2.6 s once the section comes up (`stepFwGrow()`), and resets if you scroll back above it; `fitFeatured()` sizes the words to their sides. As you scroll, the
   projects (`#fwGrid`, two to a row, from `PROJECTS`: a picture, a placeholder colour until
   `img` is set, and a mono caption, name left and kind right) rise past the column while the two
   words fade out over about two thirds of a screen (`stepFeatured()`, `--fw-fade`), as the
   reference's do; the column stays until the grid has passed. Then a mono line and a "View all
   work" block (`.fw-end`). Words come up as everywhere else (`appearAll()`). Phones: the words
   stacked, no column, one project to a row. The old case rows (`#workList`, `layoutCases()`)
   are kept but hidden.
5. About: follows straight on from the last case, its flat wine edge sliding up over the work
   (the curved dome it used to rise with is gone, to match the reference). Then a pinned panel on
   wine (`PROCESS`, `layoutProcess()`, `stepProcess()`, `drawProcess()`), made "more vintage, to
   match the site" at the owner's asking (backup of the earlier sleeve-beside-the-record version
   outside the folder). As the panel lands, an old LP sleeve stands half out of sight at the foot
   of the screen, centred (`.ab-sleeve`: a cream band printed in wine, "Trinh.N", "The process"
   with "side a" in the script and a "Long play 33⅓ TTN-003" badge, over the hero's zine photo;
   ring wear, scuffed edges and yellowing in its `::before` / `::after`; its words are
   placeholders). The scroll then draws the record up out of it to the middle of the screen
   (`RISE_END`), the sleeve drops away and fades (`DROP_AT`, `DROP_LEN`), and the words come in
   either side (`IN_AT`, `IN_LEN`; the claim's words come up one by one as everywhere else,
   toggled from `stepProcess()`, not on sight). The words are the owner's own, kept as they
   were with only two changes they asked for: two or three tasks to a step, and no "AI" in them.
   The owner does not want lines split in two halves with a comma ("about six weeks, start to
   finish"): it reads as written by AI. Write plain, short names instead. At the left the kicker
   ("how i work", "a typical project"; it was "[03] process", which the owner found unclear), the
   claim "A closer look at how products take shape." in Hanken 800 capitals with "shape." in the
   script, and at the foot "~87 hours per product" and "≈ 11 full days". At the right the
   tracklist, as on the back of an old LP: "A1"… side and number, the step's name in the script
   whether playing or not (thistle when playing), dot leaders, its hours; the step in play opens
   to show its tasks in plain Hanken (easy to read) with their hours (done filled, the one in
   play marked in thistle); a click on a step plays from there. `PROCESS` holds the steps
   (Discover, Define, Design, System, Test + handoff), their tasks and hours, 87 in all; the label
   reads "x of 87 hrs". The record lies in the middle
   (`pr.cx`, `pr.cy`; `pr.y` is where it is during the rise, `pr.y0` inside the sleeve), as large
   as the room between the columns and the screen's height allow. Then it plays the project all
   the way round, clockwise from the top (`PLAY_AT`, `PLAY_LEN`). No ring, ticks or step numbers
   round the record (all taken out at the owner's asking; the tracklist and the label keep the
   A1… numbers); the needle (label to the record's edge) comes in with the words, once the
   record is out. Only two tones of groove: dark still to play, faintly lit where it has played,
   exactly up to the needle and never ahead of it (the owner asked that the lit part move with
   the needle). The lilac label says the step and the hours in, fading over when the step
   changes. Vintage touches on the record: two soft sheens on the vinyl, the sleeve's shadow at
   its mouth while it is still inside, and the label printed with a fine ring and its words
   round the edge (`LABEL_RING`), turning as it plays.
   Printed on the record is the lily from a record the owner sent, its exact shape, taken
   from their picture (`lily.png`: the picture's brightness as ink, bright petals strong, the
   blue leaves faint, the disc's centre in the middle of the image and its edge at the image's
   edge; the owner asked for the shape exactly as in the picture, not redrawn). Changes the
   owner asked for, made in the image itself: four petal tips removed (the owner painted dark
   shapes over a screenshot to mark what to delete: the left petal's tip, the right petal's curl
   and the two lower petals' tips; the shapes were mapped onto the record exactly and every dot
   under them taken out; a dark shape painted on a screenshot means "remove this", not "add");
   only the flower itself kept (stray specks off the record dropped); the two leaves filled
   completely at one even faint tone, the top one redrawn as a full leaf (in the picture it
   runs past the record's edge, so it showed as a thin cut-off strip): same place and lean,
   wider in the middle, its pointed tip inside the record, its base behind the petal
   (0.27, fainter than any petal, so they never stand out more than the flower). textify turns
   it into nothing but dots and 0s and 1s, toned (`data-tone` on `#abBloom`): the brightest
   parts of the petals become digits, the rest dots that grow smaller and fainter with the
   picture's light, so the lily's shading comes out as a gradient from digits to dots to
   nothing, by opacity. Each bit shows once the needle has passed it (`buildBloom()` places
   each by its angle, `stepBloom()` reveals it), so the lily plays out round the record with
   the needle. Earlier prints are kept in the code, unused: a big pixel flower (`flowerInk()`),
   a blossom vine (`vineInk()`) and a path from start to end (`drawPath()`); a traced flower
   scroll (from another record the owner sent) was replaced by the lily. The record, its
   grooves, two tones, needle and lilac label are unchanged (the owner asked that only the
   pattern change).
   Narrow screens (under 1100 wide or 560 tall; `.ab-wide` is set by `layoutProcess()`): the
   claim above, the tracklist below, sized with its longest step open, the record whole and
   centred between them (with no room at all, as on a phone on its side, there is no record).
   The tracklist is real text, so screen readers get the whole process.

6. About me (`.me`): one section, all on paper (the owner asked for no dark break in it and no
   statement: the wine "I design apps and websites…" screen was taken out, and What I do joined
   on). First a held screen (`.me-pin`, 1.45 screens; `.me-stick`, sticky): ABOUT, the record and
   ME in one row (`.me-title`, a flex row: the record's slot `.me-slot` sits between the two
   words), MY's ink on the page's left margin and CRAFT's on its right (the same 24px as the
   content under it; the words' own side space taken off with a small negative margin), the words sized so the three fill the row (`fitMe()`,
   capped at about a third of the screen's height; it was the reference's two words pinned to
   the edges, which the owner found unbalanced). On a phone ABOUT above the record and ME below.
   The record from "how i work" comes down into the slot: as the process ends and this section
   comes up, it leaves the process (its needle and label words go) and travels down, growing
   smaller and turning a little on the way (`stepOutro()`; `f` is 0 while the section's top is
   at the foot of the screen and 1 once it reaches the top, so scrolling back carries it back
   up). On its way it is drawn on a layer over the page (`#flyRec`, z 3, under the nav); once
   down, in the slot (`#meRec`). Once down it is turned -12° (`REST_TURN`), turning a touch more
   while the screen is held, and its label reads "side b · about me · trinh.n · 33⅓ rpm"
   (`restLabel()`). The record is drawn from `recordArt()`: the process's record, every step
   played, its lily whole, no needle. The process's own record steps aside while it travels
   (`pr.flying`; `.about.is-gone` hides its label's words).
   The title reads MY ◉ CRAFT (it was ABOUT ME; the owner asked for words that match the
   content), the record's label "side b · my craft". Then, on the same paper and pulled up close
   under it, what I do (`.do`), relaid so the two halves connect (the hairline row "[who i am & what i do] … [side b]" that ran
   across the top was taken out at the owner's asking, 21 Nov 2026); at the left the owner's portrait (`.do-pic`,
   exactly the height of the column at the right since 21 Nov 2026, cropped to fit; 4:4.4 on phones;
   save it as `about.jpg` in the folder, it shows on its own, a thistle "[your photo]" until
   then) with the facts under it (role, based in, experience, tools); at the right "[skills and
   services]" and a numbered list between hairlines, its top level with the portrait's: each
   skill in Hanken 800 capitals with a short mono note at the right, set for a senior product
   designer (Product strategy, End-to-end product design, User research & insights, Design
   systems at scale, Experimentation & metrics, Design leadership); a pointed-at one turns
   (The facts under the portrait and the small words along the foot were taken out at the
   owner's asking.) Hover, after the reference's expertise list: pointing at the list dims every
   other skill to a faint ink, the one pointed at stays full, and a picture (`#doFloat`, moved to
   `body` so the section's round-window mask cannot clip it) floats over the list, following the
   pointer by transform with a frame-rate-independent ease (it catches up in about a fifth of a
   second); the first picture is there at once (0.18 s fade, 0.28 s scale), a change wipes in
   over 0.38 s; pointing at another skill wipes its picture up over the last one
   (`doFloat()`; one `.do-layer` per skill). Which skill is under the pointer is worked out from the
   pointer's position (`elementFromPoint`, on every pointer move and every scroll), not from enter
   events, which don't come when the list scrolls under a still pointer or the pointer arrives from
   above while the page moves; the dimming follows the same state (`.do-list.hov`, `li.cur`). Each skill's picture comes from `data-img` on its
   `<li>`: since 21 Nov 2026 one of the owner's projects per skill, 4:5 crops in `projects/craft/` (strategy
   SpitiMou, end-to-end TL Studio, research Penlo's trust curve, systems Bliss's whole brand board (`projects/bliss/image-04.jpg`, fitted 960 wide on its own cream #EFE5CC to 4:5; the owner's pick, 21 Nov 2026, over Omical's mark and a Bliss wordmark crop; earlier versions in backups/craft-04-systems.*), metrics Nomu's
   rewards loop, leadership Penlo, the redesign the owner led). It only runs where the device can hover. Phones: one column, the notes under
   each skill.
7. The footer (`.ft`, `#contact`), after the reference's (mason-wong.com, the owner's team site,
   used with permission), kept clean at the owner's asking: on wine over the hero's photo
   (`.ft-photo`: `hero.jpg`, blurred 0.6px, at 55% under a wine gradient), a screen tall, the same
   24px margin on every side; COME / SAY / HELLO set to the left (its lines left-aligned). "[Trinh Trinh Nguyen]" and "[Copyright 2026]" at the top; then
   three equal columns, each centred in its third: COME / SAY / HELLO in Hanken 800 capitals
   (all upright, as the reference), the work section's flower (`#ftVine`, `buildFtVine()`: the
   work column's vine-right.png turned upright by `FW_TURN`, thistle dots and light grey 0s and
   1s, growing from its root once the footer is half way up, `triggerFtGrow()`; none on phones),
   and "[Currently on repeat]" over the record's cover (square, `cover.jpg`; a click plays or
   pauses the site's music) with "[Trinh.N – song]" under it (`ftSync()`); Resume →, ↑ (back
   to the top) and Email → along the foot (21 Nov 2026, the owner's asking: they replaced LinkedIn
   and Instagram, so the site now has no social links and does invite an email, which it did not
   before). Both still point at `#`: Resume wants the PDF's path once the file is in the folder, Email
   a `mailto:` once the owner gives the address. The same two sit in work.html's and about.html's
   footers. Backups: `backups/*.before-resume-email.html`.
   The nav's record has no round window over the footer (the footer's wine covers it, so the
   top right stays clean; the footer has its own record).
   The nav: About opens about.html, Contact goes to the footer; the nav marks
   About from "how i work" on and Contact in the footer, and its ink is dark over paper (the
   work, About me). The new sections have the nav record's round window (`holeEls`). Their words
   come up word by word as everywhere else (`appearAll()`).

## Scrolling

Fast scrolling: nothing scrolls while the loading screen is up (`loadingNow()` in the wheel,
touch and key handlers); a scroll then used to move the page under the loader, so it opened half
way down with the disc and the sections out of step. Once the page leaves the disc screen, its
entrance animations stop at once (`body.intro-left`), or a running one held "play?" over the
hero. While the page moves fast (over 2400 px/s, set in the frame loop), the scroll-in effects
run in 0.18 s with no delays (`body.scroll-fast`), so nothing is seen half built.

Text motion: all the text past the hero (the work list's title, names, kinds and details; the
About's kicker and title) comes up word by word like the hero's, as on the reference site
(`appearAll()`, an IntersectionObserver; the `.mw-wd` style).

The Work page's scroll reveal (`work.html`, `[data-rv]`, 21 Nov 2026, the owner's asking that it match
the reference): a block fades opacity 0 to 1 over **0.4s** on **cubic-bezier(.44, 0, .56, 1)** and
nothing moves. It had kept an older 36px rise over 0.8s. The numbers were measured on the reference's
own case page (mason-wong.com/work/global-esports) in a browser, by sampling a section's computed
style every frame as it scrolled in: opacity only, its text sitting still at 1 the whole way while the
wrapper faded, reaching 1 at about 410ms, and fading out again on the way out so it plays every time.
Ours now settles at about 420ms and reads 0.50 at the halfway point, as the reference does. The small
per-item delay (`--d`, 0.06s a row) is ours and was kept, so the hero's letters and the grid's rows
still arrive in order. project.html already carried these numbers, so it was not touched.
**about.html still has the older 36px rise**: match it the same way if the owner asks.
Backup: `backups/work.before-ref-reveal.html`.


The page is one eased scroll (`glide`, search `One continuous, eased scroll`) with three stops:
the disc, the hero, and the page. Disc ↔ hero, and the page up to the top of the hero, are
moves of their own (`glide.tween`). While one plays, the rest of a flick (a trackpad's
momentum, dying away) is swallowed, so one flick lands on the hero and stays. Nothing makes a
quick visitor wait, though. A scroll that keeps going hurries the move (`HURRY_AFTER`,
`HURRY_RATE`), and the hero's clock with it. Once the move has landed, a scroll that keeps
going carries on after a short hold (`HOLD`). Scrolling the other way turns the move round at
once. `stillGoing()` tells a hand still on the wheel from momentum (momentum shrinks a little
every event). Keys, touch and links count as still going. Anything time-based keeps up with a
fast scroll: the hero's words catch up once the page moves on, and the About's label changes without fading while the steps fly past.

## Still placeholders

- Every project's pictures. The seven projects' words are the owner's own (index.html and
  work.html carry the name and `tag`, `project.html`'s `PROJECTS` carries the case); what is still
  missing is the images — `img: "path.jpg"` on each project in index.html and work.html (landscape,
  about 5:4, suits the grid), and `cover` plus `pics: […]` in project.html, which show a palette
  colour and an [image NN] label until a path is set. Bliss's timeline is still `[x weeks]`, and so
  is TL Studio's.
- The work section's closing line (`.fw-blurb`) and where "View all work" goes (`#fwAll`).
- The footer: the Resume and Email links (`href="#"` on all three pages) — the resume PDF and the
  owner's email address are both still wanted.
- The hero's note and line round the name (`.mw-note-2`, `.mw-manifesto`): plain stand-ins for what the owner does; check them.
- The About sleeve's printed words (`.ab-sleeve`: "How I work", "5 tracks") and the label's ring of words (`LABEL_RING`).
- The hero's foot labels (`.mw-foot`). The slogan (`#slogan`) now reads "Designing with intention." on one line (7.2vw on phones so it fits), two rows in all,
  with "Thoughtfully, always." in the script, in white (paper), 12px smaller than the line above; it no longer changes (`TAIL_TURNS = false`; `PHRASES`
  kept). The role line reads "Product designer @ HCMC, Vietnam" and the intro "I turn complex ideas
  into clear, thoughtful digital experiences that make life easier for people."
- More tracks: `TRACKS`, `TRACK_TITLES` and `TRACK_TIMES` must stay in step.

## Handing over: where things stand

This folder is the whole project; nothing outside it is needed (Google Fonts load online).
Open it in Claude Code and preview with the `portfolio` config in `.claude/launch.json`, or run
the server command above. **The `portfolio` config does not start from the Claude Code desktop app
here (21 Nov 2026):** its preview runner is refused access to this folder, because the project sits
under `~/Documents`. It fails with `can't open file 'serve.py': Operation not permitted`, and an
absolute path does not help — a probe showed even `os.getcwd()` raising inside that folder, so the
whole folder is out of its reach, not just the one file. Nothing in the config is wrong. Either run
`python3 serve.py 8001` yourself and preview with the `portfolio-attach` config, which is there for
exactly that, or grant the app access to the Documents folder (System Settings → Privacy & Security
→ Files and Folders), or keep the project somewhere outside `~/Documents`. Old versions of `index.html` were kept outside this folder and are
not included.

**The last open request is done (21 Nov 2026).** The owner's words were "comeback to the first time you
apply the image for me". The first version of their photos is back: `backups/photos-first/*.jpg` copied
into `photos/` (info-hero, work-hero, footer, info-intention and expertise, the full zine retouch, not
tone-matched) and `backups/{index,work,about}.before-photo-tone.html` copied over index.html, work.html
and about.html, which puts the photos back dim over the wine (0.4, footers 0.55, the old wine gradients),
brings the baton poster back to Info's Expertise and Skills, and undoes every later move. Only photo
changes had come after those three backups, so nothing else was lost. Checked at 1440x900, 1280x720 and
390x844: Info's hero, Expertise (90vh in the right column, 412px on a phone), "always designing / with
intention", Work's hero and all three footers. The state it replaced is kept as
`backups/{index,work,about}.before-photos-first.html` and `backups/photos-gentle/`.

**Then three of the moves were put back (21 Nov 2026, the owner's choice of the five offered):** Info's
hero 200px higher, the intention photo 250px higher, and the footer photo **160px** lower (their own
number, not the 120px of the earlier version) on all three pages. Checked at 1440x900, 1280x720 and
390x844: no gap opens at any edge. They then also asked the baton picture out of Info's Expertise and
Skills again (21 Nov 2026), so that is gone too and the list starts beside the heading. The one thing
they did not take, so leave it alone unless they ask: the photos stay dim under the wine gradients
rather than at full strength under a light shade.

How the owner works, so the next person can carry on in the same way:
- Changes are asked for in short messages with screenshots, often of the reference site
  (https://www.mason-wong.com/ for the hero, nav, noise and work section; the owner's company
  asked for that look). "Same as the reference" means measure the reference (positions,
  timings, blur, opacity) and match it, in the owner's own fonts, colours and words, never
  copying its text, name or images.
- Palette only: paper, wine `#351E28`, accent purple, thistle, aqua sparingly.
- Writing: the site is a showcase of what the owner does, so content must be clear at first
  sight and easy to scan: short plain labels ("User interviews", "Low-fi wireframes"), not
  sentences, not poetic lines, and never a line split in two halves with a comma ("Talk to users,
  hear what isn't working"). The owner finds that style slow to read and AI-like.
- Check every visual change at 1440×900, 1280×720 and 390×844 before calling it done; the
  page has a loading screen and a disc screen first, so a test has to click "No sound" (or
  play) and scroll, or use the nav's Work / About links, to reach a section.
- Keep a copy of `index.html` before big changes, so a version the owner preferred can come
  back (they often ask to return to an earlier look).

Known quirks:
- The page scrolls with its own eased glide on `#works`, not the window; code that needs the
  scroll reads `worksEl.scrollTop`, and per-frame work goes in `stepWorks()` / the frame loop.
- The nav's record is drawn on the background canvas, so anything opaque over it needs a round
  window (`discHole()`, `holeEls`), as the hero photo and the work section have.
- A global style caps images at 100% width; a picture meant to be wider needs `max-width: none`.
- The vines are images turned into dots and 0s/1s at runtime (`textify`); they need the page
  served over http, and they grow from `data-root` (the point the growth starts from).

## Working here

- Keep the single-file structure unless asked to split it.
- After visual changes, check desktop (1440×900, 1280×720) and a phone (390 px wide).
- Comments in the code explain intent; keep that style when editing.
