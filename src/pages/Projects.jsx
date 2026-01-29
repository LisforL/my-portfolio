import { projects } from "../data/projects";
import { useEffect } from "react";
import "../styles/projects.css";

const Projects = () => {
  useEffect(() => {
    document.body.classList.add("dark-page");

    const items = document.querySelectorAll("[data-project]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      {
        rootMargin: "-30% 0px -40% 0px", // controls when index fades in/out
        threshold: 0,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      document.body.classList.remove("dark-page");
      observer.disconnect();
    };
  }, []);

  return (
    <section className="projects">
      <div className="projects-grid">
        {/* LEFT COLUMN */}
        <div className="projects-left">
          <h1 className="projects-title">PROJECTS</h1>
        </div>

        {/* RIGHT COLUMN */}
        <div className="projects-right">
          {/* Intro text */}
          <p className="projects-intro">
            I create digital experiences that spark curiosity and leave a mark.
            Every interface I design is a space where creativity and
            functionality meet to tell unique stories
          </p>

          {/* Project list */}
          <div className="projects-list">
            {projects.map((project) => (
              <div
                className="project-row-wrapper"
                key={project.id}
                data-project
              >
                <div className="project-row">
                  {/* Index */}
                  <div className="project-index">{project.id}.</div>

                  {/* Card */}
                  <div className="project-content">
                    <div className="project-image-wrapper">
                      <img
                        src={project.bgImage}
                        alt=""
                        className="project-image-bg"
                      />
                      <img
                        src={project.mockupImage}
                        alt={project.title}
                        className="project-image-mockup"
                      />
                    </div>

                    <div className="project-meta">
                      <div className="project-meta-left">
                        <span className="project-tag">{project.type}</span>
                        <span className="project-title">{project.title}</span>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action"
                      >
                        <img
                          src="/Figma.png"
                          alt="Figma"
                          className="figma-icon"
                        />
                        <span className="project-action-text wave-text">
                          {"Open Prototype in Figma".split("").map((char, i) => (
                            <span
                              key={i}
                              className="char"
                              style={{ "--i": i }}
                            >
                              {char === " " ? "\u00A0" : char}
                            </span>
                          ))}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
