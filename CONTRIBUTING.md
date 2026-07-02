# Cómo contribuir a este repo

Este repositorio evoluciona como el código: por Pull Request, con revisión. Cualquier persona de la organización puede (y debe) proponer cambios — detectar una ambigüedad y no corregirla es dejar [contexto envenenado](gobernanza/riesgos.md) para la siguiente persona o agente.

## Ruta rápida

1. Crea una rama: `git checkout -b docs/lo-que-cambias`.
2. Edita siguiendo las reglas de escritura de abajo.
3. Si agregaste, moviste o renombraste un documento, corre `npm run docs:sidebar` para actualizar la navegación del sitio.
4. Abre un PR explicando el porqué (no solo el qué).
5. Un revisor humano aprueba. Cambios de fondo (principios, límites, niveles de autonomía) requieren además un [Decision Record](gobernanza/decisiones/).

## Reglas de escritura

Las mismas que consumen los agentes ([detalle completo](modelo-operativo/arquitectura-de-contexto.md)):

- **Español neutro**, tono directo y profesional. Términos en inglés solo los fijados en el [GLOSARIO.md](GLOSARIO.md).
- **Lidera con la respuesta**: la regla o decisión en el primer párrafo; el contexto después.
- **Un concepto por archivo**; si crece a dos temas, divide y enlaza.
- **Tablas y checklists sobre prosa larga.**
- **Enlaces relativos** entre docs; ningún documento huérfano.
- **Cifras con fuente**: enlaza a [research/](research/) o a la fuente externa.
- **Commits convencionales**: `docs: añade término X al glosario`. Sin atribución de IA.

## Qué va dónde

| Quieres… | Hazlo en… |
|---|---|
| Corregir, aclarar o actualizar un doc | PR directo |
| Añadir un término ambiguo | [GLOSARIO.md](GLOSARIO.md), en el mismo PR que resolvió la ambigüedad |
| Cambiar un principio, límite o política | PR + [DR nuevo](gobernanza/decisiones/plantilla.md) |
| Registrar una decisión significativa | [DR nuevo](gobernanza/decisiones/) + fila en su índice |
| Aportar evidencia/investigación | [research/](research/) con fecha en el nombre del archivo |

## Revisión de PRs de documentación

El revisor verifica:

- [ ] ¿Es coherente con el [MANIFIESTO.md](MANIFIESTO.md)? Si lo contradice, falta un DR.
- [ ] ¿Duplica contenido que ya vive en otro doc? (enlazar, no duplicar)
- [ ] ¿Usa el vocabulario del glosario de forma consistente?
- [ ] ¿Un agente que lea SOLO este doc sacaría la conclusión correcta?
- [ ] Si hay documentos nuevos o movidos, ¿corrió `npm run docs:sidebar`?

Esa última pregunta es la prueba definitiva: escribimos para el humano que llega y para la IA que ejecuta.
