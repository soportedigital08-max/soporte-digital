import Link from "next/link";

// Link fijo "Volver a Soporte Digital" para los mockups de Studio.
// Se muestra arriba a la izquierda, siempre visible (z-50).
export default function VolverSD() {
  return (
    <Link
      href="https://soportedigital.com.ar"
      className="fixed top-3 left-3 z-[60] inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur px-4 py-2 text-sm font-medium text-white hover:bg-black/90 transition-colors"
    >
      <span aria-hidden="true">←</span> Volver a Soporte Digital
    </Link>
  );
}
