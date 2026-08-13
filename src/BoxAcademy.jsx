import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ArrowUpRight,
  Menu,
  X,
  BrainCircuit,
  Server,
  ShieldCheck,
  Cloud,
  Users2,
  BadgeCheck,
  CheckCircle2,
  Building2,
  Laptop,
  CalendarClock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Assets                                                             */
/* ------------------------------------------------------------------ */

const BOXAFRICA_LOGO = "/boxafrica-logo-transparent.png";
const BOXAFRICA_BOX = "/boxafrica-box.png";

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll helper (same behaviour as the homepage)           */
/* ------------------------------------------------------------------ */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const TRACKS = [
  {
    icon: Cloud,
    title: "Microsoft & Cloud",
    items: ["Azure Administrator", "Microsoft 365", "Power Platform", "Architecture Cloud"],
  },
  {
    icon: Server,
    title: "DevOps / DevSecOps",
    items: ["CI/CD & Kubernetes", "Docker & Conteneurisation", "Infrastructure as Code", "SRE & Observabilité"],
  },
  {
    icon: BrainCircuit,
    title: "Développement & IA",
    items: ["Développement web & mobile", "Data & Machine Learning", "Ingénierie de prompts", "Architecture logicielle"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    items: ["Pentest & Ethical Hacking", "SecOps & SOC", "Analyse forensique", "Gouvernance & conformité"],
  },
  {
    icon: Laptop,
    title: "Management des SI",
    items: ["Gestion de projets IT", "ITIL & gouvernance", "Pilotage de la DSI", "Transformation digitale"],
  },
  {
    icon: Users2,
    title: "Soft Skills & Leadership",
    items: ["Management d'équipes tech", "Communication projet", "Agilité & Scrum", "Conduite du changement"],
  },
];

const CERTIFICATIONS = [
  "Microsoft Certified",
  "AWS Certified",
  "CompTIA Security+",
  "Certified Ethical Hacker (CEH)",
  "ITIL 4 Foundation",
  "PMP / PRINCE2",
  "Scrum Master (PSM)",
  "Cisco CCNA",
];

const FORMAT_STEPS = [
  {
    icon: CalendarClock,
    title: "Inter ou Intra-entreprise",
    text: "Sessions ouvertes sur nos campus ou déployées directement dans vos locaux, selon vos contraintes.",
  },
  {
    icon: Laptop,
    title: "Salles équipées",
    text: "Environnements pratiques prêts à l'emploi — labs, VM et outillage identiques à ceux du terrain.",
  },
  {
    icon: BadgeCheck,
    title: "Formateurs certifiés",
    text: "Des experts en activité, certifiés sur les technologies enseignées, avec une pédagogie orientée pratique.",
  },
  {
    icon: CheckCircle2,
    title: "Accompagnement post-formation",
    text: "Suivi, ressources complémentaires et préparation ciblée aux examens de certification.",
  },
];

const AUDIENCE = ["Étudiants & jeunes diplômés", "Professionnels IT", "Entreprises", "Administrations publiques"];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function BoxAcademy() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { href: "#parcours", label: "Parcours" },
    { href: "#certifications", label: "Certifications" },
    { href: "#format", label: "Format" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="ba-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .ba-root {
          --bg: #0b0f17;
          --bg-elevated: #121927;
          --bg-elevated-2: #182235;
          --border: rgba(255,255,255,0.10);
          --text: #f4f7fb;
          --text-dim: #a4afc2;
          --amber: #f59e4a;
          --green: #39cda2;
          --blue: #4f8cff;
          --purple: #9b7bff;
          --cyan: #56cfe1;
          --cream: #f6f2e9;

          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .ba-root * { box-sizing: border-box; }

        .ba-root h1, .ba-root h2, .ba-root h3 {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .ba-mono {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ba-logo-img { display: block; width: 142px; height: auto; }
        .ba-box-animation {
          width: 68px; height: 68px; object-fit: contain;
          animation: ba-box-float 3.8s ease-in-out infinite, ba-box-pulse 2.8s ease-in-out infinite;
          filter: brightness(0) invert(1) drop-shadow(0 14px 24px rgba(79,140,255,.22));
        }
        @keyframes ba-box-float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-9px) rotate(2deg); }
        }
        @keyframes ba-box-pulse {
          0%, 100% { opacity: .9; }
          50% { opacity: 1; }
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);
        }
        [data-reveal].is-in { opacity: 1; transform: none; }

        /* ---- nav ---- */
        .ba-nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 6vw;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background .3s ease, border-color .3s ease, padding .3s ease;
        }
        .ba-nav.scrolled {
          background: rgba(8,11,18,0.85);
          backdrop-filter: blur(10px);
          border-bottom-color: var(--border);
          padding: 12px 6vw;
        }
        .ba-brand { display: flex; align-items: center; color: var(--text); text-decoration: none; }
        .ba-brand .ba-logo-img { width: 138px; filter: brightness(0) invert(1); }
        .ba-navlinks { display: flex; gap: 32px; }
        .ba-navlinks a {
          color: var(--text-dim); text-decoration: none; font-size: 14.5px; font-weight: 500;
          transition: color .2s ease; position: relative;
        }
        .ba-navlinks a:hover { color: var(--text); }
        .ba-navcta {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--text); color: var(--bg);
          padding: 9px 18px; border-radius: 999px; font-size: 14px; font-weight: 600;
          text-decoration: none; transition: transform .2s ease, opacity .2s ease;
        }
        .ba-navcta:hover { transform: translateY(-1px); opacity: .9; }
        .ba-burger {
          display: none; background: none; border: 1px solid var(--border); color: var(--text);
          width: 38px; height: 38px; border-radius: 10px; align-items: center; justify-content: center;
        }
        .ba-mobile-panel {
          display: none; flex-direction: column; gap: 18px;
          position: fixed; inset: 64px 0 0 0; z-index: 49;
          background: var(--bg); padding: 32px 8vw; border-top: 1px solid var(--border);
        }
        .ba-mobile-panel.open { display: flex; }
        .ba-mobile-panel a { color: var(--text); text-decoration: none; font-size: 20px; font-family: 'Space Grotesk'; }

        /* ---- hero ---- */
        .ba-hero {
          position: relative;
          display: flex; align-items: center; min-height: 68vh;
          padding: 10vh 6vw 8vh; overflow: hidden;
          isolation: isolate;
        }
        .ba-hero-bg {
          position: absolute; inset: 0; z-index: -2; pointer-events: none;
          background-image:
            linear-gradient(90deg, rgba(8,12,20,.96) 0%, rgba(8,12,20,.86) 46%, rgba(8,12,20,.58) 78%, rgba(8,12,20,.78) 100%),
            url("https://images.pexels.com/photos/7391026/pexels-photo-7391026.jpeg?auto=compress&cs=tinysrgb&w=1800");
          background-size: cover; background-position: center;
          transform: scale(1.02);
        }
        .ba-hero-bg::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(11,15,23,.15), rgba(11,15,23,.85));
        }
        .ba-glow {
          position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: -1;
        }
        .ba-hero-eyebrow {
          color: var(--cyan); font-size: 12px; font-weight: 500; margin-bottom: 18px; display: block;
        }
        .ba-hero h1 {
          font-size: clamp(38px, 5.2vw, 62px); font-weight: 700; line-height: 1.05; color: var(--text);
          position: relative; z-index: 1; max-width: 760px;
        }
        .ba-hero h1 span { color: var(--blue); }
        .ba-hero-sub {
          margin-top: 22px; font-size: 17px; color: var(--text-dim); max-width: 50ch; position: relative; z-index: 1;
        }
        .ba-hero-ctas { display: flex; gap: 14px; margin-top: 34px; position: relative; z-index: 1; flex-wrap: wrap; }
        .ba-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--blue), #6f5bff);
          color: white; padding: 13px 24px; border-radius: 12px; text-decoration: none;
          font-weight: 600; font-size: 15px; transition: transform .2s ease, box-shadow .2s ease;
          box-shadow: 0 8px 24px rgba(76,134,255,0.25);
        }
        .ba-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(76,134,255,0.35); }
        .ba-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; border: 1px solid var(--border); color: var(--text);
          padding: 13px 22px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 15px;
          transition: border-color .2s ease, background .2s ease;
        }
        .ba-btn-secondary:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.03); }

        /* ---- section shell ---- */
        .ba-section { padding: 9vh 6vw; }
        .ba-section-head { max-width: 640px; margin-bottom: 52px; }
        .ba-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 12px; color: var(--cyan); margin-bottom: 14px;
        }
        .ba-section h2 { font-size: clamp(26px, 3.4vw, 40px); font-weight: 700; }
        .ba-section-sub { color: var(--text-dim); margin-top: 14px; font-size: 16px; }

        /* ---- tracks / services-style grid ---- */
        .ba-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ba-scard {
          background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 18px; padding: 28px;
          transition: transform .3s ease, border-color .3s ease, background .3s ease;
        }
        .ba-scard:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.2); background: var(--bg-elevated-2); }
        .ba-scard-icon {
          width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
          background: rgba(76,134,255,0.12); color: var(--blue); margin-bottom: 18px;
        }
        .ba-scard h3 { font-size: 18px; font-weight: 600; margin-bottom: 12px; }
        .ba-scard ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
        .ba-scard li { color: var(--text-dim); font-size: 14px; }

        /* ---- certifications ---- */
        .ba-section-light {
          background: var(--cream); color: #111827;
          margin: 0 0 4vh; padding-top: 9vh; padding-bottom: 9vh;
        }
        .ba-section-light .ba-section-sub { color: #5f6878; }
        .ba-section-light .ba-eyebrow { color: #2d65c7; }
        .ba-cert-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .ba-cert-chip {
          display: flex; align-items: center; gap: 10px; padding: 16px 18px; border-radius: 14px;
          border: 1px solid rgba(17,24,39,.12); background: #fff; color: #111827; font-weight: 500; font-size: 14.5px;
        }

        /* ---- format steps ---- */
        .ba-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .ba-step {
          background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 16px;
          padding: 26px 22px; transition: transform .3s ease, border-color .3s ease;
        }
        .ba-step:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.18); }
        .ba-step-icon {
          width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
          background: rgba(57,205,162,0.14); color: var(--green); margin-bottom: 16px;
        }
        .ba-step h3 { font-size: 16.5px; font-weight: 600; margin-bottom: 10px; }
        .ba-step p { color: var(--text-dim); font-size: 14px; margin: 0; }

        /* ---- audience ---- */
        .ba-sectors { display: flex; flex-wrap: wrap; gap: 14px; }
        .ba-sector-chip {
          display: flex; align-items: center; gap: 10px; padding: 14px 22px; border-radius: 14px;
          border: 1px solid var(--border); background: var(--bg-elevated); color: var(--text); font-weight: 500;
        }

        /* ---- cta band ---- */
        .ba-cta-band {
          margin: 0 6vw 11vh; border-radius: 26px; padding: 64px 6vw; text-align: center; position: relative; overflow: hidden;
          background:
            linear-gradient(135deg, rgba(16,26,48,.96), rgba(25,18,48,.94)),
            url("https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1400");
          background-size: cover; background-position: center;
          border: 1px solid var(--border);
        }
        .ba-cta-band::before {
          content: ""; position: absolute; width: 280px; height: 280px; border-radius: 50%;
          top: -150px; right: -80px; background: rgba(79,140,255,.16); filter: blur(10px);
        }
        .ba-cta-box { position: relative; z-index: 1; }
        .ba-cta-band h2 { font-size: clamp(26px, 3.6vw, 42px); margin-bottom: 16px; }
        .ba-cta-band p { color: var(--text-dim); max-width: 48ch; margin: 0 auto 30px; }

        /* ---- footer ---- */
        .ba-footer {
          padding: 48px 6vw; border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;
        }
        .ba-footer-links { display: flex; gap: 26px; }
        .ba-footer-links a { color: var(--text-dim); text-decoration: none; font-size: 14px; }
        .ba-footer-note { color: var(--text-dim); font-size: 13px; }

        @media (max-width: 920px) {
          .ba-navlinks, .ba-navcta { display: none; }
          .ba-burger { display: flex; }
          .ba-hero { text-align: left; padding-top: 7vh; min-height: 62vh; }
          .ba-hero-bg { background-position: 62% center; }
          .ba-services-grid { grid-template-columns: 1fr; }
          .ba-cert-grid { grid-template-columns: repeat(2, 1fr); }
          .ba-steps-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`ba-nav ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="ba-brand" aria-label="Box.Africa">
          <img className="ba-logo-img" src={BOXAFRICA_LOGO} alt="Box.Africa" />
        </Link>
        <div className="ba-navlinks">
          {navLinks.map((l) =>
            l.to ? (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href}>{l.label}</a>
            )
          )}
        </div>
        <a href="#contact" className="ba-navcta">Nous contacter <ArrowUpRight size={15} /></a>
        <button className="ba-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div className={`ba-mobile-panel ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) =>
          l.to ? (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ) : (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          )
        )}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Nous contacter →</a>
      </div>

      {/* HERO */}
      <header id="top" className="ba-hero">
        <div className="ba-hero-bg" />
        <div className="ba-glow" style={{ width: 420, height: 420, background: "var(--blue)", opacity: 0.14, top: "-8%", right: "8%" }} />
        <div className="ba-glow" style={{ width: 300, height: 300, background: "var(--green)", opacity: 0.10, bottom: "-8%", left: "10%" }} />
        <div>
          <span className="ba-hero-eyebrow ba-mono"><GraduationCap size={13} style={{ marginRight: 6, verticalAlign: "-2px" }} />BoxAcademy — Centre de formation IT</span>
          <h1>Formez vos équipes aux <span>métiers de demain</span>.</h1>
          <p className="ba-hero-sub">
            BoxAcademy, c'est le volet formation de Box.Africa : des parcours pratiques, animés par des experts
            certifiés, pour monter en compétence sur le cloud, le développement, la cybersécurité et bien plus.
          </p>
          <div className="ba-hero-ctas">
            <a href="#parcours" className="ba-btn-primary">Voir les parcours <ArrowUpRight size={16} /></a>
            <a href="#contact" className="ba-btn-secondary">Nous contacter</a>
          </div>
        </div>
      </header>

      {/* TRACKS */}
      <section className="ba-section" id="parcours">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><GraduationCap size={13} /> Nos domaines de formation</span>
          <h2>Des parcours pensés pour être immédiatement utiles</h2>
          <p className="ba-section-sub">
            Chaque module combine théorie condensée et mise en pratique sur des cas réels, pour des équipes
            opérationnelles dès la fin du cursus.
          </p>
        </div>
        <div className="ba-services-grid">
          {TRACKS.map((t) => {
            const Icon = t.icon;
            return (
              <div className="ba-scard" key={t.title} data-reveal>
                <div className="ba-scard-icon"><Icon size={20} /></div>
                <h3>{t.title}</h3>
                <ul>
                  {t.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="ba-section ba-section-light" id="certifications">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><BadgeCheck size={13} /> Certifications</span>
          <h2>Une préparation ciblée vers des certifications reconnues</h2>
          <p className="ba-section-sub">
            Nos formateurs accompagnent vos équipes jusqu'à l'examen, avec des sessions de préparation
            dédiées aux certifications les plus demandées du marché.
          </p>
        </div>
        <div className="ba-cert-grid" data-reveal>
          {CERTIFICATIONS.map((c) => (
            <div className="ba-cert-chip" key={c}>
              <BadgeCheck size={16} color="#2d65c7" /> {c}
            </div>
          ))}
        </div>
      </section>

      {/* FORMAT */}
      <section className="ba-section" id="format">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><Laptop size={13} /> Format</span>
          <h2>Une pédagogie pratique, dans vos conditions</h2>
        </div>
        <div className="ba-steps-grid">
          {FORMAT_STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div className="ba-step" key={s.title} data-reveal>
                <div className="ba-step-icon"><Icon size={19} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="ba-section" id="public">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><Building2 size={13} /> Pour qui ?</span>
          <h2>BoxAcademy s'adresse à</h2>
        </div>
        <div className="ba-sectors" data-reveal>
          {AUDIENCE.map((a) => (
            <div className="ba-sector-chip" key={a}>
              <Users2 size={16} color="var(--cyan)" /> {a}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="ba-cta-band" id="contact" data-reveal>
        <div className="ba-cta-box">
          <img className="ba-box-animation" src={BOXAFRICA_BOX} alt="" />
          <h2 style={{ marginTop: 18 }}>Prêt à monter en compétence ?</h2>
          <p>Parlons de vos besoins en formation — parcours individuel, cursus intra-entreprise ou préparation à une certification.</p>
          <a href="mailto:academy@box.africa" className="ba-btn-primary">Discutons-en <ArrowUpRight size={16} /></a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="ba-footer">
        <Link to="/" className="ba-brand" aria-label="Box.Africa">
          <img className="ba-logo-img" src={BOXAFRICA_LOGO} alt="Box.Africa" />
        </Link>
        <div className="ba-footer-links">
          {navLinks.map((l) =>
            l.to ? (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href}>{l.label}</a>
            )
          )}
        </div>
        <span className="ba-footer-note">© {new Date().getFullYear()} Box.Africa — Transformer l'Afrique par l'IT</span>
      </footer>
    </div>
  );
}
