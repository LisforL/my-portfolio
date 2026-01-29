import "../styles/footer.css";
const splitText = (text) =>
    text.split("").map((char, i) => (
        <span
            key={i}
            className="char"
            style={{ "--i": i }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            {/* Top row */}
            <div className="footer-top">
                <span>© {new Date().getFullYear()}</span>

                <button className="back-to-top" onClick={scrollToTop}>
                    BACK TO TOP
                    <span className="arrow">↑</span>
                </button>
            </div>

            {/* Main CTA */}
            <div className="footer-cta">
                <p className="footer-question">HAVE A PROJECT IN MIND?</p>

                <div className="footer-title-wrapper">
                    <h2 className="footer-title">LET’S TALK</h2>
                </div>
            </div>



            {/* Bottom row */}
            <div className="footer-bottom">
                <div className="footer-links">
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-wave-link"
                    >
                        {splitText("LINKEDIN")}
                    </a>

                    <a
                        rel="noreferrer"
                        className="footer-wave-link"
                    >
                        {splitText("PHONE +84765236522")}
                    </a>
                </div>


                <div className="footer-credit">
                    <p>Design by <strong>Trinh Trinh Nguyen</strong></p>
                    <p>Development by <strong>Linn Htin Nyo</strong></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
