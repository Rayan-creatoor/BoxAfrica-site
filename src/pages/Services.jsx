import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import BoxAfricaStyles from "../components/BoxAfricaStyles.jsx";
import ServicesStyles from "../components/ServicesStyles.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import LocationMap from "../components/LocationMap.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { SERVICES, SERVICE_PHOTOS, TECH_PHOTOS, mailtoHref } from "../data/content.js";

const MOSAIC = [
  SERVICE_PHOTOS.heroA,
  SERVICE_PHOTOS.heroB,
  SERVICE_PHOTOS.heroC,
  SERVICE_PHOTOS.heroD,
];

const BENTO_LAYOUT = [
  { span: "wide" },
  { span: "" },
  { span: "" },
  { span: "" },
  { span: "wide" },
  { span: "" },
];

function scrollToHash(hash) {
  if (!hash) return;
  const id = hash.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Services() {
  const location = useLocation();
  const [activeSlug, setActiveSlug] = useState("");
  useReveal([location.hash]);

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => scrollToHash(location.hash), 120);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const sections = SERVICES.map((s) => document.getElementById(s.slug)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSlug(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ba-root ba-svc-page">
      <BoxAfricaStyles />
      <ServicesStyles />
      <Nav />

      {/* Hero typographique + mosaïque — distinct de l'accueil */}
      <header className="ba-svc-hero">
        <div data-reveal>
          <nav className="ba-svc-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} />
            <span>Services</span>
          </nav>
          <h1>
            6 expertises,<br />
            <em>un seul partenaire IT</em>
          </h1>
          <p className="ba-svc-hero-lead">
            Du développement logiciel à la formation, en passant par l'infrastructure et la cybersécurité —
            découvrez en détail chaque domaine où Box.Africa vous accompagne.
          </p>
          <div className="ba-svc-hero-stats">
            <div className="ba-svc-hero-stat">
              <strong>6</strong>
              <span>Domaines</span>
            </div>
            <div className="ba-svc-hero-stat">
              <strong>100+</strong>
              <span>Collaborateurs</span>
            </div>
            <div className="ba-svc-hero-stat">
              <strong>24h</strong>
              <span>Intervention Proxy</span>
            </div>
          </div>
        </div>

        <div className="ba-svc-mosaic" data-reveal>
          {MOSAIC.map((src, i) => (
            <div key={i} className="ba-svc-mosaic-cell">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </header>

      {/* Navigation sticky horizontale */}
      <div className="ba-svc-sticky-bar">
        <nav className="ba-svc-sticky-inner" aria-label="Navigation des services">
          {SERVICES.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className={`ba-svc-tab ${activeSlug === s.slug ? "active" : ""}`}
                style={{ "--tab-color": s.color }}
              >
                <span className="ba-svc-tab-num">{num}</span>
                <img className="ba-svc-tab-icon" src={s.iconImage} alt="" loading="lazy" />
                {s.title}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Grille bento catalogue */}
      <section className="ba-svc-bento-section">
        <div className="ba-svc-bento-head" data-reveal>
          <div>
            <span className="ba-eyebrow ba-mono">Catalogue</span>
            <h2>Choisissez votre domaine</h2>
          </div>
          <p>Cliquez sur une carte pour accéder directement à la section détaillée du service.</p>
        </div>
        <div className="ba-svc-bento">
          {SERVICES.map((s, i) => {
            const layout = BENTO_LAYOUT[i];
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className={`ba-svc-bento-card ${layout.span}`}
                style={{ "--bento-color": s.color }}
                data-reveal
              >
                <img className="ba-svc-bento-photo" src={s.image} alt={s.title} loading="lazy" />
                <div className="ba-svc-bento-content">
                  <div className="ba-svc-bento-icon">
                    <img src={s.iconImage} alt="" loading="lazy" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Sections détaillées — style magazine */}
      <div className="ba-svc-catalog">
        {SERVICES.map((service, index) => {
          const num = String(index + 1).padStart(2, "0");
          return (
            <article
              id={service.slug}
              key={service.slug}
              className="ba-svc-block"
              style={{ "--block-color": service.color }}
              data-reveal
            >
              <div className="ba-svc-block-banner">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="ba-svc-block-banner-content">
                  <span className="ba-svc-block-num">{num} — {service.title}</span>
                  <h3>{service.summary}</h3>
                </div>
              </div>
              <div className="ba-svc-block-body">
                <div className="ba-svc-block-aside">
                  <p>{service.description}</p>
                  <div className="ba-svc-block-tags">
                    {service.highlights.map((h) => (
                      <span className="ba-svc-block-tag" key={h}>
                        {h}
                      </span>
                    ))}
                  </div>
                  {service.externalLink && (
                    <Link className="ba-panel-link" to={service.externalLink.to} style={{ marginTop: 20 }}>
                      {service.externalLink.label} <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
                <div className="ba-svc-block-grid">
                  {service.items.map((item) => (
                    <div className="ba-svc-feature" key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {service.partnerSpotlights?.map((spot) => (
                <div className="ba-svc-partner-spot" id={spot.id} key={spot.id}>
                  <div className="ba-svc-partner-spot-head">
                    <div className="ba-svc-partner-logo">
                      <img src={spot.logo} alt={spot.partner} loading="lazy" />
                    </div>
                    <div>
                      <span className="ba-svc-partner-tag ba-mono">Partenariat {spot.partner}</span>
                      <h4>{spot.title}</h4>
                    </div>
                  </div>
                  <div className="ba-svc-partner-spot-body">
                    <div>
                      <p>{spot.description}</p>
                      <div className="ba-svc-block-tags">
                        {spot.highlights.map((h) => (
                          <span className="ba-svc-block-tag" key={h}>
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="ba-svc-partner-list">
                      {spot.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </article>
          );
        })}
      </div>

      {/* Spotlight Proxy — présentation dédiée avec renvoi vers la page Proxy */}
      <section className="ba-section" style={{ paddingTop: 0 }}>
        <div
          className="ba-panel ba-panel-proxy"
          data-reveal
          style={{ minHeight: 260 }}
        >
          <div
            className="ba-panel-bg"
            style={{ backgroundImage: `url("${TECH_PHOTOS.proxyBg}")` }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -1,
              background:
                "linear-gradient(0deg, rgba(12,12,12,.96) 15%, rgba(15,15,15,.72) 55%, rgba(225,225,225,.28) 100%)",
            }}
          />
          <span className="ba-panel-tag ba-mono" style={{ color: "var(--gold)" }}>
            Proxy
          </span>
          <h3>Besoin d'un support sur le terrain ?</h3>
          <p>
            Au-delà de l'infogérance, Proxy place un point focal résident au plus près de vos équipes :
            prise en main immédiate, intervention sur site en moins de 24h et reporting continu.
          </p>
          <div className="ba-panel-tags">
            {["Réactivité", "Savoir-faire", "Reporting"].map((t) => (
              <span className="ba-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <Link className="ba-panel-link" to="/proxy">
            Découvrir la page Proxy <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* Contact split — différent du bandeau accueil */}
      <section className="ba-svc-contact" data-reveal>
        <div className="ba-svc-contact-visual">
          <img src={SERVICE_PHOTOS.contact} alt="Équipe Box.Africa" loading="lazy" />
        </div>
        <div className="ba-svc-contact-body">
          <span className="ba-eyebrow ba-mono">Parlons projet</span>
          <h2>Quel service correspond à votre besoin ?</h2>
          <p>
            Décrivez-nous votre contexte et nos équipes commerciales vous orienteront
            vers la bonne combinaison de services.
          </p>
          <div className="ba-svc-contact-actions">
            <a href={mailtoHref()} className="ba-btn-primary">
              Demander un devis <ArrowUpRight size={16} />
            </a>
            <Link to="/" className="ba-btn-secondary">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      <LocationMap />
      <Footer />
    </div>
  );
}
