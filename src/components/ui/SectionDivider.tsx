// Separador premium entre secciones (Fase B — continuidad visual).
// Una línea fina con glow de acento que evita el "corte" entre bloques de color.
// Opcional: halo/glow superior para dar profundidad.
export default function SectionDivider({
  glow = true,
}: {
  glow?: boolean;
}) {
  return (
    <div className="relative" aria-hidden>
      {glow && (
        // Halo superior suave para dar profundidad en la unión de secciones.
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-primary-500/10 to-transparent" />
      )}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
    </div>
  );
}
