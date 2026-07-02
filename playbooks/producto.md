# Playbook: Gestión de producto

**El paradigma**: el PM agent-native no documenta requerimientos — diseña experimentos y controla resultados. La traducción de oportunidad de negocio a especificación ejecutable es su oficio; la administración de tickets y tableros es trabajo de agentes.

## El rol reconfigurado

| Antes | Ahora |
|---|---|
| Escribe PRDs largos que nadie relee | Produce estrategia y specs como **contexto ejecutable** que humanos y agentes leen antes de trabajar |
| Coordina estatus en reuniones | La orquestación reporta sola; el PM decide sobre excepciones |
| Pide dashboards a datos | Interroga producción conversacionalmente vía agentes con MCP |
| Ratio 1 PM : 8–10 ingenieros | Pods reducidos, ratio cercano a 1 PM : 1–2 ingenieros ([estructura](../modelo-operativo/estructura-organizacional.md)) |

## Herramienta 1: la estrategia como archivo

La estrategia vive en un documento versionado (`strategy.md` del producto) que la IA lee **obligatoriamente** antes de escribir una línea de código. Se produce mediante entrevista con un agente estratega (metodología tipo Rumelt: diagnóstico → política guía → acciones coherentes) que interroga al PM y cuestiona hipótesis débiles.

Contenido mínimo del `strategy.md`:

- [ ] El problema central del cliente (diagnóstico, no wishlist).
- [ ] Métricas S.M.A.R.T. de valor: qué número mueve esta apuesta y cuánto.
- [ ] Restricciones de negocio: qué NO hacemos y por qué.
- [ ] Riesgos asumidos y cómo sabremos que nos equivocamos.

**Regla**: un pod sin `strategy.md` actualizado no arranca desarrollo nuevo. La estrategia desactualizada envenena el contexto de todos los agentes que la leen.

## Herramienta 2: el pulso del producto

El monitoreo es conversacional y proactivo, no un tablero estático. Vía conectores [MCP](../GLOSARIO.md), el agente de producto accede a:

| Sistema | Qué consulta |
|---|---|
| Réplica de producción (solo lectura) | Estado real de los datos |
| Analytics (PostHog, Mixpanel) | Uso, adopción, embudos |
| Errores (Sentry, Datadog) | Incidentes, latencias de modelos |
| Pagos (Stripe) | Ingresos, churn, anomalías |

El resultado: un reporte consolidado de rendimiento, errores y anomalías de comportamiento — un analista estratégico que detecta, no un generador de gráficas. Nivel de autonomía típico: [A3](../modelo-operativo/niveles-de-autonomia.md) (lectura y reporte interno).

## Herramienta 3: evaluación multiagente de ideas

Para evaluar ideas de producto a velocidad: un sistema donde agentes especializados simulan en paralelo el análisis de viabilidad técnica, cumplimiento regulatorio, reconocimiento de ingresos, riesgos legales y arquitectura — consolidando un requerimiento completo en minutos ([caso documentado](../research/2026-07-culturas-ai-native.md) de una fintech Series D). El humano decide con ese insumo; los agentes no priorizan el roadmap.

## Reglas no negociables

1. **El experimento antes que la feature.** Toda apuesta define su métrica de éxito y su criterio de kill ANTES de construirse.
2. **La IA no decide el roadmap.** Analiza, simula y detecta; la priorización es juicio humano con responsabilidad ([principio 1](../MANIFIESTO.md#1-el-humano-dirige-la-ia-ejecuta)).
3. **Canal de producto primero**: cada ciclo de planificación responde explícitamente "¿qué trabajo del cliente puede ejecutar el software directamente?" ([principio 2](../MANIFIESTO.md#2-ia-en-el-producto-no-solo-en-el-proceso)).
4. **Precio por resultado cuando sea posible**: el modelo outcome-based alinea nuestro cobro con la tarea resuelta del cliente, no con asientos.

## La métrica

**Tasa de adopción de features** y **velocidad de entrega de valor** — nunca cantidad de features lanzadas. Ver [metricas.md](../modelo-operativo/metricas.md).
