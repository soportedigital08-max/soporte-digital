"use client";

import { useEffect, useState } from "react";

// Indicador de disponibilidad en tiempo real (Fase 1.2).
// Calcula el horario local de Argentina (America/Argentina/Buenos_Aires) en el cliente.
//
// Horario comercial:
//   Lun–Vie: 9:00–17:00
//   Sáb:      9:00–14:00
//   Dom:      cerrado
//
// Variante "compact": punto de estado + texto corto, pensado para el navbar
// (no rompe el layout). Variante "full": texto explicativo, para Contacto/Footer.

const TZ = "America/Argentina/Buenos_Aires";

type EstadoDisponibilidad = "online" | "offline";

function calcularEstado(): EstadoDisponibilidad {
  const fmt = new Intl.DateTimeFormat("es-AR", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const partes = fmt.formatToParts(new Date());
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? "";
  const dia = get("weekday").toLowerCase();
  const hora = Number(get("hour"));
  const minuto = Number(get("minute"));
  const minutos = hora * 60 + minuto;

  const dentroDe = (desde: number, hasta: number) =>
    minutos >= desde && minutos < hasta;

  if (dia === "sáb") return dentroDe(9 * 60, 14 * 60) ? "online" : "offline";
  if (dia !== "dom") return dentroDe(9 * 60, 17 * 60) ? "online" : "offline";
  return "offline";
}

export default function DisponibilidadBadge({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "compact";
  className?: string;
}) {
  // null = aún no montado (evita mismatch de hidratación)
  const [estado, setEstado] = useState<EstadoDisponibilidad | null>(null);

  useEffect(() => {
    const actualizar = () => setEstado(calcularEstado());
    actualizar();
    const id = setInterval(actualizar, 60_000);
    return () => clearInterval(id);
  }, []);

  const online = estado === "online";

  const texto =
    variant === "compact"
      ? online
        ? "En línea"
        : "Fuera de horario"
      : estado === null
        ? "Horario de atención"
        : online
          ? "En línea ahora"
          : "Fuera de horario — escribinos por WhatsApp";

  // En navbar (compacto) usamos texto claro sobre fondo blanco translúcido para
  // no "romper" el diseño claro. En otras secciones (full) respetamos el tema.
  const tema =
    variant === "compact"
      ? estado === null
        ? "border-gray-200 bg-gray-50 text-gray-600"
        : online
          ? "border-green-200 bg-green-50 text-green-700"
          : "border-amber-200 bg-amber-50 text-amber-700"
      : estado === null
        ? "border-white/15 bg-white/5 text-primary-200"
        : online
          ? "border-green-400/40 bg-green-500/10 text-green-300"
          : "border-amber-400/30 bg-amber-500/10 text-amber-300";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-small font-medium ${tema} ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        {online && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            estado === null
              ? "bg-gray-400"
              : online
                ? "bg-green-500"
                : "bg-amber-500"
          }`}
        />
      </span>
      {texto}
    </span>
  );
}
