import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { mamviet } from "../../data/caseStudies/mamviet";
import "../../styles/case-study.css";

const ScreensGallery = ({ groups, imageBase }) => {
  const flat = groups.flatMap((g) => g.items);
  const [pageId, setPageId] = useState(flat[0].id);
  const current = flat.find((p) => p.id === pageId) || flat[0];
  const currentIndex = flat.indexOf(current);
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="cs-mv-screens-layout">
      <div className="cs-mv-screens-nav">
        {groups.map((g) => (
          <div key={g.label} className="cs-mv-screens-group">
            <div className="cs-mv-screens-group-label">{g.label}</div>
            <div className="cs-mv-screens-items">
              {g.items.map((it) => {
                const num = pad(flat.indexOf(it) + 1);
                const active = it.id === pageId;
                return (
                  <div
                    key={it.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setPageId(it.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setPageId(it.id);
                      }
                    }}
                    className={`cs-mv-screens-item ${active ? "cs-mv-screens-item-active" : ""}`}
                  >
                    <span className="cs-mv-screens-item-num">{num}</span>
                    <span className="cs-mv-screens-item-label">{it.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="cs-mv-screens-viewer">
        <div className="cs-mv-screens-viewer-head">
          <div className="cs-mv-screens-viewer-title">
            <span className="cs-mv-screens-viewer-num">{pad(currentIndex + 1)}</span>
            <span className="cs-mv-screens-viewer-name">{current.title}</span>
          </div>
          <span className="cs-mv-screens-viewer-tag">Desktop · 1440</span>
        </div>
        <div className="cs-mv-screens-frame">
          <img src={`${imageBase}${current.id}.jpg`} alt={current.title} />
        </div>
        <div className="cs-mv-screens-hint">Scroll inside the frame to see the full page.</div>
        <p className="cs-mv-screens-note">{current.note}</p>
      </div>
    </div>
  );
};

const MamVietCaseStudy = () => {
  return (
    <main className="case-study">
      <section className="cs-hero">
        <div className="cs-inner">
          <h1 className="cs-hero-title">
            {mamviet.title} <em>{mamviet.titleAccent}</em>
          </h1>
          <p className="cs-hero-subhead">{mamviet.subtitle}</p>
          <a href={mamviet.prototypeLink} target="_blank" rel="noreferrer" className="cs-hero-link">
            View the prototype ↗
          </a>

          <div className="cs-meta">
            {mamviet.meta.map((m) => (
              <div key={m.label}>
                <div className="cs-meta-label">{m.label}</div>
                <div className="cs-meta-value">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner cs-mv-cover">
          <img src={mamviet.coverImage} alt="Mâm Việt — Vietnamese cuisine website design" />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[01]</div>
          <h2 className="cs-h2">
            {mamviet.overview.heading} <span className="cs-h2-dim">{mamviet.overview.headingRest}</span>
          </h2>

          <div className="cs-mv-overview-grid">
            {mamviet.overview.cards.map((c) => (
              <div key={c.title} className="cs-mv-overview-card">
                <div className="cs-mv-overview-title">{c.title}</div>
                <p className="cs-mv-overview-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[02]</div>
          <h2 className="cs-h2">
            {mamviet.challenge.heading} <span className="cs-h2-dim">{mamviet.challenge.headingRest}</span>
          </h2>
          <p className="cs-lead">{mamviet.challenge.intro}</p>

          <div className="cs-mv-problem-grid">
            {mamviet.challenge.problems.map((p) => (
              <div key={p.n} className="cs-mv-problem-card">
                <div>
                  <div className="cs-mv-problem-num">Problem {p.n}</div>
                  <div className="cs-mv-problem-title">{p.title}</div>
                </div>
                <div className="cs-mv-problem-broke">
                  <div className="cs-mv-problem-broke-label">What broke</div>
                  <p className="cs-mv-problem-broke-body">{p.broken}</p>
                  <div className="cs-mv-problem-sources">
                    {p.sources.length > 1 ? "Sources" : "Source"} —{" "}
                    {p.sources.map((s, i) => (
                      <span key={s.href}>
                        <a href={s.href} target="_blank" rel="noreferrer">
                          {s.label}
                        </a>
                        {i < p.sources.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="cs-mv-problem-design">
                  <div className="cs-mv-problem-design-label">So the design</div>
                  <p className="cs-mv-problem-design-body">{p.design}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[03]</div>
          <h2 className="cs-h2">
            {mamviet.users.heading} <span className="cs-h2-dim">{mamviet.users.headingRest}</span>
          </h2>
          <p className="cs-lead">{mamviet.users.intro}</p>

          <div className="cs-mv-users-grid">
            {mamviet.users.cards.map((u) => (
              <div key={u.title} className="cs-mv-user-card">
                <div className="cs-mv-user-head">
                  <span className="cs-mv-user-tag">{u.tag}</span>
                  <span className="cs-mv-user-title">{u.title}</span>
                </div>
                <div className="cs-mv-user-rows">
                  <div className="cs-mv-user-row-label">Wants</div>
                  <p className="cs-mv-user-row-value">{u.wants}</p>
                  <div className="cs-mv-user-row-label cs-mv-user-row-label-cost">Blocked by</div>
                  <p className="cs-mv-user-row-value">{u.blocked}</p>
                  <div className="cs-mv-user-row-label">Site enables</div>
                  <p className="cs-mv-user-row-value cs-mv-user-row-value-enable">{u.enables}</p>
                </div>
                <div className="cs-mv-user-flow">{u.flow}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[04]</div>
          <h2 className="cs-h2">
            {mamviet.structure.heading} <span className="cs-h2-dim">{mamviet.structure.headingRest}</span>
          </h2>
          <p className="cs-lead">{mamviet.structure.intro}</p>

          <div className="cs-mv-sitemap">
            <div className="cs-mv-sitemap-root">
              <div className="cs-mv-sitemap-root-pill">
                <span>Homepage</span>
              </div>
            </div>
            <div className="cs-mv-sitemap-connector">
              <div className="cs-mv-sitemap-connector-v" />
              <div className="cs-mv-sitemap-connector-h" />
            </div>
            <div className="cs-mv-sitemap-branches">
              {mamviet.structure.branches.map((b) => (
                <div key={b.title}>
                  <div className="cs-mv-sitemap-tick" />
                  <div
                    className={`cs-mv-sitemap-branch ${b.current ? "cs-mv-sitemap-branch-current" : ""} ${
                      b.dashed ? "cs-mv-sitemap-branch-dashed" : ""
                    }`}
                  >
                    <div className="cs-mv-sitemap-branch-title">{b.title}</div>
                    <div className="cs-mv-sitemap-branch-meta">{b.meta}</div>
                    {b.items && (
                      <div className="cs-mv-sitemap-branch-items">
                        {b.items.map((it) => (
                          <div key={it}>{it}</div>
                        ))}
                      </div>
                    )}
                    {b.note && <p className="cs-mv-sitemap-branch-note">{b.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[05]</div>
          <h2 className="cs-h2">
            {mamviet.flows.heading} <span className="cs-h2-dim">{mamviet.flows.headingRest}</span>
          </h2>
          <p className="cs-lead">{mamviet.flows.intro}</p>

          <div className="cs-mv-flow-legend">
            <div className="cs-mv-flow-legend-item">
              <div className="cs-mv-flow-legend-swatch" />
              <div className="cs-mv-flow-legend-text">Solid = step on the happy path</div>
            </div>
            <div className="cs-mv-flow-legend-item">
              <div className="cs-mv-flow-legend-swatch cs-mv-flow-legend-swatch-dashed" />
              <div className="cs-mv-flow-legend-text">Dashed = branch — red for an edge case, grey for a deliberate decision</div>
            </div>
          </div>

          {mamviet.flows.items.map((f) => (
            <div key={f.tag} className="cs-mv-flow-card">
              <div className="cs-mv-flow-head">
                <div className="cs-mv-flow-tag">{f.tag}</div>
                <div className="cs-mv-flow-title">{f.title}</div>
                <div className="cs-mv-flow-caption">{f.caption}</div>
              </div>
              <div className="cs-mv-flow-steps">
                {f.steps.map((s, i) => (
                  <Fragment key={s}>
                    <div className={`cs-mv-flow-step ${i === f.steps.length - 1 ? "cs-mv-flow-step-final" : ""}`}>
                      <div className="cs-mv-flow-step-text">{s}</div>
                    </div>
                    {i < f.steps.length - 1 && <div className="cs-mv-flow-arrow">→</div>}
                  </Fragment>
                ))}
              </div>
              <div className="cs-mv-flow-branch">
                <div className="cs-mv-flow-branch-connector" />
                <div className="cs-mv-flow-branch-box">
                  <div className={`cs-mv-flow-branch-label ${f.branchAccent ? "cs-mv-flow-branch-label-accent" : ""}`}>
                    {f.branchLabel}
                  </div>
                  <div className="cs-mv-flow-branch-body">{f.branchBody}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[06]</div>
          <h2 className="cs-h2">
            {mamviet.styleGuide.heading} <span className="cs-h2-dim">{mamviet.styleGuide.headingRest}</span>
          </h2>
          <p className="cs-lead">{mamviet.styleGuide.intro}</p>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">GRID</div>
            <div className="cs-mv-sg-grid-demo">
              <div>
                <div className="cs-mv-sg-grid-title">Desktop · 1440</div>
                <div className="cs-mv-sg-grid-boxes cs-mv-sg-grid-boxes-desktop">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="cs-mv-sg-grid-box" />
                  ))}
                </div>
                <div className="cs-mv-sg-grid-caption">{mamviet.styleGuide.grid.desktop}</div>
              </div>
              <div>
                <div className="cs-mv-sg-grid-title">Mobile · 375</div>
                <div className="cs-mv-sg-grid-boxes cs-mv-sg-grid-boxes-mobile">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="cs-mv-sg-grid-box" />
                  ))}
                </div>
                <div className="cs-mv-sg-grid-caption">{mamviet.styleGuide.grid.mobile}</div>
              </div>
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">Palette</div>
            <div className="cs-mv-sg-palette">
              {mamviet.styleGuide.palette.map((c) => (
                <div key={c.hex}>
                  <div className="cs-mv-sg-swatch" style={{ background: c.hex }} />
                  <div className="cs-mv-sg-swatch-hex">{c.hex}</div>
                  <div className="cs-mv-sg-swatch-label">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">TYPE</div>
            <div>
              <div className="cs-mv-sg-type-head">
                <span>ROLE</span>
                <span>FAMILY</span>
                <span>SPEC (DESKTOP BASE)</span>
              </div>
              {mamviet.styleGuide.type.map((t) => (
                <div key={t.role} className="cs-mv-sg-type-row">
                  <div className="cs-mv-sg-type-role">{t.role}</div>
                  <div
                    className={`cs-mv-sg-type-family ${!t.serif ? "cs-mv-sg-type-family-sans" : ""} ${
                      t.uppercase ? "cs-mv-sg-type-family-upper" : ""
                    }`}
                  >
                    {t.family}
                  </div>
                  <div className="cs-mv-sg-type-spec">
                    {t.spec}
                    <br />
                    {t.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">ORNAMENT</div>
            <div className="cs-mv-sg-ornament-grid">
              <div className="cs-mv-sg-ornament-card">
                <div className="cs-mv-sg-ornament-label">DECORATIVE ICONS</div>
                <div className="cs-mv-sg-ornament-frame">
                  <img src={mamviet.styleGuide.ornamentIcons} alt="Decorative icon set" />
                </div>
              </div>
              <div className="cs-mv-sg-ornament-card">
                <div className="cs-mv-sg-ornament-label">PATTERNS</div>
                <div className="cs-mv-sg-ornament-frame">
                  <img src={mamviet.styleGuide.patterns} alt="Bát Tràng pattern tiles" />
                </div>
              </div>
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">Icons</div>
            <div className="cs-mv-sg-ornament-grid">
              <div className="cs-mv-sg-ornament-card cs-mv-sg-ornament-card-dark">
                <div className="cs-mv-sg-ornament-label">Display icon · desktop</div>
                <div className="cs-mv-sg-ornament-frame cs-mv-sg-ornament-frame-sm">
                  <img src={mamviet.styleGuide.iconsDesktop} alt="Display icon · desktop" />
                </div>
                <div className="cs-mv-sg-ornament-note">
                  Frame 60 × 60 px
                  <br />
                  #072818 · Lục
                </div>
              </div>
              <div className="cs-mv-sg-ornament-card cs-mv-sg-ornament-card-dark">
                <div className="cs-mv-sg-ornament-label">Display icon · mobile</div>
                <div className="cs-mv-sg-ornament-frame cs-mv-sg-ornament-frame-sm">
                  <img src={mamviet.styleGuide.iconsMobile} alt="Amenity icon set — mobile" />
                </div>
                <div className="cs-mv-sg-ornament-note">
                  Frame 40 × 40 px
                  <br />
                  #072818 · Lục
                </div>
              </div>
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">IMAGE SHAPE</div>
            <div className="cs-mv-sg-image-shapes">
              <img
                src={mamviet.styleGuide.imageShapes}
                alt="Imagery shapes — cut-corner portrait, rounded card, Huế octagon, oval"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[07]</div>
          <h2 className="cs-h2">
            {mamviet.screens.heading} <span className="cs-h2-dim">{mamviet.screens.headingRest}</span>
          </h2>
          <p className="cs-lead">{mamviet.screens.intro}</p>

          <ScreensGallery groups={mamviet.screens.groups} imageBase={mamviet.screens.imageBase} />
        </div>
      </section>

      <section className="cs-section cs-mv-prototype-section">
        <div className="cs-inner">
          <div className="cs-index">[08]</div>
          <h2 className="cs-h2">
            {mamviet.prototype.heading} <span className="cs-h2-dim">{mamviet.prototype.headingRest}</span>
          </h2>
          <p className="cs-mv-prototype-intro">{mamviet.prototype.intro}</p>

          <div className="cs-mv-prototype-head">
            <div className="cs-mv-prototype-caption">{mamviet.prototype.caption}</div>
          </div>

          <div className="cs-mv-prototype-frame">
            <div className="cs-mv-prototype-placeholder">
              <div className="cs-mv-prototype-overlay">
                <div className="cs-mv-prototype-play">
                  <div className="cs-mv-prototype-play-triangle" />
                </div>
                <div className="cs-mv-prototype-play-label">Press to play the walkthrough</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner cs-more-section-inner">
          <div className="cs-more-head">
            <h2 className="cs-h2" style={{ margin: 0 }}>
              <span className="cs-h2-dim">{mamviet.moreProjects.heading}</span> {mamviet.moreProjects.headingRest}
            </h2>
            <Link to={mamviet.moreProjects.allLink} className="cs-more-link">
              {mamviet.moreProjects.allLabel}
            </Link>
          </div>

          <div className="cs-more-grid">
            {mamviet.moreProjects.items.map((p) => (
              <Link key={p.title} to={p.link} className="cs-more-card">
                <div className="cs-more-image">
                  <img src={p.image} alt={p.title} />
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
    </main>
  );
};

export default MamVietCaseStudy;
