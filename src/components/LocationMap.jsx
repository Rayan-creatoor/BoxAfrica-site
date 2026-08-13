import { ArrowUpRight } from "lucide-react";
import { COMPANY_ADDRESS, THEME_ICONS } from "../data/content.js";

const MAP_QUERY = "Box Africa, Ouagadougou, Burkina Faso";
const ENCODED_QUERY = encodeURIComponent(MAP_QUERY);

export default function LocationMap() {
  return (
    <section className="ba-section ba-location" id="localisation">
      <div className="ba-section-head" data-reveal>
        <span className="ba-eyebrow ba-mono">
          <span className="ba-eyebrow-icon">
            <img src={THEME_ICONS.location} alt="" loading="lazy" />
          </span>
          Nous trouver
        </span>
        <h2>Notre bureau à Ouagadougou</h2>
        <p className="ba-section-sub">{COMPANY_ADDRESS.join(", ")}</p>
      </div>
      <div className="ba-location-body" data-reveal>
        <div className="ba-location-map">
          <iframe
            title="Localisation Box.Africa — Ouagadougou, Burkina Faso"
            src={`https://maps.google.com/maps?q=${ENCODED_QUERY}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          className="ba-btn-secondary ba-location-link"
          href={`https://www.google.com/maps/search/?api=1&query=${ENCODED_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Itinéraire sur Google Maps <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
