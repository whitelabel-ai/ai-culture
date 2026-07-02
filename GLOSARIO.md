# Glosario

Vocabulario canónico de la organización. Estas definiciones ganan sobre cualquier uso informal — tanto para humanos como para las IAs que consumen este repo. Los términos marcados **(EN)** se usan en inglés deliberadamente y no se traducen.

| Término | Definición |
|---|---|
| **AI-First** | Cultura organizacional donde la primera pregunta ante cualquier trabajo es "¿cómo participa la IA en esto?" y los flujos se diseñan asumiendo colaboración humano–IA por defecto. |
| **AI-Native** | Empresa cuyo modelo de negocio, arquitectura y operación se diseñan desde el día uno con la IA como motor de valor central. Si se retira la IA, el producto deja de funcionar. |
| **AI-Enabled** | Empresa tradicional que añade capas de IA a procesos preexistentes. Mejora la velocidad; no cambia la estructura ni el moat. |
| **Agente** | Sistema de IA que ejecuta tareas de múltiples pasos con acceso a herramientas (archivos, APIs, navegador), operando bajo un nivel de autonomía asignado. Distinto de un chat: actúa sobre el entorno. |
| **Canal de proceso** | Vía de adopción de IA orientada a la productividad interna de los empleados (copilots, asistentes). Ver [research](research/2026-07-culturas-ai-native.md). |
| **Canal de producto** | Vía de adopción que integra IA autónoma dentro de la propuesta de valor que compra el cliente. Es la vía que transforma estructura y economía de la empresa. |
| **Contexto** | Todo insumo que condiciona el output de una IA: documentación, datos, ejemplos, decisiones pasadas, vocabulario. Nuestro activo competitivo principal (principio 3). |
| **Arquitectura de contexto** | Diseño deliberado de dónde vive el contexto, cómo se estructura y cómo lo consumen los agentes. Ver [modelo-operativo/arquitectura-de-contexto.md](modelo-operativo/arquitectura-de-contexto.md). |
| **Data flywheel (EN)** | Volante de datos: bucle donde el uso del producto genera datos propietarios que mejoran el producto, que atrae más uso. Moat principal de una empresa AI-native. |
| **Moat (EN)** | Foso competitivo: ventaja estructural difícil de copiar. En la era AI: contexto propietario, integración profunda en sistemas del cliente y equipos pequeños de alta madurez. |
| **Docs-as-code (EN)** | Práctica de gestionar documentación con las herramientas del código: Git, Markdown, Pull Requests, revisión. Prerrequisito para que las IAs consuman la cultura (principio 4). |
| **Decision Record (DR)** | Documento inmutable que registra una decisión significativa: contexto, opciones consideradas, decisión y consecuencias. Ver [gobernanza/decisiones/](gobernanza/decisiones/). |
| **Nivel de autonomía** | Grado explícito (A0–A4) de independencia otorgado a un flujo de IA. Ver [modelo-operativo/niveles-de-autonomia.md](modelo-operativo/niveles-de-autonomia.md). |
| **Human-in-the-loop (EN)** | Punto de control donde un humano debe aprobar antes de que la acción de una IA tenga efecto. Obligatorio en niveles A1–A2. |
| **Pod** | Célula mínima de entrega: 2–5 personas sénior + agentes, con autonomía end-to-end sobre un resultado de negocio. Unidad organizacional por defecto. |
| **Confianza calibrada** | Habilidad de ajustar el nivel de verificación de un output de IA al riesgo de la tarea. Ni fe ciega ni escepticismo total (principio 10). |
| **Formulación de problemas** | Competencia de convertir un objetivo de negocio vago en una especificación que una IA puede ejecutar: restricciones, criterio de éxito, contexto relevante. |
| **Aprendizaje compuesto** | Práctica de archivar cada aprendizaje (bug, decisión, patrón) como contexto consultable, de modo que cada ciclo parte del acumulado del anterior (principio 8). |
| **Curva J** | Trayectoria típica de adopción de IA: caída inicial de productividad durante el rediseño de procesos, luego crecimiento superior al punto de partida. Ver [adopcion/curva-j.md](adopcion/curva-j.md). |
| **Ingeniería compuesta** | Paradigma donde escribir código es tarea de bajo coste automatizable, y el valor humano se desplaza a diseño técnico, simplificación y revisión rigurosa. Ver [playbooks/ingenieria.md](playbooks/ingenieria.md). |
| **Intent-based interface (EN)** | Interfaz donde el usuario expresa un objetivo y el sistema compone dinámicamente la UI óptima para el resultado, en vez de navegar pantallas fijas. Ver [playbooks/diseno-ux.md](playbooks/diseno-ux.md). |
| **Generative UI (EN)** | Ensamblado de interfaces al vuelo por un modelo, restringido por el sistema de diseño expresado como tokens y reglas computables. |
| **MCP (Model Context Protocol) (EN)** | Protocolo estándar que conecta agentes de IA con sistemas externos (bases de datos, analytics, pagos) de forma gobernada. |
| **Outcome-based pricing (EN)** | Modelo comercial que cobra por resultado entregado (tarea resuelta) en lugar de por asiento/licencia. Tendencia dominante en productos AI-native. |
| **Gráfico de contexto** | Estructura de datos que resguarda las directrices narrativas e históricas de la marca/dominio (por qué se rechazó un copy, qué analogías funcionan) para consumo de IA. |
| **Alucinación** | Output de un modelo que es incorrecto pero se presenta con confianza. Riesgo gestionado mediante confianza calibrada y verificación proporcional al riesgo. |
| **Degradación silenciosa** | Pérdida gradual de calidad de un sistema de IA en producción sin fallo visible. Se mitiga con evaluaciones continuas y métricas (ver [modelo-operativo/metricas.md](modelo-operativo/metricas.md)). |
| **Pilot purgatory (EN)** | Anti-patrón: la organización acumula pilotos de IA que nunca llegan a producción ni rediseñan procesos. Ver [adopcion/anti-patrones.md](adopcion/anti-patrones.md). |

**Regla de mantenimiento**: si un término genera ambigüedad en una discusión o en un prompt, se añade aquí en el mismo PR que la resuelve.
