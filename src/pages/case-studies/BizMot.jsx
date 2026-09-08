import { useState } from "react";
import { Link } from "react-router-dom";
import { bizmot } from "../../data/caseStudies/bizmot";
import "../../styles/case-study.css";

const ScreenTile = ({ n, label, accent }) => (
  <div className="cs-screen-tile">
    <div className="cs-screen-mock">
      <div className="cs-screen-mock-form">
        <div className="cs-screen-mock-line" style={{ height: "0.5rem", border: "none" }} />
        <div className="cs-screen-mock-line" />
        <div className="cs-screen-mock-line cs-screen-mock-line-short" />
        <div className="cs-screen-mock-bottom">
          <div className="cs-screen-mock-progress">
            <div className="cs-screen-mock-progress-fill" style={{ width: `${(Number(n) || 1) * 9}%` }} />
          </div>
          <div className="cs-screen-mock-btn" />
        </div>
      </div>
      <div className="cs-screen-mock-preview">
        <div className="cs-screen-mock-preview-shape" />
      </div>
    </div>
    <div className={`cs-screen-caption ${accent ? "cs-screen-caption-accent" : ""}`}>
      {n} {label}
    </div>
  </div>
);

const BizMotCaseStudy = () => {
  const [flow, setFlow] = useState(bizmot.defaultFlow);
  const activeFlow = bizmot.flows[flow];

  return (
    <main className="case-study">
      <section className="cs-hero">
        <div className="cs-inner">
          <h1 className="cs-hero-title">
            {bizmot.title} <em>{bizmot.titleAccent}</em>
          </h1>
          <p className="cs-hero-subhead">{bizmot.subtitle}</p>
          <a href={bizmot.liveLink} target="_blank" rel="noreferrer" className="cs-hero-link">
            View the live site ↗
          </a>

          <div className="cs-meta">
            {bizmot.meta.map((m) => (
              <div key={m.label}>
                <div className="cs-meta-label">{m.label}</div>
                <div className="cs-meta-value">{m.value}</div>
              </div>
            ))}
          </div>

          <p className="cs-intro">{bizmot.intro}</p>

          <div className="cs-hero-image">
            <img src={bizmot.heroImage} alt="Bizmot — showcase step with live preview" />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[01]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.whatIsIt.heading}</span> {bizmot.whatIsIt.headingRest}
          </h2>
          {bizmot.whatIsIt.paragraphs.map((p) => (
            <p key={p} className="cs-lead">{p}</p>
          ))}
          <p className="cs-lead">
            {bizmot.whatIsIt.thinkOfItLead}
            <strong>{bizmot.whatIsIt.thinkOfItBold}</strong>
          </p>

          <div className="cs-eyebrow">{bizmot.whatIsIt.eyebrow}</div>

          <div className="cs-split">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="cs-card">
                {bizmot.whatIsIt.cards.map((card, i) => (
                  <div key={card.title}>
                    {i > 0 && <div className="cs-hairline" style={{ marginBottom: "1.5rem" }} />}
                    <div className="cs-card-block">
                      <div className="cs-card-block-title">{card.title}</div>
                      {card.bullets && (
                        <ul>
                          {card.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {card.note && <div className="cs-card-block-note">{card.note}</div>}
                      {card.rows && (
                        <div>
                          {card.rows.map((row) => (
                            <div key={row.label} className="cs-label-row">
                              <div className="cs-label-row-label">{row.label}</div>
                              <div className="cs-label-row-value">{row.value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cs-dark-card">
                <div className="cs-dark-card-title">{bizmot.whatIsIt.darkCard.title}</div>
                <p className="cs-dark-card-body">{bizmot.whatIsIt.darkCard.body}</p>
              </div>
            </div>

            <div className="cs-product-image">
              <img src={bizmot.whatIsIt.productImage} alt="A finished BizMot card, on device" />
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[02]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.flowsIntro.heading}</span> {bizmot.flowsIntro.headingRest}
          </h2>
          {bizmot.flowsIntro.paragraphs.map((p) => (
            <p key={p} className="cs-lead">{p}</p>
          ))}

          <div className="cs-hint">{bizmot.flowsIntro.hint}</div>
          <div className="cs-tabs">
            {bizmot.flows.map((f, i) => (
              <button
                key={f.tab}
                type="button"
                onClick={() => setFlow(i)}
                className={`cs-tab ${i === flow ? "cs-tab-active" : ""}`}
              >
                {f.tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="cs-flow-panel">
            <div className="cs-flow-grid">
              <div>
                <div className="cs-flow-sequence-label">SEQUENCE</div>
                {activeFlow.sequence.map((s, i) => (
                  <div key={s} className="cs-flow-sequence-item">
                    <span className="cs-flow-sequence-n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="cs-flow-sequence-text">{s}</span>
                  </div>
                ))}
                {activeFlow.sequenceNote && (
                  <div className="cs-flow-sequence-note">{activeFlow.sequenceNote}</div>
                )}
              </div>
              <div>
                <div className="cs-flow-density">{activeFlow.densityLabel}</div>
                <h3 className="cs-flow-title">{activeFlow.title}</h3>
                <p className="cs-flow-body">{activeFlow.body}</p>
                <div className="cs-flow-label-row">
                  <div className="cs-flow-label-row-label">Advantage</div>
                  <div className="cs-flow-label-row-value">{activeFlow.advantage}</div>
                </div>
                <div className="cs-flow-label-row">
                  <div className="cs-flow-label-row-label">Cost</div>
                  <div className="cs-flow-label-row-value cs-flow-label-row-value-cost">{activeFlow.cost}</div>
                </div>
              </div>
            </div>

            <div className="cs-screen-strip">
              <div className="cs-screen-strip-head">
                <div className="cs-screen-strip-title">{activeFlow.stripHeader}</div>
                <div className="cs-screen-strip-sub">{activeFlow.stripSubheader}</div>
              </div>
              <div className="cs-screen-grid">
                {activeFlow.screens.map((s) => (
                  <ScreenTile key={s.n} n={s.n} label={s.label} accent={s.accent} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[03]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.testing.heading}</span> {bizmot.testing.headingRest}
          </h2>
          <p className="cs-lead">{bizmot.testing.intro}</p>

          <div className="cs-rounds">
            {bizmot.testing.rounds.map((round) => (
              <div key={round.label} className={`cs-round-card ${round.dark ? "cs-round-card-dark" : ""}`}>
                <div className="cs-round-head">
                  <div className="cs-round-label">{round.label} · {round.matchup}</div>
                  <div className="cs-round-winner">Winner: {round.winner}</div>
                </div>
                <p className="cs-round-body">{round.body}</p>
                <div className="cs-round-quotes">
                  {round.quotes.map((q) => (
                    <div key={q} className="cs-round-quote">“{q}”</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cs-callout">{bizmot.testing.gotWrong}</div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[04]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.solution.heading}</span> {bizmot.solution.headingRest}
          </h2>

          <div className="cs-steps">
            {bizmot.solution.steps.map((step) => (
              <div key={step.n}>
                <div className="cs-step-num">Step {step.n}</div>
                <h3 className="cs-step-title">{step.title}</h3>
                <p className="cs-step-body">{step.body}</p>
                {step.bullets && (
                  <ul style={{ margin: "0.75rem 0 0", paddingLeft: "1.125rem", color: "#55554f" }}>
                    {step.bullets.map((b) => (
                      <li key={b} style={{ fontSize: "1rem", lineHeight: 1.6, marginTop: "0.25rem" }}>{b}</li>
                    ))}
                  </ul>
                )}
                {step.note && <p className="cs-step-note">{step.note}</p>}
                <div className="cs-step-images">
                  {step.images.map((img) => (
                    <div key={img.src}>
                      <div className="cs-step-image-frame">
                        <img src={img.src} alt={img.caption} />
                      </div>
                      <div className={`cs-step-image-caption ${img.accent ? "cs-step-image-caption-accent" : ""}`}>
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cs-prototype-link">
            <a href={bizmot.solution.prototypeLink} target="_blank" rel="noreferrer">
              {bizmot.solution.prototypeLabel}
            </a>
            <span className="cs-prototype-caption">{bizmot.solution.prototypeCaption}</span>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[05]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.makingPossible.heading}</span> {bizmot.makingPossible.headingRest}
          </h2>
          <p className="cs-lead">{bizmot.makingPossible.body}</p>

          <div className="cs-dark-card" style={{ marginTop: "2rem" }}>
            <div className="cs-dark-card-title" style={{ fontSize: "1.5rem" }}>Three problems, three decisions</div>
            <div className="cs-problem-chain">
              {bizmot.makingPossible.problems.map((p, i) => (
                <div key={p.problem}>
                  <div className="cs-problem-row">
                    <div className={`cs-problem ${p.accent ? "cs-problem-accent" : ""}`}>{p.problem}</div>
                    <div className="cs-solution-text">{p.solution}</div>
                  </div>
                  {i < bizmot.makingPossible.problems.length - 1 && (
                    <div className="cs-problem-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cs-approach-block">
            <div className="cs-approach-label">What we didn't do</div>
            <p className="cs-approach-body">{bizmot.makingPossible.whatWeDidntDo}</p>
          </div>
          <div className="cs-approach-block">
            <div className="cs-approach-label">What we did instead</div>
            <p className="cs-approach-body">{bizmot.makingPossible.whatWeDidInstead}</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[06]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.results.heading}</span> {bizmot.results.headingRest}
          </h2>
          <p className="cs-lead">{bizmot.results.body}</p>

          <div className="cs-stats">
            {bizmot.results.stats.map((s) => (
              <div key={s.value} className="cs-stat-card">
                <div className="cs-stat-value">{s.value}</div>
                <div className="cs-stat-caption">{s.caption}</div>
              </div>
            ))}
          </div>

          <div className="cs-quotes">
            {bizmot.results.quotes.map((q) => (
              <div key={q} className="cs-quote">“{q}”</div>
            ))}
          </div>
          <div className="cs-source">{bizmot.results.source}</div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[07]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.learnings.heading}</span> {bizmot.learnings.headingRest}
          </h2>

          <div className="cs-learning-cards">
            {bizmot.learnings.cards.map((c) => (
              <div key={c.title} className="cs-learning-card">
                <div className="cs-learning-title">{c.title}</div>
                <p className="cs-learning-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner cs-more-section-inner">
          <div className="cs-more-head">
            <h2 className="cs-h2" style={{ margin: 0 }}>
              <span className="cs-h2-dim">{bizmot.moreProjects.heading}</span> {bizmot.moreProjects.headingRest}
            </h2>
            <Link to={bizmot.moreProjects.allLink} className="cs-more-link">
              {bizmot.moreProjects.allLabel}
            </Link>
          </div>

          <div className="cs-more-grid">
            {bizmot.moreProjects.items.map((p) => (
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

export default BizMotCaseStudy;
