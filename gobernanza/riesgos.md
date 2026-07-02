# Riesgos operativos de la IA a escala

La variabilidad probabilística de la IA es el principal riesgo de supervivencia de una organización AI-native — por encima de la adquisición de clientes ([research](../research/2026-07-culturas-ai-native.md)). Estos son los modos de fallo conocidos, cómo se ven y cómo los mitigamos.

## Registro de riesgos

| Riesgo | Cómo se ve | Mitigación | Detección |
|---|---|---|---|
| **Degradación silenciosa** | Un flujo pierde calidad gradualmente sin fallo visible (cambio de modelo, deriva de datos, contexto envejecido) | Suites de evaluación versionadas con línea base; comparación continua | Métrica de deriva de calidad ([metricas.md](../modelo-operativo/metricas.md)) |
| **Inconsistencia semántica** | Dos flujos/equipos usan el mismo término con significados distintos; los agentes propagan la confusión a escala | [GLOSARIO.md](../GLOSARIO.md) como definición canónica; regla de "detectada la ambigüedad, se fija en el mismo PR" | Discusiones circulares; outputs de agentes que se contradicen |
| **Gobernanza tardía** | Se introducen controles de cumplimiento cuando el sistema ya está en producción; el retrofit es 10x más caro | Los checkpoints de las [cuatro capas](../modelo-operativo/cuatro-capas.md) desde el diseño; techo regulatorio en [uso-responsable.md](uso-responsable.md) | Flujo A3+ sin evaluaciones ni kill-switch = alarma |
| **Error confidente (alucinación)** | Output incorrecto presentado con seguridad: cifra inventada, API inexistente, claim legal falso | [Confianza calibrada](../MANIFIESTO.md#10-confianza-calibrada): verificación proporcional al riesgo, definida por flujo | Post-mortems; tasa de intervención en checkpoints |
| **Contexto envenenado** | Documentación desactualizada o errónea que los agentes consumen como verdad, multiplicando el error | Docs cambian en el mismo PR que las invalida; métrica de frescura documental | Agentes que repiten un error "raro" consistentemente: buscar la fuente en el contexto |
| **Autonomía por deriva** | Checkpoints humanos que se vuelven teatro (aprobar sin leer) — un A1 que opera como A3 sin gobernanza | Auditoría de la calidad de revisión; o se sube el nivel formalmente o se rediseña el checkpoint | Tiempo de aprobación implausiblemente corto; 0 rechazos en meses |
| **Dependencia de proveedor** | Un cambio de precio, política o API de un proveedor de modelos rompe la operación | Abstracción de proveedor donde sea crítico; contexto en formatos portables (el repo, no la plataforma) | Revisión trimestral de concentración de proveedor |
| **Fuga de datos por prompt** | Información sensible enviada a modelos sin acuerdo, por comodidad o desconocimiento | Tabla de datos en [uso-responsable.md](uso-responsable.md); credenciales de agente de mínimo privilegio | Auditoría de logs de agentes |
| **Atrofia de fundamentos** | El equipo pierde (o nunca construye) la capacidad de entender lo que la IA produce; el Discernimiento colapsa | [Principio 6](../MANIFIESTO.md#6-conceptos-antes-que-código): formación continua, revisiones que preguntan el porqué | Nadie puede explicar un sistema en producción sin preguntarle a la IA |
| **Fatiga cognitiva** | Burnout por supervisión continua de outputs + aislamiento del trabajo mediado por IA | Competencia socioemocional ([talento](../talento/competencias.md)); rotación de tareas de revisión; espacios presenciales de alta densidad | Rotación de personal; caída de calidad de revisión |

## Protocolo ante un incidente de IA

1. **Degradar primero, investigar después**: bajar el nivel de autonomía del flujo es inmediato y no requiere aprobación ([regla 3 de niveles](../modelo-operativo/niveles-de-autonomia.md)).
2. **Post-mortem sin culpa**, con una pregunta extra a la clásica: ¿el fallo fue del modelo, del contexto que le dimos, o de la gobernanza que no lo detectó?
3. **El aprendizaje se archiva** (DR o memoria persistente) y alimenta las evaluaciones — el mismo fallo dos veces sí es un fallo de cultura.
