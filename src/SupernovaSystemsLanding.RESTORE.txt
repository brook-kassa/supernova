// This is your current simplified version - backed up before restoring original
import { useMemo } from "react";
import StarfieldCanvas from "./StarfieldCanvas.jsx";

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function GlowButton({ children, href = "#contact" }) {
  return (
    <a className="btn-glow" href={href}>
      <span className="btn-glow__shine" aria-hidden="true" />
      <span className="btn-glow__text">{children}</span>
    </a>
  );
}

function Card({ title, desc }) {
  return (
    <div className="card">
      <div className="card__top">
        <div className="card__dot" />
        <h3 className="card__title">{title}</h3>
      </div>
      <p className="card__desc">{desc}</p>
    </div>
  );
}

export default function SupernovaSystemsLanding() {
  const services = useMemo(
    () => [
      {
        title: "Cloud Infrastructure",
        desc: "Design and implement scalable Azure/AWS foundations with clean, readable systems that scale with you.",
      },
      {
        title: "Managed IT & Reliability",
        desc: "Monitoring, patching, backups, and operational discipline that prevents outages instead of reacting to them.",
      },
      {
        title: "Migrations & Modernization",
        desc: "Move from on-prem to cloud with minimal disruption—networking, identity, data, and cutover planning.",
      },
      {
        title: "Automation & CI/CD",
        desc: "Remove repetitive work with pipelines, scripted workflows, and guardrails that keep environments stable.",
      },
    ],
    []
  );

  return (
    <div className="page-root">
      {/* Space background */}
      <StarfieldCanvas />
      <div className="cosmic-overlay" aria-hidden="true" />

      {/* Header */}
      <header className="header">
        <div className="header__brand" aria-label="Supernova Systems">
          <div className="brand__iconWrap" aria-hidden="true">
            <div className="brand__iconGlow" />
            <img
              src="/ss.png"
              alt="Supernova Systems Icon"
              className="brand__icon"
            />
          </div>

          {/* Text logo to the right of the sun icon */}
          <img
            src="/ss_text_logo.png"
            alt="SUPERNOVAsys"
            className="brand__textLogoHeader"
          />
        </div>

        <nav className="header__nav">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__pills">
              <Pill>24/7 IT Support</Pill>
              <Pill>Cloud Solutions</Pill>
              <Pill>Cyber-Sec Services</Pill>
            </div>

            <h1 className="hero__title">
              Reliable Cloud & IT Infrastructure
              <span className="hero__titleAccent">— built to last.</span>
            </h1>

            <p className="hero__subtitle">
              Supernova Systems designs, migrates, and operates modern cloud
              infrastructure with the discipline of enterprise operations and
              the speed your startup needs.
            </p>

            <div className="hero__ctaRow">
              <GlowButton href="#contact">Start a Project</GlowButton>
            </div>

            <div className="hero__micro">
              <span className="microDot" />
              <span>Focused on uptime, clean design, and readable systems.</span>
            </div>
          </div>

          {/* Animated Core (larger now) */}
          <div className="hero__coreWrap">
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
              Controlled glow + smooth orbit. Professional by default.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="section__head section__head--center">
          <h2 className="section__title">Services</h2>
          <p className="section__sub">
            Clear offerings. No fluff. Built for teams that want reliability and
            momentum.
          </p>
        </div>

        <div className="cards">
          {services.map((s) => (
            <Card key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section" id="approach">
        <div className="section__head">
          <h2 className="section__title">Approach</h2>
          <p className="section__sub">What "professional" looks like in practice.</p>
        </div>

        <div className="approach">
          <div className="approach__item">
            <h3>Operate like enterprise</h3>
            <p>
              Documentation, repeatable change, incident hygiene, and backups/restores
              that actually work.
            </p>
          </div>

          <div className="approach__item">
            <h3>Move like a startup</h3>
            <p>
              Fast iteration, pragmatic tooling, and ruthless focus on outcomes—not busywork.
            </p>
          </div>

          <div className="approach__item">
            <h3>Engineer-led delivery</h3>
            <p>
              You talk to the builder. Clear decisions, clean implementation, and durable systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="section__head">
          <h2 className="section__title">Contact</h2>
          <p className="section__sub">
            Let's talk scope, timeline, and the fastest path to a stable system.
          </p>
        </div>

        <div className="contact">
          <div className="contact__box">
            <h3>Start here</h3>
            <p className="contact__text">
              Email:{" "}
              <a href="mailto:contact@supernovasystems.com">
                contact@supernovasystems.com
              </a>
            </p>
            <p className="contact__text">
              Reply with what you want built (cloud, migration, monitoring, automation)
              and your timeline.
            </p>
          </div>

          <div className="contact__box contact__box--accent">
            <h3>Default stack</h3>
            <ul className="contact__list">
              <li>Azure / AWS</li>
              <li>IaC-ready patterns</li>
              <li>Monitoring + backups</li>
              <li>Secure-by-default setup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} Supernova Systems LLC</span>
          <span className="footer__sep">•</span>
          <span>Jet Black. Blood Red. Reliable Systems.</span>
        </div>
      </footer>
    </div>
  );
}
