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
