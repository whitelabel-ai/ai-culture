// Genera _sidebar.md escaneando los .md del repo. Ejecutar tras crear, mover o renombrar cualquier documento.
// Uso: node scripts/generate-sidebar.mjs  (o `npm run docs:sidebar`)
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))

const ROOT_FILES = ['MANIFIESTO.md', 'GLOSARIO.md', 'CLAUDE.md', 'CONTRIBUTING.md']

const SECTION_ORDER = ['modelo-operativo', 'talento', 'playbooks', 'gobernanza', 'adopcion', 'research']

// Orden pedagógico curado por carpeta. Un archivo nuevo que no esté aquí
// no se pierde: se añade al final de su sección, ordenado alfabéticamente.
const FOLDER_ORDER = {
  'modelo-operativo': [
    'cuatro-capas.md',
    'niveles-de-autonomia.md',
    'estructura-organizacional.md',
    'arquitectura-de-contexto.md',
    'metricas.md',
  ],
  talento: ['competencias.md', 'contratacion.md', 'liderazgo.md'],
  playbooks: ['ingenieria.md', 'producto.md', 'diseno-ux.md', 'marketing.md'],
  gobernanza: ['uso-responsable.md', 'riesgos.md'],
  adopcion: ['curva-j.md', 'modelo-de-madurez.md', 'rituales.md', 'anti-patrones.md'],
  research: [],
}

function readTitle(path, fallback) {
  try {
    const content = readFileSync(path, 'utf8')
    const match = content.match(/^#\s+(.+)$/m)
    return match ? match[1].trim() : fallback
  } catch {
    return fallback
  }
}

function listMarkdown(dir) {
  return readdirSync(dir).filter((name) => name.toLowerCase().endsWith('.md'))
}

function link(path) {
  return relative(ROOT, path).split('\\').join('/')
}

function orderFiles(folder, files) {
  const preferred = FOLDER_ORDER[folder] || []
  const known = preferred.filter((f) => files.includes(f))
  const unknown = files.filter((f) => !preferred.includes(f)).sort((a, b) => a.localeCompare(b, 'es'))
  return [...known, ...unknown]
}

function buildFolderLines(folder, indent = '  ') {
  const dir = join(ROOT, folder)
  const files = listMarkdown(dir)
  const readme = files.find((f) => f.toLowerCase() === 'readme.md')
  const rest = orderFiles(
    folder,
    files.filter((f) => f.toLowerCase() !== 'readme.md'),
  )
  const lines = []
  if (readme) {
    lines.push(`${indent}- [Resumen](${link(join(dir, readme))})`)
  }
  for (const file of rest) {
    const full = join(dir, file)
    const title = readTitle(full, file)
    lines.push(`${indent}- [${title}](${link(full)})`)
  }
  return lines
}

const lines = []
lines.push('<!-- Generado automáticamente por scripts/generate-sidebar.mjs — no editar a mano -->')
lines.push('')
lines.push('- [Inicio](/)')
for (const file of ROOT_FILES) {
  const title = readTitle(join(ROOT, file), file)
  lines.push(`- [${title}](${file})`)
}
lines.push('')

for (const folder of SECTION_ORDER) {
  const dir = join(ROOT, folder)
  const sectionTitle = readTitle(join(dir, 'README.md'), folder)
  lines.push(`- ${sectionTitle}`)
  lines.push(...buildFolderLines(folder))

  if (folder === 'gobernanza') {
    const decisionesDir = join(dir, 'decisiones')
    const decisionesTitle = readTitle(join(decisionesDir, 'README.md'), 'Decisiones')
    lines.push(`  - ${decisionesTitle}`)
    const files = listMarkdown(decisionesDir)
      .filter((f) => !['readme.md', 'plantilla.md'].includes(f.toLowerCase()))
      .sort((a, b) => a.localeCompare(b, 'es'))
    for (const file of files) {
      const full = join(decisionesDir, file)
      const title = readTitle(full, file)
      lines.push(`    - [${title}](${link(full)})`)
    }
    // La plantilla es un molde, no una decisión: se lista aparte con una
    // etiqueta fija en vez de su H1 (que es un placeholder tipo "DR-XXXX: […]").
    lines.push(`    - [Plantilla para un DR nuevo](${link(join(decisionesDir, 'plantilla.md'))})`)
  }
  lines.push('')
}

writeFileSync(join(ROOT, '_sidebar.md'), lines.join('\n').trimEnd() + '\n')
console.log('_sidebar.md actualizado')
