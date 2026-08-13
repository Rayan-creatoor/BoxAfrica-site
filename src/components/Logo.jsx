// Marque Box.Africa en SVG + texte vectoriel (au lieu d'un PNG figé) : le tracé de
// l'hexagone reprend la géométrie exacte du logo officiel (segments avec interstices à
// chaque sommet + fragments internes qui évoquent l'assemblage), net à toute taille et
// recolorable via currentColor.
const HEX_PATHS = [
  "M35.7 7.2 51.7 16.3",
  "M55.4 22.8V41.2",
  "M51.7 47.7 35.7 56.8",
  "M28.3 56.8 12.4 47.7",
  "M8.6 41.2V22.8",
  "M12.4 16.3 28.3 7.2",
  "M32 36.9V54.7",
  "M27.8 29.6 12.4 20.7",
  "M36.2 29.6 51.6 20.7",
];

// Les 2 segments qui forment le "toit" du cube — teintés en bleu sur la variante academy,
// à l'image du logo officiel BoxAcademy.
const ACCENT_INDEXES = [0, 5];

export default function Logo({ withWordmark = true, className = "", variant = "africa" }) {
  const word = variant === "academy" ? "academy" : "africa";
  return (
    <span className={`ba-logo ${className}`}>
      <svg className="ba-logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        {HEX_PATHS.map((d, i) => (
          <path key={i} d={d} className={variant === "academy" && ACCENT_INDEXES.includes(i) ? "ba-logo-accent" : ""} />
        ))}
      </svg>
      {withWordmark && (
        <span className="ba-logo-word">
          Box<span className="ba-logo-dot">.</span>{word}
        </span>
      )}
    </span>
  );
}
