"use client";

import { useEffect, useState } from "react";

// Líneas del escaneo. Cada línea se "escribe" con un retardo.
const LINES: string[] = [
  "$ scan --equipo pc-01",
  "✓ CPU ok · RAM 16GB",
  "✓ disco SSD 512GB",
  "! 14 procesos innecesarios",
  "! WiFi: señal 62% (punto muerto)",
  "$ fix --optimizar --red",
  "✓ equipo optimizado en 18 min",
];

// Terminal simulada con efecto de tipeo (sin dependencias).
export default function Terminal() {
  const [visible, setVisible] = useState<string[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let line = 0;
    let char = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (line >= LINES.length) return;
      const current = LINES[line];
      if (char < current.length) {
        setTyping(current.slice(0, char + 1));
        char++;
        timer = setTimeout(tick, 22);
      } else {
        setVisible((v) => [...v, current]);
        setTyping("");
        line++;
        char = 0;
        timer = setTimeout(tick, 420);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-card border border-white/10 bg-white/5 p-5 shadow-premium backdrop-blur-md">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-2 text-small text-primary-200">
          soporte-digital ~ diagnóstico
        </span>
      </div>
      <pre className="text-small leading-relaxed text-primary-100 font-mono min-h-[11rem]">
        {visible.map((ln, i) => (
          <span key={i}>
            {ln.includes("✓") ? (
              <span className="text-green-300">{ln}</span>
            ) : ln.includes("!") ? (
              <span className="text-yellow-300">{ln}</span>
            ) : (
              <span>
                <span className="text-primary-300">$</span> {ln.replace("$ ", "")}
              </span>
            )}
            {"\n"}
          </span>
        ))}
        {typing && (
          <span>
            <span className="text-primary-300">$ </span>
            {typing.replace("$ ", "")}
            <span className="inline-block w-2 h-4 bg-primary-300 animate-pulse align-middle" />
          </span>
        )}
      </pre>
    </div>
  );
}
