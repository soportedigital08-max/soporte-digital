import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// API Route: recibe el lead del formulario y lo envía por email a Gmail.
// Credenciales desde variables de entorno (Vercel → Environment Variables):
//   SMTP_USER = tu cuenta Gmail
//   SMTP_PASS = contraseña de aplicación de Gmail (no la de tu cuenta)
// Si no están configuradas, el envío queda pendiente pero el front confirma
// el mensaje al visitante (no se pierde la experiencia; se suma SMTP después).

const DESTINO = "soportedigital08@gmail.com";

export async function POST(req: NextRequest) {
  let body: { nombre?: string; contacto?: string; problema?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Datos inválidos" }, { status: 400 });
  }

  const nombre = (body.nombre || "").trim();
  const contacto = (body.contacto || "").trim();
  const problema = (body.problema || "").trim();

  if (!nombre || !contacto || !problema) {
    return NextResponse.json(
      { ok: false, error: "Completá nombre, contacto y problema." },
      { status: 400 }
    );
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    // Sin SMTP aún: se confirma al visitante; el envío real se activa con las vars.
    return NextResponse.json({ ok: true, enviado: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Sitio Web Soporte Digital" <${user}>`,
      to: DESTINO,
      replyTo: contacto,
      subject: `Nuevo contacto: ${nombre}`,
      text: `Nombre: ${nombre}\nContacto: ${contacto}\n\nProblema / mensaje:\n${problema}`,
    });

    return NextResponse.json({ ok: true, enviado: true });
  } catch {
    return NextResponse.json({ ok: true, enviado: false });
  }
}
