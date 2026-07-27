// src/components/sections/TiendaBackup.tsx
// Client component: flujo Nivel 1 (entrega por link, sin backend).
// Orden claro: elegís medio -> pagás -> volvés y recibís.
"use client";

import { useState } from "react";
import Link from "next/link";

const MP_PAY_URL = "https://mpago.la/1mnowGY";
const PDF_URL = "/descargas/backup-que-si-funciona.pdf";
const PORTADA = "/descargas/portada-backup.png";

const BENEFICIOS = [
  "Por qué se pierden los archivos y cómo evitarlo.",
  "La regla 3-2-1 explicada paso a paso.",
  "Qué guardar sí o sí (fotos, documentos, trabajos).",
  "Disco externo, nube y automatización: opciones reales.",
  "Cómo saber si tu backup realmente funciona.",
  "Qué hacer si ya perdiste archivos.",
];

export default function TiendaBackup() {
  const [medio, setMedio] = useState<"email" | "whatsapp" | "">("");
  const [destino, setDestino] = useState("");
  const [pagado, setPagado] = useState(false);

  function armarEnlace() {
    const base = typeof window !== "undefined" ? window.location.origin : "";
    if (medio === "email" && destino.includes("@")) {
      const body = encodeURIComponent(
        "Gracias por tu compra. Descargá tu guía BACKUP QUE SÍ FUNCIONA aquí: " + base + PDF_URL
      );
      window.open(
        `mailto:${destino}?subject=${encodeURIComponent(
          "Tu guía BACKUP QUE SÍ FUNCIONA"
        )}&body=${body}`,
        "_blank"
      );
    } else if (medio === "whatsapp" && destino.replace(/\D/g, "").length >= 8) {
      const tel = destino.replace(/\D/g, "");
      const txt = encodeURIComponent(
        "Gracias por tu compra. Descargá tu guía BACKUP QUE SÍ FUNCIONA aquí: " + base + PDF_URL
      );
      window.open(`https://wa.me/${tel}?text=${txt}`, "_blank");
    }
  }

  return (
    <main className="min-h-screen bg-ink-900 text-white">
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-600/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative pt-16 pb-8 text-center max-w-4xl mx-auto">
          <p className="text-sm text-accent uppercase tracking-wide mb-3">
            Seguridad Digital · Soporte Digital
          </p>
          <h1 className="text-h1 font-extrabold leading-[1.05]">
            BACKUP QUE SÍ FUNCIONA
          </h1>
          <p className="text-body-lg text-primary-100 mt-4">
            Cómo evitar perder todo en un segundo. Guía práctica, clara y para
            cualquiera.
          </p>
        </div>
      </section>

      <div className="container max-w-4xl mx-auto pb-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-card overflow-hidden border border-white/10 shadow-premium">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PORTADA}
              alt="Portada BACKUP QUE SÍ FUNCIONA"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col">
            <div className="rounded-card border border-white/10 bg-ink-800 p-6 shadow-premium">
              <div className="text-h4 text-white font-bold mb-1">
                Guía de respaldo digital
              </div>
              <div className="text-3xl font-extrabold text-accent mb-4">
                $1.998{" "}
                <span className="text-base font-normal text-gray-400">ARS</span>
              </div>

              {/* Paso 1: elegir medio */}
              <h3 className="text-body font-semibold text-white mb-2">
                1. ¿Dónde querés recibir el PDF?
              </h3>
              <div className="flex gap-3 mb-3">
                <button
                  onClick={() => setMedio("email")}
                  className={`flex-1 px-4 py-2 rounded-input border text-body font-medium transition-colors ${
                    medio === "email"
                      ? "border-accent bg-white/[0.06] text-white"
                      : "border-white/10 text-gray-300 hover:border-white/30"
                  }`}
                >
                  Email
                </button>
                <button
                  onClick={() => setMedio("whatsapp")}
                  className={`flex-1 px-4 py-2 rounded-input border text-body font-medium transition-colors ${
                    medio === "whatsapp"
                      ? "border-accent bg-white/[0.06] text-white"
                      : "border-white/10 text-gray-300 hover:border-white/30"
                  }`}
                >
                  WhatsApp
                </button>
              </div>

              {medio && (
                <input
                  type={medio === "email" ? "email" : "tel"}
                  placeholder={
                    medio === "email" ? "tu@email.com" : "11 2345 6789"
                  }
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  className="w-full px-4 py-3 rounded-input bg-ink-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent mb-4"
                />
              )}

              {/* Paso 2: pagar */}
              <h3 className="text-body font-semibold text-white mb-2">
                2. Pagá de forma segura
              </h3>
              <a
                href={MP_PAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setPagado(true)}
                className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-input text-body font-medium bg-primary-700 text-white hover:bg-primary-900 transition-colors ${
                  !medio || !destino ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                Pagar $1.998 con Mercado Pago
              </a>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Se abre en una pestaña nueva. Pagá y volvé a ESTA pestaña para
                recibir tu guía.
              </p>

              {/* Paso 3: recibir */}
              {pagado && medio && destino && (
                <div className="mt-4 rounded-input border border-accent/40 bg-accent/10 p-4">
                  <p className="text-body text-white mb-2">
                    ¡Gracias por tu compra! Toque para recibir tu guía:
                  </p>
                  <button
                    onClick={armarEnlace}
                    className="w-full px-6 py-3 rounded-input bg-accent text-ink-900 font-bold hover:opacity-90 transition-opacity"
                  >
                    Recibir mi guía por {medio === "email" ? "Email" : "WhatsApp"}
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-card border border-white/10 bg-ink-800 p-6">
              <h3 className="text-h4 text-white mb-3">Qué incluye</h3>
              <ul className="space-y-2">
                {BENEFICIOS.map((b, i) => (
                  <li key={i} className="flex gap-2 text-body text-primary-100">
                    <span className="text-accent mt-0.5">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-accent underline-offset-4 hover:underline text-body"
          >
            ← Volver a Soporte Digital
          </Link>
        </div>
      </div>
    </main>
  );
}
