import "../styles/illustration.css";

const Illustration = () => {
  return (
    <main className="illustration">

      {/* Header */}
      <header className="illustration-header">
        <h1>Feature Work</h1>
      </header>

      {/* Featured artwork */}
      <section className="illustration-feature">
        <figure>
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/illus-feature.png" alt="Hà Nội Folk Theatre" />

            <video
              src="./illustrations/illus-feature.MP4"
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption className="figcaption">
            <span className="fig-title">Hà Nội Folk Theatre</span>
            <span className="fig-subtitle">Traditional Hát Bội performance</span>
          </figcaption>
        </figure>
      </section>

      {/* Two-column narrative row */}
      <section className="illustration-split">
        <figure className="split-left">
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/BTS.png" alt="Behind the scene - Hát Bội" />

            <video
              src="./illustrations/BTS.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption className="figcaption">
            <span className="fig-title">Behind the scene - Hát Bội</span>
            <span className="fig-subtitle">The “language” of the face</span>
          </figcaption>
        </figure>

        <figure className="split-right">
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/instruments.png" alt="Instruments" />

            <video
              src="./illustrations/instruments.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption className="figcaption">
            <span className="fig-title">Instruments</span>
            <span className="fig-subtitle">Musical dialogue performance in Hát Bội</span>
          </figcaption>
        </figure>
      </section>



      {/* Character grid */}
      <section className="illustration-characters">
        <figure>
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/character-01.png" alt="Character 01" />

            <video
              src="./illustrations/character-01.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption>
            <span className="char-title">Character 01</span>
            <span className="char-subtitle">Theatrical performance in Hát Bội</span>
          </figcaption>
        </figure>

        <figure>
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/character-02.png" alt="Character 02" />

            <video
              src="./illustrations/character-02.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption>
            <span className="char-title">Character 02</span>
            <span className="char-subtitle">Theatrical performance in Hát Bội</span>
          </figcaption>
        </figure>

        <figure>
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/character-03.png" alt="Character 03" />

            <video
              src="./illustrations/character-03.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption>
            <span className="char-title">Character 03</span>
            <span className="char-subtitle">Theatrical performance in Hát Bội</span>
          </figcaption>
        </figure>

        <figure>
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/character-04.png" alt="Character 04" />

            <video
              src="./illustrations/character-04.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption>
            <span className="char-title">Character 04</span>
            <span className="char-subtitle">Theatrical performance in Hát Bội</span>
          </figcaption>
        </figure>
      </section>


      {/* Mascot row */}
      <section className="illustration-mascots">
        <figure>
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/mascot-a.png" alt="Mascot 01" />

            <video
              src="./illustrations/mascot-a.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>


        </figure>

        <figure className="mascot-featured">
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/mascot-b.png" alt="Mascot 02" />

            <video
              src="./illustrations/mascot-b.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>

          <figcaption className="figcaption">
            <span className="fig-title">Tết 2023</span>
            <span className="fig-subtitle">Year of the Fire Horse </span>
          </figcaption>
        </figure>

        <figure>
          <div
            className="media-hover"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.currentTime = 0;   // always start from beginning
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;   // reset when leaving
              }
            }}
          >
            <img src="./illustrations/mascot-c.png" alt="Mascot 03" />

            <video
              src="./illustrations/mascot-c.mov"
              muted
              playsInline
              preload="metadata"
            />
          </div>

        </figure>
      </section>


    </main>
  );
};

export default Illustration;
