import { Link } from "react-router-dom";
import { useState } from "react";
import StarfieldCanvas from "../StarfieldCanvas.jsx";

function ContactFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email via mailto
    const mailtoLink = `mailto:brook.kassa@supernovas.it?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Reset form and close
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="contact-form-modal-overlay" onClick={onClose}>
      <div className="contact-form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-form-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 className="contact-form-modal-title">Tell Us About Your Project</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your IT needs..."
              rows="5"
            />
          </div>

          <button type="submit" className="btn-glow" disabled={isSubmitting} style={{ width: '100%' }}>
            <span className="btn-glow__shine" aria-hidden="true" />
            <span className="btn-glow__text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Contact() {
  const [showContactForm, setShowContactForm] = useState(false);
  
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
                <h3>✦ Email</h3>
                <p>
                  <a href="mailto:brook.kassa@supernovas.it">brook.kassa@supernovas.it</a>
                </p>
                <p className="contact-note">We typically respond within 24 hours</p>
              </div>

              <div className="contact-method" data-aos="pulse-in-cosmic" data-aos-delay="100">
                <h3>☆ Phone</h3>
                <p>
                  <a href="tel:+17633000767">+1 (763) 300-0767</a>
                </p>
                <p className="contact-note">Available for consultations</p>
              </div>

              <div className="contact-method" data-aos="slide-right-cosmic">
                <h3>★ Location</h3>
                <p>Philadelphia, Pennsylvania</p>
                <p className="contact-note">Remote-first support across the US</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section" data-aos="fade-up-cosmic" data-aos-delay="200">
            <h2>Tell Us About Your Project</h2>
            <p>Share details about your IT needs and we'll get back to you with a tailored solution.</p>
            
            <button 
              className="btn-glow" 
              onClick={() => setShowContactForm(true)}
              style={{ marginTop: '20px' }}
            >
              <span className="btn-glow__shine" aria-hidden="true" />
              <span className="btn-glow__text">Start a Conversation</span>
            </button>
          </div>

        <ContactFormModal isOpen={showContactForm} onClose={() => setShowContactForm(false)} />

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
        <p className="footer__orbit-text">🚀 Stay in our orbit!</p>
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
