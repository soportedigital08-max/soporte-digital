# REGISTRO DE DECISIONES

Última actualización: 2026-07-01
Estado: Activo
Responsable: Producto
Relacionado con: Documento Maestro, Arquitectura, Roadmap

---

## DECISIÓN #001

Fecha: 2026-07-01
Estado: Vigente

Tema: Estructura base del sitio

Decisión:

Se define que la arquitectura principal del sitio estará compuesta por las siguientes secciones:

* Inicio (/)
* Servicios (/servicios)
* Casos de Éxito (/casos-de-exito)
* Conocimiento (/conocimiento)
* Nosotros (/nosotros)
* Contacto (/contacto)

---

Motivo:

Esta estructura permite cubrir todo el recorrido del usuario:

* Adquisición → Conocimiento (SEO)
* Educación → Contenido
* Evaluación → Servicios
* Confianza → Casos de éxito
* Conversión → Contacto

Además:

* Mantiene claridad en la navegación
* Es escalable a largo plazo
* Está alineada con buenas prácticas SEO
* Refuerza el posicionamiento como empresa de soluciones tecnológicas

---

Impacto:

* Define la base de toda la arquitectura del sitio
* Condiciona el diseño UX posterior
* Establece los pilares del contenido
* Permite estructurar correctamente el sistema de servicios

---

Notas:

* Se mantiene “Servicios” como naming por claridad y SEO
* La estructura interna de cada sección se definirá en etapas posteriores
# REGISTRO DE DECISIONES

Última actualización: 2026-07-01
Estado: Activo
Responsable: Producto
Relacionado con: Documento Maestro, Arquitectura, Roadmap

---

## DECISIÓN #001

Fecha: 2026-07-01
Estado: Vigente

Tema: Estructura base del sitio

Decisión:

Se define que la arquitectura principal del sitio estará compuesta por las siguientes secciones:

* Inicio (/)
* Servicios (/servicios)
* Casos de Éxito (/casos-de-exito)
* Conocimiento (/conocimiento)
* Nosotros (/nosotros)
* Contacto (/contacto)

---

Motivo:

Permite cubrir todo el recorrido del usuario (adquisición, evaluación, confianza y conversión) manteniendo claridad, escalabilidad y alineación con SEO.

---

## DECISIÓN #002

Fecha: 2026-07-01
Estado: Vigente

Tema: Arquitectura del sistema de servicios

Decisión:

Se define que el sistema de servicios utilizará una arquitectura de 3 niveles:

* Nivel 1: Hub (/servicios)
* Nivel 2: Categorías
* Nivel 3: Páginas orientadas a problemas

Además, se adopta una estructura de URLs plana:

```text
/servicios/[problema]
```

---

Motivo:

* Refleja la forma en que los usuarios buscan soluciones
* Mejora el posicionamiento SEO
* Facilita la navegación
* Permite escalabilidad sin fricción
* Aumenta la tasa de conversión al atacar problemas concretos

---

Impacto:

* Define la base del crecimiento SEO
* Establece el modelo de creación de contenido de servicios
* Afecta la estructura interna del sitio
* Permite lanzar con páginas prioritarias y escalar progresivamente

---

## DECISIÓN #003

Fecha: 2026-07-01
Estado: Vigente

Tema: Alcance inicial del sistema de servicios

Decisión:

Se define que:

* El sistema completo tendrá aproximadamente 30–40 páginas de servicios
* El lanzamiento inicial incluirá 8–10 páginas de alta prioridad

---

Motivo:

* Permite validar el modelo de negocio rápidamente
* Evita sobrecarga inicial
* Enfoca recursos en páginas de mayor conversión
* Habilita crecimiento progresivo

---

Notas:

* Todas las páginas estarán basadas en problemas reales del usuario
* No se crearán páginas genéricas sin intención de búsqueda
# REGISTRO DE DECISIONES

Última actualización: 2026-07-01
Estado: Activo
Responsable: Producto
Relacionado con: Documento Maestro, Arquitectura, Roadmap

---

## DECISIÓN #004

Fecha: 2026-07-01
Estado: Vigente

Tema: Arquitectura interconectada del sistema

Decisión:

El sitio funcionará como un sistema conectado entre:

* Conocimiento
* Servicios
* Casos de éxito
* Contacto

Basado en un modelo de clusters temáticos.

---

Motivo:

* Maximizar el posicionamiento SEO
* Mejorar la conversión
* Evitar contenido aislado
* Construir autoridad técnica
* Guiar al usuario a través de un recorrido lógico

---

Impacto:

* Define el sistema de enlazado interno
* Establece el flujo de usuario principal
* Conecta adquisición, educación y conversión
* Permite escalar contenido sin perder coherencia

---

Notas:

* Todo contenido debe enlazar a servicios
* Todo servicio debe conectar con contenido o casos
* No se permitirán páginas aisladas dentro del sistema

## DECISIÓN #006

Fecha: 2026-07-01
Estado: Vigente

Tema: UX estructural del sitio

