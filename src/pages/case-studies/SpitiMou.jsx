import { spitimou } from "../../data/caseStudies/spitimou";
import MoreProjects from "../../components/MoreProjects";
import "../../styles/case-study.css";

const TOK = {
  ink: "#131312",
  paper: "#F0EFEC",
  panel: "#EAE9E5",
  line: "#d6d5d0",
  lineStrong: "#a9a8a2",
  muted: "#8a8a85",
  accent: "#C0553F",
  ghost: "#cfcec9",
};

const WfNav = () => <div style={{ height: 14, background: TOK.ink, flexShrink: 0 }} />;

const WfToolbar = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      background: TOK.paper,
      flexShrink: 0,
    }}
  >
    <div style={{ width: 42, height: 11, background: TOK.ink, borderRadius: 2, flexShrink: 0 }} />
    <div style={{ flex: 1 }} />
    <div style={{ width: 20, height: 5, background: TOK.line, borderRadius: 2 }} />
    <div style={{ width: 26, height: 5, background: TOK.line, borderRadius: 2 }} />
    <div style={{ width: 18, height: 5, background: TOK.line, borderRadius: 2 }} />
    <div style={{ width: 22, height: 5, background: TOK.line, borderRadius: 2 }} />
    <div style={{ width: 18, height: 5, background: TOK.ink, borderRadius: 2 }} />
    <div style={{ height: 14, width: 28, borderRadius: 2, border: `1px solid ${TOK.ink}`, flexShrink: 0 }} />
  </div>
);

const WfFilterBar = ({ activeChip }) => (
  <div style={{ padding: "6px 14px 0", flexShrink: 0 }}>
    <div style={{ display: "flex", gap: 4, alignItems: "center", background: "#e4e3df", padding: 4, borderRadius: 6 }}>
      {["Purpose", "City", "Type", "Beds", "Price", "Ref. no."].map((f) => (
        <div
          key={f}
          style={{
            flex: 1,
            minWidth: 0,
            height: 16,
            borderRadius: 2,
            background: TOK.paper,
            border: `1px solid ${f === activeChip ? TOK.ink : "#e2e1dc"}`,
            display: "flex",
            alignItems: "center",
            padding: "0 4px",
            fontSize: 6,
            color: f === activeChip ? TOK.ink : "#c9c8c3",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {f === activeChip ? `${f} ✕` : f}
        </div>
      ))}
      <div style={{ flexShrink: 0, height: 16, padding: "0 5px", borderRadius: 2, border: `1px solid ${TOK.accent}`, color: TOK.accent, display: "flex", alignItems: "center", fontSize: 6 }}>
        RESET
      </div>
      <div style={{ flexShrink: 0, height: 16, padding: "0 6px", borderRadius: 2, background: TOK.accent, color: TOK.paper, display: "flex", alignItems: "center", fontSize: 6 }}>
        SEARCH
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "4px 2px 0", color: TOK.accent, fontSize: 6 }}>
      ADVANCED ▾
    </div>
  </div>
);

const WfCityTiles = () => (
  <div style={{ flex: 1, display: "flex", gap: 5, padding: "10px 14px 14px", minHeight: 0 }}>
    {["NICOSIA", "PAPHOS", "LARNACA", "FAMAGUSTA"].map((c) => (
      <div key={c} style={{ flex: 1, minWidth: 0, background: TOK.ghost, borderRadius: 2, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "36%",
            height: 14,
            padding: "0 5px",
            display: "flex",
            alignItems: "center",
            background: TOK.accent,
            color: TOK.paper,
            borderRadius: "0 4px 4px 0",
            whiteSpace: "nowrap",
            fontSize: 6,
          }}
        >
          {c}
        </div>
      </div>
    ))}
  </div>
);

