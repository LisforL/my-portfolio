import "../styles/footer.css";

const contactRows = [
    { label: "Email", value: "trinhtrinhnguyen333@gmail.com", href: "mailto:trinhtrinhnguyen333@gmail.com" },
    { label: "Phone", value: "+84 358 468 676", href: "tel:+84358468676" },
    { label: "Elsewhere", value: "LinkedIn · Instagram", href: "https://linkedin.com/" },
    { label: "Résumé", value: "Download PDF ↗", href: "#" },
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer-hello-grid">
                <div>
                    <a href="mailto:trinhtrinhnguyen333@gmail.com" className="footer-hello">
                        Say hello<span className="footer-hello-dot">.</span>
                    </a>
                    <p className="footer-hello-note">
                        No returns, but I will tell you within a week if I think you have hired
                        the wrong designer for the problem.
                    </p>
                </div>

                <div className="footer-info">
                    {contactRows.map((row) => (
                        <div key={row.label} className="footer-info-row">
                            <span className="footer-info-label">{row.label}</span>
                            <a
                                href={row.href}
                                target={row.href.startsWith("http") ? "_blank" : undefined}
                                rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                                {row.value}
                            </a>
                        </div>
                    ))}
                    <div className="footer-info-row footer-info-row-plain">
                        <span className="footer-info-label">Based in</span>
                        <span>Hồ Chí Minh City · UTC+7</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <span>© {new Date().getFullYear()} Trinh Trinh Nguyen</span>
                <span className="footer-credit-line">
                    Design by Trinh Trinh Nguyen · Developed by Linn Htin Nyo
                </span>
                <button type="button" className="back-to-top" onClick={scrollToTop}>
                    Back to top
                    <span className="arrow">↑</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
