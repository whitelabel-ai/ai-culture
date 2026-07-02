# La curva J de la transformación

La transición a AI-First no es exponencial desde el día uno: sigue una **curva en J**. Primero se cae, después se despega. Saberlo por adelantado es la diferencia entre atravesar el valle y abandonar en el punto más bajo — justo antes de que funcione.

```
productividad
     │                                        ╱
     │                                      ╱
     │ ──── línea base ────╲              ╱
     │                       ╲          ╱
     │                         ╲______╱
     │                          valle
     └───────────────────────────────────────── tiempo
       herramientas   rediseño de    orquestación
       desordenadas   procesos       sistemática
```

## Por qué se cae primero

La caída inicial la provoca la **introducción desordenada de herramientas desarticuladas en jerarquías humanas rígidas**: cada persona experimenta por su cuenta, los flujos viejos siguen intactos, la verificación de outputs añade trabajo sin quitar ninguno. Las ventajas de escala solo se materializan cuando la organización completa el rediseño de estructuras y arquitectura de datos — cuando pasa de la experimentación individual a la **orquestación sistemática de flujos** ([research](../research/2026-07-culturas-ai-native.md)).

## Las tres fases

| Fase | Qué pasa | Qué hacer | Error típico |
|---|---|---|---|
| **1. Meseta/caída** | Herramientas nuevas + procesos viejos = fricción neta | Aceptar la caída como inversión; medir aprendizaje, no productividad | Concluir "la IA no funciona para nosotros" y recortar |
| **2. Rediseño** | Se rediseñan flujos completos alrededor de las [cuatro capas](../modelo-operativo/cuatro-capas.md); aparecen los primeros flujos A2/A3 | Elegir 2–3 flujos de alto valor y rediseñarlos end-to-end; documentar todo | Rediseñar los 20 flujos a la vez y no terminar ninguno |
| **3. Orquestación** | Los flujos se componen entre sí; el [aprendizaje compuesto](../MANIFIESTO.md#8-aprendizaje-compuesto) acelera cada ciclo | Escalar niveles de autonomía con evidencia; consolidar stack | Relajar la gobernanza justo cuando la escala la hace más necesaria |

## Responsabilidades durante el valle

- **Liderazgo**: sostener la inversión y absorber la presión de resultados a corto plazo ([responsabilidad no delegable #3](../talento/liderazgo.md)). Comunicar la curva ANTES de empezar, para que el valle no sorprenda.
- **Equipos**: reportar fricción con honestidad — el valle se acorta con datos reales, no con entusiasmo fingido.
- **Métricas**: durante la fase 1–2, las métricas primarias son de progreso de rediseño (flujos migrados, contexto migrado, evaluaciones creadas), no de productividad. Medir productividad en el valle mata la transformación.

## Señal de que estás saliendo del valle

El momento reconocible: **un flujo rediseñado produce más valor con menos esfuerzo que su versión anterior, de forma sostenida y medible** — y el equipo empieza a pedir rediseñar los siguientes en vez de resistirse. Ahí se acelera; ver [modelo-de-madurez.md](modelo-de-madurez.md) para el mapa completo.
