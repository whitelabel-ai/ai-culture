# Anti-patrones

Cómo se ve el fracaso de una transformación AI-First — para detectarlo temprano en nosotros mismos. Cada anti-patrón incluye su señal observable y su corrección. Si reconoces uno operando aquí, levantarlo NO es deslealtad: es exactamente el trabajo de sensor de calidad que la [estructura](../modelo-operativo/estructura-organizacional.md) espera de las personas.

## Catálogo

| # | Anti-patrón | Cómo se ve | Corrección |
|---|---|---|---|
| 1 | **Pilot purgatory** | Docenas de pilotos y POCs de IA; ninguno llega a producción ni rediseña un proceso | Elegir 2–3 flujos de alto valor y llevarlos end-to-end a A2/A3 antes de abrir otro piloto ([curva J, fase 2](curva-j.md)) |
| 2 | **Herramienta sin rediseño** | Se compran licencias, se da un training, los procesos siguen idénticos; la productividad no se mueve (o cae) | La unidad de adopción es el FLUJO, no la herramienta: rediseñar con las [cuatro capas](../modelo-operativo/cuatro-capas.md) |
| 3 | **Teatro de IA** | Métricas de "adopción" (prompts, sesiones) crecen; los resultados de negocio no | Medir resultado y apalancamiento, nunca actividad ([anti-métricas](../modelo-operativo/metricas.md)) |
| 4 | **La IA como oráculo** | Outputs aceptados sin verificación porque "la IA sabe"; decisiones justificadas con "lo dijo la herramienta" | [Confianza calibrada](../MANIFIESTO.md#10-confianza-calibrada): verificación proporcional al riesgo, responsabilidad de quien firma |
| 5 | **Vibe-everything** | Se genera código/contenido sin entender los fundamentos; nadie puede explicar lo que hay en producción | [Principio 6](../MANIFIESTO.md#6-conceptos-antes-que-código): no se mergea lo que no se puede explicar; formación de fundamentos |
| 6 | **Autonomía por deriva** | Checkpoints humanos convertidos en teatro: aprobar sin leer | Auditar la revisión; subir el nivel formalmente o rediseñar el checkpoint ([riesgos](../gobernanza/riesgos.md)) |
| 7 | **Contexto huérfano** | Se despliegan agentes sin migrar el contexto: specs en wikis cerradas, decisiones en cabezas | Primero [arquitectura de contexto](../modelo-operativo/arquitectura-de-contexto.md), después autonomía: es el desbloqueo M1→M2 |
| 8 | **El comité de innovación** | La transformación se delega a un equipo satélite; el resto de la organización espera | La transformación es del modelo operativo; cada pod rediseña sus flujos; el liderazgo la vive en su propio trabajo ([liderazgo](../talento/liderazgo.md)) |
| 9 | **Supervisión nostálgica** | Se recrean capas de gestión para "controlar a los agentes" por ansiedad, no por riesgo medido | La gobernanza es por niveles y evidencia ([A0–A4](../modelo-operativo/niveles-de-autonomia.md)), no por jerarquía |
| 10 | **Abandono en el valle** | A los 2–3 meses de caída de productividad se concluye "esto no funciona" y se recorta | Comunicar la [curva J](curva-j.md) antes de empezar; medir progreso de rediseño en el valle, no productividad |
| 11 | **Escala prematura** | Flujos A3/A4 sin evaluaciones, sin monitoreo, sin kill-switch — porque "venía funcionando" | Los [requisitos de ascenso](../modelo-operativo/niveles-de-autonomia.md) no se negocian; la [degradación silenciosa](../gobernanza/riesgos.md) no avisa |
| 12 | **Documentación monumento** | Se escribe un gran framework cultural (como este)… y nunca se vuelve a tocar | Los [rituales](rituales.md) lo mantienen vivo: jardinería mensual, glosario en cada ambigüedad, DR en cada decisión. Un repo sin commits recientes es un monumento, no una cultura |

## La prueba del anti-patrón 12

Este repositorio se audita a sí mismo: si en el último trimestre no hubo commits de mantenimiento (jardinería, DRs nuevos, términos de glosario), este framework está fallando su propia prueba — y el diagnóstico de [madurez](modelo-de-madurez.md) debe reflejarlo.
