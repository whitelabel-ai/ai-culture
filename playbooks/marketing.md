# Playbook: Marketing digital

**El paradigma**: liberar sistemáticamente el trabajo humano de la distribución masiva y la adaptación geográfica, y reinvertirlo donde la IA no diferencia — creatividad de marca y relaciones de alta confianza con clientes. La IA atomiza y escala; el humano define la voz y la estrategia.

## La arquitectura de datos del marketing AI-native

La consistencia a escala no sale de revisar manualmente cada pieza — sale de estructurar el contexto una vez y gobernarlo:

| Componente | Qué contiene | Ejemplo |
|---|---|---|
| **Gráfico de conocimiento** | Datos duros del negocio | Especificaciones de producto, disponibilidad, inventario de miles de SKUs |
| **[Gráfico de contexto](../GLOSARIO.md)** | Directrices narrativas e históricas | Por qué se rechazaron copys pasados, qué analogías funcionan en cada mercado, restricciones de lenguaje legal |
| **Canales de ejecución preaprobados** | Límites de gobernanza definidos por creativo + IT | Plataforma de generación empresarial (tipo Writer) conectada a ambos gráficos |

Con esto, los flujos generan miles de variantes de descripciones, adaptaciones regionales y correos hiper-segmentados **sin revisión manual continua** — porque la gobernanza está en el sistema, no en el embudo de aprobaciones.

## Qué automatizamos y qué no

| Trabajo | Modo | Nivel de autonomía |
|---|---|---|
| Variantes de contenido dentro de plantillas aprobadas | Automatizado | [A3](../modelo-operativo/niveles-de-autonomia.md) con auditoría por muestreo |
| Localización y adaptación regional | Automatizado con revisión por mercado nuevo | A2 → A3 al madurar el mercado |
| Investigación contextual (mercado, competencia, tendencias) | Agente investiga, humano concluye | A1 |
| Posicionamiento, narrativa de marca, campañas creativas | Humano dirige, IA asiste | A1 |
| Envíos masivos y publicaciones | Checkpoint humano SIEMPRE (irreversible) | Techo A2 ([niveles](../modelo-operativo/niveles-de-autonomia.md)) |
| Relaciones con clientes clave, PR, crisis | Humano | A0 |

## Reglas no negociables

1. **El gráfico de contexto se alimenta siempre.** Cada copy rechazado, cada aprendizaje de mercado, cada restricción legal nueva se registra — es el [aprendizaje compuesto](../MANIFIESTO.md#8-aprendizaje-compuesto) aplicado a la voz de marca. Un rechazo no documentado se repetirá.
2. **Toda cifra y claim se verifica antes de publicar.** El error confidente de la IA en un claim de producto es riesgo legal, no solo de marca ([confianza calibrada](../MANIFIESTO.md#10-confianza-calibrada)).
3. **Lo irreversible lleva checkpoint humano.** Un envío masivo o una publicación no se deshace; el techo es A2 sin importar el historial de fiabilidad.
4. **La marca la define el humano.** La IA ejecuta variaciones dentro de una identidad que es juicio creativo humano — si la voz de marca la escribe la IA, la marca es un promedio de internet.

## La métrica

**Coherencia de marca a escala** (miles de SKUs/variantes sin desviación de identidad) y **volumen de adquisición orgánica**. Nunca cantidad de piezas generadas. Ver [metricas.md](../modelo-operativo/metricas.md).
