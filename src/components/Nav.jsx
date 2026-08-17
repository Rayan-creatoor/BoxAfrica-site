import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, Clock, ChevronDown } from "lucide-react";
import { mailtoHref, BUSINESS_HOURS, getBusinessStatus } from "../data/content.js";
import Logo from "./Logo.jsx";

const NAV_LINKS = [
  { to: "/", label: "Accueil", match: "/" },
  { to: "/#equipe", label: "Équipe", match: "equipe" },
  { to: "/#secteurs", label: "Nos partenaires", match: "secteurs" },
  { to: "/services", label: "Services", match: "/services" },
  { to: "/academy", label: "Academy", match: "/academy" },
  { to: "/proxy", label: "Proxy", match: "/proxy" },
  { to: "/blog", label: "Blog", match: "/blog" },
];

function HoursBadge() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(() => getBusinessStatus());
  const wrapRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setStatus(getBusinessStatus()), 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="ba-hours" ref={wrapRef}>
      <button
        className="ba-hours-toggle"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Clock size={14} />
        <span className={`ba-hours-dot ${status.open ? "open" : "closed"}`} />
        {status.open ? "Ouvert" : "Fermé"}
        <ChevronDown size={13} className={`ba-hours-chevron ${open ? "up" : ""}`} />
      </button>
      {open && (
        <div className="ba-hours-panel">
          <span className="ba-hours-panel-title">Horaires d'ouverture</span>
          {BUSINESS_HOURS.map((h) => (
            <div className={`ba-hours-row ${h.day === status.today.day ? "today" : ""}`} key={h.day}>
              <span>{h.day}</span>
              <span>{h.open ? `${h.open} – ${h.close}` : "Fermé"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (link) => {
    if (link.match.startsWith("/")) return location.pathname === link.match;
    return location.pathname === "/" && location.hash.includes(link.match);
  };

  const mobileStatus = getBusinessStatus();

  return (
    <>
      <nav className={`ba-nav ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="ba-brand" aria-label="Box.Africa">
          <Logo />
          <span className="ba-brand-tagline">Burkina Faso</span>
        </Link>
        <div className="ba-navlinks">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} to={l.to} className={isActive(l) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </div>
        <HoursBadge />
        <a href={mailtoHref()} className="ba-navcta">
          Nous contacter <ArrowUpRight size={13} />
        </a>
        <button
          className="ba-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          type="button"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div className={`ba-mobile-panel ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <Link key={l.label} to={l.to} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href={mailtoHref()} onClick={() => setMenuOpen(false)}>
          Nous contacter →
        </a>
        <div className="ba-mobile-hours">
          <span className="ba-mobile-hours-title">
            <Clock size={14} />
            Horaires — <span className={status2class(mobileStatus.open)}>{mobileStatus.open ? "Ouvert" : "Fermé"}</span>
          </span>
          {BUSINESS_HOURS.map((h) => (
            <div className={`ba-hours-row ${h.day === mobileStatus.today.day ? "today" : ""}`} key={h.day}>
              <span>{h.day}</span>
              <span>{h.open ? `${h.open} – ${h.close}` : "Fermé"}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function status2class(isOpen) {
  return isOpen ? "ba-hours-status open" : "ba-hours-status closed";
}

export { NAV_LINKS };
