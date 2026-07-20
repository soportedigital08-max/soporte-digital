"use client";

import { useEffect, useRef, useState } from "react";

// Cuenta desde 0 hasta `end` cuando entra en viewport (counter-up).
// Mejora progresiva: el HTML ya trae el valor FINAL (SSR/sin-JS) y aria-label
// accesible; el efecto solo anima desde 0 como realce visual.
export default function Counter({
  end,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Valor inicial = final (SSR / fallback sin JS).
  const [value, setValue] = useState(end);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          setValue(0); // arranca la animación desde 0
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setValue(Math.round(eased * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  const readable = `${prefix}${end}${suffix}`;
  return (
    <span ref={ref} aria-label={readable}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
