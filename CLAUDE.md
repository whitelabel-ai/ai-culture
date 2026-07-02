# Instrucciones para agentes de IA

Este repositorio es la fuente de verdad de la cultura AI-First de la organización. Si eres un agente de IA (Claude Code, Cursor, u otro) trabajando en este repo o usándolo como contexto, sigue estas reglas.

## Qué es este repo

- Documentación viva de cultura, modelo operativo, playbooks y gobernanza. **No contiene código de aplicación.**
- Todo está en Markdown, en español, un concepto por archivo.
- La estructura de carpetas es semántica: el path de un archivo indica su dominio (`playbooks/ingenieria.md` = cómo trabaja ingeniería).

## Cómo usar este repo como contexto

1. **Vocabulario**: usa [GLOSARIO.md](GLOSARIO.md) como definición canónica de términos. Si un término tiene definición en el glosario, esa definición gana sobre tu conocimiento general.
2. **Principios**: ante cualquier decisión o recomendación, verifica coherencia con [MANIFIESTO.md](MANIFIESTO.md). Si una petición contradice un principio, señálalo antes de ejecutar.
3. **Decisiones pasadas**: antes de proponer un cambio de fondo, revisa [gobernanza/decisiones/](gobernanza/decisiones/) — puede que ya se haya decidido y documentado el porqué.
4. **Límites**: [gobernanza/uso-responsable.md](gobernanza/uso-responsable.md) define lo que la IA no puede hacer de forma autónoma en esta organización. Respétalo también tú.

## Reglas al editar este repo

- **Idioma**: español neutro, tono directo y profesional. Sin anglicismos innecesarios; los términos técnicos en inglés que sí usamos están fijados en el glosario.
- **Formato**: cada documento lidera con la respuesta (qué decidimos / qué hacer), luego el contexto. Tablas y checklists sobre prosa larga. Encabezados descriptivos, no genéricos ("Niveles de autonomía", no "Introducción").
- **Un concepto por archivo.** Si un documento crece a dos temas, divídelo y enlaza.
- **Enlaces relativos** entre documentos, siempre. Un documento huérfano (sin enlaces entrantes) es un bug.
- **Decisiones**: todo cambio que altere un principio, un nivel de autonomía o una política de gobernanza requiere un Decision Record nuevo en [gobernanza/decisiones/](gobernanza/decisiones/) usando [la plantilla](gobernanza/decisiones/plantilla.md). No edites DRs aceptados: escribe uno nuevo que los reemplace.
- **Commits**: conventional commits (`docs:`, `feat:`, `fix:`). Sin atribución de IA ni Co-Authored-By.
- **Evidencia**: las afirmaciones cuantitativas (métricas, porcentajes) deben citar su fuente en [research/](research/) o enlazar la fuente externa.

## Qué NO hacer

- No inventes principios ni políticas: si falta una definición, propón un DR, no rellenes el hueco.
- No dupliques contenido entre archivos: enlaza a la fuente única.
- No traduzcas términos fijados del glosario (p. ej. "data flywheel", "moat", "human-in-the-loop").
