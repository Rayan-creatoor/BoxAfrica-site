import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Headphones } from "lucide-react";
import BoxAfricaStyles from "../components/BoxAfricaStyles.jsx";
import ProxyStyles, { prxHeroBgStyle } from "../components/ProxyStyles.jsx";
import Logo from "../components/Logo.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import LocationMap from "../components/LocationMap.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { BOXAFRICA_BOX, mailtoHref, THEME_ICONS } from "../data/content.js";
import {
  PROXY_PHOTOS,
  PROXY_STATS,
  PROXY_PILLARS,
  PROXY_STEPS,
  PROXY_SUPPORT_LEVELS,
  PROXY_AUDIENCE,
} from "../data/proxy.js";

const MOSAIC = [
  PROXY_PHOTOS.mosaicA,
  PROXY_PHOTOS.mosaicB,
  PROXY_PHOTOS.mosaicC,
  PROXY_PHOTOS.mosaicD,
];

export default function Proxy() {
  const location = useLocation();
  useReveal([location.hash]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <div className="ba-root ba-prx-page">
      <BoxAfricaStyles />
      <ProxyStyles />
      <Nav />

      <div className="ba-prx-ribbon">
        <Headphones size={14} /> Vous êtes dans Proxy — le service de support innovant de Box.Africa
      </div>

      {/* Hero typographique + mosaïque */}
      <header className="ba-prx-hero">
        <div className="ba-prx-hero-bg" style={prxHeroBgStyle(PROXY_PHOTOS.hero)} />
        <div className="ba-prx-glow" style={{ width: 380, height: 380, background: "var(--prx-accent)", opacity: 0.18, top: "-10%", left: "-4%" }} />
        <div className="ba-prx-glow" style={{ width: 300, height: 300, background: "var(--prx-accent-2)", opacity: 0.16, bottom: "-8%", right: "6%" }} />

        <div data-reveal>
          <nav className="ba-prx-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} />
            <span>Proxy</span>
          </nav>
          <div className="ba-prx-crest">
            <Logo withWordmark={false} />
          </div>
          <span className="ba-prx-eyebrow">PROXY — Service de support innovant</span>
          <h1>
            Un point focal résident,<br />
            <em>disponible en moins de 24h</em>.
          </h1>
          <p className="ba-prx-hero-lead">
            Proxy, c'est le service de support et d'assistance de Box.Africa : une présence humaine sur
            le terrain, une prise en main immédiate de chaque incident, et un reporting qui garde votre
            direction IT pleinement informée.
          </p>
          <div className="ba-prx-hero-stats">
            {PROXY_STATS.map((s) => (
              <div className="ba-prx-hero-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="ba-hero-ctas">
            <a href="#piliers" className="ba-btn-primary">
              Découvrir l'offre <ArrowUpRight size={16} />
            </a>
            <Link to="/" className="ba-btn-secondary">
              Retour à l'accueil
            </Link>
          </div>
        </div>

        <div className="ba-prx-mosaic" data-reveal>
          {MOSAIC.map((src, i) => (
            <div key={i} className="ba-prx-mosaic-cell">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </header>

      {/* 3 piliers — façon plaquette PROXY */}
      <section className="ba-prx-pillars-section" id="piliers">
        <div className="ba-prx-pillars-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.notrePromesse} alt="" loading="lazy" />
            </span>
            Notre promesse
          </span>
          <h2>Trois piliers, un seul objectif : ne jamais vous laisser seul face à un incident</h2>
        </div>
        <div className="ba-prx-pillars-grid">
          {PROXY_PILLARS.map((p) => (
            <div className="ba-prx-pillar" key={p.slug} style={{ "--pillar-color": p.color }} data-reveal>
              <div className="ba-prx-pillar-icon">
                <img src={p.icon} alt="" loading="lazy" />
              </div>
              <h3>{p.title}</h3>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="ba-section" id="fonctionnement">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.fonctionnement} alt="" loading="lazy" />
            </span>
            Fonctionnement
          </span>
          <h2>Comment se déroule une intervention Proxy</h2>
        </div>
        <div className="ba-prx-steps-grid">
          {PROXY_STEPS.map((s, i) => (
            <div className="ba-prx-step" key={s.title} data-reveal>
              <img className="ba-prx-step-photo" src={s.image} alt="" loading="lazy" />
              <span className="ba-prx-step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagements chiffrés */}
      <div className="ba-prx-sla-band" data-reveal>
        {PROXY_STATS.map((s) => (
          <div className="ba-prx-sla-item" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Niveaux de support */}
      <section className="ba-section" id="niveaux">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.niveauxSupport} alt="" loading="lazy" />
            </span>
            Niveaux de support
          </span>
          <h2>N1, N2, N3 : une escalade claire à chaque étape</h2>
          <p className="ba-section-sub">
            Chaque incident est traité par le niveau d'expertise adapté — sans détour ni perte de temps.
          </p>
        </div>
        <div className="ba-prx-levels-grid">
          {PROXY_SUPPORT_LEVELS.map((lvl) => (
            <div className="ba-prx-level" key={lvl.level} data-reveal>
              <img className="ba-prx-level-photo" src={lvl.image} alt="" loading="lazy" />
              <span className="ba-prx-level-badge">{lvl.level}</span>
              <h3>{lvl.title}</h3>
              <p>{lvl.description}</p>
              <ul>
                {lvl.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pour qui */}
      <section className="ba-section" id="public">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.audience} alt="" loading="lazy" />
            </span>
            Pour qui ?
          </span>
          <h2>Proxy s'adresse à</h2>
        </div>
        <div className="ba-sectors" data-reveal>
          {PROXY_AUDIENCE.map((a) => (
            <div className="ba-sector-chip" key={a}>
              <Headphones size={16} color="var(--prx-accent)" /> {a}
            </div>
          ))}
        </div>
      </section>

      {/* Contact split */}
      <section className="ba-prx-contact" id="contact" data-reveal>
        <div className="ba-prx-contact-visual">
          <img className="ba-prx-contact-photo" src={PROXY_PHOTOS.contact} alt="Support Proxy Box.Africa" loading="lazy" />
          <img className="ba-box-animation ba-prx-box-animation" src={BOXAFRICA_BOX} alt="" />
        </div>
        <div className="ba-prx-contact-body">
          <span className="ba-eyebrow ba-mono">Parlons support</span>
          <h2>Besoin d'un point focal résident ?</h2>
          <p>
            Décrivez-nous votre parc, vos sites et vos contraintes de disponibilité — nous vous
            proposons le dispositif Proxy adapté.
          </p>
          <div className="ba-prx-contact-actions">
            <a href={mailtoHref()} className="ba-btn-primary">
              Discutons-en <ArrowUpRight size={16} />
            </a>
            <Link to="/services" className="ba-btn-secondary">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      <LocationMap />
      <Footer />
    </div>
  );
}
