import { useState } from "react";
import { scaleData, moveData } from "../../data/process";

const ProcessTimeline = () => {
  const [scale, setScale] = useState(0);
  const [move, setMove] = useState(0);

  const activeScale = scaleData[scale];
  const activeMove = moveData[move];
  const detail = activeMove.byScale[scale];
  const maxWeight = Math.max(...activeScale.weights);

  return (
    <section className="home-section">
      <div className="home-section-inner">
        <div className="home-index">[02]</div>
        <div className="home-section-head">
          <h2 className="home-h2">
            How I work, <span className="home-h2-dim">at any timeline</span>
          </h2>
        </div>
        <p className="home-section-lead">
          The five steps stay the same on every project — only the time each one gets changes.
          Pick a timeline and the bars re-proportion, including what has to be dropped.
        </p>

        <div className="process-panel">
          <div className="process-scales">
            {scaleData.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setScale(i)}
                className={`process-scale-btn ${i === scale ? "process-scale-btn-active" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="process-grid">
            <div className="process-moves">
              {moveData.map((m, i) => {
                const w = activeScale.weights[i];
                const pct = Math.round((w / activeScale.weights.reduce((a, b) => a + b, 0)) * 100);
                const on = i === move;
                // Fill must stay at least as wide as its own label, plus breathing
                // room, so the light/dark crossfade never lands right on the text.
                const minPx = m.deliver.length * 7 + 48;
                const fillWidth = `max(${(w / maxWeight) * 100}%, ${minPx}px)`;
                return (
                  <button
                    key={m.num}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setMove(i)}
                    className="process-move-row"
                  >
                    <div className="process-move-label">
                      <span className="process-move-num" style={{ color: m.tint }}>{m.num}</span>
                      <span className={`process-move-title ${on ? "process-move-title-active" : ""}`}>{m.title}</span>
                    </div>
                    <div className="process-move-bar-track">
                      <div
                        className="process-move-bar-fill"
                        style={{ width: fillWidth, background: on ? m.tint : "#d0cfca" }}
                      />
                      <div className="process-move-bar-text-base">
                        <span>{m.deliver}</span>
                      </div>
                      <div
                        className="process-move-bar-text-clip"
                        style={{ width: fillWidth }}
                      >
                        <div
                          className="process-move-bar-text-clip-inner"
                          style={{ color: on ? "#F0EFEC" : "#131312" }}
                        >
                          {m.deliver}
                        </div>
                      </div>
                    </div>
                    <span className="process-move-pct">{pct}%</span>
                  </button>
                );
              })}
            </div>

            <div className="process-detail">
              <div className="process-detail-head">
                <span>{activeMove.num} · {activeMove.title}</span>
                <span>{activeScale.label}</span>
              </div>
              <div className="process-detail-headline">{detail.headline}</div>
              <p className="process-detail-body">{detail.body}</p>
              <div className="process-detail-rows">
                <div className="process-detail-row">
                  <span>You get</span>
                  <span>{activeMove.deliver}</span>
                </div>
                <div className="process-detail-row">
                  <span>What gets cut</span>
                  <span>{detail.cut}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
