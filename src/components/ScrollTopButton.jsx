import { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_THRESHOLD = 420;
const RADIUS = 19;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      setVisible(scrollTop > SHOW_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <>
      <style>{`
        .ba-scrolltop {
          position: fixed; left: 22px; bottom: 22px; z-index: 9990;
          width: 46px; height: 46px; border-radius: 50%; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          background: #ffffff; color: #3f6fe0;
          box-shadow: 0 8px 22px rgba(10,14,23,.16);
          opacity: 0; transform: translateY(16px) scale(.85); pointer-events: none;
          transition: opacity .3s ease, transform .3s ease, box-shadow .2s ease;
        }
        .ba-scrolltop.visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }
        .ba-scrolltop:hover { box-shadow: 0 12px 26px rgba(10,14,23,.22); transform: translateY(-3px) scale(1.04); }
        .ba-scrolltop:active { transform: translateY(-1px) scale(.98); }

        .ba-scrolltop-ring { position: absolute; inset: 0; width: 100%; height: 100%; transform: rotate(-90deg); }
        .ba-scrolltop-ring-bg { fill: none; stroke: rgba(10,14,23,.10); stroke-width: 2.4; }
        .ba-scrolltop-ring-fill {
          fill: none; stroke-width: 2.4; stroke-linecap: round;
          transition: stroke-dashoffset .15s linear;
        }
        .ba-scrolltop-icon { position: relative; z-index: 1; }

        @media (max-width: 480px) {
          .ba-scrolltop { left: 14px; bottom: 14px; width: 42px; height: 42px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-scrolltop { transition: opacity .15s linear !important; transform: none !important; }
          .ba-scrolltop:hover, .ba-scrolltop:active { transform: none !important; }
        }
      `}</style>
      <button
        className={`ba-scrolltop ${visible ? "visible" : ""}`}
        onClick={handleClick}
        aria-label="Retourner en haut de la page"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        type="button"
      >
        <svg className="ba-scrolltop-ring" viewBox="0 0 44 44" aria-hidden="true">
          <defs>
            <linearGradient id="ba-scrolltop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3f6fe0" />
              <stop offset="100%" stopColor="#7fa8ff" />
            </linearGradient>
          </defs>
          <circle className="ba-scrolltop-ring-bg" cx="22" cy="22" r={RADIUS} />
          <circle
            className="ba-scrolltop-ring-fill"
            cx="22"
            cy="22"
            r={RADIUS}
            stroke="url(#ba-scrolltop-grad)"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <ArrowUp size={18} className="ba-scrolltop-icon" strokeWidth={2.4} />
      </button>
    </>
  );
}
