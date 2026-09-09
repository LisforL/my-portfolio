import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/case-study.css";

const MoreProjects = ({ current }) => {
  const items = projects.filter((p) => p.caseStudyPath !== current);
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [items.length]);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".cs-more-card");
    const step = card ? card.getBoundingClientRect().width + 28 : el.clientWidth / 3;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="cs-section">
      <div className="cs-inner cs-more-section-inner">
        <div className="cs-more-head">
          <h2 className="cs-h2" style={{ margin: 0 }}>
            <span className="cs-h2-dim">More</span> projects
          </h2>
          <div className="cs-more-nav">
            <button
              type="button"
              className="cs-more-nav-btn"
              onClick={() => scrollByCards(-1)}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous projects"
            >
              ←
            </button>
            <button
              type="button"
              className="cs-more-nav-btn"
              onClick={() => scrollByCards(1)}
              disabled={!canScrollRight}
              aria-label="Scroll to more projects"
            >
              →
            </button>
          </div>
        </div>

        <div className="cs-more-track" ref={trackRef}>
          {items.map((p) => (
            <Link key={p.title} to={p.caseStudyPath || "/projects"} className="cs-more-card">
              <div className="cs-more-image">
                <img src={p.shotImage} alt={p.title} />
              </div>
              <div className="cs-more-row">
                <span className="cs-more-title">{p.title}</span>
                <span className="cs-more-tag">{p.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
