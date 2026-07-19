import type { MetadataRoute } from "next";
import { ARTICULOS } from "@/lib/articulos";
import { CASOS } from "@/lib/casos";
import { PROBLEMAS } from "@/lib/servicios";

const BASE = "https://www.soportedigital.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = [
    "",
    "/servicios",
    "/casos-de-exito",
    "/conocimiento",
    "/nosotros",
    "/contacto",
    "/privacidad",
  ].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));

  const problemas = PROBLEMAS.map((p) => ({
    url: `${BASE}/servicios/${p.slug}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const casos = CASOS.map((c) => ({
    url: `${BASE}/casos-de-exito/${c.slug}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articulos = ARTICULOS.map((a) => ({
    url: `${BASE}/conocimiento/${a.slug}`,
    lastModified: new Date(a.fecha),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...estaticas, ...problemas, ...casos, ...articulos];
}
