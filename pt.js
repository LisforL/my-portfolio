/* Page changes, as on the reference site (mason-wong.com/work). Read off its code on 20 Nov 2026:
   it is a Framer site whose one global page transition runs through the browser's View Transitions
   API, for every link (into a case page too):
     leaving:  the old page drifts up 50px, shrinks to 0.99 and fades to 0.2, 1s, ease (.58,.01,.31,.99)
     arriving: the new page slides up from the foot of the screen over it, 1s, ease (.73,.01,.37,.99)
   both at once. Behind the fading page the reference shows its black ground; ours is the wine.
   Ours are separate pages, so this uses the cross-document form (@view-transition): the browser
   keeps a picture of the old page and slides the new one in over it. Browsers without it
   (Firefox for now) get the earlier panel: the next page's ground rises, then lifts away.
   One file, included in the <head> of every page, so the rule is there before the first paint.
   Backup of the panel-only version: backups/pt.before-view-transition.js */

/* Arriving (the owner's rule, 21 Nov 2026): the home page plays its loading screen and its disc
   screen only on a fresh start, a reload or a first visit in this tab. Coming to it from another page
   of the site, it opens straight on its hero, with the same page change as every other page. */
(function () {
  let seen = false, type = "navigate", ref = false;
  try { seen = sessionStorage.getItem("ptIn") === "1"; sessionStorage.setItem("ptIn", "1"); } catch (e) {}
  try { const n = performance.getEntriesByType("navigation")[0]; if (n) type = n.type; } catch (e) {}
  try { ref = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch (e) {}
  window.ptSkipIntro = type !== "reload" && (seen || ref);
})();

/* The nav bar, one for every page (the owner's rule, 21 Nov 2026): the home page's own bar, measured
   off it. "Trinh" at the left, the sections a little right of centre with a small square at the one
   you are on, the year (on the home page, the record) at the right; light grey over the dark grounds,
   the site's ink over paper. Scrolling down slides it up out of sight, scrolling up brings it back
   (0.55s, the same ease as the home page's). The home page keeps its own copy of these numbers in
   index.html (.topbar), since its bar also holds the player; a case page's bar (Close project) slides
   the same way. */
(function () {
  const st = document.createElement("style");
  const TOP = "calc(env(safe-area-inset-top, 0px) + 22px)", EASE = "0.55s cubic-bezier(0.22, 1, 0.36, 1)";
  st.textContent =
    "header.nav { position: fixed; z-index: 10; top: 0; left: 0; right: 0; height: 50px; pointer-events: none;" +
    " font-family: 'IBM Plex Mono', Menlo, Consolas, monospace; font-size: clamp(12px, 0.95vw, 15px); line-height: 1;" +
    " letter-spacing: 0.02em; text-transform: uppercase; color: rgb(231, 229, 223); transition: color 0.35s ease; }" +
    "header.nav a { pointer-events: auto; text-decoration: none; color: inherit; }" +
    "header.nav .brand { position: absolute; left: 24px; top: " + TOP + "; }" +
    "header.nav .menu { position: absolute; left: 56vw; top: " + TOP + "; display: grid; justify-items: start; row-gap: 0.75em; }" +
    "header.nav .menu a { position: relative; }" +
    "header.nav .menu a::before { content: ''; position: absolute; left: -1.1em; top: 0.25em; width: 0.4em; height: 0.4em; background: currentColor; opacity: 0; transition: opacity 0.2s ease; }" +
    "header.nav .menu a.is-on::before { opacity: 1; }" +
    "header.nav .yr { position: absolute; right: 24px; top: " + TOP + "; }" +
    "header.nav .brand, header.nav .menu, header.nav .yr, header.bar { transition: translate " + EASE + "; }" +
    "header.nav.nav-hide .brand, header.nav.nav-hide .menu, header.nav.nav-hide .yr, header.bar.nav-hide { translate: 0 -150px; }" +
    "header.nav.nav-dark { color: #351E28; }" +
    "@media (max-width: 760px) { header.nav .menu { left: 50vw; } }" +
    "@media (prefers-reduced-motion: reduce) { header.nav .brand, header.nav .menu, header.nav .yr, header.bar { transition: none; } }";
  document.head.appendChild(st);
  function init() {
    const nav = document.querySelector("header.nav, header.bar");
    if (!nav) return;
    let lastY = scrollY, hidden = false, dark = null;
    function step() {
      const y = scrollY, dy = y - lastY;
      if (Math.abs(dy) > 3) {                                  // the same thresholds as the home page's stepNav()
        const hide = dy > 0 && y > 120;
        if (hide !== hidden) { hidden = hide; nav.classList.toggle("nav-hide", hide); }
        lastY = y;
      }
      if (y < 120 && hidden) { hidden = false; nav.classList.remove("nav-hide"); }
      if (nav.classList.contains("nav")) {                     // paper under the bar: the site's ink
        let g = null;
        document.querySelectorAll(".dark, .paper").forEach((el) => { const r = el.getBoundingClientRect(); if (r.top <= 30 && r.bottom > 30) g = el; });
        const d = !!g && g.classList.contains("paper");
        if (d !== dark) { dark = d; nav.classList.toggle("nav-dark", d); }
      }
    }
    addEventListener("scroll", step, { passive: true });
    addEventListener("pageshow", step);
    step();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();

/* The film noise, the home page's own on every page (the owner's asking, 21 Nov 2026), made as the
   reference makes it: a 256px tile of grey pixel noise (over half near black, a sixth near white,
   the rest even between), repeated over a layer four times the screen, at 5% over the page, jumping
   along the grain path in steps of 80ms (8s round). The same numbers as index.html's .noise and
   makeNoise(); the home page draws its own (#noiseTile), so it is left alone here. */
(function () {
  const st = document.createElement("style");
  st.textContent =
    ".noise { position: fixed; inset: 0; z-index: 20; overflow: hidden; pointer-events: none; opacity: 0.05; background: none; }" +
    ".noise > .pt-grain { position: absolute; inset: -200%; width: 400%; height: 400%; opacity: 0.9; background-repeat: repeat; will-change: transform; animation: ptNoise 8s steps(10) infinite; }" +
    "@keyframes ptNoise { 0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-5%, -10%); } 20% { transform: translate(-15%, 5%); }" +
    " 30% { transform: translate(7%, -25%); } 40% { transform: translate(-5%, 25%); } 50% { transform: translate(-15%, 10%); } 60% { transform: translate(15%, 0%); }" +
    " 70% { transform: translate(0%, 15%); } 80% { transform: translate(3%, 35%); } 90% { transform: translate(-10%, 10%); } }" +
    "@media (prefers-reduced-motion: reduce) { .noise > .pt-grain { animation: none; } }";
  document.head.appendChild(st);
  function init() {
    if (document.getElementById("noiseTile")) return;          // the home page: its own noise
    let host = document.querySelector(".noise");
    if (!host) { host = document.createElement("div"); host.className = "noise"; host.setAttribute("aria-hidden", "true"); document.body.appendChild(host); }
    const cv = document.createElement("canvas"); cv.width = cv.height = 256;
    const x = cv.getContext("2d"), img = x.createImageData(256, 256), d = img.data, rand = Math.random;
    const bins = [0.549, 0.061, 0.053, 0.051, 0.046, 0.052, 0.023, 0.165];   // shares of eight brightness bands, dark to light
    for (let i = 0; i < 256 * 256; i++) {
      let r = rand(), b = 0;
      while (b < 7 && r > bins[b]) { r -= bins[b]; b++; }
      const v = Math.min(255, b * 32 + Math.floor(rand() * 32));
      d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = v; d[i * 4 + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    const tile = document.createElement("div"); tile.className = "pt-grain";
    tile.style.backgroundImage = "url(" + cv.toDataURL() + ")";
    host.textContent = ""; host.appendChild(tile);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();

/* Smooth wheel scrolling, as the reference's (mason-wong.com runs Lenis; measured 20 Nov 2026 by
   sending one 200px wheel step and sampling every frame: the page eases out exponentially, half way
   there after 100ms, a quarter left at 200ms, settled by about 0.8s, which is Lenis's default lerp of
   0.1 a frame). Ours is the same curve, worked out by time so it feels alike at any frame rate.
   Only the wheel (mouse, trackpad) is eased: touch, keys and the scrollbar stay the browser's own.
   The home page has its own eased glide on #works, so it is left alone. */
(function () {
  const path = location.pathname;
  if (/\/$|index\.html$/.test(path)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const K = Math.LN2 / 0.1;   /* half the distance left every 100ms */
  const st = document.createElement("style");
  st.textContent = "html{scroll-behavior:auto!important}";   /* our frames move the page; the browser must not ease them again */
  document.head.appendChild(st);
  let target = 0, cur = 0, raf = 0, last = 0;
  const max = () => document.documentElement.scrollHeight - innerHeight;
  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    cur += (target - cur) * (1 - Math.exp(-K * dt));
    if (Math.abs(target - cur) < 0.4) { cur = target; raf = 0; } else raf = requestAnimationFrame(tick);
    scrollTo(0, cur);
  }
  function go(y) {
    if (!raf) { cur = scrollY; }
    target = Math.max(0, Math.min(max(), y));
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
  }
  window.ptScrollTo = go;   /* for the pages' own "back to the top" links */
  addEventListener("wheel", (e) => {
    if (e.ctrlKey || e.defaultPrevented) return;                         /* pinch zoom */
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;                 /* sideways */
    for (let n = e.target; n && n.nodeType === 1 && n !== document.body; n = n.parentElement) {
      const o = getComputedStyle(n).overflowY;                           /* a box that scrolls itself keeps its own wheel */
      if ((o === "auto" || o === "scroll") && n.scrollHeight > n.clientHeight + 1) return;
    }
    e.preventDefault();
    const d = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1);
    go((raf ? target : scrollY) + d);
  }, { passive: false });
  /* the keyboard, the scrollbar or a jump elsewhere stops a glide where the page now is */
  const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };
  addEventListener("keydown", stop);
  addEventListener("mousedown", stop);
  /* and so does leaving the page: a glide still running while the browser captures the old view
     scrolls the page under the picture it is taking, which shows up as a jump (21 Nov 2026) */
  addEventListener("pagehide", stop);
  addEventListener("beforeunload", stop);
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (a && !e.defaultPrevented && e.button === 0) stop();
  }, true);
})();

(function () {
  const WINE = "#351E28", PAPER = "#faf8f5";
  /* Does this browser do cross-document view transitions? Ask it to parse the at-rule and see
     whether it kept it: a browser without the feature drops the rule and leaves no cssRules. This
     replaces a check for `CSSViewTransitionRule in window` (21 Nov 2026) — that is the CSSOM
     interface, not the feature, and a browser can run the transition without exposing it. Safari
     was being sent down the fallback panel for that reason, so it played a different, two-stage
     change (panel up, page load, panel away) while Chrome played the real one. */
  const VT = (() => {
    try {
      const t = document.createElement("style");
      t.textContent = "@view-transition { navigation: auto; }";
      document.head.appendChild(t);
      const ok = !!(t.sheet && t.sheet.cssRules.length);
      t.remove();
      return ok;
    } catch (e) { return "CSSViewTransitionRule" in window; }
  })();
  const st = document.createElement("style");

  if (VT) {
    st.textContent =
      "@view-transition { navigation: auto; }" +
      "::view-transition { background: " + WINE + "; }" +
      "::view-transition-old(root) { animation: pt-out 1s cubic-bezier(.58,.01,.31,.99) both; }" +
      "::view-transition-new(root) { animation: pt-in 1s cubic-bezier(.73,.01,.37,.99) both; }" +
      "@keyframes pt-out { from { transform: none; opacity: 1; } to { transform: translateY(-50px) scale(.99); opacity: .2; } }" +
      "@keyframes pt-in { from { transform: translateY(100%); } to { transform: none; } }" +
      "@media (prefers-reduced-motion: reduce) { @view-transition { navigation: none; } }";
    document.head.appendChild(st);
    window.ptGo = (url) => { location.href = url; };   /* the browser does the rest */
    /* A case page's own rise is timed to land as the slide does (project.html sets a 0.8s delay).
       It starts that clock on its first frames, which is right only if the transition starts then
       too. `pagereveal` fires with the transition in hand, so let the page start from there when
       the browser gives us one. */
    addEventListener("pagereveal", (e) => { if (e.viewTransition) window.ptRevealed = e.viewTransition; });
    return;
  }

  /* ---- fallback: a panel in the next page's ground colour ---- */
  const ground = (url) => (/work\.html/.test(new URL(url, location.href).pathname) ? WINE : PAPER);
  st.textContent = "#pt{position:fixed;left:0;right:0;top:0;height:100vh;z-index:2147483000;pointer-events:none;transform:translateY(100%);}" +
    "#pt.cover{transform:none;transition:transform .65s cubic-bezier(.65,0,.35,1);}" +
    "#pt.lift{transform:translateY(-100%);transition:transform .8s cubic-bezier(.65,0,.35,1);}" +
    "@media (prefers-reduced-motion: reduce){#pt{display:none}}";
  document.head.appendChild(st);
  const pt = document.createElement("div"); pt.id = "pt";
  const add = () => document.body.appendChild(pt);
  document.body ? add() : document.addEventListener("DOMContentLoaded", add);

  const from = sessionStorage.getItem("pt"); sessionStorage.removeItem("pt");
  if (from) {
    pt.style.background = from; pt.style.transition = "none"; pt.style.transform = "none";
    const go = () => requestAnimationFrame(() => requestAnimationFrame(() => { pt.style.transition = ""; pt.style.transform = ""; pt.className = "lift"; }));
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", go) : go();
  }
  let busy = false;
  window.ptGo = function (url) {
    if (busy) return; busy = true;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { location.href = url; return; }
    const c = ground(url); sessionStorage.setItem("pt", c);
    pt.style.background = c; pt.className = ""; pt.style.transition = "none"; pt.style.transform = "translateY(100%)";
    void pt.offsetWidth; pt.style.transition = ""; pt.style.transform = ""; pt.className = "cover";
    setTimeout(() => { location.href = url; }, 660);
  };
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank") return;
    const u = new URL(a.getAttribute("href"), location.href);
    if (u.origin !== location.origin || !/\.html$|\/$/.test(u.pathname)) return;
    if (u.pathname === location.pathname && u.search === location.search) return;   /* same page: let anchors work */
    e.preventDefault(); window.ptGo(u.href);
  });
  addEventListener("pageshow", (e) => { if (e.persisted) { busy = false; pt.className = ""; pt.style.transform = "translateY(100%)"; } });
})();

/* ── The flower, alive on Work and Info ──────────────────────────────────────
   These pages used to show vines/flower-dots.png, a flat capture of the home
   page's flower, so it could only fade in with the rest of the page. This
   builds the real thing the way index.html's buildFtVine does: the drawing's
   ink is turned into dots and 0s/1s, and every bit knows how far along the
   drawing it lies from the stem's root (a shortest-path walk over the ink), so
   revealing them in that order makes the flower grow out from its root, the
   advancing front flickering as digits before it settles.

   The engine below (rng, rowStream, textify) is index.html's, copied as it
   stands so both pages draw the same flower; only the way it is sized and
   triggered is new. The PNG stays as the fallback: a host becomes `.live`, and
   loses its background, only once its canvas is actually in place, so a page
   that cannot read the pixels (file://, a blocked canvas) keeps today's look. */
(function () {
  const SRC = "vines/vine-right.png";                         // the drawing itself, clean ink
  const LEGACY = "vines/flower-dots.png";                     // the flat capture it replaces, measured for its size
  const FW_TURN = 126 * Math.PI / 180, FW_ROOT = [405, 27];   // the stem's root in vine-right.png
  const INK = "rgb(205,185,221)", GLYPH = "rgb(231,229,223)"; // thistle dots, light grey digits, as the home footer's
  const GROW_MS = 2600;                                       // the work column's own pace
  const VINE_STYLE = "dots";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let DPR = Math.min(window.devicePixelRatio || 1, 2);
  const CODE_FONT = getComputedStyle(document.documentElement).getPropertyValue("--font-code") || "monospace";

  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  /* dense rows of code for the leaf fills: mostly digits, the odd ! ) - ' and very few gaps */
  function rowStream(rand, n) {
    let s = "";
    while (s.length < n) {
      const r = rand();
      if (r < 0.86) { const len = 2 + Math.floor(rand() * 4); for (let i = 0; i < len; i++) s += rand() < 0.5 ? "0" : "1"; }
      else if (r < 0.93) s += " ";
      else s += "!)-'"[Math.floor(rand() * 4)];
    }
    return s;
  }
  const loadImg = (src) => new Promise((res, rej) => {
    const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src;
  });
  async function textify(host, src, w, h, mirror, fontPx, seed) {   // src: an image's address, or a canvas
    let im;
    try { im = typeof src === "string" ? await loadImg(src) : src; } catch (e) { return; }
    if (!host.isConnected) return;
    const sw = Math.max(1, Math.round(w)), sh = Math.max(1, Math.round(h));
    const R = DPR, PW = Math.round(sw * R), PH = Math.round(sh * R);
    const art = document.createElement("canvas");
    art.width = PW; art.height = PH;
    const ax = art.getContext("2d", { willReadFrequently: true });
    if (mirror) { ax.translate(PW, 0); ax.scale(-1, 1); }
    ax.drawImage(im, 0, 0, PW, PH);
    let A;
    try { A = ax.getImageData(0, 0, PW, PH).data; } catch (e) { return; }

    /* ink in a box (CSS px): how much, the most, and where its centre is */
    function stats(x0, y0, x1, y1) {
      const X0 = Math.max(0, Math.floor(x0 * R)), Y0 = Math.max(0, Math.floor(y0 * R));
      const X1 = Math.min(PW, Math.ceil(x1 * R)), Y1 = Math.min(PH, Math.ceil(y1 * R));
      let sum = 0, max = 0, sx = 0, sy = 0, n = 0;
      for (let y = Y0; y < Y1; y++) for (let x = X0; x < X1; x++) {
        const a = A[(y * PW + x) * 4 + 3];
        n++;
        if (!a) continue;
        sum += a; sx += a * x; sy += a * y;
        if (a > max) max = a;
      }
      const mean = n ? sum / (n * 255) : 0;
      return { mean, max, cx: sum ? sx / sum / R : (x0 + x1) / 2, cy: sum ? sy / sum / R : (y0 + y1) / 2 };
    }

    const out = document.createElement("canvas");
    out.width = PW; out.height = PH;
    const oc = out.getContext("2d");
    const font = fontPx + "px " + CODE_FONT;
    oc.font = font;
    const cw = oc.measureText("0").width, rh = fontPx * 1.05;
    const rand = rng(seed);
    const glyphs = [], dots = [];
    /* a toned host (the record's lily, data-tone) shades a picture: only its brightest parts
       become digits, the rest dots that grow smaller and fainter with the picture's light */
    const toned = !!host.dataset.tone;
    const SOLID = toned ? 0.62 : VINE_STYLE === "dots" ? 0.26 : 0.4;
    const solidCell = new Set();
    const cols = Math.ceil(sw / cw), rows = Math.ceil(sh / rh);
    for (let r = 0; r < rows; r++) {
      const stream = rowStream(rand, cols);
      for (let c = 0; c < cols; c++) {
        const x0 = c * cw, y0 = r * rh, st = stats(x0, y0, x0 + cw, y0 + rh);
        if (st.max < 40) continue;
        let ch = stream[c];
        if (!/[01]/.test(ch)) ch = rand() < 0.5 ? "0" : "1";
        if (st.mean > SOLID) {
          solidCell.add(r * cols + c);
          /* toned: each digit as strong as the picture under it, none bold */
          const tone = toned ? 0.85 + 0.15 * Math.min(1, (st.mean - SOLID) / (0.95 - SOLID)) : 1;   // the brightest of the picture: the digits read brighter than any dot
          glyphs.push({ x: x0 + cw / 2, y: y0 + rh / 2, ch, a: tone, solid: !toned || st.mean > 0.86 });   // the very brightest a touch bolder
        } else if (VINE_STYLE === "fade") {
          /* lean toward where the ink is, so thin lines stay on their path */
          const gx = x0 + cw / 2 + (st.cx - (x0 + cw / 2)) * 0.6, gy = y0 + rh / 2 + (st.cy - (y0 + rh / 2)) * 0.6;
          glyphs.push({ x: gx, y: gy, ch, a: Math.min(1, 0.14 + Math.pow(st.mean / SOLID, 0.75) * 0.95), solid: false });
        }
      }
    }
    if (VINE_STYLE === "dots") {
      const f = Math.max(2.2, fontPx * 0.5);
      for (let y0 = 0; y0 < sh; y0 += f) for (let x0 = 0; x0 < sw; x0 += f) {
        const cc = Math.floor((x0 + f / 2) / cw), rr = Math.floor((y0 + f / 2) / rh);
        if (solidCell.has(rr * cols + cc)) continue;
        const st = stats(x0, y0, x0 + f, y0 + f);
        if (st.max < 46) continue;
        dots.push(toned
          ? { x: st.cx, y: st.cy, r: Math.min(f * 0.42, 0.25 + st.mean * 1.25), a: Math.min(0.9, 0.1 + st.mean * 1.25), s: rand() }   // shading: smaller and fainter where it is darker
          : { x: st.cx, y: st.cy, r: Math.min(f * 0.48, 0.38 + st.mean * 2.4), a: Math.min(1, 0.45 + st.mean * 1.6), s: rand() });
      }
    }

    /* Growth order. Every bit of ink gets its distance from the root measured along the drawing
       itself (a shortest-path walk over a 4 px grid of the ink; blank gaps cost far more, so a
       break in a line is jumped only when nothing else connects). Revealing the bits in that
       order makes the stem lengthen out to its tips and each leaf fill from where it joins. */
    {
      const G = 4, gw = Math.ceil(sw / G), gh = Math.ceil(sh / G), N = gw * gh;
      const ink = new Uint8Array(N);
      for (let gy = 0; gy < gh; gy++) for (let gx = 0; gx < gw; gx++) {
        const X0 = Math.floor(gx * G * R), Y0 = Math.floor(gy * G * R);
        const X1 = Math.min(PW, Math.ceil((gx + 1) * G * R)), Y1 = Math.min(PH, Math.ceil((gy + 1) * G * R));
        let hit = 0;
        for (let y = Y0; y < Y1 && !hit; y++) for (let x = X0; x < X1; x++) if (A[(y * PW + x) * 4 + 3] > 30) { hit = 1; break; }
        ink[gy * gw + gx] = hit;
      }
      const [rxp, ryp] = (host.dataset.root || "50% 100%").split(" ").map((v) => parseFloat(v) / 100);
      const rx = (mirror ? 1 - rxp : rxp) * sw, ry = ryp * sh;
      let start = -1, bd = Infinity;
      for (let i = 0; i < N; i++) if (ink[i]) {
        const d = ((i % gw) + 0.5) * G - rx, e = (((i / gw) | 0) + 0.5) * G - ry;
        if (d * d + e * e < bd) { bd = d * d + e * e; start = i; }
      }
      const dist = new Float32Array(N).fill(Infinity);
      let maxD = 1;
      if (start >= 0) {
        /* Dijkstra with a small binary heap */
        const hk = [], hv = [];
        const push = (k, v) => {
          let i = hk.length; hk.push(k); hv.push(v);
          while (i) { const p = (i - 1) >> 1; if (hv[p] <= v) break; hk[i] = hk[p]; hv[i] = hv[p]; i = p; }
          hk[i] = k; hv[i] = v;
        };
        const pop = () => {
          const k = hk[0], lk = hk.pop(), lv = hv.pop();
          if (hk.length) {
            let i = 0;
            for (;;) {
              let c = 2 * i + 1; if (c >= hk.length) break;
              if (c + 1 < hk.length && hv[c + 1] < hv[c]) c++;
              if (hv[c] >= lv) break;
              hk[i] = hk[c]; hv[i] = hv[c]; i = c;
            }
            hk[i] = lk; hv[i] = lv;
          }
          return k;
        };
        dist[start] = 0; push(start, 0);
        while (hk.length) {
          const v0 = hv[0], i = pop();
          if (v0 > dist[i]) continue;
          const x = i % gw, y = (i / gw) | 0;
          for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
            if (!dx && !dy) continue;
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= gw || ny >= gh) continue;
            const j = ny * gw + nx, nd = dist[i] + (dx && dy ? 1.414 : 1) * (ink[j] ? 1 : 9);
            if (nd < dist[j]) { dist[j] = nd; push(j, nd); }
          }
        }
        for (let i = 0; i < N; i++) if (ink[i] && dist[i] < Infinity && dist[i] > maxD) maxD = dist[i];
      }
      const order = (x, y) => {
        const gx = Math.min(gw - 1, Math.max(0, Math.floor(x / G))), gy = Math.min(gh - 1, Math.max(0, Math.floor(y / G)));
        const d = dist[gy * gw + gx];
        return d < Infinity ? Math.min(1, d / maxD) : 1;
      };
      dots.forEach((d) => { d.t = order(d.x, d.y); });
      glyphs.forEach((g) => { g.t = order(g.x, g.y); });
    }

    const FRONT = 0.1;                  // how much of the length is still unfolding at the tip
    const obj = {
      host, cells: glyphs, dots, rand, grow: 1,
      setGrow(q) {
        if (Math.abs(q - this.grow) < 0.0008) return;
        this.grow = q;
        this.draw();
      },
      draw() {
        const P = this.grow * (1 + FRONT);
        oc.setTransform(1, 0, 0, 1, 0, 0);
        oc.clearRect(0, 0, PW, PH);
        if (this.grow <= 0.001) return;             // not started: nothing at all, not even the root
        oc.setTransform(R, 0, 0, R, 0, 0);
        const ink = host.dataset.ink || INK;   // a card's vine is drawn in thistle
        oc.fillStyle = ink;
        oc.strokeStyle = ink;
        /* Fresh growth arrives as flickering 0s and 1s at full strength, then settles into the
           drawing: no fading in. The front of each stem and leaf is a scatter of digits. */
        const front = [];
        for (const d of dots) {
          if (d.t > P) continue;
          if (P - d.t < FRONT) { if (d.s < 0.4) front.push(d); continue; }
          oc.globalAlpha = d.a;
          oc.beginPath();
          oc.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          oc.fill();
        }
        oc.textAlign = "center";
        oc.textBaseline = "middle";
        if (front.length) {
          oc.font = Math.max(6, fontPx * 0.8).toFixed(1) + "px " + CODE_FONT;
          for (const d of front) {
            oc.globalAlpha = Math.min(1, d.a + 0.25);
            oc.fillText(Math.random() < 0.5 ? "0" : "1", d.x, d.y);
          }
        }
        oc.font = font;
        oc.lineWidth = fontPx * 0.07;
        if (host.dataset.glyph) oc.fillStyle = oc.strokeStyle = host.dataset.glyph;   // the solid parts in their own ink
        const blocks = host.dataset.solid === "block";                // solid parts as pixels, not digits (the hero's branch)
        for (const g of glyphs) {
          if (g.t > P) continue;
          if (P - g.t < FRONT) {                      // still arriving: a digit that keeps changing
            oc.globalAlpha = Math.min(1, g.a + 0.2);
            oc.fillText(Math.random() < 0.5 ? "0" : "1", g.x, g.y);
            continue;
          }
          oc.globalAlpha = g.a;
          if (g.solid && blocks) { oc.fillRect(g.x - cw / 2 - 0.15, g.y - rh / 2 - 0.15, cw + 0.3, rh + 0.3); continue; }   // a halftone's solid core: a pixel
          oc.fillText(g.ch, g.x, g.y);
          if (g.solid) oc.strokeText(g.ch, g.x, g.y);
        }
        oc.globalAlpha = 1;
      }
    };
    if (host.classList.contains("vine")) obj.grow = host._grow ?? 0;   // the frame loop grows it
    obj.draw();
    host.querySelectorAll("img, canvas").forEach((n) => n.remove());
    host.appendChild(out);
    host._vine = obj;
    return obj;
  }

  /* The drawing, turned upright and cropped to its ink, with the stem's root carried over into the
     cropped canvas's own coordinates. The same for every host, so it is done once. */
  let prepped = null;
  async function prep() {
    if (prepped) return prepped;
    const im = await loadImg(SRC);
    const w = im.naturalWidth, h = im.naturalHeight;
    const c = Math.abs(Math.cos(FW_TURN)), sn = Math.abs(Math.sin(FW_TURN));
    const W0 = Math.ceil(w * c + h * sn) + 8, H0 = Math.ceil(w * sn + h * c) + 8;
    const big = document.createElement("canvas"); big.width = W0; big.height = H0;
    const x = big.getContext("2d", { willReadFrequently: true });
    x.translate(W0 / 2, H0 / 2); x.rotate(FW_TURN); x.translate(-w / 2, -h / 2);
    x.drawImage(im, 0, 0);
    const d = x.getImageData(0, 0, W0, H0).data;
    let x0 = W0, y0 = H0, x1 = 0, y1 = 0;
    for (let yy = 0; yy < H0; yy++) for (let xx = 0; xx < W0; xx++) if (d[(yy * W0 + xx) * 4 + 3] > 30) {
      if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy;
    }
    if (x1 < x0) throw new Error("no ink");
    x0 = Math.max(0, x0 - 4); y0 = Math.max(0, y0 - 4);
    x1 = Math.min(W0 - 1, x1 + 4); y1 = Math.min(H0 - 1, y1 + 4);
    const cw = x1 - x0 + 1, ch = y1 - y0 + 1;
    const cv = document.createElement("canvas"); cv.width = cw; cv.height = ch;
    cv.getContext("2d").drawImage(big, x0, y0, cw, ch, 0, 0, cw, ch);
    const rx = FW_ROOT[0] - w / 2, ry = FW_ROOT[1] - h / 2, cs = Math.cos(FW_TURN), si = Math.sin(FW_TURN);
    const px = W0 / 2 + rx * cs - ry * si - x0, py = H0 / 2 + rx * si + ry * cs - y0;
    /* The size to draw at is taken from the picture this replaces: flower-dots.png was shown
       `contain`, and the flower sat in its own box inside that frame (the PNG carries padding, and
       its capture is a little narrower than the line art). Measuring that box keeps the flower
       exactly the size and place it has always been, instead of the tighter crop below, which
       `contain` would blow up to the full height of the host. */
    let legacy = null;
    try {
      const li = await loadImg(LEGACY);
      const lw = li.naturalWidth, lh = li.naturalHeight;
      const lc = document.createElement("canvas"); lc.width = lw; lc.height = lh;
      const lx = lc.getContext("2d", { willReadFrequently: true });
      lx.drawImage(li, 0, 0);
      const ld = lx.getImageData(0, 0, lw, lh).data;
      let a0 = lw, b0 = lh, a1 = 0, b1 = 0;
      for (let yy = 0; yy < lh; yy++) for (let xx = 0; xx < lw; xx++) if (ld[(yy * lw + xx) * 4 + 3] > 30) {
        if (xx < a0) a0 = xx; if (xx > a1) a1 = xx; if (yy < b0) b0 = yy; if (yy > b1) b1 = yy;
      }
      if (a1 >= a0) legacy = { W: lw, H: lh, x0: a0, y0: b0, iw: a1 - a0 + 1, ih: b1 - b0 + 1 };
    } catch (e) { /* no capture to measure: fall back to filling the host */ }
    prepped = { cv, cw, ch, legacy, root: (100 * px / cw).toFixed(1) + "% " + (100 * py / ch).toFixed(1) + "%" };
    return prepped;
  }

  /* One host: sized to fit inside its box the way `contain` did, so nothing is stretched. */
  async function build(host) {
    const r = host.getBoundingClientRect();
    if (!r.width || !r.height || getComputedStyle(host).display === "none") return;
    const p = await prep();
    let boxW = r.width, boxH = r.height, dx = 0, dy = 0;
    if (p.legacy) {
      const L = p.legacy, cs = Math.min(r.width / L.W, r.height / L.H);   // what `contain` did to the capture
      boxW = L.iw * cs; boxH = L.ih * cs;                                  // where the flower actually sat in it
      dx = ((L.x0 + L.iw / 2) - L.W / 2) * cs;                             // and a touch off centre, as it was
      dy = ((L.y0 + L.ih / 2) - L.H / 2) * cs;
    }
    const s = Math.min(boxW / p.cw, boxH / p.ch);                          // our own crop fitted in that, undistorted
    const ww = Math.max(1, Math.round(p.cw * s)), hh = Math.max(1, Math.round(p.ch * s));
    const key = ww + "x" + hh;
    if (host._vineKey === key) return;                       // same size: leave the one that is there
    host._vineKey = key;
    host.dataset.root = p.root;
    if (!host.dataset.ink) host.dataset.ink = INK;
    if (!host.dataset.glyph) host.dataset.glyph = GLYPH;
    host._grow = host._q || 0;                               // textify starts it where this host already is
    const o = await textify(host, p.cv, ww, hh, false, hh > 300 ? 5 : 4.2, 5152);
    if (!o) return;
    /* textify sizes its canvas in device pixels and leaves the CSS size to the page (index.html's
       .fw-vine canvas is width/height 100%). Ours is centred at its own size, so set it here, or a
       2x screen draws the flower at twice the size. */
    const cv = host.querySelector("canvas");
    if (cv) {
      cv.style.width = ww + "px"; cv.style.height = hh + "px";
      cv.style.transform = (dx || dy) ? "translate(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px)" : "";
    }
    host._vine = o;
    host.classList.add("live");                              // only now does the PNG behind it go
    o.grow = -1; o.setGrow(host._q || 0);
  }

  /* It grows once, when it has come properly into view; reduced motion simply has it whole. */
  function watch(host) {
    if (reduce.matches) { host._q = 1; return; }
    const io = new IntersectionObserver((es) => {
      for (const e of es) {
        if (!e.isIntersecting || host._grown) continue;
        host._grown = true;
        io.disconnect();
        const t0 = performance.now();
        (function step(t) {
          const q = Math.min(1, (t - t0) / GROW_MS);
          host._q = q < 1 ? 1 - Math.pow(1 - q, 2) : 1;       // eases out, as the home page's does
          if (host._vine) host._vine.setGrow(host._q);
          if (q < 1) requestAnimationFrame(step);
        })(t0);
      }
    }, { threshold: 0.25 });
    io.observe(host);
  }

  function init() {
    /* The home page grows its own vines (buildFwVine, buildFtVine on its own clock) and lends the
       engine out as window.__textify. Its hosts carry .vine too, so stand well clear of them:
       touching them would overwrite their root and fight their frame loop. */
    if (window.__textify) return;
    const hosts = [...document.querySelectorAll(".vine")]
      .filter((h) => !h.classList.contains("fw-vine") && !h.classList.contains("ab-bloom") && !h.classList.contains("bloom"));
    if (!hosts.length) return;
    hosts.forEach((h) => { watch(h); build(h).catch(() => {}); });
    let t;
    addEventListener("resize", () => {
      clearTimeout(t);
      t = setTimeout(() => {
        DPR = Math.min(window.devicePixelRatio || 1, 2);
        hosts.forEach((h) => build(h).catch(() => {}));
      }, 200);
    });
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();

/* Button hover (the owner's asking, 21 Nov 2026): the word roll that Info's View all work had first,
   now on every button and footer link. The label sits in a one-line window (.roll) with a copy under
   it; on hover the pair slides up half its height, so the copy rolls in. Same ease and time as
   about.html's .btn (0.35s, cubic-bezier(.22, 1, .36, 1)). The window takes the label's own line-height
   (Koulen's normal is about 1.82em), never a fixed one: a fixed 1.15 left View all work's words high
   with a gap under them. An arrow beside a label (.nudge) moves a
   few px the way it points: → right, ↗ up and right. Markup:
   <a><span class="roll"><span class="roll-in"><span>Word</span><span aria-hidden="true">Word</span></span></span>
      <span class="nudge" aria-hidden="true">&rarr;</span></a>
   Reduced motion: nothing moves; the colour changes stay. */
(function () {
  const st = document.createElement("style");
  st.textContent =
    ".roll { display: inline-block; vertical-align: top; overflow: hidden; }" +   /* one line of the label's own line-height, so the button keeps its size and balance */
    ".roll > .roll-in { display: block; position: relative; transition: transform 0.35s cubic-bezier(.22, 1, .36, 1); }" +
    ".roll > .roll-in > span { display: block; }" +
    ".roll > .roll-in > span + span { position: absolute; left: 0; top: 100%; }" +   /* the copy waits just under the window */
    "a:focus-visible .roll > .roll-in { transform: translateY(-100%); }" +
    /* hover only where there is a real pointer: on a touch screen (an iPad) a tap would leave the label
       rolled up until the next tap elsewhere */
    "@media (hover: hover) { a:hover .roll > .roll-in { transform: translateY(-100%); } a:hover .nudge { transform: translateX(4px); } a:hover .nudge.ne { transform: translate(2px, -2px); } }" +
    ".nudge { display: inline-block; transition: transform 0.35s cubic-bezier(.22, 1, .36, 1); }" +
    "a:focus-visible .nudge { transform: translateX(4px); }" +
    "a:focus-visible .nudge.ne { transform: translate(2px, -2px); }" +
    "@media (prefers-reduced-motion: reduce) { .roll > .roll-in, .nudge { transition: none; } a:hover .roll > .roll-in, a:focus-visible .roll > .roll-in, a:hover .nudge, a:focus-visible .nudge { transform: none; } }";
  document.head.appendChild(st);
})();
