import { useEffect, useRef } from "react";

const DRAWINGS = [
  { src: "/illustrations/character-01.png", alt: "Character 01" },
  { src: "/illustrations/character-02.png", alt: "Character 02" },
  { src: "/illustrations/character-03.png", alt: "Character 03" },
  { src: "/illustrations/character-04.png", alt: "Character 04" },
];

/* Mouse-reactive dot grid drawn on a canvas layered over the drawings */
const useInkCanvas = (stageRef, canvasRef) => {
  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = canvas.getContext("2d");
    let target = null;
    let cur = null;
    let raf = null;
    let visible = true;

    const resize = () => {
      const r = stage.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(r.width * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
    };
    resize();

    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      const fx = (e.clientX - r.left) / Math.max(1, r.width);
      const fy = (e.clientY - r.top) / Math.max(1, r.height);
      target = { x: fx * canvas.width, y: fy * canvas.height };
      if (!cur) cur = { ...target };
    };
    const onLeave = () => { target = null; };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    const step = 17 * dpr;
    const reach = 150 * dpr;
    let settled = false;

    const tick = () => {
      if (!visible) { raf = requestAnimationFrame(tick); return; }
      if (!target && settled) { raf = requestAnimationFrame(tick); return; }
      if (!target) { settled = true; cur = null; } else { settled = false; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (target) {
        cur = cur || { ...target };
        cur.x += (target.x - cur.x) * 0.18;
        cur.y += (target.y - cur.y) * 0.18;
      }
      const near = target ? cur : null;

      for (let y = step * 0.5; y < canvas.height; y += step) {
        for (let x = step * 0.5; x < canvas.width; x += step) {
          let t = 0;
          if (near) {
            const d = Math.hypot(x - near.x, y - near.y);
            t = Math.max(0, 1 - d / reach);
          }
          const rad = (0.9 + t * t * 3.4) * dpr;
          ctx.fillStyle = t > 0.55
            ? `rgba(255,82,168,${(0.18 + t * 0.32).toFixed(3)})`
            : `rgba(19,19,18,${(0.10 + t * 0.22).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, rad, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stageRef, canvasRef]);
};

const DrawForFun = () => {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  useInkCanvas(stageRef, canvasRef);

  return (
    <section id="ink" className="home-section home-section-tint">
      <div className="home-section-inner ink-grid">
        <div>
          <div className="home-eyebrow">Also, off the clock</div>
          <h3 className="ink-title">
            I draw for <span className="home-h2-dim">fun</span>
          </h3>
          <p className="ink-lead">
            A hobby, not a service — though the product work keeps borrowing from it.{" "}
            <a href="/illustration">See more ↗</a>
          </p>
        </div>

        <div ref={stageRef} className="ink-stage">
          <canvas ref={canvasRef} className="ink-canvas" aria-hidden="true" />
          <div className="ink-images">
            {DRAWINGS.map((d) => (
              <div key={d.src} className="ink-image-frame">
                <img src={d.src} alt={d.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrawForFun;
