import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// API Route: recibe el lead del formulario y lo envía por email.
// Las credenciales se leen de variables de entorno (Vercel → Environment Variables).
// Si no están configuradas, devuelve 200 con modo="mailto" para que el
// front-end abra un mailto como fallback y el lead no se pierda.

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

  // Sin credenciales SMTP: fallback mailto (no se pierde el lead).
  if (!user || !pass) {
    return NextResponse.json({ ok: true, modo: "mailto" });
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
      text:
        `Nombre: ${nombre}\nContacto: ${contacto}\n\nProblema / mensaje:\n${problema}`,
    });

    return NextResponse.json({ ok: true, modo: "smtp" });
  } catch {
    // Fallo de envío: el front-end abre mailto como respaldo.
    return NextResponse.json({ ok: true, modo: "mailto" });
  }
}
