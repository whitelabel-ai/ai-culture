# Uso responsable de la IA

Límites duros que ningún flujo, agente o persona cruza — independientemente del nivel de autonomía, la urgencia o el historial de fiabilidad. Cambiar cualquiera de estos límites requiere un [Decision Record](decisiones/) aprobado por liderazgo.

## Límites duros (nunca de forma autónoma)

| # | Límite | Razón |
|---|---|---|
| 1 | La IA no mueve dinero ni firma contratos sin checkpoint humano | Irreversibilidad + riesgo legal |
| 2 | La IA no ejecuta comunicaciones externas irreversibles (envíos masivos, publicaciones) sin aprobación | La reputación no tiene rollback |
| 3 | La IA no toma decisiones sobre personas (contratación, despido, evaluación, compensación) | Juicio humano indelegable + riesgo de sesgo + regulación (EU AI Act: alto riesgo) |
| 4 | Datos personales y datos regulados no se envían a modelos sin acuerdo de procesamiento verificado | Cumplimiento (GDPR y equivalentes) + confianza del cliente |
| 5 | Secretos y credenciales no entran en prompts | Superficie de fuga; los agentes usan credenciales propias de mínimo privilegio |
| 6 | Código generado no llega a producción sin revisión humana | Techo A2 ([niveles](../modelo-operativo/niveles-de-autonomia.md)) |
| 7 | Ningún flujo A3+ opera sin evaluaciones, monitoreo y kill-switch probado | La [degradación silenciosa](riesgos.md) no avisa |

## Transparencia

- **Con clientes**: cuando un cliente interactúa con IA autónoma (A4), lo sabe. No disfrazamos agentes de humanos.
- **Interna**: el trabajo asistido por IA no se oculta ni se penaliza — se firma. Quien entrega responde por el contenido, lo haya escrito quien lo haya escrito ([Diligencia](../talento/competencias.md)).
- **Auditoría**: todo flujo A2+ deja rastro consultable: qué hizo, con qué contexto, quién aprobó.

## Datos: qué puede ver un modelo

| Categoría | ¿A un modelo externo? | Condición |
|---|---|---|
| Código propio, docs internas | Sí | Proveedor con acuerdo empresarial (sin retención para entrenamiento) |
| Datos de clientes anonimizados | Sí | Anonimización verificada, no reversible |
| Datos personales identificables | Solo con DPA verificado | Y solo el mínimo necesario para la tarea |
| Datos regulados (salud, financieros) | Caso por caso | DR + revisión de cumplimiento previa |
| Secretos, credenciales, claves | Nunca | — |

## Cumplimiento regulatorio

El panorama regulatorio (EU AI Act y equivalentes) clasifica sistemas por riesgo. Nuestra regla operativa: **todo flujo A4 de cara al cliente pasa análisis de clasificación regulatoria antes de activarse**, y los dominios que la regulación marca como alto riesgo (personas, crédito, salud) tienen techo A2 aquí aunque la ley permitiera más. Preferimos estar un nivel por debajo del límite legal.

## Qué hacer ante una zona gris

1. Si dudas de si algo cruza un límite: **trátalo como si lo cruzara** y pregunta.
2. La pregunta y su respuesta se documentan (aquí o como DR) — la próxima persona no debe volver a dudar.
3. Nadie es penalizado por frenar un flujo por precaución. Sí es grave cruzar un límite sabiéndolo.