Decisión:

Se define la estructura de las páginas clave del sitio:

* Homepage orientada a decisiones
* Página de servicios como hub
* Páginas de servicio orientadas a conversión
* Artículos diseñados para SEO + conversión

---

Motivo:

* Maximizar claridad
* Mejorar conversión
* Alinear contenido con intención del usuario
* Evitar estructuras genéricas

---

Impacto:

* Define cómo se construyen todas las páginas
* Afecta contenido, diseño y desarrollo
* Establece un sistema coherente y escalable

---
## DECISIÓN #007

Fecha: 2026-07-01
Estado: Vigente

Tema: Sistema de componentes (Botones y Cards)

Decisión:

Se establece un sistema unificado de componentes basado en:

* Botones con jerarquía clara (Primary, Secondary, Tertiary)
* Cards como unidad principal de navegación

---

Motivo:

* Mejorar claridad de acciones
* Estandarizar interfaz
* Facilitar escalabilidad
* Optimizar conversión

---

Impacto:

* Define interacción del usuario
* Afecta todas las páginas
* Permite coherencia visual y funcional

---
---

## DECISIÓN #008

Fecha: 2026-07-01  
Estado: Vigente  

Tema: Formularios  

Decisión:

Los formularios del sitio serán minimalistas, enfocados en conversión, solicitando únicamente:

- Nombre  
- Contacto  
- Descripción del problema  

---

Motivo:

- Reducir fricción  
- Aumentar tasa de conversión  
- Facilitar el contacto inicial  

---

Impacto:

- Mejora captación de leads  
- Simplifica experiencia del usuario  
- Reduce abandono  

---
---

## DECISIÓN #009

Fecha: 2026-07-01  
Estado: Vigente  

Tema: Sistema de secciones reutilizables  

Decisión:

El sitio se construirá utilizando bloques reutilizables (sections), evitando diseños únicos por página.

---

Motivo:

- Mejorar consistencia  
- Acelerar desarrollo  
- Facilitar mantenimiento  
- Escalar el sistema  

---

Impacto:

- Define cómo se diseñan todas las páginas  
- Permite modularidad  
- Reduce complejidad futura  

---
DECISIÓN #010

Uso de Vercel en plan gratuito (Hobby) para etapa inicial.

Motivo:
Reducir costos y validar producto sin fricción.

Escalabilidad:
Migración a plan Pro cuando el proyecto lo requiera.

---

## DECISIÓN #010

Fecha: 2026-07-01  
Estado: Vigente  

Tema: Infraestructura y hosting  

Decisión:

Se utilizará Vercel (plan Hobby) para el despliegue del sitio en la etapa inicial.

---

Motivo:

- Costo cero  
- Alta performance  
- Integración con Next.js  
- Escalabilidad  

---

Impacto:

- Simplifica deploy  
- Mejora SEO  
- Permite crecimiento sin migraciones complejas  

---

## DECISIÓN #011

Fecha: 2026-07-01  
Estado: Vigente  

Tema: Separación de arquitectura  

Decisión:

Separar la arquitectura del sitio (UX) de la arquitectura técnica (implementación).

---

Motivo:

- Mejor organización  
- Escalabilidad  
- Claridad entre producto y tecnología  

---
DECISIÓN #012

Tema: Inicio de desarrollo

Se inicia desarrollo controlado por tareas pequeñas y verificables.
DECISIÓN #014

Tema: Copy del Hero

Se prioriza claridad concreta sobre mensajes genéricos en la comunicación principal.

Motivo:
El usuario debe identificarse inmediatamente con el problema que tiene.

---

DECISIÓN #015
Fecha: 2026-07-18
Estado: Vigente
Tema: Alineación del stack técnico (Opción A)

Decisión:
Se unifica el proyecto en un solo stack coherente: Next.js 14.2.35 (App Router) + React 18.3.1 + Tailwind CSS 3.4.4 + PostCSS 8.5.10. Se descarta el scaffold coexistente con Next 16.2.10 / Tailwind 4.

Motivo:
- El Design System (04-DESIGN-SYSTEM.md) declara tokens en `tailwind.config.ts` (formato v3). En Tailwind v4 esa config se ignora y los estilos no se aplicaban.
- Mantiene la base estable ya declarada en el package.json raíz del proyecto.
- Evita APIs rotas de Next 16 (su AGENTS.md advierte breaking changes).

Impacto:
- Home funcional con Design System aplicado.
- Base reproducible y conocida para el resto de la Fase 2.

Notas de seguridad:
- `next` subido de 14.2.5 → 14.2.35 para parchear vulnerabilidad crítica.
- `postcss` forzado a 8.5.10 en todo el árbol (override) para cerrar advisory moderada.
- Queda 1 advisory "high" de Next solo resoluble en `next@16` (breaking) y NO aplicable a este sitio (no usa next/image con remotePatterns, middleware, rewrites, i18n ni CSP nonces). Se mantiene en 14.2.35 por coherencia con esta decisión.
