/* Page changes, as on the reference site (mason-wong.com): leaving, a panel in the next page's ground
   colour rises from the foot of the screen and covers it; arriving, the panel lifts away (on a case
   page the page itself rises instead: see project.html's entrance). One file, included by every page. */
(function () {
  const WINE = "#351E28", PAPER = "#faf8f5";
  const ground = (url) => (/work\.html/.test(new URL(url, location.href).pathname) ? WINE : PAPER);   /* the work page opens on wine, the rest on paper */
  const st = document.createElement("style");
  st.textContent = "#pt{position:fixed;left:0;right:0;top:0;height:100vh;z-index:2147483000;pointer-events:none;transform:translateY(100%);}" +
    "#pt.cover{transform:none;transition:transform .65s cubic-bezier(.65,0,.35,1);}" +
    "#pt.lift{transform:translateY(-100%);transition:transform .8s cubic-bezier(.65,0,.35,1);}";
  document.head.appendChild(st);
  const pt = document.createElement("div"); pt.id = "pt";
  const add = () => document.body.appendChild(pt);
  document.body ? add() : document.addEventListener("DOMContentLoaded", add);

  /* arriving after one of our own page changes: start covered, then lift (a case page shows at once,
     its own entrance does the rest) */
  const from = sessionStorage.getItem("pt"); sessionStorage.removeItem("pt");
  if (from) {
    pt.style.background = from; pt.style.transition = "none"; pt.style.transform = "none";
    const go = () => {
      if (document.documentElement.classList.contains("pt-case")) { pt.style.transform = "translateY(100%)"; return; }
      requestAnimationFrame(() => requestAnimationFrame(() => { pt.style.transition = ""; pt.style.transform = ""; pt.className = "lift"; }));
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", go) : go();
  }

  /* leaving: the panel rises, then the next page loads */
  let busy = false;
  window.ptGo = function (url) {
    if (busy) return; busy = true;
    if (/project\.html/.test(url)) { location.href = url; return; }   /* into a case page: no panel, the page's own opening is the change, as the reference's */
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
  /* coming back with the browser's back button from its page memory: clear the panel */
  addEventListener("pageshow", (e) => { if (e.persisted) { busy = false; pt.className = ""; pt.style.transform = "translateY(100%)"; } });
})();
