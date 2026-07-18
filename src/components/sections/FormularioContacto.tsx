"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { CONTACTO } from "@/lib/servicios";

export default function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [problema, setProblema] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "listo" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setEstado("enviando");
    setMsg("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, contacto, problema }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        // Fallback mailto siempre disponible
        abrirMailto();
        setEstado("listo");
        setMsg("Abrimos tu correo para enviar el mensaje. ¡Gracias!");
        return;
      }

      if (data.modo === "mailto") {
        abrirMailto();
        setEstado("listo");
        setMsg("Abrimos tu correo para completar el envío. ¡Gracias!");
      } else {
        setEstado("listo");
        setMsg("¡Recibido! Te vamos a contactar pronto.");
        setNombre("");
        setContacto("");
        setProblema("");
      }
    } catch {
      abrirMailto();
      setEstado("listo");
      setMsg("Abrimos tu correo para enviar el mensaje. ¡Gracias!");
    }
  }

  function abrirMailto() {
    const asunto = encodeURIComponent(`Consulta de ${nombre || "Soporte Digital"}`);
    const cuerpo = encodeURIComponent(
      `Nombre: ${nombre}\nContacto: ${contacto}\n\nProblema / mensaje:\n${problema}`
    );
    window.location.href = `mailto:${CONTACTO.email}?subject=${asunto}&body=${cuerpo}`;
  }

  const inputClass =
    "w-full h-11 px-3 rounded-input border border-gray-200 text-body focus:border-primary-700 focus:outline-none";

  return (
    <form onSubmit={enviar} className="flex flex-col gap-4 max-w-2xl">
      <div>
        <label className="block text-small text-gray-600 mb-1">Nombre</label>
        <input
          className={inputClass}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          required
        />
      </div>
      <div>
        <label className="block text-small text-gray-600 mb-1">
          Contacto (email o WhatsApp)
        </label>
        <input
          className={inputClass}
          value={contacto}
          onChange={(e) => setContacto(e.target.value)}
          placeholder="email@ejemplo.com o +54 9 ..."
          required
        />
      </div>
      <div>
        <label className="block text-small text-gray-600 mb-1">
          ¿Qué problema tenés?
        </label>
        <textarea
          className={`${inputClass} h-32 py-3 resize-y`}
          value={problema}
          onChange={(e) => setProblema(e.target.value)}
          placeholder="Contanos qué pasa..."
          required
        />
      </div>

      <div className="mt-2">
        <Button type="submit" variant="primary">
          {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
        </Button>
      </div>

      {msg && (
        <p className="text-body text-primary-700 mt-2" role="status">
          {msg}
        </p>
      )}
    </form>
  );
}
