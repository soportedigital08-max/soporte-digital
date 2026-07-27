"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { useState } from "react";

// Navegación principal — 03-ARQUITECTURA.md 8. NAVEGACIÓN
const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Conocimiento", href: "/conocimiento" },
  { label: "Tienda", href: "/tienda/no-caigas" },
  { label: "Studio", href: "/studio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        {/* Menú escritorio */}
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

        <div className="hidden md:block">
          <Button href="/contacto" variant="primary">
            Solicitar soporte
          </Button>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-input text-primary-900"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="container flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-body text-gray-700 hover:text-primary-700 py-3 border-b border-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="py-3">
              <Button href="/contacto" variant="primary" className="w-full">
                Solicitar soporte
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
