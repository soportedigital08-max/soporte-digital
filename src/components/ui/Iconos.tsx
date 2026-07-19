import type { ReactNode } from "react";

// Íconos SVG inline (sin dependencias) para las áreas de servicio.
// Trazo consistente, currentColor para heredar color.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ICONOS: Record<string, ReactNode> = {
  "soporte-tecnico": (
    <svg {...base}>
      <path d="M9 3v2M15 3v2M7 8h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" />
      <path d="M12 12v3" />
    </svg>
  ),
  "redes-wifi": (
    <svg {...base}>
      <path d="M2 8.5a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  ),
  "desarrollo-web": (
    <svg {...base}>
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />
    </svg>
  ),
  hosting: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 14h2" />
    </svg>
  ),
  "seguridad-camaras": (
    <svg {...base}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  "soporte-remoto": (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
};
