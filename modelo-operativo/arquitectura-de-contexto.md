# Arquitectura de contexto

El output de una IA es función de la calidad de su contexto. Esta es la tesis fundacional de este repo: **si la documentación vive en repositorios de código, cada herramienta de IA de la organización puede consumirla directamente** — sin APIs propietarias, sin exports, sin copiar-pegar. La cultura, las decisiones y el conocimiento de dominio se convierten en infraestructura que los agentes leen antes de actuar.

## Por qué repos y no wikis propietarias

| Criterio | Wiki / plataforma propietaria | Repo de código (docs-as-code) |
|---|---|---|
| Acceso para IAs | Vía API propietaria, si existe | Lectura directa de archivos: universal |
| Búsqueda | Motor de la plataforma | Grep, búsqueda semántica, cualquier herramienta |
| Versionado | Historial limitado o inexistente | Git completo: quién, cuándo, por qué |
| Revisión | Edición directa sin control | Pull Request con revisión, como el código |
| Portabilidad | Lock-in | Markdown plano: migrable a cualquier lugar |
| Contexto para agentes de código | Fuera de su alcance | En el mismo entorno donde trabajan |

El coste real de una plataforma cerrada no es la licencia — es que **todo lo escrito ahí queda fuera del alcance de los agentes**, y por tanto fuera del [aprendizaje compuesto](../MANIFIESTO.md#8-aprendizaje-compuesto).

## Las capas del contexto organizacional

De más estable a más volátil:

| Capa | Qué contiene | Dónde vive | Consumidor principal |
|---|---|---|---|
| **1. Cultura y principios** | Manifiesto, glosario, gobernanza | Este repo | Personas y agentes, siempre |
| **2. Decisiones** | Decision Records con su porqué | `gobernanza/decisiones/` aquí; `docs/adr/` en cada repo de producto | Agentes antes de proponer cambios de fondo |
| **3. Conocimiento de dominio** | Specs, modelos de dominio, gráficos de contexto (por qué se rechazó un copy, qué analogías funcionan) | Repo de cada producto (`CONTEXT.md`, `docs/`) | Agentes al ejecutar trabajo del dominio |
| **4. Instrucciones operativas** | `CLAUDE.md`, skills, comandos, convenciones de cada repo | Raíz y `.claude/` de cada repo | Agentes al iniciar sesión |
| **5. Memoria de trabajo** | Aprendizajes de sesiones, bugs resueltos, patrones descubiertos | Memoria persistente (p. ej. Engram) + directorios de soluciones | Agentes entre sesiones |
| **6. Datos duros** | Especificaciones de producto, inventario, métricas | Gráfico de conocimiento / bases de datos vía MCP | Agentes en tiempo de ejecución |

**Regla de oro**: cada pieza de conocimiento tiene exactamente UNA fuente canónica. Los demás lugares enlazan, no duplican.

## Cómo escribir para que la IA lo consuma bien

Escribimos para dos lectores: el humano que llega y el agente que ejecuta. Las mismas reglas sirven a ambos:

1. **Un concepto por archivo**, con nombre descriptivo (`niveles-de-autonomia.md`, no `misc.md`). El path es parte del significado.
2. **Liderar con la respuesta**: la decisión o regla en el primer párrafo; el contexto después. Los agentes (y los humanos con prisa) leen el inicio.
3. **Tablas y listas sobre prosa**: estructura explícita = parsing sin ambigüedad.
4. **Vocabulario fijado**: usar los términos del [GLOSARIO.md](../GLOSARIO.md) de forma consistente. Sinónimos creativos confunden a ambos lectores.
5. **Enlaces relativos explícitos**: la IA navega el grafo de documentos por los enlaces. Documento sin enlaces entrantes = documento invisible.
6. **Afirmaciones verificables**: cifras con fuente, reglas con excepción explícita, ejemplos concretos. "Usar buen criterio" no es instruible; "verificar toda cifra antes de publicar" sí.
7. **Actualizar en el mismo PR**: si un cambio de código invalida un doc, el doc cambia en el mismo PR. Documentación desactualizada es peor que no tener: envenena el contexto de los agentes.

## Migración desde plataformas cerradas

Orden recomendado (mayor valor por esfuerzo primero):

- [ ] 1. Cultura, principios y gobernanza → este repo (hecho).
- [ ] 2. Decisiones de arquitectura vivas → `docs/adr/` de cada repo de producto.
- [ ] 3. Documentación técnica que los agentes necesitan para trabajar (setup, convenciones, dominio) → repo de cada producto.
- [ ] 4. Conocimiento de negocio estable (procesos, playbooks de área) → este repo o repos por área.
- [ ] 5. Lo demás: evaluar si merece migrar o morir. No todo el contenido histórico vale su coste de migración — el criterio es "¿un agente o una persona nueva lo necesitaría?".

**Qué no migra a repos**: datos operativos vivos (CRM, tickets, analytics) — esos se conectan vía MCP (capa 6), no se copian a Markdown.
