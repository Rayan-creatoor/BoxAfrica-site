export default function ServicesStyles() {
  return (
    <style>{`
      /* ===== Services page — layout distinct de l'accueil ===== */

      .ba-svc-page {
        background: var(--bg);
      }

      /* Hero typographique + mosaïque photos */
      .ba-svc-hero {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 48px;
        align-items: center;
        padding: 14vh 6vw 8vh;
        position: relative;
        overflow: hidden;
        min-height: 70vh;
      }
      .ba-svc-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 60% at 10% 20%, rgba(180,180,180,.12), transparent),
          radial-gradient(ellipse 60% 50% at 90% 80%, rgba(200,200,200,.10), transparent),
          linear-gradient(180deg, rgba(14,14,14,0) 60%, var(--bg) 100%);
        pointer-events: none;
        z-index: 0;
      }
      .ba-svc-hero > * { position: relative; z-index: 1; }

      .ba-svc-breadcrumb {
        display: flex; align-items: center; gap: 8px;
        font-size: 13px; color: var(--text-dim); margin-bottom: 28px;
      }
      .ba-svc-breadcrumb a { color: var(--text-dim); text-decoration: none; transition: color .2s; }
      .ba-svc-breadcrumb a:hover { color: var(--teal); }
      .ba-svc-breadcrumb span { color: var(--text); }

      .ba-svc-hero h1 {
        font-size: clamp(38px, 5vw, 62px);
        font-weight: 700;
        line-height: 1.05;
        margin-bottom: 20px;
      }
      .ba-svc-hero h1 em {
        font-style: normal;
        background: linear-gradient(120deg, var(--teal), var(--indigo));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .ba-svc-hero-lead {
        font-size: 17px;
        color: var(--text-dim);
        line-height: 1.65;
        max-width: 48ch;
        margin-bottom: 32px;
      }
      .ba-svc-hero-stats {
        display: flex;
        gap: 28px;
        flex-wrap: wrap;
      }
      .ba-svc-hero-stat {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .ba-svc-hero-stat strong {
        font-size: 28px;
        font-weight: 700;
        background: linear-gradient(120deg, var(--gold), var(--coral));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .ba-svc-hero-stat span {
        font-size: 12.5px;
        color: var(--text-dim);
        text-transform: uppercase;
        letter-spacing: .06em;
      }

      /* Mosaïque photos hero */
      .ba-svc-mosaic {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 12px;
        height: 420px;
      }
      .ba-svc-mosaic-cell {
        border-radius: 18px;
        overflow: hidden;
        border: 1px solid var(--border);
        position: relative;
        min-height: 0;
        min-width: 0;
        background: #0c1018;
      }
      .ba-svc-mosaic-cell img {
        width: 100%; height: 100%; object-fit: contain; display: block;
        transition: transform .5s ease;
      }
      .ba-svc-mosaic-cell:hover img { transform: scale(1.06); }
      .ba-svc-mosaic-cell::after {
        content: "";
        position: absolute; inset: 0; pointer-events: none;
        background: linear-gradient(135deg, rgba(14,14,14,.08), rgba(14,14,14,.22));
      }

      /* Barre de navigation sticky */
      .ba-svc-sticky-bar {
        position: sticky;
        top: 64px;
        z-index: 40;
        background: rgba(255,255,255,.92);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border);
        border-top: 1px solid var(--border);
        padding: 0 6vw;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .ba-svc-sticky-bar::-webkit-scrollbar { display: none; }
      .ba-svc-sticky-inner {
        display: flex;
        gap: 4px;
        min-width: max-content;
      }
      .ba-svc-tab {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 18px;
        color: var(--text-dim);
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        border-bottom: 2px solid transparent;
        transition: color .2s, border-color .2s, background .2s;
        white-space: nowrap;
      }
      .ba-svc-tab:hover { color: var(--text); background: rgba(10,14,23,.04); }
      .ba-svc-tab.active {
        color: var(--text);
        border-bottom-color: var(--tab-color, var(--teal));
        background: color-mix(in srgb, var(--tab-color, var(--teal)) 8%, transparent);
      }
      .ba-svc-tab-num {
        font-size: 11px;
        opacity: .6;
      }

      /* Grille bento catalogue */
      .ba-svc-bento-section {
        padding: 8vh 6vw;
      }
      .ba-svc-bento-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 24px;
        margin-bottom: 36px;
        flex-wrap: wrap;
      }
      .ba-svc-bento-head h2 {
        font-size: clamp(22px, 3vw, 32px);
        font-weight: 700;
      }
      .ba-svc-bento-head p {
        color: var(--text-dim);
        font-size: 15px;
        max-width: 40ch;
        margin: 0;
      }
      .ba-svc-bento {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 220px);
        gap: 16px;
      }
      .ba-svc-bento-card {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid var(--border);
        text-decoration: none;
        color: var(--text);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 22px;
        transition: transform .3s ease, border-color .3s ease;
      }
      .ba-svc-bento-card:hover {
        transform: translateY(-4px);
        border-color: color-mix(in srgb, var(--bento-color) 55%, transparent);
      }
      .ba-svc-bento-card.wide { grid-column: span 2; }
      .ba-svc-bento-photo {
        position: absolute; inset: 0;
        width: 100%; height: 100%; object-fit: cover;
        transition: transform .5s ease;
      }
      .ba-svc-bento-card:hover .ba-svc-bento-photo { transform: scale(1.05); }
      .ba-svc-bento-card::before {
        content: "";
        position: absolute; inset: 0; z-index: 1;
        background: linear-gradient(0deg, rgba(8,8,8,.92) 0%, rgba(8,8,8,.35) 55%, rgba(8,8,8,.15) 100%);
      }
      .ba-svc-bento-card::after {
        content: "";
        position: absolute; top: 0; left: 0; right: 0; height: 3px;
        background: var(--bento-color);
        z-index: 2;
      }
      .ba-svc-bento-content { position: relative; z-index: 2; }
      .ba-svc-bento-icon {
        width: 40px; height: 40px; border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        background: color-mix(in srgb, var(--bento-color) 25%, rgba(14,14,14,.7));
        border: 1px solid color-mix(in srgb, var(--bento-color) 40%, transparent);
        color: var(--bento-color);
        margin-bottom: 12px;
        padding: 8px;
      }
      .ba-svc-bento-icon img { width: 100%; height: 100%; object-fit: contain; display: block; }
      .ba-svc-tab-icon { width: 15px; height: 15px; object-fit: contain; display: block; }
      .ba-svc-bento-content h3 { font-size: 17px; font-weight: 600; margin-bottom: 4px; color: #ffffff; }
      .ba-svc-bento-content p { font-size: 12.5px; color: rgba(255,255,255,.76); margin: 0; line-height: 1.4; }

      /* Sections détaillées — style magazine */
      .ba-svc-catalog {
        padding: 0 6vw 8vh;
      }
      .ba-svc-block {
        scroll-margin-top: 120px;
        margin-bottom: 72px;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid var(--border);
        background: var(--bg-elevated);
      }
      .ba-svc-block-banner {
        position: relative;
        height: clamp(200px, 28vw, 320px);
        overflow: hidden;
      }
      .ba-svc-block-banner img {
        width: 100%; height: 100%; object-fit: cover; display: block;
      }
      .ba-svc-block-banner::after {
        content: "";
        position: absolute; inset: 0;
        background: linear-gradient(90deg, rgba(8,8,8,.88) 0%, rgba(8,8,8,.55) 50%, rgba(8,8,8,.25) 100%);
      }
      .ba-svc-block-banner-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 32px 36px;
        z-index: 1;
      }
      .ba-svc-block-num {
        font-size: 12px;
        letter-spacing: .12em;
        color: var(--block-color);
        margin-bottom: 8px;
      }
      .ba-svc-block-banner-content h3 {
        font-size: clamp(24px, 3.5vw, 36px);
        font-weight: 700;
        margin-bottom: 6px;
        color: #ffffff;
      }
      .ba-svc-block-banner-content p {
        color: rgba(255,255,255,.78);
        font-size: 15px;
        max-width: 52ch;
        margin: 0;
      }

      .ba-svc-block-body {
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 0;
      }
      .ba-svc-block-aside {
        padding: 36px;
        border-right: 1px solid var(--border);
        background: linear-gradient(180deg, rgba(10,14,23,.03), transparent);
      }
      .ba-svc-block-aside p {
        color: var(--text-dim);
        font-size: 15px;
        line-height: 1.7;
        margin: 0 0 24px;
      }
      .ba-svc-block-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .ba-svc-block-tag {
        font-size: 11.5px;
        padding: 6px 12px;
        border-radius: 999px;
        border: 1px solid color-mix(in srgb, var(--block-color) 40%, transparent);
        background: color-mix(in srgb, var(--block-color) 12%, transparent);
        color: var(--text);
      }

      .ba-svc-block-grid {
        padding: 36px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        align-content: start;
      }
      .ba-svc-feature {
        padding: 18px;
        border-radius: 14px;
        border: 1px solid var(--border);
        background: var(--bg-elevated-2);
        transition: border-color .25s ease, transform .25s ease;
      }
      .ba-svc-feature:hover {
        border-color: color-mix(in srgb, var(--block-color) 45%, transparent);
        transform: translateY(-2px);
      }
      .ba-svc-feature strong {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--text);
        margin-bottom: 6px;
      }
      .ba-svc-feature strong::before {
        content: "";
        width: 6px; height: 6px;
        border-radius: 50%;
        background: var(--block-color);
        flex-shrink: 0;
      }
      .ba-svc-feature span {
        display: block;
        font-size: 13px;
        color: var(--text-dim);
        line-height: 1.55;
      }

      /* Spotlight partenaire (Odoo, Microsoft…) au sein d'un bloc service */
      .ba-svc-partner-spot {
        margin: 0 36px 32px;
        padding: 28px;
        border-radius: 18px;
        border: 1px solid var(--border);
        background: linear-gradient(160deg, rgba(10,14,23,.035), transparent);
        scroll-margin-top: 120px;
      }
      .ba-svc-partner-spot-head {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 20px;
      }
      .ba-svc-partner-logo {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 14px;
        background: #fff;
        padding: 10px;
      }
      .ba-svc-partner-logo img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        display: block;
      }
      .ba-svc-partner-tag {
        display: block;
        font-size: 11px;
        letter-spacing: .1em;
        color: var(--block-color);
        margin-bottom: 6px;
      }
      .ba-svc-partner-spot-head h4 {
        font-size: 19px;
        font-weight: 700;
        margin: 0;
      }
      .ba-svc-partner-spot-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
      }
      .ba-svc-partner-spot-body p {
        color: var(--text-dim);
        font-size: 14.5px;
        line-height: 1.65;
        margin: 0 0 16px;
      }
      .ba-svc-partner-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .ba-svc-partner-list li {
        display: flex;
        gap: 9px;
        align-items: baseline;
        font-size: 13.5px;
        color: var(--text);
        line-height: 1.5;
      }
      .ba-svc-partner-list li::before {
        content: '';
        width: 6px;
        height: 6px;
        margin-top: 6px;
        border-radius: 50%;
        background: var(--block-color);
        flex-shrink: 0;
      }
      @media (max-width: 720px) {
        .ba-svc-partner-spot { margin: 0 20px 24px; }
        .ba-svc-partner-spot-body { grid-template-columns: 1fr; }
      }

      /* Bandeau contact split — différent du CTA accueil */
      .ba-svc-contact {
        margin: 0 6vw 10vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid var(--border);
        min-height: 320px;
      }
      .ba-svc-contact-visual {
        position: relative;
        min-height: 280px;
      }
      .ba-svc-contact-visual img {
        width: 100%; height: 100%; object-fit: cover; display: block;
      }
      .ba-svc-contact-visual::after {
        content: "";
        position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(210,210,210,.25), rgba(180,180,180,.15));
      }
      .ba-svc-contact-body {
        padding: 48px 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: var(--bg-elevated);
      }
      .ba-svc-contact-body h2 {
        font-size: clamp(22px, 2.8vw, 30px);
        margin-bottom: 14px;
      }
      .ba-svc-contact-body p {
        color: var(--text-dim);
        font-size: 15px;
        line-height: 1.6;
        margin: 0 0 28px;
        max-width: 38ch;
      }
      .ba-svc-contact-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      @media (max-width: 960px) {
        .ba-svc-hero {
          grid-template-columns: 1fr;
          min-height: auto;
          padding-top: 10vh;
        }
        .ba-svc-mosaic { height: 300px; }
        .ba-svc-bento {
          grid-template-columns: 1fr;
          grid-template-rows: auto;
        }
        .ba-svc-bento-card.wide { grid-column: span 1; }
        .ba-svc-bento-card { min-height: 180px; }
        .ba-svc-block-body { grid-template-columns: 1fr; }
        .ba-svc-block-aside { border-right: none; border-bottom: 1px solid var(--border); }
        .ba-svc-block-grid { grid-template-columns: 1fr; }
        .ba-svc-contact { grid-template-columns: 1fr; }
        .ba-svc-contact-visual { min-height: 200px; }
      }
    `}</style>
  );
}
