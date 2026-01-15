import { Link } from "react-router-dom";
import StarfieldCanvas from "../StarfieldCanvas.jsx";

export default function About() {
  return (
    <div className="page-root">
      <StarfieldCanvas />
      <div className="cosmic-overlay" aria-hidden="true" />

      {/* Header */}
      <header className="header">
        <Link to="/" className="header__brand-link">
          <div className="header__brand" aria-label="Supernova Systems">
            <div className="brand__iconWrap" aria-hidden="true">
              <div className="brand__iconGlow" />
              <img
                src="/ss.png"
                alt="Supernova Systems Icon"
                className="brand__icon"
              />
            </div>

            <div className="brand__text">
              <img
                src="/ss_text_logo.png"
                alt="SUPERNOVAsys"
                className="brand__textLogoHeader"
              />
              <p className="brand__tagline">Set IT, Forget IT</p>
            </div>
          </div>
        </Link>

        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:brook.kassa@supernovas.it" className="header__nav--cta">Get Started</a>
        </nav>
      </header>

      {/* About Section */}
      <section className="section">
        <div className="section__head section__head--center">
          <h1 className="section__title" data-aos="rotate-in-cosmic">About Supernova Systems</h1>
          <p className="section__sub" data-aos="fade-up-cosmic">
            Set IT and Forget IT.
          </p>
        </div>

        <div className="about-content">
          <div className="about-hero" data-aos="fade-up-cosmic" data-aos-delay="100">
            <h2>Our Mission</h2>
            <p>
              Supernova Systems is a modern, Managed IT Services Provider (MSP) built for startups, lean teams, and underserved communities. 
              We deliver enterprise-grade IT solutions with a human-first approach — simplifying technology so businesses can focus on what they do best.
            </p>
          </div>

          <div className="about-values" data-aos="fade-up-cosmic" data-aos-delay="200">
            <h2>Our Approach</h2>
            <p>
              From remote monitoring and support to cybersecurity and cloud migrations, Supernova blends proactive IT care with deep empathy for clients' time, budget, and goals. 
              Whether you're scaling your first startup or modernizing local infrastructure, we make it easy to "Set IT and Forget IT."
            </p>

            <div className="values-grid">
              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="300">
                <h3>🎯 Accessible</h3>
                <p>Priced for real-world teams, not just big enterprise</p>
              </div>
              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="400">
                <h3>⚡ Effortless</h3>
                <p>Powered by automation, cloud-native tooling, and remote-first support</p>
              </div>
              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="500">
                <h3>🤝 Human</h3>
                <p>Rooted in clear communication, empathy, and long-term partnerships</p>
              </div>
            </div>
          </div>

          <div className="about-why" data-aos="fade-up-cosmic" data-aos-delay="300">
            <h2>Why "Supernova"?</h2>
            <p>
              Like the cosmic event it's named after, Supernova represents a powerful burst of energy — a catalyst for growth, change, and clarity. 
              We aim to be that force for our clients: illuminating, accelerating, and protecting their IT journey from day one.
            </p>
          </div>

          <div className="about-contact-cta" data-aos="fade-up-cosmic" data-aos-delay="400">
            <h2>Ready to Partner With Us?</h2>
            <p>Let's talk about your IT infrastructure and how we can help you grow.</p>
            <Link to="/contact" className="btn-glow">
              <span className="btn-glow__shine" aria-hidden="true" />
              <span className="btn-glow__text">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.linkedin.com/company/supernova-systems-llc/about/?viewAsMember=true" className="social-btn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://x.com" className="social-btn" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://youtube.com" className="social-btn" title="YouTube" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://tiktok.com" className="social-btn" title="TikTok" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://instagram.com" className="social-btn" title="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" className="social-btn" title="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} Supernova Systems LLC</span>
          <span className="footer__sep">•</span>
          <span>Jet Black. Blood Red. Reliable Systems.</span>
        </div>
      </footer>
    </div>
  );
}
