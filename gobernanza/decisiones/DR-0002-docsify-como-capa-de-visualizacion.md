# DR-0002: Docsify como capa de visualización del repo, con navegación autogenerada

- **Estado**: Aceptado
- **Fecha**: 2026-07-02
- **Decisores**: Daniel (fundador)

## Decisión

Adoptamos [Docsify](https://docsify.js.org) como capa de visualización de este repositorio: un `index.html` en la raíz que renderiza los `.md` existentes como un sitio navegable, sin paso de build. La navegación (`_sidebar.md`) se genera automáticamente con [scripts/generate-sidebar.mjs](../../scripts/generate-sidebar.mjs) — a mano en local (`npm run docs:sidebar`) o sola en cada push a `main` vía [GitHub Actions](../../.github/workflows/docs.yml). Cualquier persona del equipo entra a la URL publicada (o corre `npx docsify-cli serve .` en local) sin instalar nada ni tocar Git.

## Contexto

El repo ya cumplía su función como fuente de contexto para agentes ([principio 4](../../MANIFIESTO.md#4-si-no-está-en-el-repo-no-existe)), pero para las personas del equipo navegar `.md` sueltos es incómodo: sin búsqueda global cómoda, sin vista de conjunto, sin nada que alguien no técnico abra con confianza. Se necesitaba una UI que (a) no requiera build ni mantenimiento de infraestructura pesada, (b) muestre documentos nuevos sin trabajo manual cuando cualquier agente o persona los agregue, y (c) no comprometa el principio de que el repo — no una plataforma cerrada — sigue siendo la única fuente de verdad.

## Alternativas consideradas

| Alternativa | Por qué se descartó |
|---|---|
| MkDocs / MkDocs Material | Requiere Python, entorno virtual y build previo a cada despliegue; más robusto pero más pesado de lo que este repo necesita hoy |
| Docusaurus | Build completo de React/Node; pensado para sitios de producto, no para un repo de documentación interna |
| GitBook / sincronizar a Notion | Plataforma cerrada con su propio almacenamiento — contradice [DR-0001](DR-0001-docs-as-code-fuente-de-verdad.md): el repo dejaría de ser la única fuente de verdad |
| Navegar los `.md` directo en GitHub | Cero mantenimiento, pero sin búsqueda de texto completo ni vista de conjunto — no resuelve el pedido de una UI para cualquier persona |
| Sidebar mantenido a mano | Se desincroniza en cuanto alguien olvida editarlo; contradice el objetivo de que los documentos nuevos aparezcan solos |

## Consecuencias

- **Positivas**: cero build, cero dependencias de producción (todo vía CDN); cualquier persona ve el sitio sin instalar nada; cualquier agente que agregue un `.md` lo ve reflejado en la navegación sin trabajo manual (CI) o con un comando (local); el repo sigue siendo Markdown plano — Docsify es una lente, no un formato nuevo.
- **Negativas / coste asumido**: la búsqueda y el render dependen de JavaScript cargado desde CDN (`jsdelivr`) — sin conexión a internet el sitio no carga, aunque los `.md` siguen siendo legibles como texto plano sin Docsify. El job de CI necesita permiso de escritura sobre el repo para commitear `_sidebar.md`.
- **Reversibilidad**: alta. `index.html`, `_sidebar.md`, `.nojekyll` y `scripts/` se pueden borrar sin tocar un solo documento — Docsify es una capa encima del contenido, nunca el contenido mismo. Señal para reconsiderar: si el equipo crece a necesitar versionado de docs por idioma o por release, evaluar MkDocs Material en ese momento.
