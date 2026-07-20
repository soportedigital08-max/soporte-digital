# PROJECT_MEMORY.md — Memoria conceptual del proyecto

> No es documentación técnica. Aquí viven ideas, hipótesis, filosofías, aprendizajes,
> descubrimientos, frases y visiones. Lo que no cabe en un Blueprint ni en una spec técnica.

---

## Filosofía de marca

- *"No competimos por precio. Competimos por claridad, confianza y resolución real."*
  Frase fundacional. Todo el copy y el tono del sitio la respeta.
- El sitio vende **cercanía y resolución real**, no solo tecnología. Por eso el look premium
  debe sentirse **cálido/humano**, no frío ni corporativo genérico.
- Autoridad percibida > features. El visitante debe sentir "estos tipos saben".

## Conceptos

- **Ritmo visual premium:** alternar secciones dark (#0B0F14) y claras (#FAFAF9) da sensación
  de "espacio" y jerarquía. El aire negativo es lo que lee el ojo como premium.
- **Causa raíz > parche:** ante un bug, resolver el elemento que desborda, no taparlo con
  `overflow-x:hidden` como única solución.
- **SSR-first para contenido clave:** stats con valor final en HTML + aria-label; la animación
  JS es mejora progresiva, no el portador del dato.

## Hipótesis

- Una timeline visual de hitos convierte "20 años" de slogan a prueba tangible de autoridad.
- Capturas reales del portal cliente (anonimizadas) son el salto más grande de credibilidad
  para la sección CRM (de "mockup" a "caso real").
- Imágenes reales (no solo cards de texto) en servicios/casos suben el compromiso.

## Aprendizajes / descubrimientos

- **Tailwind + tokens manuales en globals.css:** coexistían utilidades `bg-ink-900` de
  Tailwind (color `ink` en config) y `.bg-ink-900` manual en globals. Funciona, pero hay
  redundancia. No romperlo al editar.
- **Caché de edge en navegador headless:** el vision (Browserbase) mostró cards blancas por
  caché de su edge aunque el sitio sirve cards dark. Regla: verificar siempre por build local
  + CSS/HTML servido (curl) como fuente de verdad; el ojo del vision puede estar desactualizado.
- **Windows/MSYS:** `npm run build` mientras `npm run dev` corre corrompe `.next`. Matar node
  primero. Dev port 3005.
- **Formspree vs SMTP:** se eligió Formspree (capa gratuita 50/mes, permanente) para el
  formulario de contacto; sin backend propio.
- **Logo:** oficial `logo-sin-fondo-soporte-digital.png` (azul, transparente); usarlo como
  `<img>` nativo, no next/image. Favicon en `src/app/icon.png` (no en raíz).

## Frases importantes

- "El premium es la prioridad sobre cualquier otra ítem del sitio." (decisión del usuario)
- "El sitio tiene que sentirse premium, es la prioridad por encima de cualquier otra tarea
  pendiente." (driver de Sprint 6/7)

## Visiones futuras

- CRM propio comercializable (Ippon como caso piloto) como línea de producto aparte del
  soporte técnico.
- Crecimiento de tráfico vía /conocimiento (SEO por problemas puntuales: "pc lenta", "wifi
  lento") que convierta a contacto.
- Expansión de alojamiento/asesoría a más instituciones como la EES N°7 (multimedio FM 104.5
  Identidad) — Soporte Digital como "infraestructura tecnológica de Olavarría".

## Restricciones conceptuales

- 100% español siempre (es_ES), también en el CRM.
- No exponer datos reales de terceros (Ippon, EES N°7): mockup ficticio o captura anonimizada
  con consentimiento.
- No usar plantillas genéricas ni componentes "de librería sin editar".
- Credenciales nunca en el repo (usar [REDACTED]).

---

*Esta memoria se alimenta con cada Sprint. Es la "cultura" del proyecto, no su manual técnico.*
