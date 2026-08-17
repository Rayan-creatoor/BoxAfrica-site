export default function BlogStyles() {
  return (
    <style>{`
      /* ===== Blog — liste d'articles ===== */

      .ba-blog-hero {
        padding: 16vh 6vw 6vh;
        max-width: 760px;
        margin: 0 auto;
        text-align: center;
      }
      .ba-blog-hero .ba-eyebrow { justify-content: center; }
      .ba-blog-hero h1 {
        font-size: clamp(32px, 4.4vw, 52px);
        font-weight: 700;
        line-height: 1.08;
        margin: 14px 0 18px;
      }
      .ba-blog-hero-lead {
        font-size: 16.5px;
        color: var(--text-dim);
        line-height: 1.65;
        max-width: 56ch;
        margin: 0 auto;
      }

      .ba-blog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
      }
      .ba-blog-card {
        background: var(--bg-elevated);
        border: 1px solid var(--border);
        border-radius: 20px;
        overflow: hidden;
        transition: transform .3s ease, border-color .3s ease;
      }
      .ba-blog-card:hover {
        transform: translateY(-5px);
        border-color: color-mix(in srgb, var(--blue) 45%, transparent);
      }
      .ba-blog-card-photo {
        position: relative;
        height: 190px;
        overflow: hidden;
      }
      .ba-blog-card-photo img {
        width: 100%; height: 100%; object-fit: cover; display: block;
        transition: transform .5s ease;
      }
      .ba-blog-card:hover .ba-blog-card-photo img { transform: scale(1.06); }
      .ba-blog-card-tag {
        position: absolute; top: 14px; left: 14px;
        background: rgba(10,14,23,.72); backdrop-filter: blur(4px);
        color: #ffffff; font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
        padding: 6px 12px; border-radius: 999px;
      }
      .ba-blog-card-body { padding: 22px; }
      .ba-blog-card-meta {
        display: flex; gap: 16px; margin-bottom: 12px;
      }
      .ba-blog-card-meta span {
        display: inline-flex; align-items: center; gap: 5px;
        font-size: 12px; color: var(--text-dim);
      }
      .ba-blog-card h3 {
        font-size: 17.5px; font-weight: 700; line-height: 1.35; margin-bottom: 10px;
      }
      .ba-blog-card p {
        font-size: 13.5px; color: var(--text-dim); line-height: 1.6; margin: 0;
      }
      .ba-blog-card-source {
        display: inline-flex; align-items: center; gap: 5px;
        font-size: 11.5px; font-weight: 600; color: var(--blue); text-decoration: none;
        margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border);
        line-height: 1.4;
      }
      .ba-blog-card-source:hover { color: var(--indigo); }

      .ba-blog-soon {
        margin-top: 44px; padding: 22px 28px; border-radius: 16px;
        background: var(--bg-elevated); border: 1px dashed var(--border);
        text-align: center;
      }
      .ba-blog-soon p {
        margin: 0; color: var(--text-dim); font-size: 14px; line-height: 1.6;
      }

      @media (max-width: 960px) {
        .ba-blog-grid { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 640px) {
        .ba-blog-grid { grid-template-columns: 1fr; }
        .ba-blog-hero { padding-top: 12vh; }
      }
    `}</style>
  );
}
