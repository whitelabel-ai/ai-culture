# Manifiesto AI-First

Diez principios gobiernan cómo trabajamos. Cuando una decisión sea ambigua, estos principios son el criterio de desempate. Cambiar un principio requiere un [Decision Record](gobernanza/decisiones/).

## Resumen

| # | Principio | En una frase |
|---|---|---|
| 1 | El humano dirige, la IA ejecuta | La IA es una herramienta con enorme apalancamiento; la dirección, el criterio y la responsabilidad son siempre humanos |
| 2 | IA en el producto, no solo en el proceso | Copilots internos aceleran tareas; IA en la propuesta de valor transforma el negocio |
| 3 | El contexto es el activo | Los modelos son commodity; nuestros datos, docs y aprendizajes acumulados son el moat |
| 4 | Si no está en el repo, no existe | Documentación versionada, greppeable y consumible por IAs — o no cuenta |
| 5 | Escalamos con cómputo, no con headcount | El crecimiento de valor se desacopla del crecimiento de plantilla |
| 6 | Conceptos antes que código | Quien no entiende los fundamentos no puede dirigir a una IA que los aplica |
| 7 | Autonomía por niveles, nunca por omisión | Cada flujo de IA tiene un nivel de autonomía explícito, ganado con evidencia |
| 8 | Aprendizaje compuesto | Cada problema resuelto se archiva como contexto; la organización no repite errores |
| 9 | Equipos pequeños de alta madurez | Pocas personas con criterio propio superan a muchas ejecutando procedimientos |
| 10 | Confianza calibrada | Todo output probabilístico se interroga; la verificación es parte del trabajo, no un extra |

---

## 1. El humano dirige, la IA ejecuta

**Qué significa.** La IA es el motor; nosotros somos el arquitecto. Define el humano: el problema, las restricciones, el criterio de éxito y la decisión final. Ejecuta la IA: la búsqueda, el borrador, el código, el análisis. La responsabilidad por el resultado nunca se delega — quien firma el PR, el copy o la decisión responde por ella aunque la haya generado una IA.

**Qué hacemos.** Formulamos problemas con precisión antes de delegar. Revisamos todo output que llega a producción o a un cliente.

**Qué no hacemos.** No usamos "lo dijo la IA" como justificación. No dejamos que un agente tome decisiones irreversibles sin punto de control humano.

## 2. IA en el producto, no solo en el proceso

**Qué significa.** Existen dos canales de adopción con consecuencias opuestas ([evidencia](research/2026-07-culturas-ai-native.md)): el canal de proceso (herramientas para empleados) acelera tareas pero no cambia la estructura ni el moat; el canal de producto (IA autónoma dentro de la propuesta de valor) desplaza la ejecución del trabajo hacia el software y activa un data flywheel propietario. Priorizamos el segundo sin abandonar el primero.

**Qué hacemos.** Cada roadmap de producto responde: ¿qué trabajo del cliente puede ejecutar el software directamente?

**Qué no hacemos.** No confundimos "añadimos un botón de resumir con IA" con ser AI-First.

## 3. El contexto es el activo

**Qué significa.** Los modelos fundacionales están commoditizados. Lo que ningún competidor puede copiar es nuestro contexto: datos propietarios, decisiones documentadas con su porqué, aprendizajes de errores pasados, vocabulario de dominio. La calidad del output de una IA es función directa de la calidad del contexto que le damos. Ver [arquitectura de contexto](modelo-operativo/arquitectura-de-contexto.md).

**Qué hacemos.** Tratamos la documentación como infraestructura: tiene dueño, mantenimiento y estándares de calidad.

**Qué no hacemos.** No dejamos conocimiento crítico en chats, cabezas o herramientas propietarias sin export.

## 4. Si no está en el repo, no existe

**Qué significa.** La documentación vive en repositorios de código: versionada en Git, revisada por PR, en Markdown plano que cualquier IA puede leer, buscar y citar. Una wiki propietaria, un documento suelto o una decisión verbal son invisibles para nuestros agentes — y por tanto, operativamente inexistentes.

**Qué hacemos.** Migramos la documentación de plataformas cerradas a repos. Escribimos para dos lectores: el humano que llega y la IA que ejecuta.

**Qué no hacemos.** No documentamos en formatos que requieran una API propietaria para leerse.

## 5. Escalamos con cómputo, no con headcount

