# Decision Records (DRs)

Registro inmutable de las decisiones significativas de la organización: qué decidimos, qué alternativas consideramos y POR QUÉ. Es la memoria de largo plazo que humanos y agentes consultan antes de proponer cambios de fondo — la materialización del [aprendizaje compuesto](../../MANIFIESTO.md#8-aprendizaje-compuesto) a nivel de decisiones.

## Cuándo se escribe un DR

- Se adopta, cambia o abandona un principio, política o límite de gobernanza.
- Un flujo asciende a nivel de autonomía A3 o A4.
- Se elige una plataforma, herramienta o proveedor con efecto duradero.
- Se descarta un camino que alguien volverá a proponer en seis meses (el DR ahorra esa conversación).

No requieren DR: decisiones reversibles de bajo impacto, elecciones técnicas locales de un repo de producto (esas van en el `docs/adr/` de ese repo).

## Reglas

1. **Los DRs aceptados no se editan.** Una decisión nueva que contradice una vieja se registra como DR nuevo con estado `reemplaza a DR-XXXX`; el viejo se marca `reemplazado por DR-YYYY`.
2. **Numeración secuencial**: `DR-0002-titulo-en-kebab-case.md`.
3. **El porqué pesa más que el qué.** El valor del DR para un lector futuro (humano o IA) está en el contexto y las alternativas descartadas.
4. Usa [plantilla.md](plantilla.md).

## Índice

| DR | Título | Estado |
|---|---|---|
| [DR-0001](DR-0001-docs-as-code-fuente-de-verdad.md) | La cultura vive en un repo de código como fuente de verdad | Aceptado |

**Mantenimiento**: todo DR nuevo se añade a este índice en el mismo PR.
