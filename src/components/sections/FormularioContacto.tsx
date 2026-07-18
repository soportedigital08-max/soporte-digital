"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const FORM_ENDPOINT = "https://formspree.io/f/mqerqyek";

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
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre,
          contacto,
          problema,
          _subject: `Nuevo contacto: ${nombre}`,
        }),
      });

      if (res.ok) {
        setEstado("listo");
        setMsg("Mensaje enviado. Te vamos a contactar pronto.");
        setNombre("");
        setContacto("");
        setProblema("");
        return;
      }
      setEstado("error");
      setMsg("No pudimos enviar. Probá de nuevo o escribinos por WhatsApp.");
    } catch {
      setEstado("error");
      setMsg("No pudimos enviar. Probá de nuevo o escribinos por WhatsApp.");
    }
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
        <p
          className={`text-body mt-2 ${estado === "error" ? "text-red-600" : "text-primary-700"}`}
          role="status"
        >
          {msg}
        </p>
      )}
    </form>
  );
}
