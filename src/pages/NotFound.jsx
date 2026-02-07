import { Link } from "react-router-dom";
import StarfieldCanvas from "../StarfieldCanvas.jsx";
import SupernovaEmoji from "../SupernovaEmoji.jsx";

export default function NotFound() {
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
              <p className="brand__tagline">Enterprise IT. Startup Pricing.</p>
            </div>
          </div>
        </Link>

        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:brook.kassa@supernovas.it" className="header__nav--cta">Get Started</a>
        </nav>
      </header>

      {/* 404 Section */}
      <section className="error-section">
        <div className="error-container">
          <div className="error-code" data-aos="fade-up-cosmic">
            <span className="error-digit">4</span>
            <div className="error-orbital">
              <div className="error-orbit-ring" />
              <div className="error-core" />
            </div>
            <span className="error-digit">4</span>
          </div>

          <h1 className="error-title" data-aos="fade-up-cosmic" data-aos-delay="100">
            Lost in Space
          </h1>

          <p className="error-subtitle" data-aos="fade-up-cosmic" data-aos-delay="200">
            The page you're looking for has drifted into the void.
          </p>

          <div className="error-message" data-aos="fade-up-cosmic" data-aos-delay="300">
            <p>
              Don't worry—our systems are designed to handle any destination. Let's get you back on course.
            </p>
          </div>

          <div className="error-actions" data-aos="fade-up-cosmic" data-aos-delay="400">
            <Link to="/" className="btn-glow">
              <span className="btn-glow__shine" aria-hidden="true" />
              <span className="btn-glow__text">Return Home</span>
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

          <div className="error-suggestions" data-aos="fade-up-cosmic" data-aos-delay="500">
            <p className="error-label">Suggested destinations:</p>
            <div className="suggestion-links">
              <Link to="/" className="suggestion-link">Home</Link>
              <Link to="/services" className="suggestion-link">Services</Link>
              <Link to="/about" className="suggestion-link">About</Link>
              <Link to="/contact" className="suggestion-link">Contact</Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="error-floating-element error-float-1" aria-hidden="true" />
        <div className="error-floating-element error-float-2" aria-hidden="true" />
        <div className="error-floating-element error-float-3" aria-hidden="true" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer__orbit-text">
          <img src="/ss.png" alt="Supernova Systems" className="emoji-icon emoji-inline orbit-logo" />
          Stay in our orbit!
        </p>
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
          <a href="https://discord.gg/kXTSJEwt" className="social-btn" title="Discord" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} Supernova Systems LLC</span>
          <span className="footer__sep">•</span>
          <span>Enterprise IT. Startup Pricing. Zero Compromises.</span>
        </div>
      </footer>
    </div>
  );
}
