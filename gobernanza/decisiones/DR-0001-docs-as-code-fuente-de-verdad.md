# DR-0001: La cultura vive en un repo de código como fuente de verdad

- **Estado**: Aceptado
- **Fecha**: 2026-07-02
- **Decisores**: Daniel (fundador)

## Decisión

Toda la documentación de cultura, modelo operativo, playbooks y gobernanza vive en este repositorio Git, en Markdown plano, gestionada por Pull Requests. Migramos progresivamente la documentación desde plataformas propietarias hacia repos. Este repo es la fuente canónica: ante conflicto entre lo que dice el repo y cualquier otra fuente, gana el repo.

## Contexto

La documentación organizacional vivía dispersa en plataformas propietarias. La tesis que motiva el cambio: las herramientas de IA (Claude Code, Cursor, agentes autónomos) son ya el principal ejecutor de trabajo de la organización, y **solo pueden consumir como contexto lo que pueden leer directamente**. Una wiki cerrada deja la cultura fuera del alcance de los agentes; un repo la convierte en infraestructura operativa. Además, la documentación de cultura necesita lo mismo que el código: versionado, revisión, historial del porqué.

## Alternativas consideradas

| Alternativa | Por qué se descartó |
|---|---|
| Wiki propietaria (Notion, Confluence) | Acceso para IAs mediado por APIs propietarias; sin PRs ni versionado real; lock-in del contenido |
| Documentos sueltos (Drive, Office) | Sin estructura navegable, sin versionado semántico, invisible para agentes de código |
| Repo + espejo en wiki "para lectura cómoda" | Duplicación garantiza divergencia; la fuente única es innegociable (regla de oro de [arquitectura de contexto](../../modelo-operativo/arquitectura-de-contexto.md)) |

## Consecuencias

- **Positivas**: todo agente de la organización puede leer, buscar y citar la cultura; las decisiones tienen historial Git; la documentación se revisa con el mismo rigor que el código; cero lock-in.
- **Negativas / coste asumido**: mayor fricción de edición para perfiles no técnicos (aprender Git/PRs); sin las comodidades visuales de una wiki; requiere disciplina de mantenimiento explícita (métrica de frescura documental).
- **Reversibilidad**: alta — Markdown plano migra a cualquier destino. Señal de reconsideración: si la fricción de edición hiciera que áreas completas dejen de documentar, evaluaríamos interfaces de edición sobre el repo (nunca reemplazar el repo como fuente).