**Qué significa.** El indicador de salud de una organización AI-First es que los ingresos crecen más rápido que la plantilla. Los equipos AI-native alcanzan $10M ARR con 8–12 personas donde antes hacían falta 60 ([evidencia](research/2026-07-culturas-ai-native.md)). Antes de abrir una vacante, la pregunta obligatoria es: ¿esto lo resuelve un agente, un flujo automatizado o una persona?

**Qué hacemos.** Presupuestamos cómputo e inferencia como antes se presupuestaba headcount.

**Qué no hacemos.** No usamos la IA como excusa para no contratar cuando el trabajo exige juicio humano que no tenemos.

## 6. Conceptos antes que código

**Qué significa.** La IA escribe código, textos y análisis más rápido que cualquier humano — lo que vuelve MÁS valioso, no menos, entender los fundamentos: arquitectura, patrones de diseño, dominio del negocio. Quien no entiende lo que la IA genera no puede revisarlo, y quien no puede revisarlo no puede dirigir. El atajo de "funciona, no sé por qué" es deuda que la organización paga con intereses.

**Qué hacemos.** Invertimos en formación de fundamentos. En las revisiones preguntamos el porqué, no solo el qué.

**Qué no hacemos.** No aceptamos en producción código o decisiones que su autor humano no pueda explicar.

## 7. Autonomía por niveles, nunca por omisión

**Qué significa.** Cada flujo donde participa la IA tiene un nivel de autonomía explícito — desde "sugiere y el humano aprueba" hasta "ejecuta y reporta" — definido en [niveles de autonomía](modelo-operativo/niveles-de-autonomia.md). Subir de nivel requiere evidencia de fiabilidad, no entusiasmo. La variabilidad probabilística de la IA es nuestro principal riesgo operativo y se gestiona con gobernanza, no con esperanza.

**Qué hacemos.** Documentamos el nivel de autonomía de cada flujo automatizado y los criterios para subirlo o bajarlo.

**Qué no hacemos.** No conectamos agentes a sistemas de producción, pagos o clientes sin nivel asignado y aprobado.

## 8. Aprendizaje compuesto

**Qué significa.** Cada bug resuelto, decisión tomada o patrón descubierto se archiva como contexto consultable (Decision Records, memoria persistente, directorios de soluciones). Así, cada ciclo de trabajo parte del acumulado del anterior: la IA no repite errores de diseño ya cometidos y las personas nuevas heredan años de criterio en horas. Este es el mecanismo que convierte actividad en ventaja compuesta.

**Qué hacemos.** Cerramos cada trabajo significativo archivando qué aprendimos y dónde. Los rituales de [adopcion/rituales.md](adopcion/rituales.md) lo hacen sistemático.

**Qué no hacemos.** No consideramos "terminado" un problema difícil cuyo aprendizaje quedó solo en la cabeza de quien lo resolvió.

## 9. Equipos pequeños de alta madurez

**Qué significa.** El diseño organizacional AI-First favorece pods reducidos de profesionales sénior con capacidad de decisión autónoma, operando con gran apalancamiento tecnológico. Los mandos medios cuya función era enrutar información desaparecen; las personas se desplazan a los márgenes como sensores de calidad y tomadores de decisiones complejas. Ver [estructura organizacional](modelo-operativo/estructura-organizacional.md).

**Qué hacemos.** Contratamos por criterio, adaptabilidad y fluidez en IA. Damos a cada persona autoridad proporcional a su responsabilidad.

**Qué no hacemos.** No creamos capas de supervisión para compensar falta de confianza — resolvemos la falta de confianza.

## 10. Confianza calibrada

**Qué significa.** Los outputs de la IA son probabilísticos: a veces brillantes, a veces confidentemente erróneos. La competencia central del trabajador AI-First es calibrar cuándo confiar — verificar en proporción al riesgo, detectar alucinaciones, distinguir "suena bien" de "es correcto". Ni escepticismo paralizante ni fe ciega: interrogación rigurosa y proporcional.

**Qué hacemos.** Definimos por flujo qué se verifica siempre (código a producción, cifras, claims legales) y qué se muestrea.

**Qué no hacemos.** No publicamos ni ejecutamos outputs de IA sobre asuntos de alto riesgo sin verificación humana documentada.

---

**Siguiente paso**: ver cómo estos principios se materializan en el [modelo operativo](modelo-operativo/) y en el [playbook de tu área](playbooks/).
