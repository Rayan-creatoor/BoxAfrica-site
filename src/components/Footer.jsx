import { Link } from "react-router-dom";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import Logo from "./Logo.jsx";
import {
  CONTACT_EMAIL,
  COMPANY_PHONE,
  COMPANY_PHONE_HREF,
  COMPANY_ADDRESS,
  LINKEDIN_URL,
  WHATSAPP_ICON,
  BUSINESS_HOURS,
  mailtoHref,
  whatsappHref,
  SERVICES,
} from "../data/content.js";

const DISCOVER_LINKS = [
  { to: "/academy", label: "BoxAcademy" },
  { to: "/proxy", label: "Proxy" },
  { to: "/#secteurs", label: "Nos partenaires" },
  { to: "/#equipe", label: "Équipe" },
];

export default function Footer() {
  return (
    <footer className="ba-footer">
      <div className="ba-footer-top">
        <div className="ba-footer-col ba-footer-col-address">
          <span className="ba-footer-col-title">Notre adresse</span>
          <div className="ba-footer-address">
            {COMPANY_ADDRESS.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        <div className="ba-footer-col">
          <span className="ba-footer-col-title">Nos contacts</span>
          <div className="ba-footer-contact">
            <a className="ba-footer-contact-line" href={COMPANY_PHONE_HREF}>
              <Phone size={14} /> {COMPANY_PHONE}
            </a>
            <a className="ba-footer-contact-line" href={mailtoHref()}>
              <Mail size={14} /> {CONTACT_EMAIL}
            </a>
            <span className="ba-footer-contact-line ba-footer-contact-static">
              <Clock size={14} /> Lun–Ven 08h00–17h30
            </span>
          </div>
          <div className="ba-footer-cta-row">
            <a href={mailtoHref()} className="ba-footer-cta">
              Nous contacter <ArrowUpRight size={14} />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="ba-footer-cta ba-footer-cta-whatsapp"
            >
              <img src={WHATSAPP_ICON} alt="" loading="lazy" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="ba-footer-col">
          <span className="ba-footer-col-title">Nos services</span>
          <div className="ba-footer-links">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services#${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="ba-footer-col">
          <span className="ba-footer-col-title">Découvrir</span>
          <div className="ba-footer-links">
            {DISCOVER_LINKS.map((l) => (
              <Link key={l.label} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="ba-footer-col ba-footer-col-social">
          <span className="ba-footer-col-title">Suivez-nous</span>
          <div className="ba-footer-social">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ba-footer-social-icon"
              aria-label="Box.Africa sur LinkedIn"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt=""
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="ba-footer-hours-strip">
        {BUSINESS_HOURS.map((h) => (
          <span key={h.day} className="ba-footer-hours-item">
            <strong>{h.day.slice(0, 3)}</strong> {h.open ? `${h.open}–${h.close}` : "Fermé"}
          </span>
        ))}
      </div>

      <div className="ba-footer-bottom">
        <Link to="/" className="ba-brand" aria-label="Box.Africa">
          <Logo />
          <span className="ba-brand-tagline">Burkina Faso</span>
        </Link>
        <span className="ba-footer-note">
          © {new Date().getFullYear()} Box.Africa — Transformer l'Afrique par l'IT
        </span>
      </div>
    </footer>
  );
}
