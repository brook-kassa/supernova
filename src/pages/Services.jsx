import { Link } from "react-router-dom";
import StarfieldCanvas from "../StarfieldCanvas.jsx";
import SupernovaEmoji from "../SupernovaEmoji.jsx";

export default function Services() {
  const services = [
    {
      title: "Remote Monitoring & Management",
      description: "24/7 proactive monitoring of your infrastructure with automated alerts, patch management, and preventative maintenance to keep systems running smoothly.",
      icon: "radar"
    },
    {
      title: "Cybersecurity & Endpoint Protection",
      description: "Enterprise-grade security solutions including threat detection, endpoint protection, vulnerability assessments, and compliance support.",
      icon: "lock"
    },
    {
      title: "Cloud Migrations & Integration",
      description: "Seamless migration from on-premises to cloud platforms with zero downtime, SaaS integration, and ongoing cloud optimization.",
      icon: "cloud"
    },
    {
      title: "Helpdesk & Technical Support",
      description: "Remote and on-site technical support with fast response times, clear communication, and human-first problem solving.",
      icon: "headset"
    },
    {
      title: "IT Documentation & Knowledge Bases",
      description: "Comprehensive documentation of your IT infrastructure, policies, and procedures to ensure continuity and empower your team.",
      icon: "book"
    },
    {
      title: "Proactive Consulting & Planning",
      description: "Strategic IT consulting to align technology with business goals, roadmap planning, and infrastructure optimization.",
      icon: "target"
    }
  ];

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
              <p className="brand__tagline">Set IT & Forget IT Systems</p>
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

      {/* Services Section */}
      <section className="section">
        <div className="section__head section__head--center">
          <h1 className="section__title" data-aos="rotate-in-cosmic">Our Services</h1>
          <p className="section__sub" data-aos="fade-up-cosmic">
            Enterprise-grade IT solutions designed for startups, lean teams, and underserved communities.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={service.title} className="service-card" data-aos="glow-fade" data-aos-delay={idx * 100}>
              <div className="service-icon">
                <SupernovaEmoji name={service.icon} alt="" size={40} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="section__head section__head--center" style={{ marginTop: "48px" }}>
          <h2 className="section__title" data-aos="rotate-in-cosmic">Plans &amp; Pricing</h2>
          <p className="section__sub" data-aos="fade-up-cosmic">
            Select the plan that fits your business.
          </p>
        </div>

        <div className="pricing-grid" data-aos="fade-up-cosmic">
          <article className="pricing-card pricing-card--essentials">
            <div className="pricing-card__header">
              <h3 className="pricing-card__name">Essentials</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">$650</span>
                <span className="pricing-card__period">/mo</span>
              </div>
            </div>
            <ul className="pricing-card__list">
              <li><span className="pricing-check">✓</span>Unlimited Remote Helpdesk (Business Hours)</li>
              <li><span className="pricing-check">✓</span>Proactive Monitoring + Patch Management</li>
              <li><span className="pricing-check">✓</span>Next-Gen Antivirus / Endpoint Protection</li>
              <li><span className="pricing-check">✓</span>Microsoft 365 Admin + Basic Security</li>
              <li><span className="pricing-check">✓</span>Cloud-to-Cloud Backups (M365) + Monthly Test</li>
              <li><span className="pricing-check">✓</span>Basic Network Management</li>
              <li><span className="pricing-check">✓</span>Vendor Liaison / Vendor Management (Basic)</li>
              <li><span className="pricing-check">✓</span>Priority Response SLAs (Standard)</li>
              <li><span className="pricing-check">✓</span>After-Hours Support (Extra)</li>
            </ul>
          </article>

          <article className="pricing-card pricing-card--secure pricing-card--featured">
            <div className="pricing-card__badge">Most Popular</div>
            <div className="pricing-card__header">
              <h3 className="pricing-card__name">Secure</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">$775</span>
                <span className="pricing-card__period">/mo</span>
              </div>
            </div>
            <ul className="pricing-card__list">
              <li><span className="pricing-check">✓</span>Everything in Essentials</li>
              <li><span className="pricing-check">✓</span>Annual Security Awareness Training + Phishing Tests</li>
              <li><span className="pricing-check">✓</span>Quarterly Security &amp; Risk Review</li>
              <li><span className="pricing-check">✓</span>Vendor Liaison / Vendor Management</li>
              <li><span className="pricing-check">✓</span>Faster Priority Response SLAs</li>
              <li><span className="pricing-check">✓</span>(Optional) Dark Web Monitoring / Identity Alerts</li>
              <li><span className="pricing-check">✓</span>Annual vCIO-lite Strategic Planning</li>
              <li><span className="pricing-check">✓</span>(Extra) After-Hours Support</li>
            </ul>
          </article>

          <article className="pricing-card pricing-card--secureplus">
            <div className="pricing-card__header">
              <h3 className="pricing-card__name">Secure+</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">$900</span>
                <span className="pricing-card__period">/mo</span>
              </div>
            </div>
            <ul className="pricing-card__list">
              <li><span className="pricing-check">✓</span>Everything in Secure</li>
              <li><span className="pricing-check">✓</span>Quarterly Security Awareness Training + Phishing Tests</li>
              <li><span className="pricing-check">✓</span>Quarterly Security &amp; Risk Review</li>
              <li><span className="pricing-check">✓</span>PRIORITY Vendor Liaison / Vendor Management</li>
              <li><span className="pricing-check">✓</span>HIGH-Priority Response SLAs</li>
              <li><span className="pricing-check">✓</span>Dark Web Monitoring / Identity Alerts</li>
              <li><span className="pricing-check">✓</span>Quarterly vCIO-lite Strategic Planning</li>
              <li><span className="pricing-check">✓</span>After-Hours Support (Limited Included)</li>
            </ul>
          </article>
        </div>

        <div className="cta-section" data-aos="fade-up-cosmic">
          <p>Ready to modernize your IT infrastructure?</p>
          <Link to="/contact" className="btn-glow">
            <span className="btn-glow__shine" aria-hidden="true" />
            <span className="btn-glow__text">Get Started Today</span>
          </Link>
        </div>
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
