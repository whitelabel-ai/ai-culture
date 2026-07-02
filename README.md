# Cultura AI-First

Este repositorio es la **fuente de verdad de nuestra cultura AI-First**. Define cómo pensamos, decidimos, contratamos y construimos producto en una organización donde la inteligencia artificial es colaborador central — y el humano siempre dirige.

Vive en un repo de código por una razón deliberada: **lo que está en el repo alimenta a las IAs**. Toda herramienta de IA que usamos (Claude Code, Cursor, agentes autónomos) puede leer, buscar y citar estos documentos como contexto operativo. La cultura deja de ser un PDF olvidado y se convierte en infraestructura ejecutable.

## Ruta rápida

1. Lee el [MANIFIESTO.md](MANIFIESTO.md) — los 10 principios que gobiernan todo lo demás.
2. Lee el playbook de tu área en [playbooks/](playbooks/) — cómo se trabaja aquí día a día.
3. Consulta [gobernanza/uso-responsable.md](gobernanza/uso-responsable.md) — los límites que nunca cruzamos.
4. Cuando tomes una decisión cultural u operativa significativa, regístrala como Decision Record en [gobernanza/decisiones/](gobernanza/decisiones/).

## Mapa del repositorio

| Carpeta / Archivo | Qué contiene | Léelo cuando… |
|---|---|---|
| [MANIFIESTO.md](MANIFIESTO.md) | Los 10 principios núcleo | Llegas a la organización o dudas ante una decisión |
| [GLOSARIO.md](GLOSARIO.md) | Vocabulario compartido humano–IA | Un término te resulta ambiguo |
| [CLAUDE.md](CLAUDE.md) | Instrucciones para agentes de IA que consumen este repo | Configuras una herramienta de IA |
| [modelo-operativo/](modelo-operativo/) | Las 4 capas, niveles de autonomía, estructura organizacional, arquitectura de contexto, métricas | Diseñas un flujo de trabajo o un equipo |
| [talento/](talento/) | Competencias, contratación, liderazgo | Contratas, evalúas o creces |
| [playbooks/](playbooks/) | Ingeniería, producto, diseño UX, marketing | Trabajas en esa área |
| [gobernanza/](gobernanza/) | Uso responsable, riesgos, Decision Records | Defines límites o registras decisiones |
| [adopcion/](adopcion/) | Curva J, modelo de madurez, rituales, anti-patrones | Lideras la transformación o diagnosticas problemas |
| [research/](research/) | Evidencia empírica que fundamenta el framework | Necesitas los datos detrás de una afirmación |

## Cómo ver esta documentación

Este repo también se navega como un sitio web — no hace falta clonarlo ni saber Git para leerlo cómodo.

- **En local**: `npx docsify-cli serve .` desde la raíz, y abre `http://localhost:3000`.
- **En línea**: [whitelabel-ai.github.io/ai-culture](https://whitelabel-ai.github.io/ai-culture/) — disponible para todo el equipo sin instalar nada, en cuanto un admin del repo active GitHub Pages (Settings → Pages → Deploy from branch `main` / `root`). Ver [DR-0002](gobernanza/decisiones/DR-0002-docsify-como-capa-de-visualizacion.md).

La navegación (`_sidebar.md`) se regenera sola: [scripts/generate-sidebar.mjs](scripts/generate-sidebar.mjs) escanea todos los `.md` del repo y arma el menú. Corre automáticamente en cada push a `main` vía [GitHub Actions](.github/workflows/docs.yml); en local, ejecútalo a mano con `npm run docs:sidebar` antes de hacer commit de un documento nuevo.

## Los tres pilares (resumen ejecutivo)

1. **La IA vive en el producto, no solo en el proceso.** Añadir copilots a los empleados acelera tareas; integrar IA autónoma en la propuesta de valor transforma la empresa. Perseguimos lo segundo. Ver [research/2026-07-culturas-ai-native.md](research/2026-07-culturas-ai-native.md).
2. **El contexto es el activo, los modelos son commodity.** Nuestro foso competitivo es la calidad de nuestros datos, documentación y aprendizajes acumulados — no el acceso a modelos fundacionales. Ver [modelo-operativo/arquitectura-de-contexto.md](modelo-operativo/arquitectura-de-contexto.md).
3. **El humano dirige, la IA ejecuta.** La autonomía de la IA se otorga por niveles explícitos y verificables, nunca por omisión. Ver [modelo-operativo/niveles-de-autonomia.md](modelo-operativo/niveles-de-autonomia.md).

## Cómo contribuir

Este repo evoluciona como el código: por Pull Request, con revisión, con Decision Records para cambios de fondo. Ver [CONTRIBUTING.md](CONTRIBUTING.md).
