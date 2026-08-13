import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronRight, GraduationCap, BadgeCheck, Users2 } from "lucide-react";
import BoxAfricaStyles from "../components/BoxAfricaStyles.jsx";
import AcademyStyles, { acaHeroBgStyle } from "../components/AcademyStyles.jsx";
import Logo from "../components/Logo.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import LocationMap from "../components/LocationMap.jsx";
import { useReveal } from "../hooks/useReveal.js";
import {
  ACADEMY_CATEGORIES,
  ACADEMY_STATS,
  ACADEMY_FORMAT_STEPS,
  ACADEMY_AUDIENCE,
  ACADEMY_PHOTOS,
} from "../data/academy.js";
import { mailtoHref, THEME_ICONS } from "../data/content.js";

const MOSAIC = [
  ACADEMY_PHOTOS.mosaicA,
  ACADEMY_PHOTOS.mosaicB,
  ACADEMY_PHOTOS.mosaicC,
  ACADEMY_PHOTOS.mosaicD,
];

const TOTAL_COURSES = ACADEMY_CATEGORIES.reduce((n, c) => n + c.courses.length, 0);

function scrollToHash(hash) {
  if (!hash) return;
  const id = hash.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Academy() {
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
    const sections = ACADEMY_CATEGORIES.map((c) => document.getElementById(c.slug)).filter(Boolean);
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
    <div className="ba-root ba-aca-page">
      <BoxAfricaStyles />
      <AcademyStyles />
      <Nav />

      <div className="ba-aca-ribbon">
        <GraduationCap size={14} /> Vous êtes dans BoxAcademy — le centre de formation de Box.Africa
      </div>

      {/* Hero typographique + mosaïque */}
      <header className="ba-aca-hero">
        <div className="ba-aca-hero-bg" style={acaHeroBgStyle(ACADEMY_PHOTOS.hero)} />
        <div className="ba-aca-glow" style={{ width: 380, height: 380, background: "var(--aca-accent)", opacity: 0.18, top: "-10%", left: "-4%" }} />
        <div className="ba-aca-glow" style={{ width: 300, height: 300, background: "var(--aca-accent-2)", opacity: 0.14, bottom: "-8%", right: "6%" }} />

        <div data-reveal>
          <nav className="ba-aca-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} />
            <span>BoxAcademy</span>
          </nav>
          <Logo variant="academy" className="ba-aca-crest" />
          <span className="ba-aca-eyebrow">
            <BadgeCheck size={13} /> BoxAcademy — Centre de formation IT
          </span>
          <h1>
            Faites monter vos équipes en compétence<br />
            <em>avec BoxAcademy</em>.
          </h1>
          <p className="ba-aca-hero-lead">
            Le volet formation de Box.Africa : des parcours pratiques, animés par des experts certifiés,
            pour maîtriser le cloud, les infrastructures, la cybersécurité, la gouvernance IT et l'intelligence
            artificielle.
          </p>
          <div className="ba-aca-hero-stats">
            {ACADEMY_STATS.map((s) => (
              <div className="ba-aca-hero-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="ba-hero-ctas">
            <a href="#microsoft-cloud" className="ba-btn-primary">
              Voir le catalogue <ArrowUpRight size={16} />
            </a>
            <Link to="/" className="ba-btn-secondary">
              Retour à l'accueil
            </Link>
          </div>
        </div>

        <div className="ba-aca-mosaic" data-reveal>
          {MOSAIC.map((src, i) => (
            <div key={i} className="ba-aca-mosaic-cell">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </header>

      {/* Navigation sticky par catégorie */}
      <div className="ba-aca-sticky-bar">
        <nav className="ba-aca-sticky-inner" aria-label="Navigation des catégories de formation">
          {ACADEMY_CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className={`ba-aca-tab ${activeSlug === c.slug ? "active" : ""}`}
              style={{ "--tab-color": c.color }}
            >
              <img className="ba-aca-tab-icon" src={c.icon} alt="" loading="lazy" />
              {c.title}
              <span className="ba-aca-tab-count">{c.courses.length}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Catalogue des formations */}
      <section className="ba-aca-catalog">
        <div className="ba-section-head" data-reveal style={{ marginBottom: 8 }}>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.catalogue} alt="" loading="lazy" />
            </span>
            Catalogue
          </span>
          <h2>{TOTAL_COURSES} formations réparties en {ACADEMY_CATEGORIES.length} domaines</h2>
          <p className="ba-section-sub">
            Chaque formation combine théorie condensée et mise en pratique sur des cas réels, avec une
            préparation ciblée pour les parcours certifiants.
          </p>
        </div>

        {ACADEMY_CATEGORIES.map((cat) => {
          return (
            <div id={cat.slug} key={cat.slug} className="ba-aca-cat-block" style={{ "--cat-color": cat.color }} data-reveal>
              <div className="ba-aca-cat-head">
                <div className="ba-aca-cat-icon">
                  <img src={cat.icon} alt="" loading="lazy" />
                </div>
                <div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
              <div className="ba-aca-course-grid">
                {cat.courses.map((course) => (
                  <article className="ba-aca-course-card" key={course.name}>
                    {course.badge && <span className="ba-aca-course-badge">{course.badge}</span>}
                    {course.logo && (
                      <div className="ba-aca-course-logo">
                        <img src={course.logo} alt="" loading="lazy" />
                      </div>
                    )}
                    <span className="ba-aca-course-type">
                      <BadgeCheck size={12} /> {course.type}
                    </span>
                    <h4>{course.name}</h4>
                    <p>{course.blurb}</p>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Format pédagogique */}
      <section className="ba-section" id="format">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.format} alt="" loading="lazy" />
            </span>
            Format
          </span>
          <h2>Une pédagogie pratique, dans vos conditions</h2>
        </div>
        <div className="ba-aca-steps-grid">
          {ACADEMY_FORMAT_STEPS.map((s, i) => (
            <div className="ba-aca-step" key={s.title} data-reveal>
              <img className="ba-aca-step-photo" src={s.image} alt="" loading="lazy" />
              <span className="ba-aca-step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Public visé */}
      <section className="ba-section" id="public">
        <div className="ba-section-head" data-reveal>
          <span className="ba-eyebrow ba-mono">
            <span className="ba-eyebrow-icon">
              <img src={THEME_ICONS.audience} alt="" loading="lazy" />
            </span>
            Pour qui ?
          </span>
          <h2>BoxAcademy s'adresse à</h2>
        </div>
        <div className="ba-sectors" data-reveal>
          {ACADEMY_AUDIENCE.map((a) => (
            <div className="ba-sector-chip" key={a}>
              <Users2 size={16} color="var(--aca-accent)" /> {a}
            </div>
          ))}
        </div>
      </section>

      {/* Contact split */}
      <section className="ba-aca-contact" id="contact" data-reveal>
        <div className="ba-aca-contact-visual">
          <img src={ACADEMY_PHOTOS.contact} alt="Session de formation Box.Africa" loading="lazy" />
        </div>
        <div className="ba-aca-contact-body">
          <span className="ba-eyebrow ba-mono">Parlons formation</span>
          <h2>Prêt à monter en compétence ?</h2>
          <p>
            Parcours individuel, cursus intra-entreprise ou préparation ciblée à une certification —
            décrivez-nous votre besoin.
          </p>
          <div className="ba-aca-contact-actions">
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
