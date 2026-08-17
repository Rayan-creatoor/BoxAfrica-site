import { useEffect } from "react";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import BoxAfricaStyles, { ctaBandStyle } from "../components/BoxAfricaStyles.jsx";
import BlogStyles from "../components/BlogStyles.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import LocationMap from "../components/LocationMap.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { BOXAFRICA_BOX, mailtoHref, TECH_PHOTOS } from "../data/content.js";
import { BLOG_POSTS } from "../data/blog.js";

export default function Blog() {
  useReveal([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ba-root">
      <BoxAfricaStyles />
      <BlogStyles />
      <Nav />

      <header className="ba-blog-hero" data-reveal>
        <span className="ba-eyebrow ba-mono">Blog Box.Africa</span>
        <h1>Actualités &amp; ressources IT</h1>
        <p className="ba-blog-hero-lead">
          Analyses, retours d'expérience et actualités de Box.Africa sur le développement logiciel, le
          cloud, la cybersécurité et la formation IT en Afrique de l'Ouest.
        </p>
      </header>

      <section className="ba-section" style={{ paddingTop: 0 }}>
        <div className="ba-blog-grid">
          {BLOG_POSTS.map((post) => (
            <article className="ba-blog-card" key={post.slug} data-reveal>
              <div className="ba-blog-card-photo">
                <img src={post.image} alt="" loading="lazy" />
                <span className="ba-blog-card-tag">{post.category}</span>
              </div>
              <div className="ba-blog-card-body">
                <div className="ba-blog-card-meta">
                  <span>
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span>
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                {post.sourceUrl && (
                  <a
                    className="ba-blog-card-source"
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.sourceLabel} <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="ba-blog-soon" data-reveal>
          <p>
            De nouveaux articles seront publiés régulièrement — revenez bientôt, ou suivez-nous sur
            LinkedIn pour ne rien manquer.
          </p>
        </div>
      </section>

      <div className="ba-cta-band" data-reveal style={ctaBandStyle(TECH_PHOTOS.innovation)}>
        <div className="ba-cta-box">
          <img className="ba-box-animation" src={BOXAFRICA_BOX} alt="" />
          <h2 style={{ marginTop: 18, marginBottom: 30 }}>Une question, un projet ?</h2>
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
