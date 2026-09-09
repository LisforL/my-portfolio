import { useRef, useState } from "react";
import { nomu } from "../../data/caseStudies/nomu";
import "../../styles/case-study.css";

const CharacterSection = ({ character }) => {
  const [activePose, setActivePose] = useState(0);
  const [wipe, setWipe] = useState(52);
  const draggingRef = useRef(false);
  const wipeRef = useRef(null);
  const pose = character.poses[activePose];

  const setWipeFromClientX = (clientX) => {
    const el = wipeRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setWipe(pct);
  };

  return (
    <>
      <div className="cs-nm-char-grid">
        <div>
          <div
            ref={wipeRef}
            className="cs-nm-wipe"
            onPointerDown={(e) => {
              draggingRef.current = true;
              setWipeFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (draggingRef.current) setWipeFromClientX(e.clientX);
            }}
            onPointerUp={() => {
              draggingRef.current = false;
            }}
            onPointerLeave={() => {
              draggingRef.current = false;
            }}
          >
            <div className="cs-nm-wipe-layer">
              <img src={pose.final} alt={`${pose.name} — final render`} />
            </div>
            <div className="cs-nm-wipe-sketch" style={{ clipPath: `inset(0 ${100 - wipe}% 0 0)` }}>
              <div className="cs-nm-wipe-layer">
                <img src={pose.sketch} alt={`${pose.name} — sketch`} />
              </div>
            </div>
            <div className="cs-nm-wipe-handle" style={{ left: `${wipe}%` }}>
              <div className="cs-nm-wipe-handle-knob">↔</div>
            </div>
            <div className="cs-nm-wipe-tag cs-nm-wipe-tag-left">Sketch</div>
            <div className="cs-nm-wipe-tag cs-nm-wipe-tag-right">Final</div>
          </div>
        </div>
        <div>
          <p className="cs-lead" style={{ marginTop: 0 }}>
            {character.intro}
          </p>
          {character.rules.map((r) => (
            <div key={r.n} className="cs-nm-rule-row">
              <div className="cs-nm-rule-num">Rule {r.n}</div>
              <div>
                <div className="cs-nm-rule-title">{r.title}</div>
                <div className="cs-nm-rule-body">{r.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cs-nm-hint">{character.hint}</div>

      <div className="cs-nm-pose-grid">
        {character.poses.map((p, i) => (
          <div key={p.name} className="cs-nm-pose-thumb" onClick={() => setActivePose(i)}>
            <div className={`cs-nm-pose-thumb-frame ${i === activePose ? "cs-nm-pose-thumb-frame-active" : ""}`}>
              <img src={p.final} alt={p.name} />
            </div>
            <div className={`cs-nm-pose-name ${i === activePose ? "cs-nm-pose-name-active" : ""}`}>{p.name}</div>
            <div className="cs-nm-pose-use">{p.use}</div>
          </div>
        ))}
      </div>
    </>
  );
};

const ScreensInspector = ({ items, layers, gutter }) => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [on, setOn] = useState({ margin: true, grid: false, tap: false, colour: false });
  const screen = items[screenIndex];
  const count = Object.values(on).filter(Boolean).length;

  const toggle = (key) => setOn((s) => ({ ...s, [key]: !s[key] }));

  return (
    <>
      <div className="cs-nm-chips">
        {items.map((s, i) => (
          <button
            key={s.name}
            type="button"
            className={`cs-nm-chip ${i === screenIndex ? "cs-nm-chip-active" : ""}`}
            onClick={() => setScreenIndex(i)}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="cs-nm-screen-layout">
        <div className="cs-nm-phone">
          <img src={screen.image} alt={screen.name} />
          <div className="cs-nm-phone-wash" style={{ opacity: count ? 0.28 : 0 }} />
          <div className="cs-nm-phone-zones" style={{ opacity: on.colour ? 1 : 0 }}>
            {screen.zones.map((z, i) => (
              <div
                key={i}
                className="cs-nm-phone-zone"
                style={{ top: z.top, height: z.height, background: z.fill, borderBottom: `1px solid ${z.line}` }}
              />
            ))}
          </div>
          <div className="cs-nm-phone-grid" style={{ opacity: on.grid ? 1 : 0 }} />
          <div
            className="cs-nm-phone-margin"
            style={{ left: gutter, right: gutter, opacity: on.margin ? 1 : 0 }}
          />
          <div className="cs-nm-phone-taps" style={{ opacity: on.tap ? 1 : 0 }}>
            {screen.taps.map((t, i) => (
              <div key={i} className="cs-nm-phone-tap" style={{ left: t.left, top: t.top, width: t.width, height: t.height }} />
            ))}
          </div>
        </div>

        <div>
          <div className="cs-nm-screen-info-label">
            {screen.name} · {String(count).padStart(2, "0")} layers on
          </div>
          {layers.map((l) => {
            const isOn = on[l.key];
            return (
              <div key={l.key} className="cs-nm-layer-row" onClick={() => toggle(l.key)}>
                <div className={`cs-nm-layer-track ${isOn ? "cs-nm-layer-track-on" : ""}`}>
                  <div className={`cs-nm-layer-knob ${isOn ? "cs-nm-layer-knob-on" : ""}`} />
                </div>
                <div>
                  <div className={`cs-nm-layer-title ${isOn ? "cs-nm-layer-title-on" : ""}`}>{l.title}</div>
                  <p className="cs-nm-layer-note">{l.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const NomuCaseStudy = () => {
  return (
    <main className="case-study">
      <section className="cs-hero">
        <div className="cs-inner">
          <h1 className="cs-hero-title">
            {nomu.title} <em>{nomu.titleAccent}</em>
          </h1>
          <p className="cs-hero-subhead">{nomu.subtitle}</p>

          <div className="cs-meta">
            {nomu.meta.map((m) => (
              <div key={m.label}>
                <div className="cs-meta-label">{m.label}</div>
                <div className="cs-meta-value">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="cs-nm-banner">
            <div className="cs-nm-banner-dots" />
            <div className="cs-nm-banner-copy">
              <div className="cs-nm-banner-eyebrow">{nomu.banner.eyebrow}</div>
              <div className="cs-nm-banner-title">{nomu.banner.title}</div>
              <div className="cs-nm-banner-tagline">{nomu.banner.tagline}</div>
            </div>
            <div className="cs-nm-banner-circle" />
            <img className="cs-nm-banner-mascot" src={nomu.banner.image} alt="Nomu riding" />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[01]</div>
          <h2 className="cs-h2">
            {nomu.concept.heading} <span className="cs-h2-dim">{nomu.concept.headingRest}</span>
          </h2>
          <p className="cs-lead">{nomu.concept.intro}</p>

          <div className="cs-mv-overview-grid">
            {nomu.concept.cards.map((c) => (
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
            {nomu.character.heading} <span className="cs-h2-dim">{nomu.character.headingRest}</span>
          </h2>

          <CharacterSection character={nomu.character} />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[03]</div>
          <h2 className="cs-h2">
            {nomu.system.heading} <span className="cs-h2-dim">{nomu.system.headingRest}</span>
          </h2>
          <p className="cs-lead">{nomu.system.intro}</p>

          <div className="cs-nm-spec-row">
            <div className="cs-nm-spec-label">Palette</div>
            <div className="cs-nm-palette-grid">
              {nomu.system.palette.map((c) => (
                <div key={c.hex}>
                  <div className={`cs-nm-swatch ${c.bordered ? "cs-nm-swatch-bordered" : ""}`} style={{ background: c.hex }} />
                  <div className="cs-nm-swatch-hex">{c.hex}</div>
                  <div className="cs-nm-swatch-label">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-nm-spec-row">
            <div className="cs-nm-spec-label">Type in app</div>
            <div className="cs-nm-type-grid">
              {nomu.system.type.map((t) => (
                <div key={t.name}>
                  <div className="cs-nm-type-name">{t.name}</div>
                  <div className="cs-nm-type-spec">{t.spec}</div>
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
            {nomu.icons.heading} <span className="cs-h2-dim">{nomu.icons.headingRest}</span>
          </h2>

          <div className="cs-nm-proto-grid">
            <div className="cs-nm-proto-frame">
              <video src={nomu.icons.video} autoPlay loop muted playsInline />
            </div>
            <div>
              <div className="cs-nm-proto-label">{nomu.icons.protoLabel}</div>
              <div className="cs-nm-proto-title">{nomu.icons.protoTitle}</div>
              <p className="cs-nm-proto-body">{nomu.icons.protoBody}</p>
            </div>
          </div>

          <div className="cs-nm-tabs-grid">
            {nomu.icons.tabs.map((t) => (
              <div key={t.name} className="cs-nm-tab-card">
                <div className="cs-nm-tab-name">{t.name}</div>
                <div>
                  <div className="cs-nm-tab-frame">
                    <img src={t.off} alt={`${t.name} idle`} />
                  </div>
                  <div className="cs-nm-tab-state">Idle</div>
                </div>
                <div>
                  <div className="cs-nm-tab-frame">
                    <img src={t.on} alt={`${t.name} active`} />
                  </div>
                  <div className="cs-nm-tab-state cs-nm-tab-state-active">Active</div>
                </div>
              </div>
            ))}
          </div>

          <div className="cs-nm-status-grid">
            {nomu.icons.statuses.map((s) => (
              <div key={s.name} className="cs-nm-status-card">
                <div className="cs-nm-status-icon">
                  <img src={s.image} alt={s.name} />
                </div>
                <div>
                  <div className="cs-nm-status-name">{s.name}</div>
                  <div className="cs-nm-status-note">{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-index">[05]</div>
          <h2 className="cs-h2">
            {nomu.screens.heading} <span className="cs-h2-dim">{nomu.screens.headingRest}</span>
          </h2>
          <p className="cs-lead">{nomu.screens.intro}</p>

          <ScreensInspector items={nomu.screens.items} layers={nomu.screens.layers} gutter={nomu.screens.gutter} />
        </div>
      </section>
    </main>
  );
};

export default NomuCaseStudy;
