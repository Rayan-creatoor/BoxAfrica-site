export default function AcademyStyles() {
  return (
    <style>{`
      /* ===== BoxAcademy — identité visuelle dédiée, bleu corporate ===== */

      .ba-aca-page {
        --aca-accent: #4f7cff;
        --aca-accent-2: #345fc7;
        --aca-soft: #a8c0ff;
        background:
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,124,255,.10), transparent),
          var(--bg);
      }

      /* Bandeau d'identification — signale immédiatement qu'on change d'univers */
      .ba-aca-ribbon {
        display: flex; align-items: center; justify-content: center; gap: 10px;
        padding: 10px 6vw; font-size: 12px;
        letter-spacing: .12em; text-transform: uppercase; text-align: center;
        color: #ffffff; font-weight: 700;
        background: linear-gradient(90deg, var(--aca-accent), var(--aca-accent-2));
      }

      /* Hero */
      .ba-aca-hero {
        display: grid;
        grid-template-columns: 0.95fr 1.05fr;
        gap: 48px;
        align-items: center;
        padding: 10vh 6vw 9vh;
        position: relative;
        overflow: hidden;
        min-height: 66vh;
        isolation: isolate;
      }
      .ba-aca-hero-bg {
        position: absolute; inset: 0; z-index: -2; pointer-events: none;
        background-size: cover; background-position: center;
        transform: scale(1.02);
      }
      .ba-aca-hero-bg::after {
        content: "";
        position: absolute; inset: 0;
        background:
          linear-gradient(100deg, rgba(12,12,12,.97) 0%, rgba(12,12,12,.88) 46%, rgba(10,10,10,.55) 78%, rgba(12,12,12,.85) 100%);
      }
      .ba-aca-glow {
        position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none; z-index: -1;
      }

      .ba-aca-breadcrumb {
        display: flex; align-items: center; gap: 8px;
        font-size: 13px; color: rgba(255,255,255,.55); margin-bottom: 22px;
      }
      .ba-aca-breadcrumb a { color: rgba(255,255,255,.74); text-decoration: none; transition: color .2s; }
      .ba-aca-breadcrumb a:hover { color: var(--aca-accent); }
      .ba-aca-breadcrumb span { color: var(--aca-accent); font-weight: 600; }

      /* Logo BoxAcademy affiché en ouverture de hero, en clair sur la photo assombrie */
      .ba-aca-crest { margin-bottom: 26px; color: #ffffff; }
      .ba-aca-crest .ba-logo-mark { width: 38px; height: 38px; }
      .ba-aca-crest .ba-logo-word { font-size: 24px; }

      .ba-aca-eyebrow {
        display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700;
        color: var(--teal); margin-bottom: 16px;
        letter-spacing: .1em; text-transform: uppercase;
      }
      .ba-aca-hero h1 {
        font-size: clamp(36px, 4.8vw, 58px); font-weight: 700; line-height: 1.06; margin-bottom: 20px;
        color: #ffffff;
      }
      .ba-aca-hero h1 em {
        font-style: normal;
        background: linear-gradient(120deg, var(--aca-soft), var(--aca-accent-2));
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }
      .ba-aca-hero-lead {
        font-size: 17px; color: rgba(255,255,255,.76); line-height: 1.65; max-width: 50ch; margin-bottom: 32px;
      }
      .ba-aca-hero-stats { display: flex; gap: 26px; flex-wrap: wrap; margin-bottom: 34px; }
      .ba-aca-hero-stat { display: flex; flex-direction: column; gap: 4px; }
      .ba-aca-hero-stat strong {
        font-size: 26px; font-weight: 700; color: #ffffff;
      }
      .ba-aca-hero-stat span {
        font-size: 12px; color: rgba(255,255,255,.72);
        text-transform: uppercase; letter-spacing: .06em;
      }

      .ba-aca-mosaic {
        display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;
        gap: 12px; height: 420px;
      }
      .ba-aca-mosaic-cell {
        border-radius: 18px; overflow: hidden; border: 1px solid color-mix(in srgb, var(--aca-accent) 24%, var(--border));
        position: relative; min-height: 0; min-width: 0; background: #0c1018;
      }
      .ba-aca-mosaic-cell img {
        width: 100%; height: 100%; object-fit: contain; display: block; transition: transform .5s ease;
      }
      .ba-aca-mosaic-cell:hover img { transform: scale(1.06); }
      .ba-aca-mosaic-cell::after {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background: linear-gradient(135deg, rgba(12,12,12,.06), rgba(12,12,12,.22));
      }

      /* Barre catégories sticky */
      .ba-aca-sticky-bar {
        position: sticky; top: 64px; z-index: 40;
        background: rgba(255,255,255,.92); backdrop-filter: blur(12px);
        border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
        padding: 0 6vw; overflow-x: auto; scrollbar-width: none;
      }
      .ba-aca-sticky-bar::-webkit-scrollbar { display: none; }
      .ba-aca-sticky-inner { display: flex; gap: 4px; min-width: max-content; }
      .ba-aca-tab {
        display: inline-flex; align-items: center; gap: 8px; padding: 14px 18px;
        color: var(--text-dim); text-decoration: none; font-size: 13.5px; font-weight: 500;
        border-bottom: 2px solid transparent; transition: color .2s, border-color .2s, background .2s;
        white-space: nowrap;
      }
      .ba-aca-tab:hover { color: var(--text); background: rgba(10,14,23,.04); }
      .ba-aca-tab.active {
        color: var(--text); border-bottom-color: var(--tab-color, var(--aca-accent));
        background: color-mix(in srgb, var(--tab-color, var(--aca-accent)) 10%, transparent);
      }
      .ba-aca-tab-count {
        font-size: 11px; opacity: .65;
        padding: 1px 6px; border-radius: 999px; border: 1px solid currentColor;
      }
      .ba-aca-tab-icon { width: 15px; height: 15px; object-fit: contain; display: block; }

      /* Catalogue par catégorie */
      .ba-aca-catalog { padding: 8vh 6vw 4vh; }
      .ba-aca-cat-block { scroll-margin-top: 128px; margin-bottom: 68px; }
      .ba-aca-cat-head { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 28px; max-width: 720px; }
      .ba-aca-cat-icon {
        flex: none; width: 48px; height: 48px; border-radius: 14px; padding: 10px;
        display: flex; align-items: center; justify-content: center;
        background: linear-gradient(135deg, var(--cat-color), color-mix(in srgb, var(--cat-color) 35%, white));
        color: #000000;
      }
      .ba-aca-cat-icon img { width: 100%; height: 100%; object-fit: contain; display: block; }
      .ba-aca-cat-head h3 { font-size: clamp(20px, 2.4vw, 26px); font-weight: 700; margin-bottom: 6px; }
      .ba-aca-cat-head p { color: var(--text-dim); font-size: 14.5px; margin: 0; line-height: 1.55; }

      .ba-aca-course-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
      .ba-aca-course-card {
        background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 16px;
        padding: 22px; position: relative; overflow: hidden;
        transition: transform .25s ease, border-color .25s ease, background .25s ease;
      }
      .ba-aca-course-card::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--cat-color);
      }
      .ba-aca-course-card:hover {
        transform: translateY(-4px);
        border-color: color-mix(in srgb, var(--cat-color) 55%, transparent);
        background: var(--bg-elevated-2);
      }
      .ba-aca-course-badge {
        position: absolute; top: 14px; right: 14px; z-index: 2;
        display: inline-flex; align-items: center;
        background: linear-gradient(135deg, var(--aca-accent-2), var(--aca-accent)); color: #ffffff;
        font-size: 10px; font-weight: 700; letter-spacing: .03em; text-transform: uppercase;
        padding: 5px 10px; border-radius: 999px; box-shadow: 0 4px 10px rgba(0,0,0,.25);
      }
      .ba-aca-course-logo {
        display: inline-flex; align-items: center; justify-content: center;
        height: 30px; padding: 5px 12px; border-radius: 8px; background: #fff;
        margin-bottom: 14px;
      }
      .ba-aca-course-logo img { height: 16px; width: auto; max-width: 110px; display: block; object-fit: contain; }
      .ba-aca-course-type {
        display: inline-flex; align-items: center; gap: 6px;
        font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--cat-color);
        margin-bottom: 12px;
      }
      .ba-aca-course-card h4 { font-size: 15.5px; font-weight: 600; margin-bottom: 8px; line-height: 1.3; }
      .ba-aca-course-card p { font-size: 13px; color: var(--text-dim); margin: 0; line-height: 1.55; }

      /* Format & public */
      .ba-aca-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
      .ba-aca-step {
        border: 1px solid var(--border); border-radius: 16px;
        padding: 26px 22px; position: relative; overflow: hidden; isolation: isolate;
        transition: transform .3s ease, border-color .3s ease;
      }
      .ba-aca-step-photo {
        position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover;
        transition: transform .5s ease;
      }
      .ba-aca-step:hover .ba-aca-step-photo { transform: scale(1.06); }
      .ba-aca-step::before {
        content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none;
        background: linear-gradient(175deg, rgba(5,10,22,.62) 0%, rgba(5,9,18,.88) 60%, rgba(4,7,14,.92) 100%);
      }
      .ba-aca-step:hover { transform: translateY(-4px); border-color: color-mix(in srgb, var(--aca-accent) 55%, transparent); }
      .ba-aca-step-num {
        font-size: 12px; color: var(--aca-soft); margin-bottom: 14px; display: block;
      }
      .ba-aca-step h3 { font-size: 16.5px; font-weight: 600; margin-bottom: 10px; color: #ffffff; }
      .ba-aca-step p { color: rgba(255,255,255,.78); font-size: 14px; margin: 0; line-height: 1.55; }

      /* Contact split */
      .ba-aca-contact {
        margin: 0 6vw 10vh; display: grid; grid-template-columns: 1fr 1fr;
        border-radius: 24px; overflow: hidden; border: 1px solid var(--border); min-height: 320px;
      }
      .ba-aca-contact-visual { position: relative; min-height: 280px; }
      .ba-aca-contact-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .ba-aca-contact-visual::after {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,.24), rgba(200,200,200,.16));
      }
      .ba-aca-contact-body {
        padding: 48px 40px; display: flex; flex-direction: column; justify-content: center;
        background: var(--bg-elevated);
      }
      .ba-aca-contact-body h2 { font-size: clamp(22px, 2.8vw, 30px); margin-bottom: 14px; }
      .ba-aca-contact-body p { color: var(--text-dim); font-size: 15px; line-height: 1.6; margin: 0 0 28px; max-width: 40ch; }
      .ba-aca-contact-actions { display: flex; gap: 12px; flex-wrap: wrap; }

      @media (max-width: 960px) {
        .ba-aca-hero { grid-template-columns: 1fr; min-height: auto; padding-top: 9vh; }
        .ba-aca-mosaic { height: 300px; }
        .ba-aca-steps-grid { grid-template-columns: 1fr 1fr; }
        .ba-aca-contact { grid-template-columns: 1fr; }
        .ba-aca-contact-visual { min-height: 200px; }
      }
      @media (max-width: 640px) {
        .ba-aca-steps-grid { grid-template-columns: 1fr; }
        .ba-aca-course-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

export function acaHeroBgStyle(url) {
  return { backgroundImage: `url("${url}")` };
}
