# Rituales

La cultura no se sostiene con documentos — se sostiene con prácticas recurrentes que los convierten en hábito. Estos rituales son el mecanismo de mantenimiento del [aprendizaje compuesto](../MANIFIESTO.md#8-aprendizaje-compuesto) y de la [confianza calibrada](../MANIFIESTO.md#10-confianza-calibrada).

## Los rituales y su cadencia

| Ritual | Cadencia | Duración | Propósito |
|---|---|---|---|
| Cierre compuesto | Al terminar cada trabajo significativo | 10–15 min | Archivar aprendizajes antes de que se evaporen |
| Retro de IA | Quincenal, por pod | 45 min | Calibrar la colaboración humano-IA del pod |
| Demo de flujos | Mensual, toda la organización | 30–45 min | Difundir lo que funciona; matar el conocimiento en silos |
| Revisión de autonomía | Trimestral | 1–2 h | Auditar niveles A2+ con datos; ascender o degradar |
| Diagnóstico de madurez | Trimestral | 1 h | Actualizar el [modelo de madurez](modelo-de-madurez.md) y el plan |
| Jardinería de contexto | Mensual, rotativo | 2 h | Mantener frescura documental: podar, actualizar, enlazar |

## Cierre compuesto

Al terminar un trabajo significativo (feature, incidente, decisión, experimento), antes de pasar al siguiente:

- [ ] ¿Qué aprendimos que no sabíamos al empezar? → memoria persistente o directorio de soluciones.
- [ ] ¿Alguna decisión merece [DR](../gobernanza/decisiones/)?
- [ ] ¿Algún doc quedó desactualizado por este trabajo? → se corrige AHORA, no "luego".
- [ ] ¿La IA falló en algo repetible? → alimentar evaluaciones del flujo.

**Regla**: un problema difícil cuyo aprendizaje quedó solo en la cabeza de quien lo resolvió NO está terminado.

## Retro de IA

Además de la retro clásica, el pod responde tres preguntas específicas:

1. **¿Dónde delegamos de menos?** Trabajo manual que un agente ya podría hacer (con evidencia).
2. **¿Dónde delegamos de más?** Outputs que pasaron con verificación insuficiente para su riesgo.
3. **¿Qué contexto faltó?** Errores de la IA causados por docs ausentes, ambiguos o desactualizados — cada uno genera una tarea concreta de contexto.

## Demo de flujos

Cada mes, 2–3 personas muestran EN VIVO un flujo humano-IA real: cómo parten el problema, qué contexto dan, cómo verifican. No slides — pantalla compartida y trabajo real. Es la forma más rápida de nivelar [Delegación y Descripción](../talento/competencias.md) en toda la organización, y donde los líderes demuestran su [compromiso personal con el flujo](../talento/liderazgo.md).

## Revisión de autonomía

Con los datos de [métricas de salud](../modelo-operativo/metricas.md) de cada flujo A2+:

- Tasa de intervención baja y sostenida → candidato a ascenso (con sus [requisitos](../modelo-operativo/niveles-de-autonomia.md)).
- Deriva de calidad o incidentes → degradación y análisis.
- Checkpoints con 0 rechazos en el trimestre → sospecha de [autonomía por deriva](../gobernanza/riesgos.md): auditar la revisión misma.

## Jardinería de contexto

Rotativa entre miembros del pod: recorrer los docs del área, actualizar lo desactualizado, enlazar lo huérfano, proponer al [glosario](../GLOSARIO.md) los términos que generaron ambigüedad ese mes, y borrar sin piedad lo que ya no es verdad. Documentación podrida es [contexto envenenado](../gobernanza/riesgos.md) — peor que no tener.
