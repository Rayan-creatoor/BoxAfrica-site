import React from "react";
import { BOXAFRICA_BOX, CONTACT_EMAIL, mailtoHref } from "../data/content.js";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Box.Africa — erreur applicative interceptée :", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div style={styles.page}>
        <style>{`
          @keyframes ba-fb-spin { to { transform: rotate(360deg); } }
          .ba-fb-btn:hover { transform: translateY(-2px); }
        `}</style>
        <img
          src={BOXAFRICA_BOX}
          alt=""
          style={{ ...styles.box, animation: "ba-fb-spin 2.4s linear infinite" }}
        />
        <span style={styles.eyebrow}>Erreur inattendue</span>
        <h1 style={styles.title}>Quelque chose s'est mal passé</h1>
        <p style={styles.text}>
          Cette page a rencontré une erreur inattendue et n'a pas pu s'afficher correctement.
          Vous pouvez réessayer, revenir à l'accueil, ou nous signaler le problème directement.
        </p>
        <div style={styles.ctas}>
          <button className="ba-fb-btn" style={styles.btnPrimary} onClick={() => window.location.reload()}>
            Réessayer
          </button>
          <a className="ba-fb-btn" style={styles.btnSecondary} href="/">
            Retour à l'accueil
          </a>
          <a
            className="ba-fb-btn"
            style={styles.btnSecondary}
            href={mailtoHref()}
          >
            Nous signaler le problème
          </a>
        </div>
        <span style={styles.note}>{CONTACT_EMAIL}</span>
      </div>
    );
  }
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    padding: "10vh 6vw",
    textAlign: "center",
    background: "#ffffff",
    color: "#12141a",
    fontFamily: "'Century Gothic', 'Jost', system-ui, sans-serif",
  },
  box: {
    width: 64,
    height: 64,
    objectFit: "contain",
    filter: "drop-shadow(0 0 20px rgba(47,95,214,.25))",
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#2f5fd6",
  },
  title: {
    fontSize: "clamp(24px, 3.4vw, 36px)",
    fontWeight: 700,
    margin: 0,
  },
  text: {
    color: "#5b6270",
    fontSize: 15,
    lineHeight: 1.6,
    maxWidth: "52ch",
    margin: 0,
  },
  ctas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 8,
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "linear-gradient(135deg, #3f6fe0, #7fa8ff)",
    color: "#000000",
    padding: "12px 22px",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 14.5,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform .2s ease",
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "transparent",
    border: "1px solid rgba(10,14,23,0.16)",
    color: "#12141a",
    padding: "12px 20px",
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 14.5,
    textDecoration: "none",
    transition: "transform .2s ease",
  },
  note: {
    color: "#5b6270",
    fontSize: 12.5,
    marginTop: 4,
  },
};
