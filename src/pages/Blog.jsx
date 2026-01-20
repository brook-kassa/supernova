import { Link } from "react-router-dom";
import StarfieldCanvas from "../StarfieldCanvas.jsx";

export default function Blog() {
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

      {/* Blog Section */}
      <section className="section">
        <div className="section__head section__head--center">
          <h1 className="section__title" data-aos="rotate-in-cosmic">Learning Resources & Blog</h1>
          <p className="section__sub" data-aos="fade-up-cosmic">
            Stay informed with the latest in IT, cloud, security, and business tech.
          </p>
        </div>

        <div className="about-content">
          <div className="about-hero" data-aos="fade-up-cosmic" data-aos-delay="100">
            <h2>Welcome to Our Resource Hub</h2>
            <p>
              Whether you're scaling a startup, modernizing your infrastructure, or just trying to make sense of the cloud—we've got you covered. 
              Our blog features practical guides, industry insights, and real-world case studies from the Supernova Systems team.
            </p>
          </div>

          <div className="blog-categories" data-aos="fade-up-cosmic" data-aos-delay="200">
            <h2>What You'll Find Here</h2>
            
            <div className="values-grid">
              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="300">
                <h3>☁️ Cloud Guides</h3>
                <p>Step-by-step tutorials on Azure and hybrid cloud deployments</p>
              </div>

              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="350">
                <h3>🔒 Security Best Practices</h3>
                <p>Practical cybersecurity tips, compliance checklists, and threat mitigation strategies</p>
              </div>

              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="400">
                <h3>📊 Case Studies</h3>
                <p>Real-world examples of how we've helped businesses transform their IT</p>
              </div>

              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="450">
                <h3>🚀 Startup Tech Tips</h3>
                <p>Budget-friendly strategies for lean teams building scalable infrastructure</p>
              </div>

              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="500">
                <h3>🛠️ Tools & Resources</h3>
                <p>Curated lists of the software, frameworks, and platforms we recommend</p>
              </div>

              <div className="value-card" data-aos="pulse-in-cosmic" data-aos-delay="550">
                <h3>💡 Industry Insights</h3>
                <p>Trends, news, and analysis shaping the future of managed IT services</p>
              </div>
            </div>
          </div>

          <div className="blog-preview" data-aos="fade-up-cosmic" data-aos-delay="600">
            <h2>Recent Posts</h2>
            <p className="coming-soon-text">
              🌟 Our blog is launching soon! Subscribe to our newsletter or follow us on social media to be notified when we publish our first articles.
            </p>
            
            <div className="blog-posts-placeholder">
              <div className="blog-post-card" data-aos="slide-up-cosmic" data-aos-delay="650">
                <div className="post-date">Coming Soon</div>
                <h3>Getting Started with Cloud Migration: A Step-by-Step Guide</h3>
                <p>Learn how to plan and execute a successful cloud migration without disrupting your business operations.</p>
              </div>

              <div className="blog-post-card" data-aos="slide-up-cosmic" data-aos-delay="700">
                <div className="post-date">Coming Soon</div>
                <h3>Cybersecurity Essentials for Startups on a Budget</h3>
                <p>Protect your business with these cost-effective security practices every startup should implement from day one.</p>
              </div>

              <div className="blog-post-card" data-aos="slide-up-cosmic" data-aos-delay="750">
                <div className="post-date">Coming Soon</div>
                <h3>Why Managed IT Services Beat In-House for Growing Companies</h3>
                <p>Discover the cost savings, expertise access, and scalability advantages of partnering with an MSP.</p>
              </div>
            </div>
          </div>

          <div className="blog-cta" data-aos="zoom-in-cosmic" data-aos-delay="800">
            <h2>Have a Topic Request?</h2>
            <p>
              Want us to cover a specific IT challenge or technology? Let us know! We write about what our community wants to learn.
            </p>
            <Link to="/contact" className="btn-glow">
              <span className="btn-glow__shine" aria-hidden="true" />
              <span className="btn-glow__text">Suggest a Topic</span>
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
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}