const WfPropertyCard = () => (
  <div style={{ flex: 1, minWidth: 0, background: TOK.paper, border: "1px solid #e2e1dc", borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column" }}>
    <div style={{ background: TOK.ghost, flexShrink: 0, height: 30 }} />
    <div style={{ padding: 6, display: "flex", flexDirection: "column", gap: 4, minHeight: 0 }}>
      <div style={{ width: "85%", height: 6, background: TOK.ink, borderRadius: 2 }} />
      <div style={{ width: "60%", height: 4, background: TOK.line, borderRadius: 2 }} />
      <div style={{ height: 1, background: "#e2e1dc" }} />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 6.5, color: TOK.accent }}>
        <span style={{ width: "35%", height: 4, background: TOK.line, borderRadius: 2 }} />
        <span>€352,000</span>
      </div>
      <div style={{ display: "flex", border: "1px solid #e2e1dc", borderRadius: 2 }}>
        {["BED 2", "BATH 1", "FLR —", "m² 78"].map((s) => {
          const [k, v] = s.split(" ");
          return (
            <div key={s} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 1, padding: "4px 0", borderRight: "1px solid #e2e1dc", fontSize: 5.5 }}>
              <span style={{ color: "#c9c8c3" }}>{k}</span>
              <span style={{ color: TOK.muted }}>{v}</span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const wfFrameStyle = { position: "absolute", inset: 0, background: TOK.panel, display: "flex", flexDirection: "column", fontFamily: "'IBM Plex Mono', monospace", overflow: "hidden" };

const WfHomeSearch = () => (
  <div style={wfFrameStyle}>
    <WfNav />
    <WfToolbar />
    <WfFilterBar />
    <WfCityTiles />
  </div>
);

const WfSearchResults = () => (
  <div style={wfFrameStyle}>
    <WfNav />
    <WfToolbar />
    <WfFilterBar activeChip="City" />
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px 6px", flexShrink: 0, fontSize: 6.5 }}>
      <div style={{ height: 14, padding: "0 7px", borderRadius: 2, background: TOK.accent, color: TOK.paper, display: "flex", alignItems: "center" }}>GRID</div>
      <div style={{ height: 14, padding: "0 7px", borderRadius: 2, background: "#e4e3df", display: "flex", alignItems: "center", color: TOK.muted }}>MAP</div>
      <div style={{ flex: 1 }} />
      <div style={{ height: 14, padding: "0 7px", borderRadius: 2, background: TOK.accent, color: TOK.paper, display: "flex", alignItems: "center" }}>NEWEST</div>
      <div style={{ height: 14, padding: "0 7px", borderRadius: 2, background: "#e4e3df", display: "flex", alignItems: "center", color: TOK.muted }}>PRICE</div>
    </div>
    <div style={{ flex: 1, display: "flex", gap: 6, padding: "0 14px 14px", minHeight: 0 }}>
      <WfPropertyCard />
      <WfPropertyCard />
      <WfPropertyCard />
      <WfPropertyCard />
    </div>
  </div>
);

const WfPropertyDetail = () => (
  <div style={wfFrameStyle}>
    <WfNav />
    <WfToolbar />
    <div style={{ display: "flex", gap: 6, padding: "12px 14px 0", flexShrink: 0 }}>
      <div style={{ flex: 2, minWidth: 0, height: 44, background: TOK.ghost, borderRadius: 2 }} />
      <div style={{ flex: 1, minWidth: 0, height: 44, background: TOK.line, borderRadius: 2 }} />
      <div style={{ flex: 1, minWidth: 0, height: 44, background: TOK.line, borderRadius: 2 }} />
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px 6px", borderBottom: `1px solid ${TOK.line}`, flexShrink: 0, whiteSpace: "nowrap", fontSize: 6.5 }}>
      <span style={{ color: TOK.ink }}>OVERVIEW</span>
      <span style={{ color: TOK.muted }}>LOCATION</span>
      <span style={{ color: TOK.muted }}>DETAILS</span>
      <span style={{ color: TOK.muted }}>FEATURES</span>
      <div style={{ flex: 1 }} />
      <div style={{ height: 12, width: 16, borderRadius: 2, border: "1px solid #e2e1dc", background: TOK.paper }} />
      <div style={{ height: 12, width: 16, borderRadius: 2, border: "1px solid #e2e1dc", background: TOK.paper }} />
    </div>
    <div style={{ flex: 1, display: "flex", gap: 10, padding: "10px 14px 14px", minHeight: 0 }}>
      <div style={{ flex: 1.5, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ width: "34%", height: 7, background: TOK.ink, borderRadius: 2 }} />
        <div style={{ width: "100%", height: 4, background: TOK.line, borderRadius: 2 }} />
        <div style={{ width: "92%", height: 4, background: TOK.line, borderRadius: 2 }} />
        <div style={{ width: "64%", height: 4, background: TOK.line, borderRadius: 2 }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, background: TOK.paper, border: "1px solid #e2e1dc", borderRadius: 6, padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ width: "96%", height: 6, background: TOK.ink, borderRadius: 2 }} />
        <div style={{ color: TOK.accent, fontSize: 6.5, whiteSpace: "nowrap" }}>CYPRUS, LIMASSOL</div>
        <div style={{ color: TOK.ink, fontSize: 11 }}>€449,000</div>
        {["PROPERTY NO.", "TYPE", "OWNERSHIP"].map((l) => (
          <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6, borderBottom: "1px solid #e2e1dc", padding: "4px 0", fontSize: 6, color: "#a9a8a2" }}>
            <span>{l}</span>
            <span style={{ width: "26%", height: 4, background: TOK.line, borderRadius: 2 }} />
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ height: 18, borderRadius: 2, background: TOK.accent, color: TOK.paper, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 6.5, whiteSpace: "nowrap" }}>
          BOOK A MEETING
        </div>
      </div>
    </div>
  </div>
);

const WfDashboard = () => (
  <div style={wfFrameStyle}>
    <WfNav />
    <div style={{ flex: 1, display: "flex", gap: 10, padding: 14, minHeight: 0 }}>
      <div style={{ width: 78, flexShrink: 0, background: TOK.ink, borderRadius: 6, padding: "12px 9px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ width: "70%", height: 7, background: "#55554f", borderRadius: 2 }} />
        <div style={{ height: 6 }} />
        <div style={{ width: "100%", height: 5, background: "#3a3a37", borderRadius: 2 }} />
        <div style={{ width: "80%", height: 5, background: "#3a3a37", borderRadius: 2 }} />
        <div style={{ width: "90%", height: 5, background: "#3a3a37", borderRadius: 2 }} />
        <div style={{ width: "60%", height: 5, background: "#3a3a37", borderRadius: 2 }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: "34%", height: 9, background: TOK.ink, borderRadius: 2 }} />
          <div style={{ flex: 1 }} />
          <div style={{ height: 16, padding: "0 8px", borderRadius: 2, background: TOK.ink, color: TOK.paper, display: "flex", alignItems: "center", fontSize: 6, whiteSpace: "nowrap" }}>
            ADD PROPERTY
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, padding: "0 8px", letterSpacing: 0.5, fontSize: 6, color: TOK.muted }}>
          <span style={{ flex: 1 }}>LISTING</span>
          <span>STATUS</span>
        </div>
        {["LIVE", "DRAFT", "LIVE", "DRAFT"].map((status, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: TOK.paper, borderRadius: 2, padding: "6px 8px" }}>
            <div style={{ width: 22, height: 16, background: TOK.ghost, borderRadius: 2, flexShrink: 0 }} />
            <div style={{ width: "30%", height: 5, background: TOK.line, borderRadius: 2 }} />
            <div style={{ width: "16%", height: 5, background: "#e2e1dc", borderRadius: 2 }} />
            <div style={{ flex: 1 }} />
            <div
              style={{
                height: 12,
                borderRadius: 8,
                padding: "0 8px",
                display: "flex",
                alignItems: "center",
                fontSize: 5.5,
                whiteSpace: "nowrap",
                flexShrink: 0,
                background: status === "LIVE" ? TOK.accent : TOK.line,
                color: status === "LIVE" ? TOK.paper : TOK.muted,
              }}
            >
              {status}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const WfAddProperty = () => (
  <div style={wfFrameStyle}>
    <WfNav />
    <WfToolbar />
    <div style={{ display: "flex", gap: 8, padding: "10px 14px 0", flexShrink: 0 }}>
      {[
        { l: "BASICS", c: TOK.ink },
        { l: "DETAILS", c: TOK.ink },
        { l: "MEDIA", c: TOK.accent },
        { l: "REVIEW", c: TOK.line, muted: true },
      ].map((s) => (
        <div key={s.l} style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ height: 5, borderRadius: 2, background: s.c }} />
          <div style={{ color: s.muted ? "#a9a8a2" : TOK.muted, fontSize: 6, whiteSpace: "nowrap" }}>{s.l}</div>
        </div>
      ))}
    </div>
    <div style={{ flex: 1, margin: "10px 14px", background: TOK.paper, borderRadius: 6, padding: 11, display: "flex", flexDirection: "column", gap: 10, minHeight: 0 }}>
      <div style={{ display: "flex", gap: 8 }}>
        {[0, 1].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }}>
            <div style={{ width: "50%", height: 5, background: TOK.ghost, borderRadius: 2 }} />
            <div style={{ height: 18, borderRadius: 2, background: TOK.paper, border: `1px solid ${TOK.line}` }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {[0, 1].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }}>
            <div style={{ width: "50%", height: 5, background: TOK.ghost, borderRadius: 2 }} />
            <div style={{ height: 18, borderRadius: 2, background: TOK.paper, border: `1px solid ${TOK.line}` }} />
          </div>
        ))}
      </div>
      <div style={{ flex: 1, minHeight: 0, border: `1px dashed ${TOK.ghost}`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 6.5, color: TOK.muted }}>
        UPLOAD PHOTOS
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 14px 14px", flexShrink: 0 }}>
      <div style={{ height: 16, padding: "0 8px", borderRadius: 2, border: `1px solid ${TOK.ink}`, color: TOK.ink, display: "flex", alignItems: "center", fontSize: 6, whiteSpace: "nowrap" }}>
        SAVE AND EXIT
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ height: 16, padding: "0 10px", borderRadius: 2, background: TOK.accent, color: TOK.paper, display: "flex", alignItems: "center", fontSize: 6.5 }}>NEXT</div>
    </div>
  </div>
);

