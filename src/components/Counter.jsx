import React, { useEffect, useState } from "react";

export default function Counter({ target, prefix = "", suffix = "", duration = 1500 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById(`ba-counter-${target}-${prefix}-${suffix}`);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, prefix, suffix, started]);

  useEffect(() => {
    if (!started) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return (
    <span id={`ba-counter-${target}-${prefix}-${suffix}`}>
      {prefix}{value}{suffix}
    </span>
  );
}
