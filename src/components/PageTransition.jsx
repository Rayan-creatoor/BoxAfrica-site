import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BOXAFRICA_BOX } from "../data/content.js";

const VISIBLE_MS = 3000;

export default function PageTransition() {
  const location = useLocation();
  const [active, setActive] = useState(true);
  const isFirstRender = useRef(true);
  const hideTimer = useRef(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      hideTimer.current = setTimeout(() => setActive(false), VISIBLE_MS);
      return () => clearTimeout(hideTimer.current);
    }
    setActive(true);
    hideTimer.current = setTimeout(() => setActive(false), VISIBLE_MS);
    return () => clearTimeout(hideTimer.current);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        .ba-transition-overlay {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          background: #000000;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity .4s ease, visibility .4s ease;
        }
        .ba-transition-overlay.active { opacity: 1; visibility: visible; pointer-events: all; }

        .ba-transition-inner {
          display: flex; flex-direction: column; align-items: center; gap: 28px;
        }

        .ba-transition-box {
          width: 64px; height: 64px; object-fit: contain;
          filter: brightness(0) invert(1) drop-shadow(0 0 18px rgba(79,124,255,.55));
        }
        .ba-transition-overlay.active .ba-transition-box {
          animation: ba-transition-float 1.8s ease-in-out infinite;
        }
        @keyframes ba-transition-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .ba-transition-gauge {
          width: 168px; height: 5px; border-radius: 999px;
          background: rgba(255,255,255,.14); overflow: hidden;
        }
        .ba-transition-gauge-fill {
          height: 100%; width: 0%; border-radius: 999px;
          background: linear-gradient(90deg, #2f5fd6, #4f7cff);
        }
        .ba-transition-overlay.active .ba-transition-gauge-fill {
          animation: ba-transition-fill ${VISIBLE_MS}ms linear forwards;
        }
        @keyframes ba-transition-fill {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ba-transition-box, .ba-transition-gauge-fill { animation: none !important; }
          .ba-transition-overlay.active .ba-transition-gauge-fill { width: 100%; }
        }
      `}</style>
      <div className={`ba-transition-overlay ${active ? "active" : ""}`} aria-hidden="true">
        <div className="ba-transition-inner">
          <img className="ba-transition-box" src={BOXAFRICA_BOX} alt="" />
          <div className="ba-transition-gauge">
            <div className="ba-transition-gauge-fill" />
          </div>
        </div>
      </div>
    </>
  );
}
