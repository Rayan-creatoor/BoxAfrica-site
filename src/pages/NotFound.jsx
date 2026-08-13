import { Link } from "react-router-dom";
import { ArrowUpRight, Compass } from "lucide-react";
import BoxAfricaStyles from "../components/BoxAfricaStyles.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { BOXAFRICA_BOX, mailtoHref } from "../data/content.js";

export default function NotFound() {
  return (
    <div className="ba-root">
      <BoxAfricaStyles />
      <style>{`
        .ba-404 {
          min-height: 62vh; display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 10vh 6vw; gap: 18px;
        }
        .ba-404-box { width: 76px; height: 76px; object-fit: contain; margin-bottom: 6px;
          filter: drop-shadow(0 0 22px rgba(47,95,214,.22));
          animation: ba-404-float 3.8s ease-in-out infinite;
        }
        @keyframes ba-404-float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .ba-404-code {
          font-weight: 700; font-size: clamp(56px, 10vw, 110px);
          line-height: 1; background: linear-gradient(120deg, var(--gold), var(--coral));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .ba-404 h1 { font-size: clamp(22px, 2.8vw, 30px); margin: 0; }
        .ba-404 p { color: var(--text-dim); max-width: 48ch; margin: 0; font-size: 15px; line-height: 1.6; }
        .ba-404-ctas { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 10px; }
        @media (prefers-reduced-motion: reduce) { .ba-404-box { animation: none; } }
      `}</style>
      <Nav />

      <section className="ba-404">
        <img className="ba-404-box" src={BOXAFRICA_BOX} alt="" />
        <span className="ba-404-code">404</span>
        <h1>Cette page n'existe pas — ou plus.</h1>
        <p>
          La requête n'a pas pu aboutir : l'adresse est peut-être mal orthographiée, ou la page a été
          déplacée. Repartez de l'accueil ou explorez nos services.
        </p>
        <div className="ba-404-ctas">
          <Link to="/" className="ba-btn-primary">
            <Compass size={16} /> Retour à l'accueil
          </Link>
          <Link to="/services" className="ba-btn-secondary">
            Voir nos services
          </Link>
          <a href={mailtoHref()} className="ba-btn-secondary">
            Signaler ce lien <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
