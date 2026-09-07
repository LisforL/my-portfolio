import "../styles/illustration.css";
import MediaHover from "../components/MediaHover";
import { featuredWork, splitWork, characters, mascots } from "../data/illustration";

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
          <MediaHover image={featuredWork.image} video={featuredWork.video} alt={featuredWork.alt} />
          <figcaption className="figcaption">
            <span className="fig-title">{featuredWork.title}</span>
            <span className="fig-subtitle">{featuredWork.subtitle}</span>
          </figcaption>
        </figure>
      </section>

      {/* Two-column narrative row */}
      <section className="illustration-split">
        {splitWork.map((item) => (
          <figure key={item.alt} className={item.className}>
            <MediaHover image={item.image} video={item.video} alt={item.alt} />
            <figcaption className="figcaption">
              <span className="fig-title">{item.title}</span>
              <span className="fig-subtitle">{item.subtitle}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      {/* Character grid */}
      <section className="illustration-characters">
        {characters.map((item) => (
          <figure key={item.alt}>
            <MediaHover image={item.image} video={item.video} alt={item.alt} />
            <figcaption>
              <span className="char-title">{item.title}</span>
              <span className="char-subtitle">{item.subtitle}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      {/* Mascot row */}
      <section className="illustration-mascots">
        {mascots.map((item) => (
          <figure key={item.alt} className={item.className}>
            <MediaHover image={item.image} video={item.video} alt={item.alt} />
            {item.title && (
              <figcaption className="figcaption">
                <span className="fig-title">{item.title}</span>
                <span className="fig-subtitle">{item.subtitle}</span>
              </figcaption>
            )}
          </figure>
        ))}
      </section>
    </main>
  );
};

export default Illustration;
