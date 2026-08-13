import { TECH_PHOTOS } from "../data/content.js";

export default function BoxAfricaStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap');

      .ba-root {
        --font-main: 'Century Gothic', 'Jost', 'Questrial', system-ui, sans-serif;
        --bg:
          radial-gradient(1100px 760px at 6% -8%, rgba(79,124,255,.18), transparent 60%),
          radial-gradient(950px 680px at 100% 4%, rgba(47,95,214,.14), transparent 55%),
          linear-gradient(165deg, #e7edfc 0%, #eef1fb 50%, #e8effd 100%);
        --bg-elevated: #f5f6f8;
        --bg-elevated-2: #eaecf1;
        --border: rgba(10,14,23,0.12);
        --text: #12141a;
        --text-dim: #5b6270;
        --gold: #7fa8ff;
        --coral: #3f6fe0;
        --teal: #2f5fd6;
        --indigo: #4a6fd0;
        --magenta: #24469e;
        --blue: #4f7cff;
        --cream: #f7f5ef;
        background: var(--bg);
        color: var(--text);
        font-family: var(--font-main);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        min-height: 100vh;
      }

      .ba-root * { box-sizing: border-box; font-family: inherit; }
      .ba-root h1, .ba-root h2, .ba-root h3 {
        letter-spacing: -0.01em;
        margin: 0;
      }
      .ba-mono {
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .ba-logo-img { display: block; width: 142px; height: auto; }
      .ba-logo { display: inline-flex; align-items: center; gap: 10px; color: currentColor; }
      .ba-logo-mark {
        width: 28px; height: 28px; flex: none; overflow: visible;
        stroke: currentColor; stroke-width: 3.8; stroke-linecap: round; stroke-linejoin: round; fill: none;
      }
      .ba-logo-mark .ba-logo-accent { stroke: #2f7de0; }
      .ba-logo-word {
        font-size: 19px; font-weight: 600; letter-spacing: -0.01em; color: currentColor;
        white-space: nowrap;
      }
      .ba-logo-dot { color: var(--gold); }
      .ba-box-animation {
        width: 68px; height: 68px; object-fit: contain;
        animation: ba-box-float 3.8s ease-in-out infinite, ba-box-pulse 2.8s ease-in-out infinite;
        filter: brightness(0) invert(1) drop-shadow(0 14px 24px rgba(225,225,225,.28));
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

      .ba-nav {
        position: sticky; top: 0; z-index: 50;
        display: flex; align-items: center; justify-content: space-between;
        padding: 14px 6vw 14px 2vw;
        background: rgba(255,255,255,0.94);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--border);
        transition: padding .3s ease, box-shadow .3s ease;
      }
      .ba-nav.scrolled {
        padding: 10px 6vw 10px 2vw;
        box-shadow: 0 8px 24px rgba(10,14,23,.06);
      }
      .ba-brand { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; color: var(--text); text-decoration: none; }
      .ba-brand .ba-logo-img { width: 138px; }
      .ba-brand .ba-logo { gap: 12px; }
      .ba-brand .ba-logo-mark { width: 44px; height: 44px; }
      .ba-brand .ba-logo-word { font-size: 28px; }
      .ba-brand-tagline {
        font-size: 10px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase;
        color: var(--text-dim); padding-left: 2px;
      }
      .ba-navlinks { display: flex; gap: 36px; margin-left: 56px; }
      .ba-navlinks a {
        color: var(--text-dim); text-decoration: none; font-size: 14.5px; font-weight: 500;
        transition: color .2s ease;
      }
      .ba-navlinks a:hover, .ba-navlinks a.active { color: var(--text); }
      .ba-navcta {
        display: inline-flex; align-items: center; gap: 5px;
        background: linear-gradient(135deg, var(--coral), var(--gold));
        color: #000000;
        padding: 7px 14px; border-radius: 999px; font-size: 12.5px; font-weight: 700;
        text-decoration: none; transition: transform .2s ease, opacity .2s ease;
      }
      .ba-navcta:hover { transform: translateY(-1px); opacity: .92; }
      .ba-burger {
        display: none; background: none; border: 1px solid var(--border); color: var(--text);
        width: 38px; height: 38px; border-radius: 10px; align-items: center; justify-content: center;
        cursor: pointer;
      }
      .ba-mobile-panel {
        display: none; flex-direction: column; gap: 18px;
        position: fixed; inset: 64px 0 0 0; z-index: 49;
        background: var(--bg); padding: 32px 8vw; border-top: 1px solid var(--border);
      }
      .ba-mobile-panel.open { display: flex; }
      .ba-mobile-panel a { color: var(--text); text-decoration: none; font-size: 20px; }

      /* ---- horaires (badge nav desktop + bloc mobile) ---- */
      .ba-hours { position: relative; margin-left: 40px; margin-right: 18px; }
      .ba-hours-toggle {
        display: inline-flex; align-items: center; gap: 7px;
        background: rgba(10,14,23,0.035); border: 1px solid var(--border); color: var(--text-dim);
        padding: 8px 12px; border-radius: 999px; font-size: 12.5px; font-weight: 600; cursor: pointer;
        transition: border-color .2s ease, color .2s ease;
      }
      .ba-hours-toggle:hover { color: var(--text); border-color: rgba(10,14,23,0.24); }
      .ba-hours-dot { width: 7px; height: 7px; border-radius: 50%; background: #6b6b6b; flex: none; }
      .ba-hours-dot.open { background: var(--teal); box-shadow: 0 0 8px 1px color-mix(in srgb, var(--teal) 70%, transparent); }
      .ba-hours-dot.closed { background: var(--coral); }
      .ba-hours-chevron { transition: transform .2s ease; color: var(--text-dim); }
      .ba-hours-chevron.up { transform: rotate(180deg); }
      .ba-hours-panel {
        position: absolute; top: calc(100% + 10px); right: 0; z-index: 60; width: 240px;
        background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 14px;
        padding: 16px; box-shadow: 0 20px 44px rgba(0,0,0,.4);
      }
      .ba-hours-panel-title {
        display: block; font-size: 10.5px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--text-dim); margin-bottom: 10px;
      }
      .ba-hours-row {
        display: flex; justify-content: space-between; gap: 12px; padding: 6px 0; font-size: 13px;
        color: var(--text-dim); border-bottom: 1px solid rgba(10,14,23,0.08);
      }
      .ba-hours-row:last-child { border-bottom: none; }
      .ba-hours-row.today { color: var(--text); font-weight: 700; }
      .ba-hours-row.today span:first-child { color: var(--teal); }

      .ba-mobile-hours {
        margin-top: 8px; padding-top: 18px; border-top: 1px solid var(--border);
      }
      .ba-mobile-hours-title {
        display: flex; align-items: center; gap: 8px; color: var(--text-dim); font-size: 14px;
        margin-bottom: 10px;
      }
      .ba-hours-status.open { color: var(--teal); font-weight: 700; }
      .ba-hours-status.closed { color: var(--coral); font-weight: 700; }
      .ba-mobile-hours .ba-hours-row { font-size: 14px; }

      @media (max-width: 920px) {
        .ba-hours { display: none; }
      }

      .ba-hero {
        position: relative;
        display: flex; align-items: center; min-height: 82vh;
        padding: 10vh 6vw; overflow: hidden;
        isolation: isolate;
      }
      .ba-hero.compact { min-height: 52vh; }
      .ba-hero-bg {
        position: absolute; inset: 0; z-index: -2; pointer-events: none;
        background-size: cover; background-position: center;
        transform: scale(1.02);
      }
      .ba-hero-bg::after {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(180deg, rgba(12,12,12,.10), rgba(12,12,12,.82));
      }
      .ba-glow {
        position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: -1;
      }
      .ba-hero-eyebrow {
        color: var(--teal); font-size: 12px; font-weight: 600; margin-bottom: 18px; display: block;
      }
      .ba-hero h1 {
        font-size: clamp(42px, 5.7vw, 72px); font-weight: 700; line-height: 1.02; color: var(--text);
        position: relative; z-index: 1; max-width: 760px;
      }
      .ba-hero h1 span {
        background: linear-gradient(120deg, var(--gold), var(--coral));
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }
      .ba-hero-sub {
        margin-top: 22px; font-size: 17px; color: var(--text-dim); max-width: 52ch; position: relative; z-index: 1;
      }
      .ba-hero-ctas { display: flex; gap: 14px; margin-top: 34px; position: relative; z-index: 1; flex-wrap: wrap; }
      .ba-btn-primary {
        display: inline-flex; align-items: center; gap: 8px;
        background: linear-gradient(135deg, var(--coral), var(--gold));
        color: #000000; padding: 13px 24px; border-radius: 12px; text-decoration: none;
        font-weight: 700; font-size: 15px; transition: transform .2s ease, box-shadow .2s ease;
        box-shadow: 0 8px 20px rgba(47,95,214,.30);
      }
      .ba-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(47,95,214,.38); }
      .ba-btn-secondary {
        display: inline-flex; align-items: center; gap: 8px;
        background: transparent; border: 1px solid var(--border); color: var(--text);
        padding: 13px 22px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 15px;
        transition: border-color .2s ease, background .2s ease;
      }
      .ba-btn-secondary:hover { border-color: rgba(10,14,23,0.3); background: rgba(10,14,23,0.03); }
      /* Bandeaux "îlots sombres" (hero photo, CTA, panneaux) : bouton secondaire clair sur fond sombre */
      .ba-hero .ba-btn-secondary, .ba-cta-band .ba-btn-secondary,
      .ba-aca-hero .ba-btn-secondary, .ba-prx-hero .ba-btn-secondary {
        border-color: rgba(255,255,255,0.3); color: #ffffff;
      }
      .ba-hero .ba-btn-secondary:hover, .ba-cta-band .ba-btn-secondary:hover,
      .ba-aca-hero .ba-btn-secondary:hover, .ba-prx-hero .ba-btn-secondary:hover {
        border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.08);
      }
      /* Texte clair forcé dans le hero (photo + overlay foncé dès l'ouverture de page) */
      .ba-hero h1 { color: #ffffff; }
      .ba-hero-sub { color: rgba(255,255,255,.76); }

      .ba-stats {
        display: grid; grid-template-columns: repeat(4, 1fr);
        border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
        margin: 0 6vw;
      }
      .ba-stat {
        padding: 32px 18px; text-align: center; border-right: 1px solid var(--border);
        background: linear-gradient(180deg, rgba(10,14,23,.03), transparent);
      }
      .ba-stat:last-child { border-right: none; }
      .ba-stat-value {
        font-size: clamp(22px, 3vw, 32px); font-weight: 700;
        background: linear-gradient(120deg, var(--gold), var(--coral));
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }
      .ba-stat-label { color: var(--text-dim); font-size: 13px; margin-top: 6px; }

      .ba-section { padding: 11vh 6vw; }
      .ba-section-head { max-width: 640px; margin-bottom: 52px; }
      .ba-eyebrow {
        display: inline-flex; align-items: center; gap: 8px; font-size: 12px; color: var(--teal); margin-bottom: 14px;
        font-weight: 600;
      }
      .ba-section h2 { font-size: clamp(26px, 3.4vw, 40px); font-weight: 700; }
      .ba-section-sub { color: var(--text-dim); margin-top: 14px; font-size: 16px; }

      .ba-pipeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
      .ba-pstage {
        background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 20px;
        padding: 30px 24px; position: relative; overflow: hidden; text-align: center;
        transition: transform .3s ease, border-color .3s ease;
      }
      .ba-pstage:hover { transform: translateY(-6px); border-color: color-mix(in srgb, var(--stage-color) 60%, transparent); }
      .ba-pstage::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--stage-color);
      }
      .ba-pstage-avatar {
        width: 92px; height: 92px; border-radius: 50%; overflow: hidden;
        border: 3px solid var(--stage-color);
        margin: 0 auto 18px; box-shadow: 0 10px 26px rgba(0,0,0,.32);
        position: relative;
      }
      .ba-pstage-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .ba-pstage-icon {
        position: absolute; bottom: -6px; right: -6px; width: 30px; height: 30px; border-radius: 50%;
        background: var(--stage-color); color: #000000; display: flex; align-items: center; justify-content: center;
        border: 2px solid var(--bg-elevated);
      }
      .ba-pstage-key {
        font-size: 13px; letter-spacing: .14em; color: var(--stage-color); font-weight: 700;
      }
      .ba-pstage-desc { color: var(--text-dim); font-size: 13.5px; margin: 10px 0 0; line-height: 1.5; }
      .ba-pstage ul {
        list-style: none; padding: 14px 0 0; margin: 14px 0 0; display: flex; flex-direction: column; gap: 8px;
        border-top: 1px dashed var(--border);
      }
      .ba-pstage li {
        font-size: 13.5px; color: var(--text); display: flex; gap: 8px; align-items: center; justify-content: center;
      }
      .ba-pstage li::before {
        content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--stage-color); flex: none;
      }

      .ba-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
      .ba-scard {
        border: 1px solid var(--border); border-radius: 18px; padding: 28px;
        position: relative; overflow: hidden; isolation: isolate;
        transition: transform .3s ease, border-color .3s ease;
      }
      .ba-scard-photo {
        position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover;
        transition: transform .5s ease;
      }
      .ba-scard:hover .ba-scard-photo { transform: scale(1.06); }
      .ba-scard::before {
        content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none;
        background: linear-gradient(165deg,
          color-mix(in srgb, var(--card-color) 50%, rgba(8,10,16,.95)) 0%,
          rgba(8,10,16,.90) 55%,
          rgba(8,10,16,.86) 100%);
      }
      .ba-scard:hover { transform: translateY(-5px); border-color: color-mix(in srgb, var(--card-color) 60%, transparent); }
      .ba-scard-icon {
        width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
        background: linear-gradient(135deg, var(--card-color), color-mix(in srgb, var(--card-color) 40%, white));
        color: #000000; margin-bottom: 20px;
        padding: 11px; position: relative;
      }
      .ba-scard-icon img { width: 100%; height: 100%; object-fit: contain; display: block; }
      .ba-scard h3 { font-size: 18px; font-weight: 600; margin-bottom: 12px; position: relative; color: #ffffff; }
      .ba-scard ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; position: relative; }
      .ba-scard li {
        color: rgba(255,255,255,.8); font-size: 14px; display: flex; gap: 8px; align-items: baseline;
      }
      .ba-scard li::before { content: '▸'; color: var(--card-color); }
      /* Lien "En savoir plus" — variante par défaut, pensée pour un fond clair (ex. cartes partenaires) */
      .ba-scard-link {
        display: inline-flex; align-items: center; gap: 7px; margin-top: 22px;
        color: var(--text); text-decoration: none; font-size: 13.5px; font-weight: 700;
        padding: 9px 13px; border: 1.5px solid var(--card-color, var(--border)); border-radius: 10px;
        transition: transform .2s ease, background .2s ease, color .2s ease, box-shadow .2s ease;
        position: relative;
      }
      .ba-scard-link:hover {
        transform: translateY(-2px);
        background: var(--card-color);
        color: #000000;
        box-shadow: 0 8px 18px color-mix(in srgb, var(--card-color) 45%, transparent);
      }
      /* Variante sur fond sombre (à l'intérieur des cartes-photo .ba-scard) */
      .ba-scard .ba-scard-link { color: #ffffff; border-color: rgba(255,255,255,.4); }
      .ba-scard .ba-scard-link:hover { color: #000000; border-color: var(--card-color); }

      /* ---- Nos partenaires clé (Odoo, Microsoft…) ---- */
      .ba-keypartners { display: flex; flex-direction: column; gap: 32px; }
      .ba-keypartner-group {
        border: 1px solid var(--border); border-radius: 20px; padding: 28px;
        background: linear-gradient(160deg, rgba(10,14,23,.035), transparent);
      }
      .ba-keypartner-head { display: flex; align-items: center; gap: 18px; margin-bottom: 22px; }
      .ba-keypartner-logo {
        flex: none; width: 64px; height: 64px; border-radius: 14px; background: #fff;
        display: flex; align-items: center; justify-content: center; padding: 10px;
      }
      .ba-keypartner-logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
      .ba-keypartner-head h3 { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
      .ba-keypartner-head p { color: var(--text-dim); font-size: 14px; margin: 0; }
      .ba-keypartner-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
      .ba-keypartner-card {
        background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 16px; padding: 22px;
        transition: transform .25s ease, border-color .25s ease;
      }
      .ba-keypartner-card:hover {
        transform: translateY(-4px); border-color: color-mix(in srgb, var(--card-color) 50%, transparent);
      }
      .ba-keypartner-card h4 { font-size: 16px; font-weight: 600; margin-bottom: 10px; }
      .ba-keypartner-card p { color: var(--text-dim); font-size: 13.5px; line-height: 1.55; margin: 0 0 16px; }
      @media (max-width: 640px) {
        .ba-keypartner-cards { grid-template-columns: 1fr; }
      }

      .ba-section-tinted {
        position: relative; margin: 0 0 4vh; padding-top: 9vh; padding-bottom: 9vh; overflow: hidden;
        background:
          radial-gradient(circle at 10% 0%, rgba(79,124,255,.10), transparent 55%),
          radial-gradient(circle at 90% 100%, rgba(47,95,214,.08), transparent 55%),
          var(--bg-elevated);
        border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
      }
      .ba-people-grid { display: grid; grid-template-columns: 1.25fr .9fr .9fr; gap: 18px; }
      .ba-photo-card {
        position: relative; min-height: 330px; overflow: hidden; border-radius: 22px;
        border: 1px solid var(--border); background: var(--bg-elevated-2);
      }
      .ba-photo-card.tall { min-height: 390px; }
      .ba-photo-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s ease; }
      .ba-photo-card:hover img { transform: scale(1.045); }
      .ba-photo-overlay {
        position: absolute; inset: auto 0 0; padding: 28px 24px 22px;
        background: linear-gradient(transparent, rgba(8,8,8,.94));
      }
      .ba-photo-overlay span {
        display: inline-flex; padding: 6px 10px; border-radius: 999px;
        background: color-mix(in srgb, var(--tag-color, var(--teal)) 35%, rgba(8,10,16,.75));
        border: 1px solid color-mix(in srgb, var(--tag-color, var(--teal)) 55%, transparent);
        color: #ffffff; font-size: 11px; text-transform: uppercase; font-weight: 600;
      }
      .ba-photo-overlay h3 { margin-top: 10px; font-size: 21px; }

      .ba-split { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
      .ba-panel {
        border-radius: 22px; padding: 36px; position: relative; overflow: hidden; min-height: 320px;
        display: flex; flex-direction: column; justify-content: flex-end;
        border: 1px solid var(--border); isolation: isolate;
      }
      .ba-panel-bg {
        position: absolute; inset: 0; z-index: -2; background-size: cover; background-position: center;
        transform: scale(1.03);
      }
      .ba-panel::before { content: ''; position: absolute; inset: 0; z-index: -1; }
      .ba-panel-tag {
        font-size: 12px; letter-spacing: .1em; margin-bottom: 12px;
        display: inline-flex; padding: 5px 12px; border-radius: 999px; width: fit-content;
        background: rgba(14,14,14,.55); border: 1px solid var(--border); backdrop-filter: blur(4px);
      }
      .ba-panel h3 { font-size: 26px; margin-bottom: 12px; }
      .ba-panel p { color: var(--text-dim); font-size: 15px; margin: 0 0 20px; max-width: 42ch; }
      .ba-panel-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
      .ba-tag {
        font-size: 12.5px; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--border);
        color: var(--text); background: rgba(14,14,14,.5); backdrop-filter: blur(4px);
      }
      .ba-panel-link {
        display: inline-flex; align-items: center; gap: 6px; color: var(--text); font-weight: 700; font-size: 14.5px;
        text-decoration: none; width: fit-content;
      }

      .ba-sectors { display: flex; flex-wrap: wrap; gap: 14px; }
      .ba-sector-chip {
        display: flex; align-items: center; gap: 10px; padding: 14px 22px; border-radius: 14px;
        border: 1px solid var(--border); background: var(--bg-elevated); color: var(--text); font-weight: 500;
      }

      /* ---- eyebrow logos / icônes (mini aperçu avant le titre de section) ---- */
      .ba-eyebrow { font-size: 13px; }
      .ba-eyebrow-logos { display: inline-flex; align-items: center; gap: 8px; }
      .ba-eyebrow-logos .ba-eyebrow-chip {
        display: inline-flex; align-items: center; justify-content: center;
        width: 46px; height: 46px; border-radius: 11px; background: #fff; overflow: hidden; flex: none;
      }
      .ba-eyebrow-logos img { height: 28px; width: auto; max-width: 38px; object-fit: contain; display: block; }

      /* ---- icône thématique unique avant un titre de section (fond neutre, icône en couleur naturelle) ---- */
      .ba-eyebrow-icon {
        display: inline-flex; align-items: center; justify-content: center;
        width: 46px; height: 46px; border-radius: 12px; flex: none;
        background: rgba(10,14,23,0.045); border: 1px solid var(--border); overflow: hidden;
      }
      .ba-eyebrow-icon img { width: 100%; height: 100%; object-fit: contain; padding: 6px; display: block; }

      /* ---- partenaires : bandeau défilant horizontal ---- */
      .ba-partners-marquee {
        position: relative; overflow: hidden; padding: 6px 0;
        -webkit-mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent);
        mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent);
      }
      .ba-partners-track {
        display: flex; align-items: center; gap: 20px; width: max-content;
        animation: ba-partners-scroll 46s linear infinite;
      }
      .ba-partners-marquee:hover .ba-partners-track { animation-play-state: paused; }
      @keyframes ba-partners-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .ba-partner-chip {
        flex: none; display: flex; align-items: center; justify-content: center;
        height: 82px; width: 160px; padding: 14px 20px; border-radius: 16px;
        background: #fff; border: 1px solid var(--border);
      }
      .ba-partner-chip img { max-height: 48px; max-width: 100%; width: auto; object-fit: contain; display: block; }
      .ba-partner-chip.dark { background: #12141a; }
      .ba-partner-chip.text-fallback { background: var(--bg-elevated); }
      .ba-partner-chip.text-fallback span {
        color: var(--text); font-weight: 600; font-size: 12.5px; text-align: center; line-height: 1.3;
      }
      @media (max-width: 920px) {
        .ba-partner-chip { height: 68px; width: 132px; padding: 10px 16px; }
        .ba-partner-chip img { max-height: 38px; }
      }

      .ba-cta-band {
        margin: 0 6vw 11vh; border-radius: 26px; padding: 64px 6vw; text-align: center; position: relative; overflow: hidden;
        background-size: cover; background-position: center;
        border: 1px solid var(--border);
      }
      .ba-cta-band::before {
        content: ""; position: absolute; width: 300px; height: 300px; border-radius: 50%;
        top: -150px; right: -80px; background: rgba(225,225,225,.20); filter: blur(20px);
      }
      .ba-cta-box { position: relative; z-index: 1; }
      .ba-cta-band h2 { font-size: clamp(26px, 3.6vw, 42px); margin-bottom: 16px; }
      .ba-cta-band p { color: var(--text-dim); max-width: 48ch; margin: 0 auto 30px; }

      .ba-footer { padding: 56px 6vw 0; border-top: 1px solid var(--border); }
      .ba-footer-top {
        display: grid; grid-template-columns: 1.15fr 1.05fr 1fr 0.9fr 0.8fr; gap: 32px;
        padding-bottom: 36px;
      }
      .ba-footer-col-title {
        display: block; font-size: 15.5px; font-weight: 700;
        color: var(--text); margin-bottom: 18px;
      }
      .ba-footer-address { display: flex; flex-direction: column; }
      .ba-footer-address span {
        color: var(--text-dim); font-size: 14px; padding: 10px 0;
        border-bottom: 1px solid rgba(10,14,23,0.10);
      }
      .ba-footer-address span:first-child { padding-top: 0; }
      .ba-footer-links { display: flex; flex-direction: column; }
      .ba-footer-links a {
        color: var(--text-dim); text-decoration: none; font-size: 14px; transition: color .2s ease;
        padding: 10px 0; border-bottom: 1px solid rgba(10,14,23,0.10);
      }
      .ba-footer-links a:first-child { padding-top: 0; }
      .ba-footer-links a:hover { color: var(--teal); }
      .ba-footer-contact { display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; }
      .ba-footer-contact-line {
        display: flex; align-items: center; gap: 9px; color: var(--text); text-decoration: none;
        font-size: 14px; transition: color .2s ease;
      }
      .ba-footer-contact-line svg { color: var(--teal); flex: none; }
      .ba-footer-contact-line:hover { color: var(--teal); }
      .ba-footer-contact-static { cursor: default; }
      .ba-footer-contact-static:hover { color: var(--text); }
      .ba-footer-cta {
        display: inline-flex; align-items: center; gap: 7px;
        background: linear-gradient(135deg, var(--coral), var(--gold)); color: #000000; text-decoration: none;
        font-size: 13.5px; font-weight: 700; padding: 11px 18px; border-radius: 10px; width: fit-content;
        transition: transform .2s ease, box-shadow .2s ease;
      }
      .ba-footer-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(47,95,214,.30); }
      .ba-footer-cta-row { display: flex; flex-wrap: wrap; gap: 10px; }
      .ba-footer-cta-whatsapp {
        background: linear-gradient(135deg, #25d366, #128c7e); color: #ffffff;
      }
      .ba-footer-cta-whatsapp:hover { box-shadow: 0 10px 20px rgba(37,211,102,.32); }
      .ba-footer-cta-whatsapp img { width: 15px; height: 15px; display: block; }
      .ba-footer-social { display: flex; gap: 10px; }
      .ba-footer-social-icon {
        display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px;
        border-radius: 10px; border: 1px solid var(--border);
        transition: border-color .2s ease, background .2s ease, transform .2s ease;
      }
      .ba-footer-social-icon img { display: block; width: 20px; height: 20px; border-radius: 4px; opacity: .9; transition: opacity .2s ease; }
      .ba-footer-social-icon:hover {
        border-color: rgba(10,14,23,.25); background: rgba(10,14,23,.04); transform: translateY(-2px);
      }
      .ba-footer-social-icon:hover img { opacity: 1; }

      .ba-footer-hours-strip {
        display: flex; flex-wrap: wrap; gap: 10px 22px; padding: 22px 0; border-top: 1px solid var(--border);
      }
      .ba-footer-hours-item { font-size: 12.5px; color: var(--text-dim); }
      .ba-footer-hours-item strong { color: var(--text); margin-right: 5px; }

      .ba-footer-bottom {
        padding: 22px 0; border-top: 1px solid var(--border);
        display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;
      }
      .ba-footer-bottom .ba-logo-img { width: 108px; }
      .ba-footer-bottom .ba-logo-mark { width: 22px; height: 22px; }
      .ba-footer-bottom .ba-logo-word { font-size: 16px; }
      @media (max-width: 980px) {
        .ba-footer-top { grid-template-columns: 1fr 1fr 1fr; }
      }
      @media (max-width: 640px) {
        .ba-footer-top { grid-template-columns: 1fr 1fr; gap: 28px; }
      }
      @media (max-width: 420px) {
        .ba-footer-top { grid-template-columns: 1fr; }
      }

      /* ---- localisation / carte ---- */
      .ba-location-body { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; }
      .ba-location-map {
        width: 100%; border-radius: 20px; overflow: hidden; border: 1px solid var(--border);
        height: 380px; background: var(--bg-elevated);
      }
      .ba-location-map iframe { width: 100%; height: 100%; border: 0; display: block; }
      .ba-location-link { margin-top: 0; }

      @media (max-width: 920px) {
        .ba-navlinks, .ba-navcta { display: none; }
        .ba-burger { display: flex; }
        .ba-hero { text-align: left; padding-top: 7vh; min-height: 76vh; }
        .ba-hero.compact { min-height: 44vh; }
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

      /* ---- Texte clair forcé dans les bandeaux "îlots sombres" (photo + overlay foncé) ----
         Placé en toute fin de feuille : var(--text) / var(--text-dim) sont pensés pour un fond
         clair et deviennent illisibles une fois posés sur une photo assombrie (CTA, panneaux
         Academy/Proxy sur l'accueil, cartes photo). Ce bloc doit rester après les règles de
         base ci-dessus pour gagner la cascade à spécificité égale. */
      .ba-cta-band h2, .ba-panel h3, .ba-photo-overlay h3 { color: #ffffff; }
      .ba-cta-band p, .ba-panel p { color: rgba(255,255,255,.78); }
      .ba-tag { color: #ffffff; }
      .ba-panel .ba-panel-link { color: #ffffff; }
      .ba-panel .ba-panel-link:hover { color: rgba(255,255,255,.8); }
    `}</style>
  );
}

export function heroBgStyle(url) {
  return {
    backgroundImage: `linear-gradient(90deg, rgba(12,12,12,.96) 0%, rgba(12,12,12,.80) 42%, rgba(12,12,12,.55) 72%, rgba(12,12,12,.72) 100%), url("${url}")`,
  };
}

export function ctaBandStyle(url) {
  return {
    backgroundImage: `linear-gradient(135deg, rgba(12,12,12,.94), rgba(12,12,12,.90)), url("${url}")`,
  };
}

export { TECH_PHOTOS };
