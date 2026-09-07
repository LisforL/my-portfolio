import { useState } from "react";
import { verdictLines } from "../../data/process";

const FitQuiz = () => {
  const [verdict, setVerdict] = useState(2);

  const askAgain = () => setVerdict((v) => (v + 1) % verdictLines.length);
  const verdictNo = String(verdict + 1).padStart(2, "0") + " / " + String(verdictLines.length).padStart(2, "0");

  return (
    <section id="hire" className="home-section home-section-dark">
      <div className="home-section-inner">
        <div className="home-index home-index-dark">[03]</div>
        <div className="fit-grid">
          <div>
            <h2 className="home-h2 home-h2-dark">
              Are we a <span className="home-h2-dim-dark">fit</span>?
            </h2>
            <p className="fit-lead">
              The honest answer depends on what you need. I wrote six of them — keep tapping
              until one sounds like your project.
            </p>
          </div>

          <div className="fit-card">
            <div className="fit-card-head">
              <div className="fit-answer-no">Answer {verdictNo}</div>
              <div className="fit-dots">
                {verdictLines.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label="Show answer"
                    onClick={() => setVerdict(i)}
                    className={`fit-dot ${i === verdict ? "fit-dot-active" : ""}`}
                  />
                ))}
              </div>
            </div>
            <div className="fit-question">
              You asked: <span>“Should I bring you onto this project?”</span>
            </div>
            <p className="fit-verdict">{verdictLines[verdict]}</p>
            <div className="fit-actions">
              <button type="button" className="fit-ask-again" onClick={askAgain}>↻ Ask again</button>
              <a href="mailto:trinhtrinhnguyen333@gmail.com" className="fit-email">Skip it, email me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitQuiz;