const WfPublished = () => (
  <div style={wfFrameStyle}>
    <WfNav />
    <WfToolbar />
    <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "10px 14px 0", background: TOK.ink, borderRadius: 6, padding: "9px 10px", flexShrink: 0 }}>
      <div style={{ height: 12, borderRadius: 8, padding: "0 8px", display: "flex", alignItems: "center", background: TOK.accent, color: TOK.paper, fontSize: 5.5, whiteSpace: "nowrap", flexShrink: 0 }}>
        PUBLISHED
      </div>
      <div style={{ width: "34%", height: 6, background: "#55554f", borderRadius: 2 }} />
      <div style={{ flex: 1 }} />
      <div style={{ height: 14, padding: "0 8px", borderRadius: 2, border: `1px solid ${TOK.paper}`, color: TOK.paper, display: "flex", alignItems: "center", fontSize: 6, flexShrink: 0 }}>
        EDIT
      </div>
    </div>
    <div style={{ flex: 1, display: "flex", gap: 10, padding: "10px 14px 14px", minHeight: 0 }}>
      <div style={{ flex: 1.3, minWidth: 0, background: TOK.ghost, borderRadius: 6 }} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ width: "70%", height: 9, background: TOK.ink, borderRadius: 2 }} />
        <div style={{ width: "100%", height: 5, background: TOK.line, borderRadius: 2 }} />
        <div style={{ width: "88%", height: 5, background: TOK.line, borderRadius: 2 }} />
        <div style={{ width: "92%", height: 5, background: TOK.line, borderRadius: 2 }} />
        <div style={{ width: "50%", height: 5, background: TOK.line, borderRadius: 2 }} />
        <div style={{ flex: 1 }} />
        <div style={{ height: 18, borderRadius: 2, background: TOK.paper, border: `1px solid ${TOK.line}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 6.5, whiteSpace: "nowrap" }}>
          VIEW AS BUYER
        </div>
      </div>
    </div>
  </div>
);

const WIREFRAME_COMPONENTS = {
  "01": WfHomeSearch,
  "02": WfSearchResults,
  "03": WfPropertyDetail,
  "04": WfDashboard,
  "05": WfAddProperty,
  "06": WfPublished,
};

const WireframeTile = ({ n, label, body }) => {
  const Wf = WIREFRAME_COMPONENTS[n];
  return (
    <div>
      <div className="cs-wf-frame" style={{ position: "relative" }}>
        <Wf />
      </div>
      <div className="cs-wf-caption">{n} &nbsp;{label}</div>
      <p className="cs-wf-desc">{body}</p>
    </div>
  );
};

const MapCell = ({ item }) => (
  <div className={`cs-map-tag ${item.primary ? "cs-map-tag-primary" : ""} ${item.accent ? "cs-map-tag-accent" : ""}`}>
    {item.label}
    {item.suffix && <span className="cs-map-tag-suffix">{item.suffix}</span>}
    {item.note && <span className="cs-map-tag-suffix">{item.note}</span>}
  </div>
);

const SpitiMouCaseStudy = () => {
  return (
    <main className="case-study">
      <section className="cs-hero">
        <div className="cs-inner">
          <h1 className="cs-hero-title">
            {spitimou.title} <em>{spitimou.titleAccent}</em>
          </h1>
          <p className="cs-hero-subhead">{spitimou.subtitle}</p>
          <a href={spitimou.liveLink} target="_blank" rel="noreferrer" className="cs-hero-link">
            View the live site ↗
          </a>

          <div className="cs-meta">
            {spitimou.meta.map((m) => (
              <div key={m.label}>
                <div className="cs-meta-label">{m.label}</div>
                <div className="cs-meta-value">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="cs-hero-image">
            <img src={spitimou.heroImage} alt={spitimou.heroImageAlt} />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[01]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{spitimou.problem.heading}</span> {spitimou.problem.headingRest}
          </h2>
          <p className="cs-lead">{spitimou.problem.lead}</p>

          <div className="cs-persona-grid">
            {spitimou.problem.personas.map((p) => (
              <div key={p.role} className="cs-persona-card">
                <div>
                  <div className="cs-persona-role">{p.role}</div>
                  <div className="cs-persona-title">{p.title}</div>
                </div>
                <div className="cs-persona-block">
                  <div className="cs-persona-block-label">What broke</div>
                  <p className="cs-persona-block-body">{p.broke}</p>
                </div>
                <div className="cs-persona-block cs-persona-design">
                  <div className="cs-persona-block-label">So the design</div>
                  <p className="cs-persona-block-body">{p.design}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[02]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{spitimou.research.heading}</span> {spitimou.research.headingRest}
          </h2>
          <p className="cs-lead">{spitimou.research.lead}</p>

          <div className="cs-cmp-table">
            <div className="cs-cmp-row">
              <div className="cs-cmp-cell">Criterion</div>
              {spitimou.research.columns.map((c) => (
                <div key={c} className="cs-cmp-cell">{c}</div>
              ))}
              <div className="cs-cmp-cell cs-cmp-cell-decision">My decision</div>
            </div>
            {spitimou.research.rows.map((row) => (
              <div key={row.criterion} className="cs-cmp-row">
                <div className="cs-cmp-cell cs-cmp-cell-criterion">{row.criterion}</div>
                {row.values.map((v, i) => (
                  <div key={i} className="cs-cmp-cell">{v}</div>
                ))}
                <div className="cs-cmp-cell cs-cmp-cell-decision">{row.decision}</div>
              </div>
            ))}
            <div className="cs-cmp-took">
              <div className="cs-cmp-took-label">{spitimou.research.took.label}</div>
              <div className="cs-cmp-took-body">
                <p>{spitimou.research.took.intro}</p>
                {spitimou.research.took.points.map((pt) => (
                  <p key={pt.label}>
                    <strong>{pt.label}</strong> {pt.body}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[03]</div>
          <h2 className="cs-h2" style={{ marginBottom: "3rem" }}>
            <span className="cs-h2-dim">{spitimou.flows.heading}</span> {spitimou.flows.headingRest}
          </h2>

          <div className="cs-arch-card">
            <div className="cs-arch-grid">
              <div>
                <div className="cs-arch-icon-row">
                  <span style={{ width: 14, height: 2, background: TOK.accent, flexShrink: 0 }} />
                  <div className="cs-arch-icon-box">
                    <div className="cs-arch-icon-line" />
                    <div className="cs-arch-icon-line-light" style={{ width: "62%" }} />
                    <div className="cs-arch-icon-line-small" style={{ width: "84%" }} />
                    <div className="cs-arch-icon-line-small" style={{ width: "48%" }} />
                  </div>
                  <span style={{ width: 14, height: 2, background: TOK.accent, flexShrink: 0 }} />
                </div>
                <div className="cs-arch-icon-caption">{spitimou.flows.card.label}</div>
              </div>
              <div>
                <div className="cs-arch-title">{spitimou.flows.card.title}</div>
                <p className="cs-arch-body">{spitimou.flows.card.body}</p>
              </div>
            </div>
          </div>

          <div className="cs-map-label">{spitimou.flows.mapLabel}</div>
          <div className="cs-map-panel">
            <div className="cs-map-head">
              <span />
              {spitimou.flows.mapLevels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
            {spitimou.flows.mapRows.map((row) => (
              <div key={row.side} className="cs-map-body-row">
                <div>
                  <div className="cs-map-side">{row.side}</div>
                  <div className="cs-map-title">{row.title}</div>
                </div>
                <div className="cs-map-col">
                  <div className="cs-map-tag cs-map-tag-primary">{row.entry.label}</div>
                  <div className="cs-map-tag-note">{row.entry.note}</div>
                </div>
                <div className="cs-map-col">
                  {row.browse.map((item) => (
                    <MapCell key={item.label} item={item} />
                  ))}
                </div>
                <div className="cs-map-col">
                  {row.act.map((item) => (
                    <MapCell key={item.label} item={item} />
                  ))}
                </div>
              </div>
            ))}
            <div className="cs-map-legend">
              {spitimou.flows.legend.map((l) => (
                <div key={l.label} className="cs-map-legend-item">
                  <span
                    className="cs-map-legend-swatch"
                    style={{
                      border: `1.5px solid ${l.swatch === "accent" ? TOK.accent : TOK.ink}`,
                      background: l.swatch === "solid" ? TOK.paper : l.swatch === "accent" ? "rgba(192,85,63,.05)" : "transparent",
                      borderStyle: l.swatch === "dashed" ? "dashed" : "solid",
                      borderColor: l.swatch === "dashed" ? TOK.lineStrong : undefined,
                    }}
                  />
                  {l.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[04]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{spitimou.screens.heading}</span> {spitimou.screens.headingRest}
          </h2>
          <p className="cs-lead">{spitimou.screens.lead}</p>

          <div className="cs-wf-group-label">{spitimou.screens.buyerLabel}</div>
          <div className="cs-wf-grid">
            {spitimou.screens.buyer.map((s) => (
              <WireframeTile key={s.n} {...s} />
            ))}
          </div>

          <div className="cs-wf-group-label">{spitimou.screens.agencyLabel}</div>
          <div className="cs-wf-grid">
            {spitimou.screens.agency.map((s) => (
              <WireframeTile key={s.n} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[05]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{spitimou.decisions.heading}</span> {spitimou.decisions.headingRest}
          </h2>
          <p className="cs-lead">{spitimou.decisions.lead}</p>

          <div className="cs-decisions-grid">
            {spitimou.decisions.cards.map((c) => (
              <div key={c.num} className="cs-decision-card">
                <div>
                  <div className="cs-decision-num">{c.num}</div>
                  <h3 className="cs-decision-title">{c.title}</h3>
                </div>
                <div className="cs-decision-body">
                  <div>
                    <div className="cs-decision-label">What I chose</div>
                    <p className="cs-decision-text">{c.chose}</p>
                  </div>
                  <div>
                    <div className="cs-decision-label cs-decision-label-alt">The alternative</div>
                    <p className="cs-decision-text">{c.alternative}</p>
                  </div>
                </div>
                <div className="cs-decision-cost">
                  <div className="cs-decision-cost-label">What it cost</div>
                  <p className="cs-decision-cost-text">{c.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[06]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{spitimou.process.heading}</span> {spitimou.process.headingRest}
          </h2>
          <p className="cs-lead">{spitimou.process.lead}</p>

          <div className="cs-process-grid">
            {spitimou.process.columns.map((col) => (
              <div key={col.tag} className="cs-process-col">
                <div className="cs-process-tag">{col.tag}</div>
                <div className="cs-process-title">{col.title}</div>
                <ul className="cs-process-list">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[07]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{spitimou.testNext.heading}</span> {spitimou.testNext.headingRest}
          </h2>
          <p className="cs-lead">{spitimou.testNext.lead}</p>

          <div className="cs-testnext-grid">
            {spitimou.testNext.cards.map((c) => (
              <div key={c.label} className="cs-testnext-card">
                <div className="cs-testnext-label">{c.label.toUpperCase()}</div>
                <p className="cs-testnext-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects current="/projects/spitimou" />
    </main>
  );
};

export default SpitiMouCaseStudy;
