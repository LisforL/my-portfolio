import { Fragment, useState } from "react";
import { bizmot } from "../../data/caseStudies/bizmot";
import MoreProjects from "../../components/MoreProjects";
import "../../styles/case-study.css";

const ScreenPreview = ({ stage, chrome }) => {
  if (stage === "template") return <div className="cs-screen-mock-preview-template" />;
  if (stage === "final") return <div className="cs-screen-mock-preview-final" />;
  if (stage === "blank") return <div className="cs-screen-mock-preview-shape" />;

  const showLine = stage !== "avatar";
  const showLineShort = stage === "avatar-fields" || stage === "avatar-duo" || stage === "avatar-full";
  const showDuo = stage === "avatar-duo" || stage === "avatar-full";
  const showFull = stage === "avatar-full";

  return (
    <div className="cs-screen-mock-preview-shape cs-screen-mock-preview-card">
      {chrome && <div className="cs-screen-mock-preview-chrome" />}
      <div className="cs-screen-mock-preview-avatar" />
      {showLine && <div className="cs-screen-mock-preview-line" />}
      {showLineShort && <div className="cs-screen-mock-preview-line cs-screen-mock-preview-line-short" />}
      {showDuo && (
        <div className="cs-screen-mock-preview-duo">
          <div />
          <div />
        </div>
      )}
      {showFull && <div className="cs-screen-mock-preview-full" />}
    </div>
  );
};

const ScreenTile = ({
  n,
  total,
  label,
  title,
  kind = "form",
  fields = 1,
  activeField,
  preview = "blank",
  chrome,
  highlight,
}) => {
  const progress = Math.round((Number(n) / Number(total)) * 100);
  return (
    <div className="cs-screen-tile">
      <div className={`cs-screen-mock ${highlight ? "cs-screen-mock-bold" : ""}`}>
        <div className="cs-screen-mock-form">
          {title && <div className="cs-screen-mock-title">{title}</div>}
          {kind === "chips" && (
            <div className="cs-screen-mock-chips">
              <div className="cs-screen-mock-chip cs-screen-mock-chip-active" />
              <div className="cs-screen-mock-chip" />
              <div className="cs-screen-mock-chip" />
            </div>
          )}
          {kind === "template" && (
            <div className="cs-screen-mock-template-grid">
              <div />
              <div />
              <div className="cs-screen-mock-template-selected" />
              <div />
            </div>
          )}
          {kind === "form" &&
            Array.from({ length: fields }).map((_, i) => <div key={i} className="cs-screen-mock-line" />)}
          {kind === "form" && activeField && <div className="cs-screen-mock-line cs-screen-mock-line-short" />}
          {kind === "chips" && <div className="cs-screen-mock-line cs-screen-mock-line-tall" />}
          {kind === "final" && (
            <>
              <div className="cs-screen-mock-line cs-screen-mock-line-center" />
            </>
          )}
          <div className="cs-screen-mock-bottom">
            <div className="cs-screen-mock-progress">
              <div className="cs-screen-mock-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className={`cs-screen-mock-btn ${kind === "final" ? "cs-screen-mock-btn-lg" : ""}`} />
          </div>
        </div>
        <div className="cs-screen-mock-preview">
          <ScreenPreview stage={preview} chrome={chrome} />
        </div>
      </div>
      <div className={`cs-screen-caption ${highlight ? "cs-screen-caption-accent" : ""}`}>
        {n} {label}
      </div>
    </div>
  );
};

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
              <div className={`cs-screen-grid cs-screen-grid-cols-${activeFlow.screens.length / 2}`}>
                {activeFlow.screens.map((s) => (
                  <ScreenTile key={s.n} total={activeFlow.screens.length} {...s} />
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
                <div>
                  <div className="cs-round-label">{round.label}</div>
                  <div className="cs-round-matchup">{round.matchup}</div>
                  <div className="cs-round-winner">Winner · {round.winner}</div>
                </div>
                <div>
                  <p className="cs-round-body">{round.body}</p>
                  <div className="cs-round-quotes">
                    {round.quotes.map((q) => (
                      <blockquote key={q} className="cs-round-quote">"{q}"</blockquote>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cs-callout">
            <div className="cs-callout-label">What I got wrong</div>
            <p className="cs-callout-body">{bizmot.testing.gotWrong}</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[04]</div>
          <h2 className="cs-h2">
            <span className="cs-h2-dim">{bizmot.solution.heading}</span> {bizmot.solution.headingRest}
          </h2>

          <div className="cs-steps">
            {bizmot.solution.steps.map((step, stepIndex) => (
              <div key={step.n} className="cs-step">
                <div>
                  <div className="cs-step-num">Step {step.n}</div>
                  <h3 className="cs-step-title">{step.title}</h3>
                  <p className="cs-step-body">{step.body}</p>
                  {step.bullets && (
                    <ul className="cs-step-list">
                      {step.bullets.map((b) => (
                        <li key={b}>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {step.note && <p className="cs-step-note">{step.note}</p>}
                </div>
                <div className={stepIndex === 0 ? "cs-step-banner" : "cs-step-images"}>
                  {step.images.map((img, i) => (
                    <Fragment key={img.src}>
                      <div>
                        <div className={`cs-step-image-frame ${img.accent ? "cs-step-image-frame-bold" : ""}`}>
                          <img src={img.src} alt={img.caption} />
                        </div>
                        <div className={`cs-step-image-caption ${img.accent ? "cs-step-image-caption-accent" : ""}`}>
                          {img.caption}
                        </div>
                      </div>
                      {stepIndex === 0 && i === 1 && <div className="cs-step-banner-arrow">→</div>}
                    </Fragment>
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

          <div className="cs-making-grid">
            <div className="cs-dark-card">
              <div className="cs-approach-label" style={{ color: "#8a8a85" }}>Three problems, three decisions</div>
              <div className="cs-problem-chain">
                {bizmot.makingPossible.problems.map((p, i) => (
                  <Fragment key={p.problem}>
                    <div className={`cs-problem-box ${p.accent ? "cs-problem-box-accent" : ""}`}>
                      <div className="cs-problem">{p.problem}</div>
                      <div className="cs-solution-text">{p.solution}</div>
                    </div>
                    {i < bizmot.makingPossible.problems.length - 1 && (
                      <div className="cs-problem-arrow">↓</div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            <div>
              <div className="cs-approach-block">
                <div className="cs-approach-label">What we didn't do</div>
                <p className="cs-approach-body">{bizmot.makingPossible.whatWeDidntDo}</p>
              </div>
              <div className="cs-approach-block">
                <div className="cs-approach-label">What we did instead</div>
                <p className="cs-approach-body">{bizmot.makingPossible.whatWeDidInstead}</p>
              </div>
            </div>
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

      <MoreProjects current="/projects/bizmot" />
    </main>
  );
};

export default BizMotCaseStudy;
