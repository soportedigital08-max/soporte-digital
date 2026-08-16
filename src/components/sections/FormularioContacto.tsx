"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { AREAS } from "@/lib/servicios";

const FORM_ENDPOINT = "https://formspree.io/f/mqerqyek";

// Opciones del selector "¿Qué servicio necesitás?" (Fase 1.4).
// "Otro" se suma al final; se deriva de AREAS + opción extra.
const OPCIONES_SERVICIO = [
  ...AREAS.map((a) => a.titulo),
  "Soporte remoto",
  "Otro",
];

export default function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [servicio, setServicio] = useState("");
  const [problema, setProblema] = useState("");
  const [archivo, setArchivo] = useState<File | null>(null);

  const [estado, setEstado] = useState<"idle" | "enviando" | "listo" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  // Errores por campo (validación client-side, Fase 1.4)
  const [errores, setErrores] = useState<{
    nombre?: string;
    contacto?: string;
    problema?: string;
  }>({});

  function validar(): boolean {
    const e: typeof errores = {};
    if (nombre.trim().length < 2) e.nombre = "Ingresa tu nombre.";
    if (contacto.trim().length < 5)
      e.contacto = "Dejanos un email o WhatsApp para responderte.";
    if (problema.trim().length < 10)
      e.problema = "Contanos un poco más (al menos 10 caracteres).";
    setErrores(e);
    return Object.keys(e).length === 0;
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");

    if (!validar()) {
      setEstado("error");
      setMsg("Revisá los campos marcados en rojo.");
      return;
    }

    setEstado("enviando");

    try {
      // Si hay archivo adjunto, enviamos FormData (Formspree lo acepta en planes
      // que habilitan adjuntos). Si no hay archivo, JSON para mantener el flujo
      // actual. El _subject y los campos viajan igual.
      let res: Response;
      if (archivo) {
        const fd = new FormData();
        fd.append("nombre", nombre);
        fd.append("contacto", contacto);
        fd.append("servicio", servicio);
        fd.append("problema", problema);
        fd.append("adjunto", archivo);
        fd.append("_subject", `Nuevo contacto: ${nombre}`);
        res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: fd,
        });
      } else {
        res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            nombre,
            contacto,
            servicio,
            problema,
            _subject: `Nuevo contacto: ${nombre}`,
          }),
        });
      }

      if (res.ok) {
        setEstado("listo");
        setMsg("¡Listo! Recibimos tu consulta. Te contactamos pronto.");
        setNombre("");
        setContacto("");
        setServicio("");
        setProblema("");
        setArchivo(null);
        // Limpia el input file (no se puede setear value, lo reseteamos por ref-like)
        const fi = document.getElementById("adjunto") as HTMLInputElement | null;
        if (fi) fi.value = "";
        setErrores({});
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
    "w-full h-11 px-3 rounded-input border bg-white/5 text-body text-white placeholder:text-primary-300/60 focus:outline-none";
  const inputOk = "border-white/15 focus:border-primary-400";
  const inputErr = "border-red-400 focus:border-red-400";

  return (
    <form onSubmit={enviar} className="flex flex-col gap-4 max-w-2xl" noValidate>
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-small text-primary-200 mb-1">
          Nombre <span className="text-red-400">*</span>
        </label>
        <input
          id="nombre"
          className={`${inputClass} ${errores.nombre ? inputErr : inputOk}`}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          aria-invalid={!!errores.nombre}
          aria-describedby={errores.nombre ? "err-nombre" : undefined}
          required
        />
        {errores.nombre && (
          <p id="err-nombre" className="text-small text-red-400 mt-1">
            {errores.nombre}
          </p>
        )}
      </div>

      {/* Contacto */}
      <div>
        <label htmlFor="contacto" className="block text-small text-primary-200 mb-1">
          Contacto (email o WhatsApp) <span className="text-red-400">*</span>
        </label>
        <input
          id="contacto"
          className={`${inputClass} ${errores.contacto ? inputErr : inputOk}`}
          value={contacto}
          onChange={(e) => setContacto(e.target.value)}
          placeholder="email@ejemplo.com o +54 9 ..."
          aria-invalid={!!errores.contacto}
          aria-describedby={errores.contacto ? "err-contacto" : undefined}
          required
        />
        {errores.contacto && (
          <p id="err-contacto" className="text-small text-red-400 mt-1">
            {errores.contacto}
          </p>
        )}
      </div>

      {/* Servicio (Fase 1.4) */}
      <div>
        <label htmlFor="servicio" className="block text-small text-primary-200 mb-1">
          ¿Qué servicio necesitás?
        </label>
        <select
          id="servicio"
          className={`${inputClass} ${inputOk} appearance-none cursor-pointer`}
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
        >
          <option value="" className="text-gray-900">
            Elegí una opción (opcional)
          </option>
          {OPCIONES_SERVICIO.map((op) => (
            <option key={op} value={op} className="text-gray-900">
              {op}
            </option>
          ))}
        </select>
      </div>

      {/* Problema */}
      <div>
        <label htmlFor="problema" className="block text-small text-primary-200 mb-1">
          ¿Qué problema tenés? <span className="text-red-400">*</span>
        </label>
        <textarea
          id="problema"
          className={`${inputClass} h-32 py-3 resize-y ${
            errores.problema ? inputErr : inputOk
          }`}
          value={problema}
          onChange={(e) => setProblema(e.target.value)}
          placeholder="Contanos qué pasa..."
          aria-invalid={!!errores.problema}
          aria-describedby={errores.problema ? "err-problema" : undefined}
          required
        />
        {errores.problema && (
          <p id="err-problema" className="text-small text-red-400 mt-1">
            {errores.problema}
          </p>
        )}
      </div>

      {/* Adjunto (Fase 1.4) — opcional */}
      <div>
        <label htmlFor="adjunto" className="block text-small text-primary-200 mb-1">
          Adjuntar imagen o archivo (opcional)
        </label>
        <input
          id="adjunto"
          type="file"
          accept="image/*,.pdf,.txt,.doc,.docx"
          onChange={(e) => setArchivo(e.target.files?.[0] ?? null)}
          className="w-full text-small text-primary-200 file:mr-4 file:py-2 file:px-4 file:rounded-input file:border-0 file:bg-primary-700 file:text-white file:cursor-pointer hover:file:bg-primary-900"
        />
        {archivo && (
          <p className="text-small text-primary-300 mt-1">
            Archivo seleccionado: {archivo.name}
          </p>
        )}
      </div>

      <div className="mt-2">
        <Button type="submit" variant="primary">
          {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
        </Button>
      </div>

      {/* Confirmación visual clara post-envío (Fase 1.4) */}
      {msg && (
        <div
          role="status"
          className={`mt-2 rounded-input border px-4 py-3 text-body ${
            estado === "listo"
              ? "border-green-400/40 bg-green-500/10 text-green-300"
              : "border-red-400/40 bg-red-500/10 text-red-300"
          }`}
        >
          {estado === "listo" && (
            <span aria-hidden className="mr-2">
              ✅
            </span>
          )}
          {msg}
        </div>
      )}
    </form>
  );
}
