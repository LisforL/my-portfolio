import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects, primaryLabelFor } from "../data/projects";
import "../styles/projects.css";

const Projects = () => {
  useEffect(() => {
    document.body.classList.add("dark-page");
    return () => document.body.classList.remove("dark-page");
  }, []);

  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-header-grid">
          <div />
          <p className="projects-lead">
            Six projects across shipped products, prototypes, and self-directed concepts.
            <br />
            Each case study shows the problem, process, and design decisions behind my work.
          </p>
        </div>
      </header>

      <div className="projects-list">
        {projects.map((project) => {
          const isLive = project.status === "Live";
          const showPrimary = project.title !== "Nomu" && project.href;
          const caseStudyHref = project.href || `#pj-${project.n}`;

          return (
            <div key={project.title} className="project-row">
              <div className="project-row-index">
                <div className="project-row-num">{project.n}.</div>
                <div className={`project-row-status ${isLive ? "project-row-status-live" : ""}`}>
                  {project.status}
                </div>
              </div>

              <div className="project-row-body">
                <div className="project-shot" style={{ background: project.tint }}>
                  {project.bgImage && (
                    <div className="project-shot-bg">
                      <img src={project.bgImage} alt="" />
                    </div>
                  )}
                  <div className="project-shot-frame">
                    {project.shotImage ? (
                      <img src={project.shotImage} alt={project.title} />
                    ) : (
                      <div className="project-shot-placeholder">{project.title[0]}</div>
                    )}
                  </div>
                </div>

                <div className="project-caption">
                  <div>
                    <div className="project-caption-title">{project.title}</div>
                    {showPrimary && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-primary-link"
                      >
                        {primaryLabelFor(project)}
                      </a>
                    )}
                    <p className="project-blurb">{project.blurb}</p>
                  </div>

                  <div className="project-actions">
                    {project.caseStudyPath ? (
                      <Link to={project.caseStudyPath} className="project-btn-solid">
                        Open case study →
                      </Link>
                    ) : (
                      <a
                        href={caseStudyHref}
                        target={project.href ? "_blank" : undefined}
                        rel={project.href ? "noreferrer" : undefined}
                        className="project-btn-solid"
                      >
                        Open case study →
                      </a>
                    )}
                    {project.altHref && (
                      <a
                        href={project.altHref}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn-outline"
                      >
                        {project.altLabel}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
