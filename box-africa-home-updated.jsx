import React, { useEffect, useState } from "react";
import {
  Code2,
  ShieldCheck,
  Headphones,
  GraduationCap,
  Zap,
  ArrowUpRight,
  Menu,
  X,
  TrendingUp,
  Users2,
  Building2,
  BrainCircuit,
  Server,
  Image as ImageIcon,
} from "lucide-react";


/* ------------------------------------------------------------------ */
/*  Assets + animated counters                                         */
/* ------------------------------------------------------------------ */

// Put these two transparent PNGs in the public/ folder of the project.
// They are generated from the Box.Africa logo supplied with this project.
const BOXAFRICA_LOGO = "/boxafrica-logo-transparent.png";
const BOXAFRICA_BOX = "/boxafrica-box.png";

// Free-to-use editorial/stock photos from Pexels, featuring Black African
// professionals working with technology.
const TECH_PHOTOS = {
  hero: "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&w=1800",
  think: "https://images.pexels.com/photos/7446590/pexels-photo-7446590.jpeg?auto=compress&cs=tinysrgb&w=600",
  poc: "https://images.pexels.com/photos/7979415/pexels-photo-7979415.jpeg?auto=compress&cs=tinysrgb&w=600",
  build: "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&w=600",
  run: "https://images.pexels.com/photos/7709135/pexels-photo-7709135.jpeg?auto=compress&cs=tinysrgb&w=600",
  team: "https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg?auto=compress&cs=tinysrgb&w=1200",
  woman: "https://images.pexels.com/photos/7191959/pexels-photo-7191959.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

function Counter({ target, prefix = "", suffix = "", duration = 1500 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById(`ba-counter-${target}-${prefix}-${suffix}`);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, prefix, suffix, started]);

  useEffect(() => {
    if (!started) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out: fast at the beginning, smooth near the final value.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return (
    <span id={`ba-counter-${target}-${prefix}-${suffix}`}>
      {prefix}{value}{suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  HexMark — le repère visuel de la marque : un hexagone assemblé à  */
/*  partir de segments distincts (écho du logo Box.Africa et de la    */
/*  métaphore du "cube" isométrique / des fragments qui se relient).  */
/* ------------------------------------------------------------------ */

const HEX_POINTS = [
  [50, 8], // haut
  [85, 29], // haut-droite
  [85, 71], // bas-droite
  [50, 92], // bas
  [15, 71], // bas-gauche
  [15, 29], // haut-gauche
];

function inset(p1, p2, t = 0.16) {
  const x1 = p1[0] + (p2[0] - p1[0]) * t;
  const y1 = p1[1] + (p2[1] - p1[1]) * t;
  const x2 = p2[0] + (p1[0] - p2[0]) * t;
  const y2 = p2[1] + (p1[1] - p2[1]) * t;
  return [
    [x1, y1],
    [x2, y2],
  ];
}

function dist(p1, p2) {
  return Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
}

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
];

const HEX_SEGMENTS = [
  ...EDGES.map(([a, b]) => inset(HEX_POINTS[a], HEX_POINTS[b])),
  [
    [50, 8],
    [50, 44],
  ],
  [
    [50, 56],
    [50, 92],
  ],
];

function HexMark({ size = 40, tone = "mono", animated = false, className = "" }) {
  const [drawn, setDrawn] = useState(!animated);

  useEffect(() => {
    if (!animated) return;
    const t = setTimeout(() => setDrawn(true), 150);
    return () => clearTimeout(t);
  }, [animated]);

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`ba-hexmark ${animated ? "ba-hexmark-idle" : ""} ${className}`}
      aria-hidden="true"
    >
      {HEX_SEGMENTS.map(([p1, p2], i) => {
        const len = dist(p1, p2);
        const cx = (p1[0] + p2[0]) / 2;
        let stroke = "currentColor";
        if (tone === "duo") {
          stroke = cx < 50 ? "var(--amber)" : cx > 50 ? "var(--blue)" : i % 2 === 0 ? "var(--blue)" : "var(--amber)";
        }
        return (
          <line
            key={i}
            x1={p1[0]}
            y1={p1[1]}
            x2={p2[0]}
            y2={p2[1]}
            stroke={stroke}
            strokeWidth={4.2}
            strokeLinecap="round"
            style={{
              strokeDasharray: len,
              strokeDashoffset: drawn ? 0 : len,
              transition: `stroke-dashoffset 0.65s cubic-bezier(.2,.7,.2,1) ${i * 70}ms`,
            }}
          />
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll helper                                            */
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

const PIPELINE = [
  { key: "THINK", color: "var(--amber)", image: TECH_PHOTOS.think, items: ["Conseil", "Audit"] },
  { key: "POC", color: "var(--green)", image: TECH_PHOTOS.poc, items: ["Technical POC", "Business POC"] },
  { key: "BUILD", color: "var(--blue)", image: TECH_PHOTOS.build, items: ["Intégration", "Dev. Software", "Cybersécurité"] },
  { key: "RUN", color: "var(--purple)", image: TECH_PHOTOS.run, items: ["Infogérance", "Formations", "Support"] },
];

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "Dev & Test Logiciel",
    items: ["Data & IA", "App web et mobile", "Middleware (API, etc.)"],
  },
  {
    icon: Server,
    title: "Infra & Plateforme",
    items: ["Architecture Cloud", "Cloud Privé (HCI/SDx)", "Kubernetes & Docker"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    items: ["Pentest", "SecOps", "Analyse Forensique"],
  },
  {
    icon: Users2,
    title: "Délégation",
    items: ["Régie d'experts", "Offshore à la demande", "NearShore à la demande"],
  },
  {
    icon: Headphones,
    title: "Services managés",
    items: ["Cyber Supervision", "Infogérance des S.I.", "Maintenance hard/soft"],
  },
  {
    icon: GraduationCap,
    title: "Formation",
    items: ["DevOps", "Data & AI", "Management des SI"],
  },
];

const SECTORS = ["Finances", "Télécom", "Industries", "Parapublique"];

const STATS = [
  { target: 100, suffix: "+", label: "collaborateurs" },
  { target: 80, suffix: "%", label: "d'ingénieurs" },
  { target: 20, prefix: "+", suffix: "%", label: "de croissance / an" },
  { target: 2019, label: "année de référence" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function BoxAfricaHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#equipe", label: "Équipe" },
    { href: "#academy", label: "Academy" },
    { href: "#proxy", label: "Proxy" },
    { href: "#secteurs", label: "Secteurs" },
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

        .ba-hexmark { display: block; overflow: visible; }
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
        .ba-brand-name { display: none; font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 18px; }
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
          display: flex; align-items: center; min-height: 82vh;
          padding: 10vh 6vw; overflow: hidden;
          isolation: isolate;
        }
        .ba-hero-bg {
          position: absolute; inset: 0; z-index: -2; pointer-events: none;
          background-image:
            linear-gradient(90deg, rgba(8,12,20,.96) 0%, rgba(8,12,20,.82) 42%, rgba(8,12,20,.50) 72%, rgba(8,12,20,.72) 100%),
            url("https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&w=1800");
          background-size: cover; background-position: center;
          transform: scale(1.02);
        }
        .ba-hero-bg::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(11,15,23,.15), rgba(11,15,23,.82));
        }
        .ba-glow {
          position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: -1;
        }
        .ba-hero-eyebrow {
          color: var(--cyan); font-size: 12px; font-weight: 500; margin-bottom: 18px; display: block;
        }
        .ba-hero h1 {
          font-size: clamp(42px, 5.7vw, 72px); font-weight: 700; line-height: 1.02; color: var(--text);
          position: relative; z-index: 1; max-width: 760px;
        }
        .ba-hero h1 span { color: var(--blue); }
        .ba-hero-sub {
          margin-top: 22px; font-size: 17px; color: var(--text-dim); max-width: 46ch; position: relative; z-index: 1;
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
        .ba-hero-mark { display: flex; align-items: center; justify-content: center; position: relative; z-index: 1; }

        /* ---- stats ---- */
        .ba-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          margin: 0 6vw;
        }
        .ba-stat {
          padding: 32px 18px; text-align: center; border-right: 1px solid var(--border);
          background: linear-gradient(180deg, rgba(255,255,255,.018), transparent);
        }
        .ba-stat:last-child { border-right: none; }
        .ba-stat-value {
          font-family: 'Space Grotesk'; font-size: clamp(22px, 3vw, 32px); font-weight: 700; color: var(--text);
        }
        .ba-stat-label { color: var(--text-dim); font-size: 13px; margin-top: 6px; }

        /* ---- section shell ---- */
        .ba-section { padding: 11vh 6vw; }
        .ba-section-head { max-width: 640px; margin-bottom: 52px; }
        .ba-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 12px; color: var(--cyan); margin-bottom: 14px;
        }
        .ba-section h2 { font-size: clamp(26px, 3.4vw, 40px); font-weight: 700; }
        .ba-section-sub { color: var(--text-dim); margin-top: 14px; font-size: 16px; }

        /* ---- pipeline ---- */
        .ba-pipeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .ba-pstage {
          background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 16px;
          padding: 26px 22px; position: relative; overflow: hidden;
          transition: transform .3s ease, border-color .3s ease;
        }
        .ba-pstage:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.18); }
        .ba-pstage::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--stage-color);
        }
        .ba-pstage-avatar {
          width: 54px; height: 54px; border-radius: 50%; overflow: hidden;
          border: 3px solid var(--stage-color);
          margin-bottom: 16px; box-shadow: 0 8px 20px rgba(0,0,0,.24);
        }
        .ba-pstage-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ba-pstage-key {
          font-family: 'JetBrains Mono'; font-size: 12px; letter-spacing: .12em; color: var(--stage-color); font-weight: 500;
        }
        .ba-pstage ul { list-style: none; padding: 0; margin: 16px 0 0; display: flex; flex-direction: column; gap: 8px; }
        .ba-pstage li { font-size: 14.5px; color: var(--text); display: flex; gap: 8px; align-items: baseline; }
        .ba-pstage li::before { content: '—'; color: var(--text-dim); }
        .ba-pipeline-arrow {
          display: none; align-items: center; color: var(--text-dim);
        }

        /* ---- services grid ---- */
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
        .ba-scard-link {
          display: inline-flex; align-items: center; gap: 7px; margin-top: 22px;
          color: var(--text); text-decoration: none; font-size: 13.5px; font-weight: 600;
          padding: 9px 13px; border: 1px solid var(--border); border-radius: 10px;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .ba-scard-link:hover {
          transform: translateY(-2px); background: rgba(79,140,255,.12); border-color: rgba(79,140,255,.4);
        }

        .ba-section-light {
          background: var(--cream); color: #111827;
          margin: 0 0 4vh; padding-top: 9vh; padding-bottom: 9vh;
        }
        .ba-section-light .ba-section-sub { color: #5f6878; }
        .ba-section-light .ba-eyebrow { color: #2d65c7; }
        .ba-section-light .ba-photo-card { border-color: rgba(17,24,39,.12); background: #fff; }
        .ba-section-light .ba-photo-overlay { background: linear-gradient(transparent, rgba(17,24,39,.90)); }
        /* ---- people / IT imagery ---- */
        .ba-people-grid { display: grid; grid-template-columns: 1.25fr .9fr .9fr; gap: 18px; }
        .ba-photo-card {
          position: relative; min-height: 330px; overflow: hidden; border-radius: 22px;
          border: 1px solid var(--border); background: var(--bg-elevated);
        }
        .ba-photo-card.tall { min-height: 390px; }
        .ba-photo-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s ease; }
        .ba-photo-card:hover img { transform: scale(1.045); }
        .ba-photo-overlay {
          position: absolute; inset: auto 0 0; padding: 28px 24px 22px;
          background: linear-gradient(transparent, rgba(5,8,14,.92));
        }
        .ba-photo-overlay span {
          display: inline-flex; padding: 6px 10px; border-radius: 999px;
          background: rgba(79,140,255,.18); border: 1px solid rgba(79,140,255,.32);
          color: #dce7ff; font-size: 11px; font-family: 'JetBrains Mono'; text-transform: uppercase;
        }
        .ba-photo-overlay h3 { margin-top: 10px; font-size: 21px; }

        /* ---- academy / proxy ---- */
        .ba-split { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        .ba-panel {
          border-radius: 22px; padding: 36px; position: relative; overflow: hidden; min-height: 300px;
          display: flex; flex-direction: column; justify-content: flex-end;
          border: 1px solid var(--border);
        }
        .ba-panel-academy { background: radial-gradient(circle at 20% 0%, rgba(76,134,255,0.18), transparent 60%), var(--bg-elevated); }
        .ba-panel-proxy { background: radial-gradient(circle at 20% 0%, rgba(255,138,61,0.18), transparent 60%), var(--bg-elevated); }
        .ba-panel-tag { font-family: 'JetBrains Mono'; font-size: 12px; letter-spacing: .1em; margin-bottom: 12px; }
        .ba-panel h3 { font-size: 26px; margin-bottom: 12px; }
        .ba-panel p { color: var(--text-dim); font-size: 15px; margin: 0 0 20px; max-width: 42ch; }
        .ba-panel-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
        .ba-tag {
          font-size: 12.5px; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--border); color: var(--text-dim);
        }
        .ba-panel-link {
          display: inline-flex; align-items: center; gap: 6px; color: var(--text); font-weight: 600; font-size: 14.5px;
          text-decoration: none; width: fit-content;
        }

        /* ---- secteurs ---- */
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
            url("https://images.pexels.com/photos/7979415/pexels-photo-7979415.jpeg?auto=compress&cs=tinysrgb&w=1400");
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
          .ba-hero { text-align: left; padding-top: 7vh; min-height: 76vh; }
          .ba-hero-bg { background-position: 62% center; }
          .ba-stats { grid-template-columns: repeat(2, 1fr); }
          .ba-stat:nth-child(2) { border-right: none; }
          .ba-pipeline { grid-template-columns: 1fr; }
          .ba-services-grid { grid-template-columns: 1fr; }
          .ba-people-grid { grid-template-columns: 1fr; }
          .ba-photo-card, .ba-photo-card.tall { min-height: 300px; }
          .ba-split { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`ba-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="ba-brand" aria-label="Box.Africa">
          <img className="ba-logo-img" src={BOXAFRICA_LOGO} alt="Box.Africa" />
        </a>
        <div className="ba-navlinks">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a href="#contact" className="ba-navcta">Nous contacter <ArrowUpRight size={15} /></a>
        <button className="ba-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div className={`ba-mobile-panel ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Nous contacter →</a>
      </div>

      {/* HERO */}
      <header id="top" className="ba-hero">
        <div className="ba-hero-bg" />
        <div className="ba-glow" style={{ width: 420, height: 420, background: "var(--blue)", opacity: 0.14, top: "-8%", right: "8%" }} />
        <div className="ba-glow" style={{ width: 300, height: 300, background: "var(--amber)", opacity: 0.10, bottom: "-8%", left: "10%" }} />
        <div>
          <span className="ba-hero-eyebrow ba-mono">Entreprise de Services Numérique — Afrique de l'Ouest</span>
          <h1>Transformer <span>l'Afrique</span> par l'IT.</h1>
          <p className="ba-hero-sub">
            Box.Africa conçoit, construit et fait tourner les systèmes dont les entreprises africaines
            dépendent chaque jour — du premier audit jusqu'au support sur site.
          </p>
          <div className="ba-hero-ctas">
            <a href="#services" className="ba-btn-primary">Découvrir nos services <ArrowUpRight size={16} /></a>
            <a href="#contact" className="ba-btn-secondary">Nous contacter</a>
          </div>
        </div>
      </header>

      {/* STATS */}
      <div className="ba-stats" data-reveal>
        {STATS.map((s) => (
          <div className="ba-stat" key={s.label}>
            <div className="ba-stat-value">
              <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="ba-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PIPELINE */}
      <section className="ba-section" id="approche">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><Zap size={13} /> Notre méthode</span>
          <h2>Une palette de services à la demande</h2>
          <p className="ba-section-sub">
            Chaque mission suit le même fil : comprendre, prouver, construire, puis faire vivre la solution
            dans la durée.
          </p>
        </div>
        <div className="ba-pipeline">
          {PIPELINE.map((stage, i) => (
            <div
              className="ba-pstage"
              key={stage.key}
              style={{ "--stage-color": stage.color }}
              data-reveal
              // eslint-disable-next-line react/forbid-dom-props
            >
              <div className="ba-pstage-avatar">
                <img src={stage.image} alt="" loading="lazy" />
              </div>
              <span className="ba-pstage-key">{stage.key}</span>
              <ul>
                {stage.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>



      {/* IT PEOPLE / IMAGES */}
      <section className="ba-section ba-section-light" id="equipe">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><ImageIcon size={13} /> L'humain au cœur de l'IT</span>
          <h2>Des équipes qui construisent le numérique africain</h2>
          <p className="ba-section-sub">
            Des profils techniques, des échanges métier et une culture du résultat pour transformer
            les idées en solutions concrètes.
          </p>
        </div>
        <div className="ba-people-grid">
          <article className="ba-photo-card tall" data-reveal>
            <img src={TECH_PHOTOS.team} alt="Professionnels noirs travaillant ensemble sur un projet numérique" loading="lazy" />
            <div className="ba-photo-overlay">
              <span>Collaboration</span>
              <h3>Des idées qui deviennent des projets</h3>
            </div>
          </article>
          <article className="ba-photo-card" data-reveal>
            <img src={TECH_PHOTOS.woman} alt="Professionnelle noire travaillant sur un ordinateur" loading="lazy" />
            <div className="ba-photo-overlay">
              <span>Expertise</span>
              <h3>Des compétences techniques au quotidien</h3>
            </div>
          </article>
          <article className="ba-photo-card" data-reveal>
            <img src={TECH_PHOTOS.hero} alt="Professionnel africain travaillant sur des systèmes informatiques" loading="lazy" />
            <div className="ba-photo-overlay">
              <span>Innovation</span>
              <h3>La technologie au service de l'Afrique</h3>
            </div>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ba-section" id="services">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><Code2 size={13} /> Services</span>
          <h2>Développement, infrastructure, cybersécurité, support</h2>
          <p className="ba-section-sub">
            Un aperçu de notre palette — le détail complet de chaque domaine vit sur la page Services.
          </p>
        </div>
        <div className="ba-services-grid">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div className="ba-scard" key={s.title} data-reveal>
                <div className="ba-scard-icon"><Icon size={20} /></div>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a className="ba-scard-link" href="/services">
                  En savoir plus <ArrowUpRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ACADEMY + PROXY */}
      <section className="ba-section">
        <div className="ba-split">
          <div className="ba-panel ba-panel-academy" id="academy" data-reveal>
            <span className="ba-panel-tag ba-mono" style={{ color: "var(--blue)" }}>Academy</span>
            <h3>Centre de formation IT</h3>
            <p>Cursus, formations intra ou inter-entreprise, modules personnalisés dans des salles équipées.</p>
            <div className="ba-panel-tags">
              {["Microsoft", "DevOps/DevSecOps", "Développement & IA", "Cybersécurité"].map((t) => (
                <span className="ba-tag" key={t}>{t}</span>
              ))}
            </div>
            <a className="ba-panel-link" href="#contact">Voir les formations <ArrowUpRight size={15} /></a>
          </div>
          <div className="ba-panel ba-panel-proxy" id="proxy" data-reveal>
            <span className="ba-panel-tag ba-mono" style={{ color: "var(--amber)" }}>Proxy</span>
            <h3>Service de support innovant</h3>
            <p>Un point focal résident, une prise en main immédiate, et une intervention sur site en moins de 24h.</p>
            <div className="ba-panel-tags">
              {["Réactivité", "Savoir-faire", "Reporting"].map((t) => (
                <span className="ba-tag" key={t}>{t}</span>
              ))}
            </div>
            <a className="ba-panel-link" href="#contact">Découvrir Proxy <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="ba-section" id="secteurs">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono"><Building2 size={13} /> Secteurs</span>
          <h2>Ils nous font confiance</h2>
        </div>
        <div className="ba-sectors" data-reveal>
          {SECTORS.map((s) => (
            <div className="ba-sector-chip" key={s}>
              <TrendingUp size={16} color="var(--cyan)" /> {s}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="ba-cta-band" id="contact" data-reveal>
        <div className="ba-cta-box">
          <img className="ba-box-animation" src={BOXAFRICA_BOX} alt="" />
          <h2 style={{ marginTop: 18 }}>Un projet IT à transformer ?</h2>
          <p>Parlons de votre contexte — conseil, développement, cybersécurité ou formation — et construisons la prochaine étape ensemble.</p>
          <a href="mailto:contact@box.africa" className="ba-btn-primary">Discutons-en <ArrowUpRight size={16} /></a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="ba-footer">
        <a href="#top" className="ba-brand" aria-label="Box.Africa">
          <img className="ba-logo-img" src={BOXAFRICA_LOGO} alt="Box.Africa" />
        </a>
        <div className="ba-footer-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <span className="ba-footer-note">© {new Date().getFullYear()} Box.Africa — Transformer l'Afrique par l'IT</span>
      </footer>
    </div>
  );
}
