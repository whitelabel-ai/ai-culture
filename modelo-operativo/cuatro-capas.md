# El modelo de cuatro capas

Toda operación AI-First se estructura como un bucle cerrado de cuatro capas. Cada flujo automatizado que diseñemos debe poder responder qué hace en cada capa; si no puede, el flujo está incompleto.

```
┌─────────────────────────────────────────────┐
│  1. SENSORES      → capturar todo           │
│  2. GOBERNANZA    → decidir qué puede la IA │
│  3. HERRAMIENTAS  → darle manos a la IA     │
│  4. APRENDIZAJE   → cerrar el bucle         │
└──────────────────△──────────────────────────┘
                   └── el aprendizaje reescribe las reglas del siguiente ciclo
```

## 1. Capa de sensores — legibilidad total

**Función**: capturar y digitalizar todo lo que la organización produce: conversaciones, correos, tickets, cambios de código, notas de reunión, decisiones.

**Regla cultural**: lo que no se captura no puede alimentar a la IA ni al aprendizaje. Por eso el principio ["si no está en el repo, no existe"](../MANIFIESTO.md#4-si-no-está-en-el-repo-no-existe) no es burocracia — es instrumentación.

**En la práctica**:
- Reuniones significativas producen notas en repos o sistemas exportables.
- Las decisiones se registran como [Decision Records](../gobernanza/decisiones/).
- El trabajo de agentes deja rastro auditable (logs, PRs, reportes).

## 2. Capa de gobernanza — fronteras de autonomía

**Función**: determinar dinámicamente qué puede hacer la IA sola, qué requiere aprobación humana y dónde el juicio humano es indispensable.

**Regla cultural**: la autonomía se asigna por flujo, con nivel explícito ([A0–A4](niveles-de-autonomia.md)), y se ajusta con evidencia. La gobernanza no es un freno: es lo que permite delegar más rápido con confianza.

**En la práctica**:
- Ningún agente toca producción, pagos o clientes sin nivel asignado.
- Los límites duros están en [uso-responsable.md](../gobernanza/uso-responsable.md).

## 3. Capa de herramientas — manos deterministas

**Función**: dar a los agentes acceso directo y gobernado a los sistemas donde actúan: bases de datos, APIs, sistemas de pago, despliegue, analytics.

**Regla cultural**: preferimos accesos estándar y auditables (MCP, APIs con credenciales de mínimo privilegio) sobre integraciones ad-hoc. Cada herramienta expuesta a un agente es una superficie de riesgo que se documenta.

**En la práctica**:
- Conectores MCP para producción de solo lectura, analytics, monitoreo de errores y pagos (ver [playbooks/producto.md](../playbooks/producto.md)).
- Credenciales de agentes separadas de credenciales humanas, con permisos mínimos.

## 4. Mecanismo de aprendizaje — el bucle se cierra

**Función**: analizar sistemáticamente las desviaciones entre objetivo y resultado, y reescribir las reglas operativas del siguiente ciclo.

**Regla cultural**: este es el diferencial. Una organización que ejecuta las capas 1–3 sin la 4 tiene automatización; una que cierra el bucle tiene [aprendizaje compuesto](../MANIFIESTO.md#8-aprendizaje-compuesto). Aquí es donde el organigrama piramidal se convierte en un bucle de mejora.

**En la práctica**:
- Cada trabajo significativo cierra archivando aprendizajes (ver [rituales](../adopcion/rituales.md)).
- Los fallos de agentes alimentan evaluaciones y ajustes de nivel de autonomía.
- Las métricas de [metricas.md](metricas.md) detectan degradación antes de que sea incidente.

## Checklist para diseñar un flujo nuevo

- [ ] **Sensores**: ¿qué datos captura el flujo y dónde quedan consultables?
- [ ] **Gobernanza**: ¿qué nivel de autonomía tiene y quién lo aprobó?
- [ ] **Herramientas**: ¿a qué sistemas accede, con qué credenciales, con qué permisos mínimos?
- [ ] **Aprendizaje**: ¿cómo se detectan sus errores y quién ajusta las reglas?
