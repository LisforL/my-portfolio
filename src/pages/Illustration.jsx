import { useEffect, useMemo, useRef, useState } from "react";
import { salonPieces, salonHeights, salonTilts, salonDrops } from "../data/illustration";
import "../styles/illustration.css";

const Illustration = () => {
  const total = salonPieces.length;
  const trackRef = useRef(null);
  const frameRefs = useRef([]);
  const panRef = useRef({ panning: false, moved: 0, v: 0, x0: 0, xLast: 0, tLast: 0, l0: 0 });
  const glideRaf = useRef(null);
  const snapTimeout = useRef(null);
  const scrubbingRef = useRef(false);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [brokenImages, setBrokenImages] = useState(() => new Set());

  const nearest = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let dist = Infinity;
    frameRefs.current.forEach((el, i) => {
      if (!el) return;
      const c = el.offsetLeft + el.offsetWidth / 2;
      if (Math.abs(c - mid) < dist) {
        dist = Math.abs(c - mid);
        best = i;
      }
    });
    return best;
  };

  const centre = (i, smooth = true) => {
    const track = trackRef.current;
    const el = frameRefs.current[i];
    if (!track || !el) return;
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    let left = el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
    left = Math.min(max, Math.max(0, left));
    const last = frameRefs.current.length - 1;
    if (i <= 0) left = 0;
    if (i >= last) left = max;
    const now = track.scrollLeft;
    if ((now <= 2 && left === 0) || (now >= max - 2 && left === max)) return;
    if (Math.abs(now - left) < 2) return;
    track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  };

  const snapSoon = () => {
    clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      if (!panRef.current.panning && !scrubbingRef.current) centre(nearest());
    }, 240);
  };

  const glide = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const step = () => {
      panRef.current.v *= 0.94;
      const next = track.scrollLeft + panRef.current.v;
      if (next <= 0 || next >= max) panRef.current.v = 0;
      track.scrollLeft = Math.min(max, Math.max(0, next));
      if (Math.abs(panRef.current.v) > 0.4) {
        glideRaf.current = requestAnimationFrame(step);
      } else {
        panRef.current.v = 0;
        centre(nearest());
      }
    };
    glideRaf.current = requestAnimationFrame(step);
  };

  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(320, el.clientWidth * 0.62), behavior: "smooth" });
  };

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? el.scrollLeft / max : 0;
    setProgress(pct);
    setActiveIndex(Math.min(total - 1, Math.round(pct * (total - 1))));
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    const room = (e.deltaY > 0 && el.scrollLeft < max - 1) || (e.deltaY < 0 && el.scrollLeft > 1);
    if (!room) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
    snapSoon();
  };

  const handlePanDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    // Let links/buttons inside the track (e.g. the "end of the wall" CTAs)
    // handle their own clicks instead of being captured into a drag.
    if (e.target.closest("a, button")) return;
    cancelAnimationFrame(glideRaf.current);
    clearTimeout(snapTimeout.current);
    const track = trackRef.current;
    panRef.current = {
      panning: true,
      moved: 0,
      v: 0,
      x0: e.clientX,
      xLast: e.clientX,
      // eslint-disable-next-line react-hooks/purity -- runs only inside this pointer event handler, never during render
      tLast: performance.now(),
      l0: track ? track.scrollLeft : 0,
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    if (e.pointerType === "mouse") e.preventDefault();
  };

  const handlePanMove = (e) => {
    const p = panRef.current;
    const track = trackRef.current;
    if (!p.panning || !track) return;
    const dx = e.clientX - p.x0;
    p.moved = Math.abs(dx);
    if (p.moved <= 2) return;
    // eslint-disable-next-line react-hooks/purity -- runs only inside this pointer event handler, never during render
    const now = performance.now();
    const dt = Math.max(8, now - p.tLast);
    const inst = ((p.xLast - e.clientX) / dt) * 16;
    p.v = p.v * 0.72 + inst * 0.28;
    p.xLast = e.clientX;
    p.tLast = now;
    track.scrollLeft = p.l0 - dx;
  };

  const handlePanUp = () => {
    const p = panRef.current;
    if (!p.panning) return;
    p.panning = false;
    if (p.moved <= 3) return;
    glide();
  };

  const handleCentreClick = (i) => () => {
    if (panRef.current.moved <= 3) centre(i);
  };

  const scrubTo = (e) => {
    const rail = e.currentTarget;
    const track = trackRef.current;
    if (!rail || !track) return;
    const r = rail.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    track.scrollLeft = pct * (track.scrollWidth - track.clientWidth);
  };

  const handleScrubDown = (e) => {
    scrubbingRef.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    scrubTo(e);
  };
  const handleScrubMove = (e) => {
    if (scrubbingRef.current) scrubTo(e);
  };
  const handleScrubUp = () => {
    scrubbingRef.current = false;
  };
  const handleScrubKey = (e) => {
    if (e.key === "ArrowRight") scrollByPage(1);
    if (e.key === "ArrowLeft") scrollByPage(-1);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") scrollByPage(1);
      if (e.key === "ArrowLeft") scrollByPage(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ticks = useMemo(
    () => salonPieces.map((_, k) => k / (total - 1) <= progress + 0.001),
    [progress, total]
  );

  return (
    <main className="salon">
      <div className="salon-room">
        <div className="salon-wall-label">
          <div>
            <div className="salon-eyebrow">PERSONAL WORK · 2023 — NOW</div>
            <h1 className="salon-title">
              "The<br />salon<br /><span className="salon-title-accent">hang"</span>
            </h1>
            <p className="salon-intro">
              Hung the old gallery way, crowded, uneven, no theme. Many drawings; scroll sideways
              and walk the wall.
            </p>
          </div>

          <div className="salon-controls">
            <div className="salon-counter">
              <div className="salon-counter-at">{String(activeIndex + 1).padStart(2, "0")}</div>
              <div className="salon-counter-of">of {String(total).padStart(2, "0")} on view</div>
            </div>

            <div
              role="slider"
              aria-label="Jump along the wall"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
              tabIndex={0}
              className="salon-scrub"
              onPointerDown={handleScrubDown}
              onPointerMove={handleScrubMove}
              onPointerUp={handleScrubUp}
              onKeyDown={handleScrubKey}
            >
              <div className="salon-scrub-rail">
                <div className="salon-scrub-fill" style={{ width: `${progress * 100}%` }} />
              </div>
              <div className="salon-scrub-ticks">
                {ticks.map((on, i) => (
                  <div key={i} className={`salon-tick ${on ? "salon-tick-on" : ""}`} />
                ))}
              </div>
            </div>

            <div className="salon-hint">Drag the bar — or grab the wall itself</div>
          </div>

          <div className="salon-nail" />
        </div>

        <div
          ref={trackRef}
          className="salon-track"
          onScroll={handleScroll}
          onWheel={handleWheel}
          onPointerDown={handlePanDown}
          onPointerMove={handlePanMove}
          onPointerUp={handlePanUp}
          onPointerCancel={handlePanUp}
          onDragStart={(e) => e.preventDefault()}
        >
          <div className="salon-track-inner">
            {salonPieces.map((p, i) => (
              <div
                key={p.slot}
                ref={(el) => {
                  frameRefs.current[i] = el;
                }}
                className="salon-piece"
                style={{ marginTop: salonDrops[i % salonDrops.length] }}
                onClick={handleCentreClick(i)}
              >
                <div
                  className="salon-frame"
                  style={{
                    height: salonHeights[i % salonHeights.length],
                    aspectRatio: p.ratio,
                    background: p.tint,
                    transform: `rotate(${salonTilts[i % salonTilts.length]})`,
                  }}
                >
                  <div className="salon-frame-inner">
                    {p.image && !brokenImages.has(i) ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        onError={() =>
                          setBrokenImages((prev) => new Set(prev).add(i))
                        }
                      />
                    ) : (
                      <span className="salon-frame-placeholder">{p.title}</span>
                    )}
                  </div>
                </div>
                <div className="salon-caption">
                  <div>
                    <div className="salon-piece-title">{p.title}</div>
                    <div className="salon-piece-meta">
                      {p.group} · {p.tool} · {p.year}
                    </div>
                  </div>
                  <div className="salon-piece-n">{String(i + 1).padStart(2, "0")}</div>
                </div>
              </div>
            ))}

            <div className="salon-end">
              <div className="salon-end-title">End of the wall.</div>
              <p className="salon-end-body">
                Made slowly, on purpose. The wall ends here, but the sketchbook doesn't.
              </p>
              <div className="salon-end-actions">
                <a href="mailto:trinhtrinhnguyen333@gmail.com" className="salon-end-btn-solid">
                  Interesting? Email me! →
                </a>
                <button
                  type="button"
                  className="salon-end-btn-outline"
                  onClick={() => trackRef.current?.scrollTo({ left: 0, behavior: "smooth" })}
                >
                  Back to the start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Illustration;
