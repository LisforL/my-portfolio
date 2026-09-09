import { penlo } from "../../data/caseStudies/penlo";
import MoreProjects from "../../components/MoreProjects";
import "../../styles/case-study.css";

const TIER_COLORS = {
  Precise: { bg: "#0f2a1c", fg: "#7fd6a5", border: "#466143" },
  Blurred: { bg: "#2e1a14", fg: "#e0a48c", border: "#714C4C" },
  Frozen: { bg: "#10233a", fg: "#8fb8e6", border: "#475C6D" },
  Hidden: { bg: "#232120", fg: "#a9a8a2", border: "#646464" },
};

const DecayChart = () => (
  <svg viewBox="0 0 896 300" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 300, overflow: "visible" }}>
    <defs>
      <linearGradient id="penloArcFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FF52A8" stopOpacity="0.45" />
        <stop offset="1" stopColor="#FF52A8" stopOpacity="0.03" />
      </linearGradient>
      <linearGradient id="penloArcLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#F0EFEC" />
        <stop offset="0.38" stopColor="#F0EFEC" />
        <stop offset="0.62" stopColor="#FF52A8" />
        <stop offset="1" stopColor="#FF52A8" />
      </linearGradient>
    </defs>
    <rect x="340" y="20" width="540" height="240" fill="#FF52A8" fillOpacity="0.06" />
    <line x1="340" y1="20" x2="340" y2="260" stroke="#c0553f" strokeDasharray="5 5" />
    <path d="M16 118 C 90 74, 140 62, 190 62 S 290 106, 340 128 S 460 170, 520 176 S 640 204, 700 208 S 830 230, 880 232 L 880 260 L 16 260 Z" fill="url(#penloArcFill)" />
    <text x="352" y="38" fill="#F0EFEC" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1">TRUST STARTS TO SLIDE</text>
    <path d="M16 118 C 90 74, 140 62, 190 62 S 290 106, 340 128 S 460 170, 520 176 S 640 204, 700 208 S 830 230, 880 232" fill="none" stroke="url(#penloArcLine)" strokeWidth="3" strokeLinecap="round" />
    <text x="188" y="42" fill="#F0EFEC" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="17" textAnchor="middle">the payoff</text>
    <text x="878" y="262" fill="#F0EFEC" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="17" textAnchor="end">the drop-off</text>
    <circle cx="16" cy="118" r="6" fill="#F0EFEC" />
    <circle cx="190" cy="62" r="6" fill="#F0EFEC" />
    <circle cx="340" cy="128" r="6" fill="#F0EFEC" />
    <circle cx="520" cy="176" r="6" fill="#F0EFEC" />
    <circle cx="700" cy="208" r="6" fill="#F0EFEC" />
    <circle cx="880" cy="232" r="9" fill="#F0EFEC" />
  </svg>
);

