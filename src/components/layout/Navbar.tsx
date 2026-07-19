import Link from "next/link";
import Button from "@/components/ui/Button";

// Navegación principal — 03-ARQUITECTURA.md 8. NAVEGACIÓN
const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Conocimiento", href: "/conocimiento" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-sd.png"
            alt="Soporte Digital"
            width={36}
            height={36}
            className="h-9 w-auto"
          />
          <span className="text-h4 font-semibold text-primary-900 group-hover:text-primary-700 transition-colors">
            Soporte Digital
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body text-gray-700 hover:text-primary-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/contacto" variant="primary">
          Solicitar soporte
        </Button>
      </div>
    </header>
  );
}
