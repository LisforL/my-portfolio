import "../styles/contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-inner contact-hero-grid">
          <div>
            <div className="contact-eyebrow">Contact</div>
            <h1 className="contact-title">
              Working together<span className="contact-title-dot">.</span>
            </h1>
            <p className="contact-subhead">
              For recruiters and hiring teams, everything you need is on this page.
            </p>
          </div>

          <div className="contact-stats">
            <div className="contact-stat-row">
              <span className="contact-stat-label">Status</span>
              <span className="contact-stat-value">Open for product designer roles</span>
            </div>
            <div className="contact-stat-row">
              <span className="contact-stat-label">Location</span>
              <span className="contact-stat-value">Hồ Chí Minh City · UTC+7</span>
            </div>
            <div className="contact-stat-row">
              <span className="contact-stat-label">Work setup</span>
              <span className="contact-stat-value">On-site HCMC · remote · open to relocation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-inner contact-body-grid">
          <div>
            <div className="contact-section-label">Direct contact</div>
            <div className="contact-rows">
              <a href="mailto:trinhtrinhnguyen333@gmail.com" className="contact-row contact-row-first">
                <span className="contact-row-label">Email</span>
                <span className="contact-row-value">trinhtrinhnguyen333@gmail.com</span>
              </a>
              <a href="tel:+84358468676" className="contact-row">
                <span className="contact-row-label">Phone</span>
                <span className="contact-row-value">+84 358 468 676</span>
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-label">For hiring teams</div>
            <h2 className="contact-card-title">Email me</h2>
            <p className="contact-card-body">Opens a draft addressed to me, subject line already set.</p>
            <a
              href="mailto:trinhtrinhnguyen333@gmail.com?subject=Role%20enquiry%20%E2%80%94%20Trinh%20Trinh%20Nguyen"
              className="contact-card-btn-solid"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
