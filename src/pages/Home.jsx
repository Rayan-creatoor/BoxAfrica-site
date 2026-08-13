import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BoxAfricaStyles, { heroBgStyle, ctaBandStyle, TECH_PHOTOS } from "../components/BoxAfricaStyles.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import LocationMap from "../components/LocationMap.jsx";
import Counter from "../components/Counter.jsx";
import { useReveal } from "../hooks/useReveal.js";
import {
  BOXAFRICA_BOX,
  PIPELINE,
  SERVICES,
  SECTORS,
  STATS,
  mailtoHref,
  THEME_ICONS,
  KEY_PARTNERS,
} from "../data/content.js";
import { PARTNERS } from "../data/partners.js";

const FEATURED_PARTNER_LOGOS = PARTNERS.filter((p) => p.logo).slice(0, 5);
const PARTNERS_TRACK = [...PARTNERS, ...PARTNERS];

export default function Home() {
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
  }, [location.hash]);

  return (
    <div className="ba-root">
      <BoxAfricaStyles />
      <Nav />

      <header id="top" className="ba-hero">
        <div className="ba-hero-bg" style={heroBgStyle(TECH_PHOTOS.hero)} />
        <div
          className="ba-glow"
          style={{ width: 420, height: 420, background: "var(--indigo)", opacity: 0.16, top: "-8%", right: "8%" }}
        />
        <div
          className="ba-glow"
          style={{ width: 320, height: 320, background: "var(--gold)", opacity: 0.14, bottom: "-8%", left: "10%" }}
        />
        <div>
          <span className="ba-hero-eyebrow ba-mono">Entreprise de Services Numérique — Afrique de l'Ouest</span>
          <h1>
            Transformer <span>l'Afrique</span> par l'IT.
          </h1>
          <p className="ba-hero-sub">
            Box.Africa conçoit, construit et fait tourner les systèmes dont les entreprises africaines
            dépendent chaque jour — du premier audit jusqu'au support sur site.
          </p>
          <div className="ba-hero-ctas">
            <Link to="/services" className="ba-btn-primary">
              Découvrir nos services <ArrowUpRight size={16} />
            </Link>
            <a href={mailtoHref()} className="ba-btn-secondary">
              Nous contacter
            </a>
          </div>
        </div>
      </header>

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

      {/* Preuve sociale immédiate : qui nous fait confiance */}
      <section className="ba-section" id="secteurs">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-logos">
              {FEATURED_PARTNER_LOGOS.map((p) => (
                <span className="ba-eyebrow-chip" key={p.name}>
                  <img src={p.logo} alt="" loading="lazy" />
                </span>
              ))}
            </span>
            Nos partenaires
          </span>
          <h2>Ils nous font confiance</h2>
          <p className="ba-section-sub">
            Banques, assurances, industries et institutions publiques d'Afrique de l'Ouest nous
            accompagnent, notamment dans les secteurs {SECTORS.join(", ")}.
          </p>
        </div>
        <div className="ba-partners-marquee" data-reveal>
          <div className="ba-partners-track">
            {PARTNERS_TRACK.map((p, i) => (
              <div
                className={`ba-partner-chip ${p.logo ? "" : "text-fallback"} ${p.dark ? "dark" : ""}`}
                key={`${p.name}-${i}`}
              >
                {p.logo ? <img src={p.logo} alt={p.name} loading="lazy" /> : <span>{p.name}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que nous faisons */}
      <section className="ba-section" id="services">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.services} alt="" loading="lazy" />
            </span>
            Services
          </span>
          <h2>Développement, infrastructure, cybersécurité, support</h2>
          <p className="ba-section-sub">
            Un aperçu de notre palette — le détail complet de chaque domaine vit sur la page Services.
          </p>
        </div>
        <div className="ba-services-grid">
          {SERVICES.map((s) => (
            <div className="ba-scard" key={s.slug} style={{ "--card-color": s.color }} data-reveal>
              <img className="ba-scard-photo" src={s.image} alt="" loading="lazy" />
              <div className="ba-scard-icon">
                <img src={s.iconImage} alt="" loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((it) => (
                  <li key={it.name}>{it.name}</li>
                ))}
              </ul>
              <Link className="ba-scard-link" to={`/services#${s.slug}`}>
                En savoir plus <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comment nous le faisons */}
      <section className="ba-section" id="approche">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.method} alt="" loading="lazy" />
            </span>
            Notre méthode
          </span>
          <h2>Une palette de services à la demande</h2>
          <p className="ba-section-sub">
            Chaque mission suit le même fil : comprendre, prouver, construire, puis faire vivre la solution
            dans la durée.
          </p>
        </div>
        <div className="ba-pipeline">
          {PIPELINE.map((stage) => {
            const StageIcon = stage.icon;
            return (
              <div
                className="ba-pstage"
                key={stage.key}
                style={{ "--stage-color": stage.color }}
                data-reveal
              >
                <div className="ba-pstage-avatar">
                  <img src={stage.image} alt="" loading="lazy" />
                  <span className="ba-pstage-icon">
                    <StageIcon size={15} />
                  </span>
                </div>
                <span className="ba-pstage-key">{stage.key}</span>
                <p className="ba-pstage-desc">{stage.desc}</p>
                <ul>
                  {stage.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Crédibilité technologique : partenariats stratégiques */}
      <section className="ba-section" id="partenaires-cle">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.promise} alt="" loading="lazy" />
            </span>
            Nos partenaires clé
          </span>
          <h2>Des technologies éprouvées, portées par nos certifications</h2>
          <p className="ba-section-sub">
            Au-delà de nos propres solutions, nous nous appuyons sur des écosystèmes technologiques
            reconnus pour accélérer vos projets.
          </p>
        </div>
        <div className="ba-keypartners">
          {KEY_PARTNERS.map((kp, i) => (
            <div
              className="ba-keypartner-group"
              key={kp.partner}
              style={{ "--card-color": i % 2 === 0 ? "var(--indigo)" : "var(--blue)" }}
              data-reveal
            >
              <div className="ba-keypartner-head">
                <div className="ba-keypartner-logo">
                  <img src={kp.logo} alt={kp.partner} loading="lazy" />
                </div>
                <div>
                  <h3>{kp.partner}</h3>
                  <p>{kp.tagline}</p>
                </div>
              </div>
              <div className="ba-keypartner-cards">
                {kp.cards.map((c) => (
                  <div className="ba-keypartner-card" key={c.title}>
                    <h4>{c.title}</h4>
                    <p>{c.summary}</p>
                    <Link className="ba-scard-link" to={c.link}>
                      En savoir plus <ArrowUpRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offres spécialisées */}
      <section className="ba-section">
        <div className="ba-split">
          <div className="ba-panel ba-panel-academy" id="academy" data-reveal>
            <div
              className="ba-panel-bg"
              style={{ backgroundImage: `url("${TECH_PHOTOS.academyBg}")` }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: -1,
                background:
                  "linear-gradient(0deg, rgba(12,12,12,.96) 15%, rgba(15,15,15,.72) 55%, rgba(210,210,210,.28) 100%)",
              }}
            />
            <span className="ba-panel-tag ba-mono" style={{ color: "var(--blue)" }}>
              Academy
            </span>
            <h3>Centre de formation IT</h3>
            <p>Cursus, formations intra ou inter-entreprise, modules personnalisés dans des salles équipées.</p>
            <div className="ba-panel-tags">
              {["Microsoft", "DevOps/DevSecOps", "Développement & IA", "Cybersécurité"].map((t) => (
                <span className="ba-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <Link className="ba-panel-link" to="/academy">
              Voir les formations <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="ba-panel ba-panel-proxy" id="proxy" data-reveal>
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
            <h3>Service de support innovant</h3>
            <p>Un point focal résident, une prise en main immédiate, et une intervention sur site en moins de 24h.</p>
            <div className="ba-panel-tags">
              {["Réactivité", "Savoir-faire", "Reporting"].map((t) => (
                <span className="ba-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <Link className="ba-panel-link" to="/proxy">
              Découvrir Proxy <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Qui nous sommes — placé avant l'appel à l'action, pour humaniser la conversion */}
      <section className="ba-section-tinted" id="equipe">
        <div className="ba-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="ba-section-head" data-reveal>
            <span className="ba-eyebrow ba-mono">
              <span className="ba-eyebrow-icon">
                <img src={THEME_ICONS.people} alt="" loading="lazy" />
              </span>
              L'humain au cœur de l'IT
            </span>
            <h2>Des équipes qui construisent le numérique africain</h2>
            <p className="ba-section-sub">
              Des profils techniques, des échanges métier et une culture du résultat pour transformer
              les idées en solutions concrètes.
            </p>
          </div>
          <div className="ba-people-grid">
            <article className="ba-photo-card tall" data-reveal>
              <img src={TECH_PHOTOS.team} alt="Professionnels travaillant ensemble sur un projet numérique" loading="lazy" />
              <div className="ba-photo-overlay" style={{ "--tag-color": "var(--indigo)" }}>
                <span>Collaboration</span>
                <h3>Des idées qui deviennent des projets</h3>
              </div>
            </article>
            <article className="ba-photo-card" data-reveal>
              <img src={TECH_PHOTOS.woman} alt="Professionnelle travaillant sur un ordinateur" loading="lazy" />
              <div className="ba-photo-overlay" style={{ "--tag-color": "var(--coral)" }}>
                <span>Expertise</span>
                <h3>Des compétences techniques au quotidien</h3>
              </div>
            </article>
            <article className="ba-photo-card" data-reveal>
              <img src={TECH_PHOTOS.hero} alt="Professionnel travaillant sur des systèmes informatiques" loading="lazy" />
              <div className="ba-photo-overlay" style={{ "--tag-color": "var(--teal)" }}>
                <span>Innovation</span>
                <h3>La technologie au service de l'Afrique</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="ba-cta-band" id="contact" data-reveal style={ctaBandStyle(TECH_PHOTOS.innovation)}>
        <div className="ba-cta-box">
          <img className="ba-box-animation" src={BOXAFRICA_BOX} alt="" />
          <h2 style={{ marginTop: 18 }}>Un projet IT à transformer ?</h2>
          <p>
            Parlons de votre contexte — conseil, développement, cybersécurité ou formation — et construisons
            la prochaine étape ensemble.
          </p>
          <a href={mailtoHref()} className="ba-btn-primary">
            Discutons-en <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <LocationMap />
      <Footer />
    </div>
  );
}
