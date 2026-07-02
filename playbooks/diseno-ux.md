# Playbook: Diseño de producto (UX/UI)

**El paradigma**: del flujo lineal de pantallas estáticas a las [interfaces basadas en intención](../GLOSARIO.md). El usuario expresa un objetivo; el sistema interpreta, ejecuta y compone en tiempo real la interfaz óptima para interactuar con el resultado. El diseñador deja de dibujar pantallas y pasa a diseñar **sistemas de reglas que generan pantallas**.

## El problema que resolvemos

El chat puro impone al usuario una carga de articulación semántica alta: reformular prompts para ajustar detalles menores es fricción, no magia. La respuesta AI-native es la estructura dinámica interactiva:

1. El usuario expresa su objetivo en lenguaje conversacional flexible.
2. El sistema responde Y renderiza un **lienzo dinámico** junto al chat: los resultados son artefactos visuales tangibles con controles interactivos.
3. El usuario ajusta parámetros directamente sobre los elementos — arrastra, modifica, aplica — de forma determinista y visual, sin reformular prompts.

**Regla de diseño**: conversación para expresar intención; manipulación directa para refinar. Nunca obligar al usuario a usar palabras donde un control resolvería.

## El sistema de diseño como vocabulario computable

El sistema de diseño deja de ser una guía estática para diseñadores humanos y se convierte en **restricciones que los modelos ejecutan** ([Generative UI](../GLOSARIO.md)):

| Componente | Antes | Ahora |
|---|---|---|
| Tokens (color, espaciado, tipografía) | Referencia visual en Figma | Vocabulario lógico versionado en el repo, que el modelo usa como restricción dura |
| Reglas de marca | PDF de brand guidelines | Reglas computables: qué combinaciones son válidas, qué está prohibido |
| Accesibilidad | Checklist de QA al final | Restricción de generación: la IA no puede ensamblar una interfaz que la viole |
| Requisitos legales | Revisión manual | Restricciones preaprobadas incorporadas al motor de generación |

**Consecuencia cultural**: el sistema de diseño vive en un repo, versionado, con PRs — porque es contexto para agentes, no solo referencia para humanos ([arquitectura de contexto](../modelo-operativo/arquitectura-de-contexto.md)).

## El rol reconfigurado del diseñador

| Antes | Ahora |
|---|---|
| Dibuja cada pantalla del flujo | Define el espacio de interfaces posibles: tokens, reglas, composiciones válidas |
| Entrega mockups estáticos | Entrega restricciones + evaluaciones: cómo verificar que lo generado cumple |
| Valida con tests de usabilidad al final | Diseña la calibración: qué intenciones entiende el sistema, dónde falla la interpretación |
| Optimiza pantallas | Optimiza la reducción de fricción end-to-end: tiempo a objetivo, tasa de éxito de tarea |

## Reglas no negociables

1. **La generación respeta el sistema de diseño siempre.** Una interfaz generada fuera de tokens/reglas es un bug de gobernanza, no una licencia creativa.
2. **Accesibilidad es restricción, no feature.** Los márgenes de accesibilidad se cumplen en generación, en todos los casos.
3. **El usuario nunca queda atrapado en el chat.** Toda acción frecuente tiene camino de manipulación directa; el chat es puerta de entrada, no jaula.
4. **Lo generado se evalúa.** Interfaces compuestas al vuelo requieren evaluación continua (visual, funcional, accesibilidad) como cualquier flujo [A4](../modelo-operativo/niveles-de-autonomia.md).

## La métrica

**Reducción de fricción del usuario**: tiempo a objetivo, tasa de éxito de tarea, facilidad de articulación conversacional. Nunca cantidad de pantallas producidas. Ver [metricas.md](../modelo-operativo/metricas.md).
