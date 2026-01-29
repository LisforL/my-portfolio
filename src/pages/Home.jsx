import "../styles/home.css";

const Home = () => {
    return (
        <>
            {/* Hero name */}
            <section className="home-hero">
                <h1 className="home-name">
                    Trinh Trinh <span className="oblique">Nguyen</span>
                </h1>
            </section>

            {/* Main grid */}
            <main className="home">
                {/* Right role list */}
                <section className="home-right">
                    <p>UI/UX & WEB DESIGNER</p>
                    <p>ANIMATION AND INTERACTIVITY</p>
                    <p>ILLUSTRATION</p>
                </section>

                {/* Center image */}
                <section className="home-center">
                    <div className="image-wrapper">
                        <img src="/profile.png" alt="Profile" className="home-image" />
                        <img src="/spark.png" alt="Spark" className="spark" />
                    </div>
                </section>

                {/* Left text */}
                <section className="home-left">
                    <p className="home-intro">
                        I create digital experiences that spark curiosity and leave a mark.
                        Every interface I design is a space where creativity and
                        functionality meet to tell unique stories.
                    </p>
                </section>
            </main>

            {/* ===============================
          EXPERTISE & KNOWLEDGE
      ================================ */}
            <section className="home-services">
                {/* LEFT CONTENT */}
                <div className="services-content">
                    <p className="services-eyebrow">
                        Services That <span>Shape</span> Experiences
                    </p>

                    {/* EXPERTISE */}
                    <div className="services-block">
                        <h3 className="services-title">Expertise</h3>

                        <ul className="services-list">
                            <li>
                                <div className="services-label">
                                    <span className="services-index">[1]</span>
                                    <span className="services-name">UI / UX Design</span>
                                </div>

                                <p className="services-desc">
                                    I design digital experiences that feel intuitive and human—where
                                    every interaction has a purpose and every pixel earns its place.
                                </p>
                            </li>

                            <li>
                                <div className="services-label">
                                    <span className="services-index">[2]</span>
                                    <span className="services-name">Product Thinking</span>
                                </div>

                                <p className="services-desc">
                                    I obsess over user flows, edge cases, and micro-interactions,
                                    translating complex problems into clear, usable solutions.
                                </p>
                            </li>

                            <li>
                                <div className="services-label">
                                    <span className="services-index">[3]</span>
                                    <span className="services-name">Design Systems & Details</span>
                                </div>

                                <p className="services-desc">
                                    I build scalable systems with a designer’s eye and an engineer’s
                                    precision—consistent, flexible, and made to evolve.
                                </p>
                            </li>

                            <li>
                                <div className="services-label">
                                    <span className="services-index">[4]</span>
                                    <span className="services-name">
                                        Illustration & Visual Storytelling
                                    </span>
                                </div>

                                <p className="services-desc">
                                    I craft illustrations that add personality, emotion, and narrative—
                                    turning interfaces into memorable experiences.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* KNOWLEDGE */}
                    <div className="services-block">
                        <h3 className="services-title">Knowledge</h3>

                        <ul className="knowledge-list">
                            <li>
                                <span>Design & UI Animation</span>
                                <span>Figma, Midjourney, Illustrator, Photoshop, Procreate</span>
                            </li>
                            <li>
                                <span>Development Technologies</span>
                                <span>HTML, CSS, Framer (Basic)</span>
                            </li>
                            <li>
                                <span>Collaboration & Communication</span>
                                <span>Zoom, Email, Google Meet, Skype</span>
                            </li>
                            <li>
                                <span>Project Management</span>
                                <span>GitHub, ClickUp</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="services-image">
                    <img src="/service-black.png" alt="Abstract texture" />
                </div>
            </section>
        </>
    );
};

export default Home;
