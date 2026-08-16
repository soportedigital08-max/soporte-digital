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
// Nota: se evalúa en el navegador (timezone del usuario convertido a AR) para
// evitar divergencias de SSR/hidratación. Antes de montar, mostramos estado
// neutral para no parpadear contenido distinto al del servidor.

const TZ = "America/Argentina/Buenos_Aires";

type EstadoDisponibilidad = "online" | "offline";

function calcularEstado(): EstadoDisponibilidad {
  // Hora actual en Argentina como objetos legibles.
  const fmt = new Intl.DateTimeFormat("es-AR", {
    timeZone: TZ,
    weekday: "short", // "lun", "sáb", "dom"...
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const partes = fmt.formatToParts(new Date());
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? "";
  const dia = get("weekday").toLowerCase(); // ej: "lun"
  const hora = Number(get("hour"));
  const minuto = Number(get("minute"));
  const minutos = hora * 60 + minuto;

  const dentroDe = (desde: number, hasta: number) =>
    minutos >= desde && minutos < hasta;

  if (dia === "sáb") {
    return dentroDe(9 * 60, 14 * 60) ? "online" : "offline";
  }
  // lun–vie (excluye dom)
  if (dia !== "dom") {
    return dentroDe(9 * 60, 17 * 60) ? "online" : "offline";
  }
  return "offline";
}

export default function DisponibilidadBadge({
  className = "",
}: {
  className?: string;
}) {
  // null = aún no montado (evita mismatch de hidratación)
  const [estado, setEstado] = useState<EstadoDisponibilidad | null>(null);

  useEffect(() => {
    const actualizar = () => setEstado(calcularEstado());
    actualizar();
    // Reevalúa cada minuto por si cambia el estado mientras la página está abierta.
    const id = setInterval(actualizar, 60_000);
    return () => clearInterval(id);
  }, []);

  const online = estado === "online";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-small font-medium ${className} ${
        estado === null
          ? "border-white/15 bg-white/5 text-primary-200"
          : online
            ? "border-green-400/40 bg-green-500/10 text-green-300"
            : "border-amber-400/30 bg-amber-500/10 text-amber-300"
      }`}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        {online && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            estado === null
              ? "bg-gray-400"
              : online
                ? "bg-green-400"
                : "bg-amber-400"
          }`}
        />
      </span>
      {estado === null
        ? "Horario de atención"
        : online
          ? "En línea ahora"
          : "Fuera de horario — escribinos por WhatsApp"}
    </span>
  );
}
