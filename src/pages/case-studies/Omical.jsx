import { useState } from "react";
import { omical } from "../../data/caseStudies/omical";
import "../../styles/case-study.css";

const ScreensExplorer = ({ screens }) => {
  const [screenId, setScreenId] = useState(screens.items[0].id);
  const current = screens.items.find((s) => s.id === screenId) || screens.items[0];

  return (
    <div className="cs-om-screens-layout">
      <div className="cs-om-screens-nav">
        {screens.groups.map((g) => (
          <div key={g.label}>
            <div className="cs-om-screens-group-label">{g.label}</div>
            <div className="cs-om-screens-items">
              {g.ids.map((id) => {
                const s = screens.items.find((it) => it.id === id);
                const active = id === screenId;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setScreenId(id)}
                    className={`cs-om-screens-item ${active ? "cs-om-screens-item-active" : ""}`}
                  >
                    <span className="cs-om-screens-item-num">{s.num}</span>
                    <span className="cs-om-screens-item-name">{s.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="cs-om-screens-viewer">
        <div className="cs-om-screens-viewer-head">
          <div className="cs-om-screens-viewer-title">
            <span className="cs-om-screens-viewer-num">{current.num}</span>
            <span className="cs-om-screens-viewer-name">{current.name}</span>
          </div>
          <span className="cs-om-screens-viewer-meta">{current.meta}</span>
        </div>
        <div className="cs-om-screens-frame">
          <img src={`${screens.imageBase}${current.image}`} alt={`${current.name} screen`} />
        </div>
        <div className="cs-om-screens-hint">Scroll inside the frame to see the full page.</div>
        <p className="cs-om-screens-lead">{current.lead}</p>
      </div>
    </div>
  );
};

const OmicalCaseStudy = () => {
  return (
    <main className="case-study">
      <section className="cs-hero">
        <div className="cs-inner">
          <h1 className="cs-hero-title">
            {omical.title} <em>{omical.titleAccent}</em>
          </h1>
          <p className="cs-hero-subhead">{omical.subtitle}</p>
          <a href={omical.prototypeLink} target="_blank" rel="noreferrer" className="cs-hero-link">
            View the prototype ↗
          </a>

          <div className="cs-meta">
            {omical.meta.map((m) => (
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
          <img src={omical.coverImage} alt="Omical Hotel homepage hero" />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[01]</div>
          <h2 className="cs-h2">
            {omical.brand.heading} <span className="cs-h2-dim">{omical.brand.headingRest}</span>
          </h2>
          <p className="cs-lead">{omical.brand.intro}</p>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">{omical.brand.mark.label}</div>
            <div className="cs-om-mark-grid">
              <div className="cs-om-mark-logo">
                <img src={omical.brand.mark.image} alt="Omical logo: hatched arch above the wordmark" />
              </div>
              <div className="cs-om-mark-card">
                <div className="cs-om-mark-title">{omical.brand.mark.title}</div>
                <p className="cs-om-mark-body">{omical.brand.mark.body}</p>
              </div>
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">{omical.brand.grid.label}</div>
            <div className="cs-om-grid-demo">
              <div>
                <div className="cs-om-grid-title">{omical.brand.grid.desktop.title}</div>
                <div className="cs-om-grid-boxes">
                  {Array.from({ length: omical.brand.grid.desktop.cols }).map((_, i) => (
                    <div key={i} className="cs-om-grid-box" />
                  ))}
                </div>
                <div className="cs-om-grid-caption">{omical.brand.grid.desktop.caption}</div>
              </div>
              <div>
                <div className="cs-om-grid-title">{omical.brand.grid.mobile.title}</div>
                <div className="cs-om-grid-boxes cs-om-grid-boxes-mobile">
                  {Array.from({ length: omical.brand.grid.mobile.cols }).map((_, i) => (
                    <div key={i} className="cs-om-grid-box" />
                  ))}
                </div>
                <div className="cs-om-grid-caption">{omical.brand.grid.mobile.caption}</div>
              </div>
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">{omical.brand.palette.label}</div>
            <div className="cs-mv-sg-palette">
              {omical.brand.palette.swatches.map((c) => (
                <div key={c.hex}>
                  <div className="cs-mv-sg-swatch" style={{ background: c.hex }} />
                  <div className="cs-mv-sg-swatch-hex">{c.hex}</div>
                  <div className="cs-mv-sg-swatch-label">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">{omical.brand.type.label}</div>
            <div className="cs-om-type-table">
              <div className="cs-om-type-head">
                <span>Role</span>
                <span>Family</span>
                <span>Spec (mobile base)</span>
              </div>
              {omical.brand.type.rows.map((t) => (
                <div key={t.role} className="cs-om-type-row">
                  <div className="cs-om-type-role">{t.role}</div>
                  <div
                    className={`cs-om-type-family ${t.plain ? "cs-om-type-family-plain" : ""} ${
                      t.uppercase ? "cs-om-type-family-upper" : ""
                    }`}
                  >
                    {t.family}
                  </div>
                  <div className="cs-om-type-spec">
                    {t.spec}
                    <br />
                    {t.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">{omical.brand.buttons.label}</div>
            <div className="cs-om-buttons-grid">
              <div className="cs-om-buttons-panel cs-om-buttons-panel-dark">
                <div className="cs-om-buttons-panel-label">{omical.brand.buttons.dark.label}</div>
                <div className="cs-om-button-row">
                  {omical.brand.buttons.dark.states.map((b) => (
                    <div key={b.state} className="cs-om-button-item">
                      <div className="cs-om-button-pill" style={b.style}>
                        {b.text}
                      </div>
                      <div className="cs-om-button-state-label">{b.state}</div>
                    </div>
                  ))}
                </div>
                <div className="cs-om-buttons-panel-label" style={{ marginBottom: "1rem" }}>
                  {omical.brand.buttons.dark.tabLabel}
                </div>
                <div className="cs-om-tabs-row">
                  {omical.brand.buttons.dark.tabs.map((t) => (
                    <div key={t.text} className="cs-om-tab-pill" style={t.style}>
                      {t.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs-om-buttons-panel cs-om-buttons-panel-light">
                <div className="cs-om-buttons-panel-label">{omical.brand.buttons.light.label}</div>
                <div className="cs-om-button-row">
                  {omical.brand.buttons.light.states.map((b) => (
                    <div key={b.state} className="cs-om-button-item">
                      <div className="cs-om-button-pill" style={b.style}>
                        {b.text}
                      </div>
                      <div className="cs-om-button-state-label">{b.state}</div>
                    </div>
                  ))}
                </div>
                <div className="cs-om-buttons-panel-label" style={{ marginBottom: "1rem" }}>
                  {omical.brand.buttons.light.stepLabel}
                </div>
                <div className="cs-om-steps-row">
                  {omical.brand.buttons.light.steps.map((s) => (
                    <div key={s.text} style={{ color: s.color }}>
                      {s.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="cs-mv-sg-row">
            <div className="cs-mv-sg-label">{omical.brand.icons.label}</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="cs-om-icon-grid">
                <div className="cs-om-icon-card">
                  <div className="cs-om-icon-card-label">{omical.brand.icons.desktop.title}</div>
                  <div className="cs-om-icon-frame">
                    <img src={omical.brand.icons.desktop.image} alt="Amenity icon set — desktop" />
                  </div>
                  <div className="cs-om-icon-caption">
                    {omical.brand.icons.desktop.caption}
                    <br />
                    {omical.brand.icons.desktop.sub}
                  </div>
                </div>
                <div className="cs-om-icon-card">
                  <div className="cs-om-icon-card-label">{omical.brand.icons.mobile.title}</div>
                  <div className="cs-om-icon-frame">
                    <img src={omical.brand.icons.mobile.image} alt="Amenity icon set — mobile" />
                  </div>
                  <div className="cs-om-icon-caption">
                    {omical.brand.icons.mobile.caption}
                    <br />
                    {omical.brand.icons.mobile.sub}
                  </div>
                </div>
              </div>
              <div className="cs-om-icon-interactive">
                <div className="cs-om-icon-interactive-label">{omical.brand.icons.interactive.label}</div>
                <div className="cs-om-icon-states-grid">
                  {omical.brand.icons.interactive.groups.map((g) => (
                    <div key={g.name} className="cs-om-icon-state-col">
                      <div className="cs-om-icon-state-row">
                        {g.states.map((s, i) => (
                          <div key={i} className="cs-om-icon-circle" style={s.style}>
                            {s.glyph}
                          </div>
                        ))}
                      </div>
                      <div className="cs-om-icon-state-name">{g.name}</div>
                    </div>
                  ))}
                </div>
                <div className="cs-om-icon-interactive-caption">{omical.brand.icons.interactive.caption}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[02]</div>
          <h2 className="cs-h2">
            {omical.screens.heading} <span className="cs-h2-dim">{omical.screens.headingRest}</span>
          </h2>
          <p className="cs-lead">{omical.screens.intro}</p>

          <div style={{ marginTop: "3rem" }}>
            <ScreensExplorer screens={omical.screens} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default OmicalCaseStudy;
