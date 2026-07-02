# Playbook: Ingeniería de software

**El paradigma**: ingeniería compuesta. Escribir código es una tarea de bajo coste que la IA ejecuta; el valor del ingeniero humano se desplaza al diseño técnico, la simplificación de patrones y la revisión rigurosa. El título no cambia — el trabajo sí.

## El ciclo de trabajo

Todo desarrollo significativo sigue un bucle cerrado de cinco fases. Los nombres de comandos son ilustrativos (cada stack define los suyos); las fases son obligatorias:

| Fase | Quién lidera | Qué produce |
|---|---|---|
| **1. Especificar** (brainstorm) | Humano + IA entrevistadora | Especificación técnica a partir de requerimientos: problema, restricciones, criterio de éxito |
| **2. Planificar** (plan) | IA propone, humano aprueba | Ruta estructurada de implementación: archivos, pasos, riesgos |
| **3. Implementar** (ejecución autónoma) | Agente en nivel [A2](../modelo-operativo/niveles-de-autonomia.md) | Rama, código backend+frontend, tests de integración ejecutados, PR calificado abierto |
| **4. Revisar** (code review) | Humano + IA revisora | Revisión adversarial: correctitud, seguridad, simplicidad. El humano firma |
| **5. Componer** (compound) | Humano archiva con IA | Aprendizajes del problema resuelto → directorio de soluciones / memoria persistente |

La fase 5 es la que la mayoría omite y la que genera la ventaja: los aprendizajes archivados anclan el contexto de la siguiente fase 2, y la IA deja de repetir errores de diseño ya cometidos ([aprendizaje compuesto](../MANIFIESTO.md#8-aprendizaje-compuesto)).

## Reglas no negociables

1. **Todo código a producción pasa por PR con revisión humana** (techo A2). Sin excepciones por prisa: la prisa es exactamente cuando la IA mete el error confidente.
2. **Nadie mergea código que no puede explicar.** Si no entiendes el diff que la IA generó, no está listo — tú no estás listo ([principio 6](../MANIFIESTO.md#6-conceptos-antes-que-código)).
3. **La especificación precede al código.** Un agente sin spec produce plausibilidad, no correctitud. Si la fase 1 da pereza, el problema no está claro todavía.
4. **Los tests son parte del artefacto, no un after.** El agente que implementa ejecuta los tests; el PR que llega sin evidencia de verificación se devuelve.
5. **Cada repo tiene su contexto operativo**: `CLAUDE.md` con convenciones, `docs/adr/` con decisiones, `CONTEXT.md` con dominio. Repo sin contexto = agentes ciegos = outputs mediocres. Ver [arquitectura de contexto](../modelo-operativo/arquitectura-de-contexto.md).
6. **La documentación cambia en el mismo PR** que la invalida.

## Qué revisar en un PR generado con IA

Checklist mínima del revisor humano (la IA revisora complementa, no reemplaza):

- [ ] ¿El código resuelve el problema de la spec, o uno parecido que la IA inventó?
- [ ] ¿Introduce dependencias, patrones o abstracciones que no necesitamos? (la IA sobre-ingenia por defecto)
- [ ] ¿Los casos borde de la spec están cubiertos, o solo el camino feliz?
- [ ] ¿Hay superficie de seguridad nueva? (inputs sin validar, secretos, permisos)
- [ ] ¿Es más simple que la alternativa, o solo más rápido de generar?

## La métrica

**Velocidad de entrega de código calificado** (pasa revisión y evaluaciones a la primera) y **reducción de deuda de seguridad**. Nunca líneas generadas ni cantidad de PRs. Ver [metricas.md](../modelo-operativo/metricas.md).

## Evidencia

Los casos de estudio de Sonar y McKinsey reportan incrementos exponenciales en procesamiento de PRs y reducción de ciclos de despliegue cuando se rediseña el proceso completo — no cuando solo se compran herramientas ([research](../research/2026-07-culturas-ai-native.md)).
