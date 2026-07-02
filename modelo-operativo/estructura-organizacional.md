# Estructura organizacional

De la pirámide al bucle: en una organización AI-First, la coordinación que hacían los mandos medios la hace un sistema de inteligencia central, y las personas se desplazan a los márgenes como sensores de calidad y tomadores de decisiones complejas.

## Por qué cambia la estructura

Las jerarquías existían para resolver un cuello de botella: transmitir y agregar información a escala. Cuando la información se captura, procesa y distribuye de forma instantánea (capa de sensores + inteligencia central), la función de **enrutamiento humano de información desaparece** — y con ella, la razón de ser de buena parte de los mandos medios. La evidencia empírica ([research](../research/2026-07-culturas-ai-native.md)) muestra que el canal de producto reduce ~25% el tamaño total del equipo y aplana el organigrama; los equipos AI-native alcanzan $50M ARR con 25–30 personas.

## La unidad por defecto: el pod

| Atributo | Definición |
|---|---|
| Tamaño | 2–5 personas sénior + agentes de IA |
| Alcance | End-to-end sobre un resultado de negocio (no sobre una función) |
| Ratio típico | ~1 PM por cada 1–2 ingenieros; diseño y datos compartidos entre pods |
| Autoridad | Decide dentro de su dominio sin escalar; escala solo conflictos inter-pod y apuestas estratégicas |
| Rendición de cuentas | Métricas de resultado ([metricas.md](metricas.md)), no de actividad |

Cada pod opera su propia instancia del [modelo de cuatro capas](cuatro-capas.md): captura su contexto, gobierna sus agentes, mantiene sus herramientas y archiva sus aprendizajes.

## El nuevo rol de las personas

Las personas no gestionan la asignación manual de tareas — eso lo hace la orquestación. Se concentran en lo que la IA no puede hacer:

- **Decisiones complejas y ambiguas**: cuando el problema no está bien formulado o los datos se contradicen.
- **Resolución de conflictos inter-agentes e inter-pods**: cuando dos flujos automatizados chocan.
- **Alineación estratégica ante ambigüedad extrema**: pivots, apuestas, dirección.
- **Relaciones de alta confianza**: clientes clave, socios, talento.
- **Supervisión de calidad**: [confianza calibrada](../MANIFIESTO.md#10-confianza-calibrada) sobre los outputs que importan.

## Secuencia de liderazgo al escalar

El organigrama directivo se despliega por fases, equilibrando cómputo y runway:

| Fase | Perfil | Foco |
|---|---|---|
| 1. Constructores | Cofundador de producto + CTO | Producto, coste de inferencia, infraestructura MLOps |
| 2. Validadores | Ventas + Finanzas | Ajuste de mercado del modelo de monetización (outcome-based) |
| 3. Escaladores | Marketing + Talento + Ética/Cumplimiento de IA | Crecimiento y marcos regulatorios (EU AI Act) |

## Reglas culturales

1. **Antes de abrir una vacante**: ¿esto lo resuelve un agente, un flujo o una persona? (principio 5). La vacante se justifica por juicio humano requerido, no por volumen de tareas.
2. **Antes de crear una capa de gestión**: ¿qué información enruta esa capa que el sistema no pueda enrutar? Si la respuesta es "supervisión", el problema es de confianza o de gobernanza — se resuelve ahí.
3. **Los agentes aparecen en el diseño del equipo.** Al planificar capacidad, los flujos automatizados cuentan como capacidad de ejecución, con su nivel de autonomía y su dueño humano.
4. **Todo flujo automatizado tiene exactamente un dueño humano** responsable de su calidad y sus aprendizajes. Sin dueño, no hay flujo.
