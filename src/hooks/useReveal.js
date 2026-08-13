import { useEffect } from "react";

export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, deps);
}
