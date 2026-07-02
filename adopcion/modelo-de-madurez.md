# Modelo de madurez AI-First

Cinco niveles para diagnosticar dónde está la organización (o un área concreta — la madurez no es uniforme) y qué desbloquea el siguiente nivel. Sé honesto en el diagnóstico: sobreestimar el nivel propio es el [anti-patrón](anti-patrones.md) más común.

## Los cinco niveles

| Nivel | Nombre | Cómo se ve | El desbloqueo hacia el siguiente |
|---|---|---|---|
| **M0** | Ad-hoc | Individuos usan IA por su cuenta, sin política ni compartición; el conocimiento queda en chats privados | Política de uso + primeros límites de [uso responsable](../gobernanza/uso-responsable.md) |
| **M1** | Asistido | Herramientas oficiales para todos; canal de proceso activo; los flujos siguen siendo los de antes, con IA "pegada" | Migrar el contexto a repos ([arquitectura de contexto](../modelo-operativo/arquitectura-de-contexto.md)): sin contexto no hay delegación seria |
| **M2** | Instrumentado | El contexto vive en repos; los agentes trabajan con specs y convenciones; primeros flujos A2 con checkpoints | Evaluaciones versionadas + métricas de flujo: sin medición no se puede subir autonomía |
| **M3** | Orquestado | Flujos A2/A3 compuestos entre sí; el [modelo de cuatro capas](../modelo-operativo/cuatro-capas.md) opera completo; el aprendizaje se archiva sistemáticamente | Canal de producto: llevar la capacidad demostrada internamente a la propuesta de valor |
| **M4** | AI-Native | La IA es parte de la propuesta de valor (A4 gobernado); la estructura es de pods; los ingresos escalan con cómputo, no con headcount | — (mantener: la madurez se sostiene, no se conquista una vez) |

## Autodiagnóstico rápido

Marca lo que sea verdad HOY (no lo planeado). El nivel es el último donde marcas todo:

**M1**
- [ ] Toda persona tiene acceso a herramientas de IA aprobadas.
- [ ] Existen límites de uso escritos y conocidos.

**M2**
- [ ] La documentación operativa clave vive en repos legibles por agentes.
- [ ] Cada repo de producto tiene su contexto (`CLAUDE.md`, ADRs, convenciones).
- [ ] Hay al menos un flujo A2 formal, con dueño y checkpoints definidos.

**M3**
- [ ] Los flujos A2+ tienen suites de evaluación versionadas y métricas de salud.
- [ ] El cierre de trabajo con archivado de aprendizajes es hábito, no excepción ([rituales](rituales.md)).
- [ ] Existe al menos un flujo A3 auditado por muestreo.
- [ ] Las cuatro capas están cubiertas en los flujos principales.

**M4**
- [ ] La IA ejecuta trabajo del cliente dentro del producto (A4 con kill-switch y monitoreo).
- [ ] El ratio ingresos/plantilla mejora sostenidamente ([metricas](../modelo-operativo/metricas.md)).
- [ ] Un data flywheel propietario alimenta el producto.

## Reglas de progresión

1. **No se salta de nivel.** Un flujo A4 construido sobre contexto M1 es un incidente esperando fecha ([gobernanza tardía](../gobernanza/riesgos.md)).
2. **La madurez es por área, el diagnóstico es global.** Ingeniería puede estar en M3 con marketing en M1 — el plan de adopción prioriza dónde el salto de nivel genera más valor.
3. **Revisión trimestral**: el diagnóstico se repite cada trimestre y se registra, para ver la trayectoria y detectar retrocesos (que existen: rotación, cambio de herramientas, deuda de contexto).
