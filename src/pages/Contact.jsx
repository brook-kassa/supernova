import { Link } from "react-router-dom";
import StarfieldCanvas from "../StarfieldCanvas.jsx";

export default function Contact() {
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

      {/* Contact Section */}
      <section className="section">
        <div className="section__head section__head--center">
          <h1 className="section__title" data-aos="rotate-in-cosmic">Get In Touch</h1>
          <p className="section__sub" data-aos="fade-up-cosmic">
            Let's talk about your IT infrastructure and how we can help your business grow.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-up-cosmic" data-aos-delay="100">
            <h2>Contact Information</h2>
            
            <div className="contact-methods">
              <div className="contact-method" data-aos="slide-left-cosmic">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:brook.kassa@supernovas.it">brook.kassa@supernovas.it</a>
                </p>
                <p className="contact-note">We typically respond within 24 hours</p>
              </div>

              <div className="contact-method" data-aos="pulse-in-cosmic" data-aos-delay="100">
                <h3>📞 Phone</h3>
                <p>
                  <a href="tel:+17633000767">(763) 300-0767</a>
                </p>
                <p className="contact-note">Available for consultations</p>
              </div>

              <div className="contact-method" data-aos="slide-right-cosmic">
                <h3>📍 Location</h3>
                <p>Philadelphia, Pennsylvania</p>
                <p className="contact-note">Remote-first support across the US</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section" data-aos="fade-up-cosmic" data-aos-delay="200">
            <h2>Tell Us About Your Project</h2>
            <p>Share details about your IT needs and we'll get back to you with a tailored solution.</p>
            
            <div className="form-placeholder">
              <p>📝 Contact form coming soon</p>
              <p>For now, reach out directly via email or phone above</p>
            </div>
          </div>

          <div className="contact-services" data-aos="fade-up-cosmic" data-aos-delay="300">
            <h2>What We Can Help With</h2>
            <ul className="services-list">
              <li>Remote Monitoring & Management</li>
              <li>Cybersecurity & Endpoint Protection</li>
              <li>Cloud Migrations & SaaS Integration</li>
              <li>Helpdesk & Technical Support</li>
              <li>IT Documentation & Knowledge Bases</li>
              <li>Proactive Consulting & Infrastructure Planning</li>
            </ul>
          </div>

          <div className="contact-cta" data-aos="fade-up-cosmic" data-aos-delay="400">
            <Link to="/services" className="btn-glow">
              <span className="btn-glow__shine" aria-hidden="true" />
              <span className="btn-glow__text">Explore Our Services</span>
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
