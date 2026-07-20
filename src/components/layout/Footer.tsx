import Link from "next/link";

// Reutiliza los mismos items de navegación principal como navegación secundaria
// (03-ARQUITECTURA.md 8. NAVEGACIÓN)
const SECONDARY_NAV = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Conocimiento", href: "/conocimiento" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

// Datos de contacto reales (definidos 2026-07-18)
const CONTACTO = {
  email: "soportedigital08@gmail.com",
  whatsapp: "5492284520392", // +54 9 2284 520392
  ubicacion: "Olavarría, Buenos Aires — Argentina",
  // Horario: placeholder hasta confirmar dato real de negocio.
  horario: "Lun a Sáb · 9:00–20:00 (horario a confirmar)",
  cobertura: "Olavarría y alrededores + soporte remoto en toda Argentina",
};

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-primary-100">
      <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-sd.png"
              alt="Soporte Digital"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="text-h4 font-semibold text-white">
              Soporte Digital
            </span>
          </div>
          <p className="text-small text-primary-200 mt-3 max-w-xs">
            Tecnología que funciona. Soluciones que perduran.
          </p>
          <p className="text-small text-primary-200 mt-2">{CONTACTO.ubicacion}</p>
        </div>

        {/* Navegación secundaria */}
        <nav className="flex flex-col gap-2">
          {SECONDARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body text-primary-100 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/privacidad"
            className="text-body text-primary-200 hover:text-white transition-colors"
          >
            Política de Privacidad
          </Link>
        </nav>

        {/* Contacto */}
        <div className="flex flex-col gap-2 text-body text-primary-100">
          <span className="font-medium text-white">Contacto</span>
          <a href={`mailto:${CONTACTO.email}`} className="hover:text-white">
            {CONTACTO.email}
          </a>
          <a
            href={`https://wa.me/${CONTACTO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            WhatsApp: +54 9 2284 520392
          </a>
        </div>

        {/* Horario y cobertura */}
        <div className="flex flex-col gap-2 text-body text-primary-100">
          <span className="font-medium text-white">Horario</span>
          <span className="text-small text-primary-200">{CONTACTO.horario}</span>
          <span className="font-medium text-white mt-2">Cobertura</span>
          <span className="text-small text-primary-200">
            {CONTACTO.cobertura}
          </span>
        </div>
      </div>

      {/* Cierre */}
      <div className="border-t border-primary-900">
        <div className="container py-6 text-small text-primary-200">
          © {new Date().getFullYear()} Soporte Digital — Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