const GhostTierList = ({ data }) => (
  <div>
    <div className="cs-ghost-mock-label-row">
      <span className="cs-ghost-mock-num">{data.num}</span>
      <span className="cs-ghost-mock-caption">{data.caption}</span>
    </div>
    <div className="cs-ghost-phone">
      <div className="cs-ghost-phone-title">Ghost mode</div>
      <p className="cs-ghost-phone-sub">Choose what each friend can see. Changing this never sends a notification.</p>
      <div className="cs-ghost-friend-list">
        {data.friends.map((f) => {
          const c = TIER_COLORS[f.tier];
          return (
            <div key={f.name} className="cs-ghost-friend-row" style={f.dim ? { opacity: 0.55 } : undefined}>
              <img className="cs-ghost-avatar" src={f.avatar} alt={f.name} />
              <span className="cs-ghost-friend-name">{f.name}</span>
              <span className="cs-ghost-pill" style={{ background: c.bg, color: c.fg, borderColor: c.border }}>
                <span className="cs-ghost-pill-dot" style={{ background: c.fg }} />
                {f.tier}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const GhostTierPicker = ({ data }) => (
  <div>
    <div className="cs-ghost-mock-label-row">
      <span className="cs-ghost-mock-num">{data.num}</span>
      <span className="cs-ghost-mock-caption">{data.caption}</span>
    </div>
    <div className="cs-tierpick-phone">
      <div className="cs-tierpick-head">
        <img className="cs-tierpick-avatar" src={data.avatar} alt={data.name} />
        <div>
          <div className="cs-tierpick-name">{data.name}</div>
          <div className="cs-tierpick-seesas">sees you as <span style={{ color: "#e0a48c" }}>{data.seesAs}</span></div>
        </div>
      </div>
      <div className="cs-tierpick-map">
        <span className="cs-tierpick-map-ring" />
        <span className="cs-tierpick-map-label">what {data.name} sees now</span>
      </div>
      <div className="cs-tierpick-options">
        {data.options.map((o) => (
          <div key={o.tier} className={`cs-tierpick-option ${o.active ? "cs-tierpick-option-active" : ""}`}>
            <div>
              <div className="cs-tierpick-option-title">{o.tier}</div>
              <div className="cs-tierpick-option-sub">{o.sub}</div>
            </div>
            <span className={`cs-tierpick-radio ${o.active ? "cs-tierpick-radio-active" : ""}`} />
          </div>
        ))}
      </div>
      <div className="cs-tierpick-actions">
        <div className="cs-tierpick-cancel">{data.cancel}</div>
        <div className="cs-tierpick-apply">{data.apply}</div>
      </div>
    </div>
  </div>
);

const EvolveCard = ({ round, friendId }) => (
  <div className="cs-evolve-col">
    <div className="cs-evolve-label-row">
      <span className={`cs-evolve-v ${round.final ? "cs-evolve-v-accent" : ""}`}>{round.version}</span>
      <span className="cs-evolve-v-caption" style={round.final ? { color: "#c0553f", fontWeight: 600 } : undefined}>{round.caption}</span>
    </div>
    <div className={`cs-evolve-card ${round.final ? "cs-evolve-card-final" : ""}`}>
      <div className="cs-evolve-phone">
        <div style={{ width: 26, height: 3, borderRadius: 2, background: "#55554f", margin: "0 auto 12px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#8a8a85", marginBottom: 10 }}>
          <span>Was here: 1d ago</span>
          {round.atHome && <span>95%</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, marginBottom: round.tiers ? 14 : 16 }}>
          <img src={round.avatar} alt="Charlotte" style={{ width: 44, height: 44, borderRadius: 10 }} />
          {round.atHome && <span style={{ fontSize: 11, borderRadius: 9999, padding: "4px 10px", background: "#1F1F21" }}>at home ›</span>}
          <div style={{ fontSize: 13 }}>Charlotte</div>
          <div style={{ fontSize: 11, color: "#8a8a85" }}>{friendId}</div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: round.chips.length > 2 ? "1fr 1fr" : "1fr 1fr",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "center",
            marginBottom: round.tiers ? 14 : 24,
          }}
        >
          {round.chips.map((c) => (
            <span key={c} style={{ textAlign: "center", fontSize: round.chips.length > 2 ? 10 : 11, borderRadius: 6, padding: "6px 10px", background: "#1F1F21" }}>{c}</span>
          ))}
        </div>
        {round.tiers && (
          <div style={{ borderTop: "1px solid #232120", paddingTop: 12, background: "#1F1F21", borderRadius: 8, padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#8a8a85", marginBottom: 10 }}>
              <span>She sees you as</span>
              <span style={{ color: "#F0EFEC" }}>{round.tiers.seesAs}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 6 }}>
              {round.tiers.options.map((t, i) => (
                <span
                  key={t}
                  style={{
                    textAlign: "center",
                    fontSize: 11,
                    borderRadius: 6,
                    padding: "7px 0",
                    color: i === round.tiers.active ? "#F0EFEC" : "#8a8a85",
                    background: i === round.tiers.active ? "#382A25" : "#1c1a19",
                    border: i === round.tiers.active ? "1px solid #7C6459" : "none",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
        {round.stopSharing && <div style={{ textAlign: "center", fontSize: 11, color: "#E0A48C", paddingBottom: 12, paddingTop: round.tiers ? 0 : 0 }}>Stop sharing</div>}
      </div>
      <div className="cs-evolve-verdict">{round.mark} &nbsp;{round.note}</div>
    </div>
  </div>
);

const PenloCaseStudy = () => {
  return (
    <main className="case-study">
      <section className="cs-hero">
        <div className="cs-inner">
          <h1 className="cs-hero-title">
            {penlo.title} <em>{penlo.titleAccent}</em>
          </h1>
          <p className="cs-hero-subhead">{penlo.subtitle}</p>
          <a href={penlo.appStoreLink} target="_blank" rel="noreferrer" className="cs-hero-link">
            Download on the App Store ↗
          </a>

          <div className="cs-meta">
            {penlo.meta.map((m) => (
              <div key={m.label}>
                <div className="cs-meta-label">{m.label}</div>
                <div className="cs-meta-value">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="cs-hero-image">
            <img src={penlo.heroImage} alt={penlo.heroImageAlt} />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-startpoint-grid">
            <h2 className="cs-h2" style={{ marginTop: 0 }}>Start point</h2>
            <div className="cs-startpoint-content">
              <div>
                <div className="cs-startpoint-label">{penlo.startPoint.whatIsIt.label}</div>
                <p className="cs-startpoint-body">{penlo.startPoint.whatIsIt.body}</p>
              </div>
              <div>
                <div className="cs-startpoint-label cs-startpoint-label-accent">{penlo.startPoint.goal.label}</div>
                <p className="cs-startpoint-body">{penlo.startPoint.goal.body}</p>
              </div>
              <div className="cs-startpoint-footer">
                {penlo.startPoint.footer.map((f) => (
                  <div key={f.label}>
                    <div className="cs-startpoint-footer-label">{f.label}</div>
                    <div className="cs-startpoint-footer-value">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[01]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{penlo.problem.heading}</span> {penlo.problem.headingRest}
          </h2>
          <p className="cs-lead">
            <strong>{penlo.problem.leadBold}</strong> {penlo.problem.lead}
          </p>
          <div className="cs-callout">{penlo.problem.leadNote}</div>

          <div className="cs-why-label" style={{ marginTop: "3rem" }}>{penlo.problem.whyLabel}</div>
          <div className="cs-why-grid">
            {penlo.problem.why.map((w) => (
              <div key={w.title} className="cs-why-item">
                <span className="cs-why-mark">✕</span>
                <div>
                  <div className="cs-why-title">{w.title}</div>
                  <p className="cs-why-body">{w.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cs-step-image-frame" style={{ aspectRatio: "16 / 9" }}>
            <img src={penlo.problem.oldImage} alt={penlo.problem.oldImageCaption} />
          </div>
          <div className="cs-plain-caption">{penlo.problem.oldImageCaption}</div>

          <div className="cs-note-grid">
            <div className="cs-note-card">
              <div className="cs-note-label">{penlo.problem.stakes.title}</div>
              <p className="cs-note-body">{penlo.problem.stakes.body}</p>
            </div>
            <div className="cs-note-card">
              <div className="cs-note-label">{penlo.problem.churns.title}</div>
              <p className="cs-note-body">{penlo.problem.churns.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[02]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{penlo.learn.heading}</span> {penlo.learn.headingRest}
          </h2>
          <p className="cs-lead">{penlo.learn.lead}</p>

          <div className="cs-rule-grid-3" style={{ marginTop: "2rem" }}>
            {penlo.learn.questions.map((q, i) => (
              <div key={i} className="cs-rule-item">
                <span className="cs-question-label">QUESTION {i + 1}</span>
                <p className="cs-question-text">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[03]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{penlo.howLearned.heading}</span> {penlo.howLearned.headingRest}
          </h2>
          <p className="cs-lead">{penlo.howLearned.lead}</p>
          <div className="cs-callout">{penlo.howLearned.recruitment}</div>

          <div className="cs-rule-grid-4" style={{ marginTop: "2rem" }}>
            {penlo.howLearned.methods.map((m) => (
              <div key={m.title} className="cs-rule-item">
                <div className="cs-method-title">{m.title}</div>
                <div className="cs-method-n">{m.n}</div>
                <p className="cs-method-body">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[04]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{penlo.discovered.heading}</span> {penlo.discovered.headingRest}
          </h2>
          <p className="cs-lead">{penlo.discovered.lead}</p>

          <div className="cs-finding-grid">
            {penlo.discovered.patterns.map((p) => (
              <div key={p.tag} className="cs-finding-card">
                <div className="cs-finding-head">
                  <span className="cs-finding-tag">{p.tag}</span>
                  <span className="cs-finding-answers">{p.answers}</span>
                </div>
                <p className="cs-finding-headline">{p.headline}</p>
                <blockquote className="cs-finding-quote">
                  <p className="cs-finding-quote-text">“{p.quote}”</p>
                  <div className="cs-finding-source">{p.source}</div>
                </blockquote>
                <div className="cs-finding-note-label">Evidence</div>
                <p className="cs-finding-note-body">{p.evidence}</p>
                <div className="cs-finding-solution-label">Design solution</div>
                <p className="cs-finding-solution-text">{p.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[05]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{penlo.trustBreaks.heading}</span> {penlo.trustBreaks.headingRest}
          </h2>
          <p className="cs-lead">
            {penlo.trustBreaks.lead} <strong>{penlo.trustBreaks.patternLabel}:</strong>{" "}
            <strong>{penlo.trustBreaks.patternBold}</strong> {penlo.trustBreaks.patternBody}{" "}
            <em style={{ color: "#88887f" }}>{penlo.trustBreaks.patternNote}</em>
          </p>

          <div className="cs-decay-card">
            <div className="cs-decay-labels">
              <span>{penlo.trustBreaks.chart.startLabel}</span>
              <span>{penlo.trustBreaks.chart.midLabel}</span>
              <span>{penlo.trustBreaks.chart.endLabel}</span>
            </div>
            <DecayChart />
            <div className="cs-decay-timeline-row">
              {penlo.trustBreaks.timeline.map((t) => (
                <div key={t.n}>
                  <div className="cs-decay-step-num">{t.n}</div>
                  <div className="cs-decay-step-title">{t.title}</div>
                  <div className="cs-decay-step-mood">{t.mood}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-pain-grid">
            {penlo.trustBreaks.pains.map((p) => (
              <div key={p.label} className="cs-pain-card">
                <div className="cs-pain-label">{p.label}</div>
                <p className="cs-pain-body">
                  {p.body} <span className="cs-pain-arrow">{p.arrow}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[06]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{penlo.principles.heading}</span> {penlo.principles.headingRest}
          </h2>
          <p className="cs-lead">{penlo.principles.lead}</p>

          <div className="cs-principle-grid" style={{ marginTop: "2rem" }}>
            {penlo.principles.cards.map((p) => (
              <div key={p.num} className="cs-dark-card" style={{ minHeight: "12.5rem" }}>
                <div className="cs-principle-num">{p.num}</div>
                <h3 className="cs-principle-title">{p.title}</h3>
                <p className="cs-principle-subhead">{p.subhead}</p>
                <p className="cs-principle-body">
                  {p.body} <strong style={{ color: "#F0EFEC" }}>{p.shapes}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[07]</div>
          <h2 className="cs-h2" style={{ marginBottom: "5rem" }}>
            <span className="cs-h2-dim">{penlo.principleToScreen.heading}</span>{" "}
            {penlo.principleToScreen.headingRest}
          </h2>

          <div className="cs-feature-2col">
            <div>
              <div className="cs-feature-label">{penlo.principleToScreen.ghost.eyebrow}</div>
              <h3 className="cs-feature-title">
                {penlo.principleToScreen.ghost.titlePre}<em>{penlo.principleToScreen.ghost.titleEm}</em>
              </h3>
              <p className="cs-feature-body">{penlo.principleToScreen.ghost.body}</p>
              <div className="cs-compare-split">
                {penlo.principleToScreen.ghost.compare.map((c, i) => (
                  <div key={c.label} className={`cs-compare-col ${i === 0 ? "cs-compare-col-divider" : ""}`}>
                    <div className="cs-compare-label">{c.label}</div>
                    <p className="cs-compare-body">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs-ghost-mocks">
              <GhostTierList data={penlo.principleToScreen.ghost.tierList} />
              <GhostTierPicker data={penlo.principleToScreen.ghost.tierPicker} />
            </div>
          </div>

          <div style={{ marginBottom: "7.5rem" }}>
            <div className="cs-evolve-intro">
              <div className="cs-evolve-eyebrow">{penlo.principleToScreen.evolution.eyebrow}</div>
              <h3 className="cs-evolve-title">{penlo.principleToScreen.evolution.title}</h3>
              <p className="cs-evolve-body">{penlo.principleToScreen.evolution.body1}</p>
              <p className="cs-evolve-body cs-evolve-body-muted">{penlo.principleToScreen.evolution.body2}</p>
            </div>

            <div className="cs-evolve-grid">
              {penlo.principleToScreen.evolution.rounds.map((r) => (
                <EvolveCard key={r.version} round={r} friendId={penlo.principleToScreen.evolution.friendId} />
              ))}
            </div>
          </div>

          <div className="cs-feature-2col">
            <div className="cs-feature-image-box">
              <img src={penlo.principleToScreen.markerCard.image} alt={penlo.principleToScreen.markerCard.imageAlt} />
            </div>
            <div>
              <div className="cs-feature-label">{penlo.principleToScreen.markerCard.eyebrow}</div>
              <h3 className="cs-feature-title">{penlo.principleToScreen.markerCard.title}</h3>
              <p className="cs-feature-body">{penlo.principleToScreen.markerCard.body}</p>
              <div className="cs-compare-split">
                {penlo.principleToScreen.markerCard.compare.map((c, i) => (
                  <div key={c.label} className={`cs-compare-col ${i === 0 ? "cs-compare-col-divider" : ""}`}>
                    <div className="cs-compare-label">{c.label}</div>
                    <p className="cs-compare-body">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cs-feature-2col" style={{ marginBottom: 0 }}>
            <div>
              <div className="cs-feature-label">{penlo.principleToScreen.addFriend.eyebrow}</div>
              <h3 className="cs-feature-title">{penlo.principleToScreen.addFriend.title}</h3>
              <p className="cs-feature-body">{penlo.principleToScreen.addFriend.body}</p>
              <div className="cs-compare-split">
                {penlo.principleToScreen.addFriend.compare.map((c, i) => (
                  <div key={c.label} className={`cs-compare-col ${i === 0 ? "cs-compare-col-divider" : ""}`}>
                    <div className="cs-compare-label">{c.label}</div>
                    <p className="cs-compare-body">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs-feature-image-box">
              <img src={penlo.principleToScreen.addFriend.image} alt={penlo.principleToScreen.addFriend.imageAlt} />
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[08]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{penlo.redesignedUI.heading}</span> {penlo.redesignedUI.headingRest}
          </h2>
          <p className="cs-lead" style={{ marginBottom: "3.5rem" }}>{penlo.redesignedUI.lead}</p>

          <div className="cs-uiscreens-grid">
            <div className="cs-uiscreens-label">{penlo.redesignedUI.sideLabel}</div>
            <div className="cs-uiscreens-photos">
              {penlo.redesignedUI.screens.map((s) => (
                <div key={s.title}>
                  <div className="cs-uiscreens-frame">
                    <img src={s.image} alt={s.title} />
                  </div>
                  <div className="cs-uiscreens-caption">{s.title}</div>
                  <p className="cs-uiscreens-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[09]</div>
          <h2 className="cs-h2">{penlo.tradeoffs.heading}</h2>
          <p className="cs-lead" style={{ marginBottom: "3.5rem" }}>{penlo.tradeoffs.lead}</p>

          <div className="cs-tradeoff-grid">
            <div>
              {penlo.tradeoffs.items.map((t, i) => (
                <div key={t.title} className={`cs-tradeoff-item ${i === penlo.tradeoffs.items.length - 1 ? "cs-tradeoff-item-last" : ""}`}>
                  <div className="cs-tradeoff-title"><strong>{t.title}</strong></div>
                  <p className="cs-tradeoff-body">{t.body}</p>
                </div>
              ))}
            </div>

            <div className="cs-alloc-card">
              <div className="cs-alloc-title">{penlo.tradeoffs.allocation.title}</div>
              {penlo.tradeoffs.allocation.rows.map((r) => (
                <p key={r.lead} className="cs-alloc-p">
                  <strong>{r.lead}</strong> {r.body}
                </p>
              ))}
              <div className="cs-alloc-cut">
                <div className="cs-alloc-cut-label">{penlo.tradeoffs.allocation.cutLabel}</div>
                <p className="cs-alloc-cut-body">{penlo.tradeoffs.allocation.cutBody}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects current="/projects/penlo" />
    </main>
  );
};

export default PenloCaseStudy;
