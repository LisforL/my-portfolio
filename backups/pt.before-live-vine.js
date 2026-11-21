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
  addEventListener("keydown", () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } });
  addEventListener("mousedown", () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } });
})();

(function () {
  const WINE = "#351E28", PAPER = "#faf8f5";
  const VT = "CSSViewTransitionRule" in window;   /* cross-document view transitions */
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
