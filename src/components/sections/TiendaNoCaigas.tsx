// src/components/sections/TiendaNoCaigas.tsx
// Client component: flujo Nivel 1 (entrega por link, sin backend).
"use client";

import { useState } from "react";

// PEGAR AQUI LA URL DEL LINK DE PAGO DE MERCADO PAGO
const MP_PAY_URL = "https://mpago.la/1mnowGY";
// Ruta del PDF en /public (ofuscada)
const PDF_URL = "/descargas/no-caigas-7f3a9b.pdf";

export default function TiendaNoCaigas() {
  const [paso, setPaso] = useState<"pago" | "entrega">("pago");
  const [medio, setMedio] = useState<"email" | "whatsapp" | "">("");
  const [destino, setDestino] = useState("");

  function irEntrega() {
    setPaso("entrega");
  }

  function armarEnlace() {
    if (medio === "email" && destino.includes("@")) {
      const body = encodeURIComponent(
        "Gracias por tu compra. Descargá tu guía NO CAIGAS aquí: " +
          location.origin + PDF_URL
      );
      const mailto = `mailto:${destino}?subject=${encodeURIComponent(
        "Tu guía NO CAIGAS"
      )}&body=${body}`;
      window.open(mailto, "_blank");
    } else if (medio === "whatsapp" && destino.replace(/\D/g, "").length >= 8) {
      const tel = destino.replace(/\D/g, "");
      const txt = encodeURIComponent(
        "Gracias por tu compra. Descargá tu guía NO CAIGAS aquí: " +
          location.origin + PDF_URL
      );
      window.open(`https://wa.me/${tel}?text=${txt}`, "_blank");
    }
  }

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0b0f14" }}>
        NO CAIGAS
      </h1>
      <p style={{ color: "#475569", marginTop: 8 }}>
        Guía práctica para no ser estafado en internet. Corta, clara, para
        cualquiera.
      </p>

      {paso === "pago" && (
        <div style={{ marginTop: 24 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#0e7490",
              marginBottom: 12,
            }}
          >
            $1.998 ARS
          </div>
          <a
            href={MP_PAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={irEntrega}
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "#0e7490",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 18,
              textDecoration: "none",
            }}
          >
            Comprar $1.998
          </a>
          <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 12 }}>
            Al pagar, elegís dónde recibir el PDF al instante.
          </p>
        </div>
      )}

      {paso === "entrega" && (
        <div style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 18, color: "#0b0f14" }}>
            ¿Dónde querés recibir tu PDF?
          </h2>
          <div style={{ display: "flex", gap: 12, margin: "12px 0" }}>
            <button
              onClick={() => setMedio("email")}
              style={btn(medio === "email")}
            >
              Email
            </button>
            <button
              onClick={() => setMedio("whatsapp")}
              style={btn(medio === "whatsapp")}
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
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  marginTop: 8,
                }}
              />
              <button
                onClick={armarEnlace}
                style={{
                  marginTop: 12,
                  padding: "12px 24px",
                  background: "#22d3ee",
                  color: "#0b0f14",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Recibir mi guía
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function btn(active: boolean): React.CSSProperties {
  return {
    padding: "10px 20px",
    borderRadius: 8,
    border: active ? "2px solid #0e7490" : "1px solid #cbd5e1",
    background: active ? "#e0f2fe" : "#fff",
    fontWeight: 700,
    cursor: "pointer",
  };
}
