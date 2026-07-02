# Niveles de autonomía (A0–A4)

Cada flujo donde participa la IA tiene un nivel de autonomía **explícito y documentado**. La autonomía nunca es implícita: se asigna, se gana con evidencia y se puede revocar. Este es el mecanismo que materializa el [principio 7](../MANIFIESTO.md#7-autonomía-por-niveles-nunca-por-omisión).

## La escala

| Nivel | Nombre | La IA… | El humano… | Ejemplos típicos |
|---|---|---|---|---|
| **A0** | Consulta | Responde preguntas, no produce artefactos de trabajo | Usa la respuesta bajo su propio criterio | Chat de investigación, explicación de código |
| **A1** | Borrador | Produce el artefacto completo | Revisa y aprueba TODO antes de que tenga efecto | Código vía PR, copys, análisis, specs |
| **A2** | Ejecución supervisada | Ejecuta flujos multi-paso con puntos de control | Aprueba en los checkpoints definidos (human-in-the-loop) | Agente que implementa una feature y abre PR; agente de triage que propone respuestas |
| **A3** | Ejecución autónoma con auditoría | Ejecuta de extremo a extremo sin aprobación previa | Audita muestras y métricas a posteriori | Variantes de contenido pre-aprobado, categorización de tickets, reportes internos |
| **A4** | Autónoma en producto | Opera dentro del producto de cara al cliente | Diseña los límites, monitorea agregados | Feature de producto con IA autónoma, agente de soporte de primer nivel |

## Reglas de asignación

1. **Todo flujo nuevo nace en A1** salvo justificación documentada. A0 no requiere registro.
2. **Subir de nivel requiere evidencia**, no entusiasmo: tasa de error medida en el nivel actual, evaluaciones definidas, y aprobación del dueño del flujo. El ascenso se registra como [Decision Record](../gobernanza/decisiones/).
3. **Bajar de nivel es inmediato y no requiere DR**: ante degradación, incidente o cambio de modelo, cualquier dueño de flujo puede degradar la autonomía y documentarlo después.
4. **El riesgo define el techo**. Independientemente de la fiabilidad demostrada:

| Dominio | Techo de autonomía |
|---|---|
| Pagos, dinero, contratos | A2 (checkpoint humano siempre) |
| Comunicación externa no reversible (envíos masivos, publicaciones) | A2 |
| Datos personales / regulados | A2, con revisión de gobernanza |
| Código a producción | A2 (PR con revisión humana) |
| Contenido interno, análisis, reportes | A3 |
| Producto (cara al cliente) | A4, solo con evaluaciones continuas y kill-switch |

## Qué exige cada ascenso

- [ ] **A1 → A2**: definición escrita de los checkpoints; el flujo tiene dueño nombrado; los errores del último mes están archivados y analizados.
- [ ] **A2 → A3**: suite de evaluación automatizada con umbral de calidad definido; tasa de intervención humana en checkpoints < 10% sostenida; plan de auditoría por muestreo.
- [ ] **A3 → A4**: monitoreo en tiempo real con alertas; kill-switch documentado y probado; análisis de riesgo aprobado; cumplimiento regulatorio verificado (p. ej. EU AI Act si aplica).

## Anti-patrón a vigilar

La **autonomía por deriva**: un flujo A1 donde el humano aprueba sin leer es, de facto, un A3 sin gobernanza — lo peor de ambos mundos. Si la revisión se volvió teatro, o se sube el nivel formalmente (con sus requisitos) o se rediseña la revisión. Ver [anti-patrones](../adopcion/anti-patrones.md).
