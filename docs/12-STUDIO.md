# Studio Web Soporte Digital — Mockups de comercios

> Documentación del módulo "Studio": vitrina de landing pages premium para
> comercios de Olavarría, como herramienta de venta del servicio de diseño web.
> Creado: 2026-07-27.

---

## 1. Propósito

Mostrar a cada comercio "así quedaría tu sitio" para cerrar la venta de diseño
web + hosting mensual recurrente (reseller wnpower). Los mockups son VITRINA,
no el sitio final del cliente (ese se aloja en wnpower al confirmar).

## 2. Dónde están

- Rutas: `soportedigital.com.ar/demo/<slug>`
- Código: `src/app/demo/<slug>/page.tsx`
- Vitrina: `src/app/studio/page.tsx`
- Componentes base: `src/components/sections/NegocioDemo.tsx` (comercios) y
  `HotelDemo.tsx` (hoteles)
- Imágenes locales del cliente: `public/descargas/`

## 3. Criterio de diseño (decisión fija de Ariel)

Cada mockup usa **paleta propia del rubro**, NO la de Soporte Digital.
Hero fullscreen con foto real, CTA siempre visible, footer con link
"Volver a soportedigital.com.ar". Datos genéricos (nombre ficticio + WA placeholder
`542200000000`). Estructura: Hero + Servicios + Prueba social + Proceso + CTA final.

Paletas por rubro:
| Rubro | Paleta | Estilo |
|---|---|---|
| Carnicería | rojo vino / negro / dorado | steakhouse, fotos de carne reales |
| Kiosco | ámbar cálido | cálido, cercano |
| Taller | azul / negro | técnico, confiable |
| Estudio jurídico | navy + dorado | serio, autoridad |
| Barbería | negro + dorado | masculino moderno, estatus |
| Gym / Fit | naranja / negro | energía, fuerza |
| Nutrición | verde fresco | salud, naturaleza |
| Hoteles | piedra + ámbar | emocional, exclusividad |

## 4. Mockups live (2026-07-27)

| Slug | Rubro | Nivel | Notas |
|---|---|---|---|
| carniceria-lopez | Carnicería | PREMIUM | steakhouse, milanesas = foto del usuario mejorada |
| kiosco-centro | Kiosco | base | ámbar |
| taller-mecanico | Taller | base | azul/negro |
| estudio-juridico | Jurídico | base | navy+dorado |
| barberia-norte | Barbería | PREMIUM | negro+dorado, masculino |
| fit-gym | Gym | base | naranja/negro |
| nutricion-saludable | Nutrición | base | verde |
| lleras-park-hotel | Hotel | PREMIUM | renombrado "Hotel Los Pinares" (genérico) |
| hotel-santa-rosa | Hotel | base | vitrina autoridad |

## 5. IDs de Unsplash válidos (HTTP 200 verificado 2026-07-27)

Para reusar en nuevos mockups o reemplazos. Formato:
`https://images.unsplash.com/photo-<ID>?w=1600&q=75` (hero) o `?w=800&q=70` (cards).

Carnicería / carne:
- 1603360946369-dc9bb6258143
- 1558030006-450675393462
- 1432139555190-58524dae6a55
- 1551028719-00167b16eac5
- 1529692236671-f1f6cf9683ba

Hotel:
- 1571003123894-1f0594d2b5d9
- 1611892440504-42a792e24d32
- 1542314831-068cd1dbfeeb
- 1551882547-ff40c63fe5fa
- 1590490360182-c33d57733427

Barbería / masculino:
- 1611892440504-42a792e24d32 (reuso)
- 1558030006-450675393462 (reuso)
- 1551028719-00167b16eac5 (reuso)

> Nota: verificar siempre con `curl -s -o /dev/null -w "%{http_code}"` antes de
> hardcodear. Unsplash permite hotlinking sin atribución para web.

## 6. Imágenes locales (cliente)

- `public/descargas/milanesas-lopez.png`: foto de milanesas del usuario, mejorada
  (borde amarillo recortado + watermark "Los Arrayanes" borrado con PIL).
  Proceso en `D:\negocio-ariel\02-productos-digitales-ml\mejorar_milanesas.py`.

## 7. Verificación

```bash
npm run build          # debe dar ✓ Compiled successfully
git push origin main   # Vercel re-deploya solo
curl -s -o /dev/null -w "%{http_code}" https://www.soportedigital.com.ar/demo/<slug>
# -> 200 (esperar ~1 min tras el push)
```

## 8. Lecciones (no repetir)

- No anidar `<a>` dentro de `<Link>` en el footer (rompe el build: "Unexpected
  token 'main'"). El footer debe tener 3 nodos hermanos.
- Pixabay no expone URLs de imagen en HTML plano → usar Unsplash CDN.
- Picsum da fotos random, no del rubro → solo placeholder.
- ML pausó ebooks por Propiedad Intelectual (logo SD en imagen + link externo).
  En mockups de cliente: footer "Volver a..." sí, pero no logo SD gigante en hero.

## 9. Relacionado

- Runbook persistente: `D:\negocio-ariel\07-studio-olavarria\RUNBOOK-STUDIO.md`
- Plan de negocio: `D:\negocio-ariel\07-studio-olavarria\PLAN_STUDIO.md`
- CHANGELOG del repo (sección Studio) para historial de commits.
