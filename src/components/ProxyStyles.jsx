export default function ProxyStyles() {
  return (
    <style>{`
      /* ===== Proxy — identité visuelle dédiée : test blanc / noir / marron ===== */

      .ba-prx-page {
        --prx-accent: #8a4b2a;
        --prx-accent-2: #5f3119;
        --prx-soft: #c9946a;
        background:
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(138,75,42,.12), transparent),
          var(--bg);
      }
      .ba-prx-page .ba-eyebrow { color: var(--prx-accent); }
      /* Bouton primaire partagé (Découvrir l'offre, Discutons-en…) recoloré en marron sur cette page */
      .ba-prx-page .ba-btn-primary {
        background: linear-gradient(135deg, var(--prx-accent-2), var(--prx-accent));
        color: #ffffff;
        box-shadow: 0 8px 20px color-mix(in srgb, var(--prx-accent) 40%, transparent);
      }
      .ba-prx-page .ba-btn-primary:hover {
        box-shadow: 0 12px 26px color-mix(in srgb, var(--prx-accent) 50%, transparent);
      }

      /* Bandeau d'identification */
      .ba-prx-ribbon {
        display: flex; align-items: center; justify-content: center; gap: 10px;
        padding: 10px 6vw; font-size: 12px;
        letter-spacing: .12em; text-transform: uppercase; text-align: center;
        color: #ffffff; font-weight: 700;
        background: linear-gradient(90deg, var(--prx-accent-2), var(--prx-accent));
      }

      /* Hero */
      .ba-prx-hero {
        display: grid;
        grid-template-columns: 0.95fr 1.05fr;
        gap: 48px;
        align-items: center;
        padding: 10vh 6vw 9vh;
        position: relative;
        overflow: hidden;
        min-height: 60vh;
        isolation: isolate;
      }
      .ba-prx-hero-bg {
        position: absolute; inset: 0; z-index: -2; pointer-events: none;
        background-size: cover; background-position: center;
        transform: scale(1.02);
      }
      .ba-prx-hero-bg::after {
        content: "";
        position: absolute; inset: 0;
        background:
          linear-gradient(100deg, rgba(12,12,12,.97) 0%, rgba(12,12,12,.88) 46%, rgba(10,10,10,.55) 78%, rgba(12,12,12,.85) 100%);
      }
      .ba-prx-glow {
        position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none; z-index: -1;
      }

      .ba-prx-breadcrumb {
        display: flex; align-items: center; gap: 8px;
        font-size: 13px; color: rgba(255,255,255,.55); margin-bottom: 22px;
      }
      .ba-prx-breadcrumb a { color: rgba(255,255,255,.74); text-decoration: none; transition: color .2s; }
      .ba-prx-breadcrumb a:hover { color: var(--prx-soft); }
      .ba-prx-breadcrumb span { color: var(--prx-soft); font-weight: 600; }

      .ba-prx-crest {
        display: inline-flex; align-items: center; justify-content: center;
        width: 56px; height: 56px; border-radius: 50%; margin-bottom: 22px;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.24), rgba(255,255,255,.04));
        border: 1.5px solid color-mix(in srgb, var(--prx-accent) 55%, transparent);
        color: var(--prx-soft); position: relative;
      }
      .ba-prx-crest .ba-logo-mark { width: 26px; height: 26px; }
      .ba-prx-crest::before {
        content: ""; position: absolute; inset: -8px; border-radius: 50%;
        border: 1px dashed color-mix(in srgb, var(--prx-accent) 45%, transparent);
        animation: ba-prx-spin 26s linear infinite;
      }
      @keyframes ba-prx-spin { to { transform: rotate(360deg); } }

      .ba-prx-eyebrow {
        display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700;
        color: var(--prx-soft); margin-bottom: 16px;
        letter-spacing: .1em; text-transform: uppercase;
      }
      .ba-prx-hero h1 {
        font-size: clamp(36px, 4.8vw, 58px); font-weight: 700; line-height: 1.06; margin-bottom: 20px;
        color: #ffffff;
      }
      .ba-prx-hero h1 em {
        font-style: normal;
        background: linear-gradient(120deg, var(--prx-soft), var(--prx-accent));
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }
      .ba-prx-hero-lead {
        font-size: 17px; color: rgba(255,255,255,.76); line-height: 1.65; max-width: 50ch; margin-bottom: 32px;
      }
      .ba-prx-hero-stats { display: flex; gap: 26px; flex-wrap: wrap; margin-bottom: 34px; }
      .ba-prx-hero-stat { display: flex; flex-direction: column; gap: 4px; }
      .ba-prx-hero-stat strong {
        font-size: 24px; font-weight: 700; color: #ffffff;
      }
      .ba-prx-hero-stat span {
        font-size: 12px; color: rgba(255,255,255,.72);
        text-transform: uppercase; letter-spacing: .06em;
      }

      .ba-prx-mosaic {
        display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;
        gap: 12px; height: 400px;
      }
      .ba-prx-mosaic-cell {
        border-radius: 18px; overflow: hidden; border: 1px solid color-mix(in srgb, var(--prx-accent) 26%, var(--border));
        position: relative; min-height: 0; min-width: 0; background: #0c1018;
      }
      .ba-prx-mosaic-cell img {
        width: 100%; height: 100%; object-fit: contain; display: block; transition: transform .5s ease;
      }
      .ba-prx-mosaic-cell:hover img { transform: scale(1.06); }
      .ba-prx-mosaic-cell::after {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background: linear-gradient(135deg, rgba(12,12,12,.06), rgba(12,12,12,.24));
      }

      /* Piliers — 3 colonnes façon plaquette PROXY */
      .ba-prx-pillars-section { padding: 8vh 6vw 4vh; }
      .ba-prx-pillars-head { max-width: 680px; margin-bottom: 44px; }
      .ba-prx-pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
      .ba-prx-pillar {
        background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 20px;
        padding: 32px 26px; position: relative; overflow: hidden;
        transition: transform .3s ease, border-color .3s ease, background .3s ease;
      }
      .ba-prx-pillar::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--pillar-color);
      }
      .ba-prx-pillar:hover {
        transform: translateY(-6px);
        border-color: color-mix(in srgb, var(--pillar-color) 55%, transparent);
        background: var(--bg-elevated-2);
      }
      .ba-prx-pillar-icon {
        width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
        background: linear-gradient(135deg, var(--pillar-color), color-mix(in srgb, var(--pillar-color) 35%, white));
        color: #000000; margin-bottom: 20px; padding: 11px;
      }
      .ba-prx-pillar-icon img { width: 100%; height: 100%; object-fit: contain; display: block; }
      .ba-prx-pillar h3 { font-size: 20px; font-weight: 700; margin-bottom: 16px; }
      .ba-prx-pillar ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
      .ba-prx-pillar li {
        display: flex; gap: 10px; align-items: flex-start; font-size: 14.5px; color: var(--text); line-height: 1.5;
      }
      .ba-prx-pillar li::before {
        content: ''; width: 6px; height: 6px; margin-top: 7px; border-radius: 50%;
        background: var(--pillar-color); flex: none;
      }

      /* Comment ça marche */
      .ba-prx-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
      .ba-prx-step {
        border: 1px solid var(--border); border-radius: 16px;
        padding: 26px 22px; position: relative; overflow: hidden; isolation: isolate;
        transition: transform .3s ease, border-color .3s ease;
      }
      .ba-prx-step-photo {
        position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover;
        transition: transform .5s ease;
      }
      .ba-prx-step:hover .ba-prx-step-photo { transform: scale(1.06); }
      .ba-prx-step::before {
        content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none;
        background: linear-gradient(175deg, rgba(22,13,7,.62) 0%, rgba(17,10,6,.88) 60%, rgba(13,8,5,.92) 100%);
      }
      .ba-prx-step:hover { transform: translateY(-4px); border-color: color-mix(in srgb, var(--prx-accent) 55%, transparent); }
      .ba-prx-step-num {
        font-size: 12px; color: var(--prx-soft); margin-bottom: 14px; display: block;
      }
      .ba-prx-step h3 { font-size: 16.5px; font-weight: 600; margin-bottom: 10px; color: #ffffff; }
      .ba-prx-step p { color: rgba(255,255,255,.78); font-size: 14px; margin: 0; line-height: 1.55; }

      /* Engagements / stats band */
      .ba-prx-sla-band {
        margin: 0 6vw 4vh; padding: 40px 6vw; border-radius: 24px;
        border: 1px solid var(--border);
        background: linear-gradient(120deg, color-mix(in srgb, var(--prx-accent-2) 22%, var(--bg-elevated)), var(--bg-elevated));
        display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
      }
      .ba-prx-sla-item { text-align: center; }
      .ba-prx-sla-item strong {
        display: block; font-size: clamp(22px, 2.6vw, 30px); font-weight: 700;
        color: var(--prx-accent-2);
      }
      .ba-prx-sla-item span { color: var(--text-dim); font-size: 13px; margin-top: 6px; display: block; }

      /* Niveaux de support N1/N2/N3 */
      .ba-prx-levels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
      .ba-prx-level {
        border: 1px solid var(--border); border-radius: 18px;
        padding: 28px 24px; position: relative; overflow: hidden; isolation: isolate;
        transition: transform .25s ease, border-color .25s ease;
      }
      .ba-prx-level-photo {
        position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover;
        transition: transform .5s ease;
      }
      .ba-prx-level:hover .ba-prx-level-photo { transform: scale(1.06); }
      .ba-prx-level::before {
        content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none;
        background: linear-gradient(170deg, rgba(22,13,7,.80) 0%, rgba(17,10,6,.92) 55%, rgba(13,8,5,.95) 100%);
      }
      .ba-prx-level:hover { transform: translateY(-4px); border-color: color-mix(in srgb, var(--prx-accent) 55%, transparent); }
      .ba-prx-level-badge {
        display: inline-flex; align-items: center; justify-content: center;
        width: 46px; height: 46px; border-radius: 12px; margin-bottom: 18px;
        background: linear-gradient(135deg, var(--prx-accent), var(--prx-accent-2));
        color: #000000; font-weight: 700; font-size: 15px; position: relative;
      }
      .ba-prx-level h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; color: #ffffff; }
      .ba-prx-level p { color: rgba(255,255,255,.8); font-size: 13.5px; line-height: 1.6; margin: 0 0 16px; }
      .ba-prx-level ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      .ba-prx-level li {
        display: flex; gap: 8px; align-items: baseline; font-size: 13px; color: rgba(255,255,255,.92); line-height: 1.5;
      }
      .ba-prx-level li::before {
        content: ''; width: 5px; height: 5px; margin-top: 6px; border-radius: 50%;
        background: var(--prx-soft); flex-shrink: 0;
      }
      @media (max-width: 900px) {
        .ba-prx-levels-grid { grid-template-columns: 1fr; }
      }

      /* Box animation teinté brun (icône hexagonale de la marque) */
      .ba-prx-box-animation {
        filter: brightness(0) invert(1) drop-shadow(0 14px 24px rgba(255,255,255,.22));
      }

      /* Contact split */
      .ba-prx-contact {
        margin: 0 6vw 10vh; display: grid; grid-template-columns: 1fr 1fr;
        border-radius: 24px; overflow: hidden; border: 1px solid var(--border); min-height: 320px;
      }
      .ba-prx-contact-visual { position: relative; min-height: 280px; display: flex; align-items: center; justify-content: center; }
      .ba-prx-contact-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
      .ba-prx-contact-visual::after {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,.24), rgba(180,180,180,.18));
      }
      .ba-prx-contact-visual .ba-prx-box-animation {
        position: absolute; z-index: 1; width: 72px; height: 72px; object-fit: contain;
        animation: ba-box-float 3.8s ease-in-out infinite, ba-box-pulse 2.8s ease-in-out infinite;
      }
      .ba-prx-contact-body {
        padding: 48px 40px; display: flex; flex-direction: column; justify-content: center;
        background: var(--bg-elevated);
      }
      .ba-prx-contact-body h2 { font-size: clamp(22px, 2.8vw, 30px); margin-bottom: 14px; }
      .ba-prx-contact-body p { color: var(--text-dim); font-size: 15px; line-height: 1.6; margin: 0 0 28px; max-width: 40ch; }
      .ba-prx-contact-actions { display: flex; gap: 12px; flex-wrap: wrap; }

      @media (max-width: 960px) {
        .ba-prx-hero { grid-template-columns: 1fr; min-height: auto; padding-top: 9vh; }
        .ba-prx-mosaic { height: 280px; }
        .ba-prx-pillars-grid { grid-template-columns: 1fr; }
        .ba-prx-steps-grid { grid-template-columns: 1fr 1fr; }
        .ba-prx-sla-band { grid-template-columns: 1fr 1fr; }
        .ba-prx-contact { grid-template-columns: 1fr; }
        .ba-prx-contact-visual { min-height: 200px; }
      }
      @media (max-width: 640px) {
        .ba-prx-steps-grid { grid-template-columns: 1fr; }
        .ba-prx-sla-band { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

export function prxHeroBgStyle(url) {
  return { backgroundImage: `url("${url}")` };
}
