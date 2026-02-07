import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarfieldCanvas from "./StarfieldCanvas.jsx";
import SupernovaEmoji from "./SupernovaEmoji.jsx";

function SunIcon() {
  return (
    <svg className="sun-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function TechIcon({ name }) {
  // Azure uses image logo, others use FontAwesome
  if (name === 'Azure') {
    return (
      <img 
        src="https://swimburger.net/media/ppnn3pcl/azure.png" 
        alt="Azure" 
        className="tech-icon-img"
        style={{ filter: 'sepia(1) saturate(3) hue-rotate(-10deg) brightness(1.3)' }}
      />
    );
  }

  const iconMap = {
    'Docker': 'fab fa-docker',
    'Kubernetes': 'fas fa-dharmachakra',
    'HIPAA': 'fas fa-shield-alt',
    'SOC 2': 'fas fa-check-circle',
    'ISO 27001': 'fas fa-certificate',
  };

  return <i className={iconMap[name] || 'fas fa-cube'} aria-label={name}></i>;
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function GlowButton({ children, onClick, href }) {
  if (onClick) {
    return (
      <button className="btn-glow" onClick={onClick}>
        <span className="btn-glow__shine" aria-hidden="true" />
        <span className="btn-glow__text">{children}</span>
      </button>
    );
  }
  return (
    <a className="btn-glow" href={href}>
      <span className="btn-glow__shine" aria-hidden="true" />
      <span className="btn-glow__text">{children}</span>
    </a>
  );
}

function CalendlyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/brookassa4/30min?background_color=1a1a1a&text_color=ffffff&primary_color=b00020',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="calendly-modal-overlay" onClick={onClose}>
      <div className="calendly-modal" onClick={(e) => e.stopPropagation()}>
        <button className="calendly-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="calendly-widget-container">
          <div
            className="calendly-inline-widget"
          ></div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ title, desc, details, isOpen, onToggle, logos }) {
  return (
    <div className="accordion__item">
      <button
        className="accordion__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="accordion__icon-bullet"><SunIcon /></span>
        <span className="accordion__title">{title}</span>
        <span className="accordion__toggle" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="accordion__content">
          <p className="accordion__summary">{desc}</p>
          {details && <p className="accordion__details">{details}</p>}
          {logos && (
            <div className="accordion__logos">
              {logos.map((logo, idx) => (
                <span key={idx} className="tech-badge" title={logo}>
                  <TechIcon name={logo} />
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SupernovaSystemsLanding() {
  const services = useMemo(
    () => [
      {
        title: "Remote Helpdesk & Priority Support",
        desc: "Business-hours helpdesk with priority SLAs and optional after-hours coverage.",
        details: "Every plan includes unlimited remote helpdesk support during business hours. Higher tiers add faster response SLAs and after-hours availability so critical issues are handled when they matter most.",
      },
      {
        title: "Monitoring, Patch Management & Backups",
        desc: "Proactive monitoring, automated patching, and tested cloud backups.",
        details: "We keep systems healthy with continuous monitoring, patch management, and endpoint protection. Plans also include Microsoft 365 administration plus cloud-to-cloud backups with monthly recovery testing.",
      },
      {
        title: "Security Awareness & Risk Reviews",
        desc: "Training, phishing tests, and recurring security & risk reviews.",
        details: "Secure and Secure+ add structured security awareness training with phishing simulations plus quarterly security and risk reviews to keep your team and policies sharp.",
      },
      {
        title: "Vendor Management & vCIO Planning",
        desc: "We coordinate vendors and provide strategic planning guidance.",
        details: "We act as your vendor liaison for faster resolution and accountability. Higher tiers include vCIO-lite strategic planning so your IT roadmap stays aligned with business goals.",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        title: "Proactive, Not Reactive",
        desc: "We monitor your systems 24/7 and fix issues before they impact you.",
        details: "Rather than waiting for problems to break your business, we detect anomalies early and resolve them proactively. Our 99.9% uptime guarantee is backed by monitoring, alerting, and rapid response protocols.",
      },
      {
        title: "Built for Growth",
        desc: "Your infrastructure scales seamlessly as your business expands.",
        details: "We architect systems that grow with you—no costly redesigns or painful migrations. Auto-scaling, load balancing, and capacity planning ensure your tech never becomes a bottleneck.",
      },
      {
        title: "Security-First Approach",
        desc: "Multi-layer protection with compliance built in from day one.",
        details: "Security isn't an afterthought—it's embedded in every system we build. We implement zero-trust architectures, encryption, access controls, and regular audits to keep your data and customer data safe.",
      },
      {
        title: "Expert Support & Transparent Pricing",
        desc: "Certified engineers with fixed monthly fees and full visibility.",
        details: "Our team consists of Microsoft-certified engineers with real-world expertise in Azure and the Microsoft ecosystem. When issues arise, you work directly with professionals who understand your systems deeply. You get predictable costs with no hidden charges, plus monthly business reviews showing uptime stats, security posture, performance metrics, and cost trends.",
      },
    ],
    []
  );

  const [openServices, setOpenServices] = useState(0);
  const [openBenefits, setOpenBenefits] = useState(0);
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="page-root">
      {/* Space background */}
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

            {/* Text logo and tagline */}
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
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowCalendly(true); }} className="header__nav--cta">Get Started</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__pills" data-aos="fade-up-cosmic">
              <Pill>Cloud & Infrastructure</Pill>
              <Pill>IT Strategy & Consulting</Pill>
              <Pill>Networking & Monitoring</Pill>
              <Pill>Security & Reliability</Pill>
            </div>

            <h1 className="hero__title" data-aos="fade-up-cosmic" data-aos-delay="100">
              <span className="hero__titleRed">Our systems don't implode,</span> <span className="hero__titleGold">so your business can explode.</span>
            </h1>

            <p className="hero__subtitle" data-aos="fade-up-cosmic" data-aos-delay="200">
              Stop throwing money at IT. Get institutional-grade infrastructure at startup prices, complete with expert support and proactive monitoring.
            </p>

            <div className="hero__ctaRow" data-aos="fade-up-cosmic" data-aos-delay="300">
              <GlowButton onClick={() => setShowCalendly(true)}>Schedule Free Consultation</GlowButton>
            </div>

            <div className="hero__micro" data-aos="fade-up-cosmic" data-aos-delay="400">
              <span className="microDot" />
              <span>Endpoint Protection • <span className="text-gold">Unlimited helpdesk</span> • Secure Backups &amp; Recovery</span>
            </div>
          </div>

          {/* Animated Core (larger now) */}
          <Link to="/about" className="hero__coreWrap" data-aos="pulse-in-cosmic">
            <div className="supernova-orbit supernova-orbit--lg" role="img" aria-label="Supernova Core">
              <div className="ring ring--a" />
              <div className="ring ring--b" />
              <div className="ring ring--c" />

              <div className="core core--lg">
                <div className="core__glow core__glow--lg" />
                <img
                  src="/ss.png"
                  alt="Supernova Systems"
                  className="core__logo core__logo--lg"
                />
              </div>

              <div className="spark spark--1" />
              <div className="spark spark--2" />
              <div className="spark spark--3" />
              <div className="spark spark--4" />
            </div>

            <p className="core__caption">
              24/7 monitoring. Enterprise reliability. Zero compromise.
            </p>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="section__head section__head--center">
          <h2 className="section__title" data-aos="rotate-in-cosmic">What We Offer</h2>
          <p className="section__sub" data-aos="fade-up-cosmic">
            Comprehensive IT services designed to keep your business running and growing.
          </p>
        </div>

        <div className="accordion" data-aos="fade-up-cosmic">
          {services.map((s, idx) => (
            <AccordionItem
              key={s.title}
              title={s.title}
              desc={s.desc}
              details={s.details}
              logos={s.logos}
              isOpen={openServices === idx}
              onToggle={() => setOpenServices(openServices === idx ? -1 : idx)}
            />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section" id="pricing">
        <div className="section__head section__head--center">
          <h2 className="section__title" data-aos="rotate-in-cosmic">Plans & Pricing</h2>
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
      </section>

      {/* Why Choose Us */}
      <section className="section" id="approach">
        <div className="section__head section__head--above-boxes">
          <h2 className="section__title" data-aos="rotate-in-cosmic">Why Choose Supernova</h2>
          <p className="section__sub" data-aos="fade-up-cosmic">Trusted by growing businesses. Here's what sets us apart.</p>
        </div>

        <div className="accordion" data-aos="fade-up-cosmic">
          {benefits.map((b, idx) => (
            <AccordionItem
              key={b.title}
              title={b.title}
              desc={b.desc}
              details={b.details}
              isOpen={openBenefits === idx}
              onToggle={() => setOpenBenefits(openBenefits === idx ? -1 : idx)}
            />
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section section--partnership" id="partners">
        <div className="partnerships-header" data-aos="fade-up-cosmic">
          <div className="partnership-badge">
            <span className="partnership-badge__label">Trusted Partners</span>
          </div>
          <h3 className="partnerships-title">Built on Enterprise Excellence</h3>
          <p className="partnerships-description">
            We partner with industry-leading technology providers to deliver enterprise-grade solutions. Our strategic partnerships ensure you receive best-in-class hardware, support, and expertise backed by institutional quality and competitive pricing.
          </p>
        </div>

        <div className="partners-grid">
          {/* Dell Partner Block */}
          <div className="partner-block" data-aos="fade-up-cosmic">
            <div className="partner-card">
              <div className="partner-logo-wrapper">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png" 
                  alt="DELL Partner Logo" 
                  className="partner-logo"
                />
                <div className="partner-logo-glow" aria-hidden="true"></div>
              </div>
              <h4 className="partner-name">Dell Technologies</h4>
              <p className="partner-details">
                As a certified Dell partner, we deliver enterprise-grade hardware, infrastructure solutions, and comprehensive support tailored to your IT needs.
              </p>
            </div>
          </div>

          {/* Lenovo Partner Block */}
          <div className="partner-block" data-aos="fade-up-cosmic">
            <div className="partner-card">
              <div className="partner-logo-wrapper">
                <img 
                  src="https://cdn.freebiesupply.com/logos/large/2x/lenovo-2-logo-png-transparent.png" 
                  alt="Lenovo Partner Logo" 
                  className="partner-logo lenovo-logo"
                />
                <div className="partner-logo-glow lenovo-glow" aria-hidden="true"></div>
              </div>
              <h4 className="partner-name">Lenovo</h4>
              <p className="partner-details">
                Partnering with Lenovo, we provide innovative computing solutions, advanced ThinkSystem servers, and workstations for enterprise environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="section__head section__head--above-boxes">
          <h2 className="section__title" data-aos="rotate-in-cosmic">Ready to Get Started?</h2>
          <p className="section__sub" data-aos="fade-up-cosmic">
            Let's talk about your IT challenges and build a plan that fits your goals.
          </p>
        </div>

        <div className="contact">
          <div className="contact__box">
            <h3>Schedule a Free Consultation</h3>
            <p className="contact__text">
              No obligation. We'll analyze your current setup, identify pain points, and recommend a roadmap tailored to your business.
            </p>
            <p className="contact__text">
              Email:{" "}
              <a href="mailto:brook.kassa@supernovas.it">
                brook.kassa@supernovas.it
              </a>
            </p>
            <p className="contact__text">
              Phone:{" "}
              <a href="tel:+17633000767">
                +1 (763) 300-0767
              </a>
            </p>
          </div>

          <div className="contact__box contact__box--accent">
            <h3>What to Expect</h3>
            <ul className="contact__list">
              <li><span className="checkmark">✓</span> <span className="text-gold">Free</span> IT assessment</li>
              <li><span className="checkmark">✓</span> Personalized recommendations</li>
              <li><span className="checkmark">✓</span> Zero pressure, just solutions</li>
              <li><span className="checkmark">✓</span> Clear next steps</li>
            </ul>
            <button className="btn-glow" onClick={() => setShowCalendly(true)} style={{ marginTop: "16px", width: "100%" }}>
              <span className="btn-glow__shine" aria-hidden="true" />
              <span className="btn-glow__text">Schedule Free Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />

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
