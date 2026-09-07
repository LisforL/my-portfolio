import { useRef } from "react";

const Hero = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.transition = "transform .1s linear, box-shadow .3s";
    frame.style.transform =
      `rotateY(${(px * 18).toFixed(2)}deg) rotateX(${(-py * 14).toFixed(2)}deg) ` +
      `translate3d(${(px * -26).toFixed(1)}px, ${(py * -18).toFixed(1)}px, 0) scale(1.04)`;
    frame.style.boxShadow = `${(px * -30).toFixed(0)}px ${(py * -24 + 26).toFixed(0)}px 60px rgba(19,19,18,.22)`;
  };

  const handleMouseLeave = () => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.transition = "transform .6s cubic-bezier(.22,.61,.36,1), box-shadow .6s";
    frame.style.transform = "none";
    frame.style.boxShadow = "none";
  };

  return (
    <section className="home-hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <div className="home-eyebrow">[ UI/UX · animation · illustration ]</div>
          <h1 className="home-hero-name">Trinh Trinh Nguyen</h1>
          <p className="home-hero-intro">
            I am a product designer who turns complex problems into clear, engaging digital
            experiences — research, UX, UI, and visual design, connecting what users need to
            decisions a team can actually ship.
          </p>
          <div className="home-hero-actions">
            <a href="/projects" className="home-btn home-btn-solid">See selected work</a>
            <a href="#hello" className="home-btn home-btn-outline">Résumé (PDF)</a>
          </div>
        </div>

        <div className="home-hero-portrait-col">
          <div className="home-hero-portrait-stage">
            <div ref={frameRef} className="home-hero-portrait-frame">
              <img src="/profile.png" alt="Trinh Trinh Nguyen" />
            </div>
          </div>
          <div className="home-hero-caption">Hello — that's me / my work</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
