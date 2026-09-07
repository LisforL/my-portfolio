import { useState } from "react";
import { homeProjects } from "../../data/homeProjects";

const ProjectPlot = () => {
  const [active, setActive] = useState(0);
  const project = homeProjects[active];
  const isLive = project.status === "Live";

  return (
    <section id="work" className="home-section home-section-tint">
      <div className="home-section-inner">
        <div className="home-index">[01]</div>
        <div className="home-section-head">
          <h2 className="home-h2">
            Six projects, <span className="home-h2-dim">plotted honestly</span>
          </h2>
        </div>
        <p className="home-section-lead">
          Plotted by how much evidence it rests on, against how much of it is drawing. I am not
          evenly good at both.
        </p>

        <div className="plot-grid">
          <div className="plot-viz-col">
            <div className="plot-axis-label">More drawing ↑</div>
            <div className="plot-viz">
              {homeProjects.map((p, i) => {
                const flip = p.x > 55;
                return (
                  <button
                    key={p.title}
                    type="button"
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                    className={`plot-dot ${flip ? "plot-dot-flip" : ""} ${i === active ? "plot-dot-active" : ""}`}
                    style={{ left: `${10 + p.x * 0.8}%`, top: `${8 + p.y * 0.84}%` }}
                  >
                    <span className="plot-dot-num">{i + 1}</span>
                    <span className="plot-dot-label">
                      {p.title}
                      {i === 0 && active !== 0 && <span className="plot-dot-start">Start here</span>}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="plot-axis-row">
              <span>Little evidence</span>
              <span>More evidence →</span>
            </div>
          </div>

          <div className="plot-card">
            <div className="plot-card-shot">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="plot-card-shot-placeholder">{project.title[0]}</div>
              )}
            </div>
            <div className="plot-card-meta">
              <div className="plot-card-num-year">
                <span>[{project.num}]</span>
                <span>{project.year}</span>
              </div>
              <span className={`plot-card-status ${isLive ? "plot-card-status-live" : ""}`}>
                <span className="plot-card-status-dot" />
                {project.status}
              </span>
            </div>
            <h3 className="plot-card-title">{project.title}</h3>
            <p className="plot-card-blurb">{project.blurb}</p>
            <div className="plot-card-tags">
              {project.tags.map((t) => (
                <span key={t} className="plot-card-tag">{t}</span>
              ))}
            </div>
            <div className="plot-card-actions">
              <a href="#work" className="home-btn home-btn-solid home-btn-sm">
                Open case study →
              </a>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="home-btn home-btn-outline home-btn-sm">
                  {project.linkLabel} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPlot;
