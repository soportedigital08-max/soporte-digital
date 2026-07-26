// src/components/sections/TiendaNoCaigas.tsx
// Client component: flujo Nivel 1 (entrega por link, sin backend).
// Estilo coherente con el design system de Soporte Digital.
"use client";

import { useState } from "react";
import Link from "next/link";

// PEGAR AQUI LA URL DEL LINK DE PAGO DE MERCADO PAGO
const MP_PAY_URL = "https://mpago.la/1mnowGY";
// Ruta del PDF en /public (ofuscada)
const PDF_URL = "/descargas/no-caigas-7f3a9b.pdf";
// Portada
const PORTADA = "/descargas/portada-no-caigas.png";

const BENEFICIOS = [
  "Las señales de alerta que usan casi todas las estafas.",
  "Cómo funciona el engaño de los sistemas automáticos de operaciones.",
  "Riesgos en cripto y promesas de rendimiento que no son reales.",
  "Qué hacer si te roban la cuenta de mensajería y piden plata a tus contactos.",
  "Checklist antes de pagar: 5 preguntas que te salvan.",
  "Qué hacer si ya diste datos o plata.",
];

export default function TiendaNoCaigas() {
  const [paso, setPaso] = useState<"pago" | "entrega">("pago");
  const [medio, setMedio] = useState<"email" | "whatsapp" | "">("");
  const [destino, setDestino] = useState("");

  function armarEnlace() {
    const base = typeof window !== "undefined" ? window.location.origin : "";
    if (medio === "email" && destino.includes("@")) {
      const body = encodeURIComponent(
        "Gracias por tu compra. Descargá tu guía NO CAIGAS aquí: " + base + PDF_URL
      );
      window.open(
        `mailto:${destino}?subject=${encodeURIComponent(
          "Tu guía NO CAIGAS"
        )}&body=${body}`,
        "_blank"
      );
    } else if (medio === "whatsapp" && destino.replace(/\D/g, "").length >= 8) {
      const tel = destino.replace(/\D/g, "");
      const txt = encodeURIComponent(
        "Gracias por tu compra. Descargá tu guía NO CAIGAS aquí: " + base + PDF_URL
      );
      window.open(`https://wa.me/${tel}?text=${txt}`, "_blank");
    }
  }

  return (
    <main className="min-h-screen bg-ink-900 text-white">
      {/* Header tipo PageHeader del sitio */}
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
          <h1 className="text-h1 font-extrabold leading-[1.05]">NO CAIGAS</h1>
          <p className="text-body-lg text-primary-100 mt-4">
            Guía práctica para no ser estafado en internet. Corta, clara, para
            cualquiera.
          </p>
        </div>
      </section>

      <div className="container max-w-4xl mx-auto pb-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Portada */}
          <div className="rounded-card overflow-hidden border border-white/10 shadow-premium">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PORTADA}
              alt="Portada NO CAIGAS"
              className="w-full h-auto"
            />
          </div>

          {/* Panel de compra */}
          <div className="flex flex-col">
            <div className="rounded-card border border-white/10 bg-ink-800 p-6 shadow-premium">
              <div className="text-h4 text-white font-bold mb-1">
                Guía anti-estafa
              </div>
              <div className="text-3xl font-extrabold text-accent mb-4">
                $1.998{" "}
                <span className="text-base font-normal text-gray-400">
                  ARS
                </span>
              </div>

              {paso === "pago" ? (
                <>
                  <a
                    href={MP_PAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setPaso("entrega")}
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-input text-body font-medium bg-primary-700 text-white hover:bg-primary-900 transition-colors"
                  >
                    Comprar $1.998
                  </a>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Pago seguro con Mercado Pago. Tras pagar, elegís dónde recibir
                    el PDF al instante.
                  </p>
                </>
              ) : (
                <div className="mt-2">
                  <h3 className="text-h4 text-white mb-1">
                    ¿Dónde querés recibir tu PDF?
                  </h3>
                  <div className="flex gap-3 my-3">
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
                    <>
                      <input
                        type={medio === "email" ? "email" : "tel"}
                        placeholder={
                          medio === "email" ? "tu@email.com" : "11 2345 6789"
                        }
                        value={destino}
                        onChange={(e) => setDestino(e.target.value)}
                        className="w-full px-4 py-3 rounded-input bg-ink-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                      />
                      <button
                        onClick={armarEnlace}
                        className="mt-3 w-full px-6 py-3 rounded-input bg-accent text-ink-900 font-bold hover:opacity-90 transition-opacity"
                      >
                        Recibir mi guía
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Beneficios */}
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
