# PROJECT_STATE.md — Estado actual del proyecto

> Leé este archivo en menos de 2 minutos para saber exactamente dónde está el proyecto.
> Actualizar constantemente (al menos al cerrar cada Sprint).

---

## Estado del proyecto
**ACTIVO.** Sitio principal Soporte Digital: 42 rutas alineadas premium (dark #0B0F14,
Space Grotesk + Inter, cards dark, WhatsApp flotante, sin overflow). **MÓDULO STUDIO
ACTIVO:** 9 mockups de comercios live en `/demo/*` como vitrina de venta de diseño web.

## Sprint actual
**Sprint 8 — Studio Web (mockups de comercios de Olavarría).**

## Último Sprint aprobado
**Sprint 7 — Gobernanza y cierre de brecha premium** (creación de `/governance`).

## Próximo Sprint (sugerido)
**Sprint 9 — Subir mockups base a premium + precios:** llevar los 6 mockups "base"
(kiosco, taller, jurídico, gym, nutrición, santa-rosa) al nivel premium (hero
fullscreen + fotos reales del rubro), y agregar precios/guion de venta en `/studio`.

## Documentos LOCKED
- `docs/04-DESIGN-SYSTEM.md` (fuente de verdad visual).
- `docs/03-ARQUITECTURA.md` (estructura de rutas/contenido).
- `governance/DECISIONS.md` (decisiones estratégicas vigentes).

## Documentos en revisión
- Ninguno en este momento.

## Objetivo actual
Sitio Soporte Digital premium + módulo Studio (vitrina de mockups de comercios) como
herramienta de venta de diseño web + hosting recurrente para Olavarría.

## Próximo objetivo
Subir los 6 mockups base a nivel premium y agregar precios/guion de venta en /studio.

## Riesgos abiertos
- **Caché de edge en navegadores headless (Browserbase):** al verificar visualmente, el
  navegador headless mostró cards blancas por caché de su edge aunque el sitio sirve cards
  dark (`bg-ink-800`). Mitigación: confirmar siempre por build local + CSS/HTML servido (curl),
  no solo por el ojo del vision. En navegador real del usuario se ven dark.
- Credenciales Ippon: recomendado rotar tras revisión (ver `docs/20-IPPON-CRM.md`).

## Hipótesis pendientes
- Una "timeline visual" de los hitos de 20 años en /nosotros elevaría más la autoridad
  (hoy son bloques con borde + punto).
- Capturas reales del portal cliente (anonimizadas) en la sección CRM convertirían la sección
  de "mockup" a "prueba social real" — pero requiere consentimiento del cliente.

## Próximas decisiones
- ¿Horario real de atención? (dato pendiente del usuario).
- ¿Capturar portal cliente Ippon real (anonimizado) o dejar mockup? (requiere consentimiento).

## Bloqueos
- **Ninguno de código.** Único bloqueo de negocio: falta el **horario real** para el footer
  (hoy placeholder "Lun a Sáb · 9:00–20:00 (horario a confirmar)").

## Prioridades
1. (Máxima) Percepción premium coherente en todas las rutas — **cumplida**, mantener.
2. Horario real en footer (bloqueado por dato del usuario).
3. Evidencia visual CRM con consentimiento.
4. Imágenes reales en secciones de servicios/casos.

---

*Última actualización: 2026-07-19. Mantenedor: ver `HANDOFF.md` para continuidad.*
