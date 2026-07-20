# PROJECT_STATE.md — Estado actual del proyecto

> Leé este archivo en menos de 2 minutos para saber exactamente dónde está el proyecto.
> Actualizar constantemente (al menos al cerrar cada Sprint).

---

## Estado del proyecto
**ACTIVO — alineación premium completa.** Todas las 42 rutas están al mismo nivel visual
que la home (dark #0B0F14, Space Grotesk + Inter, cards dark con hover-elevación, Reveal
fade-up, WhatsApp flotante, sin overflow horizontal, contraste AA/AAA).

## Sprint actual
**Sprint 7 — Gobernanza y cierre de brecha premium.** (creación de `/governance`).

## Último Sprint aprobado
**Sprint 6 — Alineación premium total** (todas las rutas al nivel de la home: cards
`variant="dark"` + `Reveal` en todas las listas/subpáginas, hitos de Nosotros con punto
visual, Privacidad sin `prose` inerte). Build 42/42 OK, HTTP 200 en todas las rutas.

## Próximo Sprint (sugerido)
**Sprint 8 — Pulido y contenido:** horario real en footer (requiere dato del usuario),
capturas reales del portal cliente Ippon (anonimizadas, con consentimiento) integradas en
Desarrollo a medida + case study card, y/o imágenes reales en secciones de servicios/casos.

## Documentos LOCKED
- `docs/04-DESIGN-SYSTEM.md` (fuente de verdad visual).
- `docs/03-ARQUITECTURA.md` (estructura de rutas/contenido).
- `governance/DECISIONS.md` (decisiones estratégicas vigentes).

## Documentos en revisión
- Ninguno en este momento.

## Objetivo actual
Mantener y profundizar la percepción premium en 100% de las rutas; cerrar pendientes menores
(horario real, evidencia visual CRM con consentimiento).

## Próximo objetivo
Subir aún más la autoridad con evidencia visual real (capturas CRM anonimizadas) y contenido
(timeline visual de hitos, imágenes en servicios).

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
