# Métricas

Medimos que la cultura AI-First funciona con métricas de **resultado y apalancamiento**, no de actividad. "Cuántos prompts se ejecutaron" no es una métrica; "cuánto valor entrega cada persona" sí.

## Métricas de apalancamiento organizacional

| Métrica | Definición | Señal sana |
|---|---|---|
| Ingresos por empleado | ARR / headcount | Crece trimestre a trimestre; benchmark AI-native: $10M ARR con 8–12 personas |
| Ratio de escala | % crecimiento de ingresos vs % crecimiento de plantilla | Ingresos crecen más rápido que plantilla (principio 5) |
| Coste de cómputo por resultado | Gasto en inferencia / unidad de valor entregada | Estable o decreciente al escalar |
| Consolidación de stack | Nº de herramientas SaaS activas | Decreciente (benchmark: hasta 66% de consolidación) |

## Métricas por área (resultado, no actividad)

| Área | Métrica primaria | Anti-métrica (no optimizar) |
|---|---|---|
| Ingeniería | Velocidad de entrega de código **calificado** (pasa revisión y evaluaciones); reducción de deuda de seguridad | Líneas de código generadas |
| Producto | Tasa de adopción de features; velocidad de entrega de valor | Nº de features lanzadas |
| Diseño UX | Reducción de fricción del usuario (tiempo a objetivo, tasa de éxito de tarea) | Nº de pantallas producidas |
| Marketing | Coherencia de marca a escala; volumen de adquisición orgánica | Nº de piezas generadas |

## Métricas de salud de los flujos de IA

Obligatorias para todo flujo A2 o superior (ver [niveles de autonomía](niveles-de-autonomia.md)):

| Métrica | Qué detecta | Umbral de acción |
|---|---|---|
| Tasa de intervención humana | Cuántas veces el checkpoint corrige a la IA | > 10% sostenido bloquea ascensos de nivel; en A3+, subida repentina = degradar |
| Tasa de error en evaluaciones | Calidad contra suite de evaluación versionada | Bajo el umbral definido por el flujo → degradar nivel |
| Deriva de calidad | Comparación de outputs actuales vs línea base histórica | Detecta [degradación silenciosa](../GLOSARIO.md) ante cambios de modelo |
| Incidentes por flujo | Errores que llegaron a cliente o producción | Cualquier incidente dispara revisión del nivel de autonomía |

**Regla**: toda suite de evaluación se versiona en el repo del flujo, como los tests. Un flujo sin evaluaciones no puede superar A2.

## Métricas de aprendizaje compuesto

| Métrica | Definición | Señal sana |
|---|---|---|
| Aprendizajes archivados / mes | DRs + soluciones + memoria persistente escritos | Constante y distribuida entre pods (no un solo autor) |
| Reutilización de contexto | Con qué frecuencia agentes/personas citan docs y DRs existentes | Creciente: el acumulado se usa |
| Frescura documental | % de docs tocados en los últimos 6 meses o marcados como estables | Sin zonas muertas: doc viejo sin marca de estable = deuda |

## Anti-métricas: lo que NO medimos

- **Uso de IA por persona** (prompts, sesiones): incentiva teatro de adopción, no resultados.
- **Velocidad bruta sin calidad**: código rápido que no pasa revisión es coste, no progreso.
- **Actividad de agentes** (tareas ejecutadas): un agente puede ejecutar mucho y aportar nada.

La regla general: si una métrica se puede inflar usando MÁS IA sin crear más valor, es una anti-métrica.
