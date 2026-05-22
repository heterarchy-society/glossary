import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname, join, basename, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import matter from 'gray-matter'
import { validateTerm } from './validate.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const GLOSSARY_DIR = join(ROOT, 'glossary')
const DIST_DIR = join(ROOT, 'dist')
const TERMS_DIR = join(DIST_DIR, 'terms')

const TRANSLATIONS_DIR = join(ROOT, 'translations')
const HISTORY_DIR = join(DIST_DIR, 'history')
const LINK_RE = /\[\[([^\|\]]+)\|?([^\]]*)\]\]/g

function gitLog(filename) {
  try {
    const out = execSync(
      `git log --follow --format="%H\x1f%aI\x1f%an\x1f%s" -- ${JSON.stringify(filename)}`,
      { cwd: ROOT, encoding: 'utf8' }
    ).trim()
    if (!out) return []
    return out.split('\n').map(line => {
      const [hash, date, author, message] = line.split('\x1f')
      return { hash, date, author, message }
    })
  } catch {
    return []
  }
}

function gitShow(hash, filename) {
  try {
    const raw = execSync(
      `git show ${hash}:${filename}`,
      { cwd: ROOT, encoding: 'utf8' }
    )
    const parsed = matter(raw)
    return { ...parsed.data, description: parsed.content.trim() }
  } catch {
    return null
  }
}

function loadTypesMap() {
  const map = {}
  let langsDir
  try { langsDir = readdirSync(TRANSLATIONS_DIR) } catch { return map }
  for (const lang of langsDir) {
    try {
      map[lang] = JSON.parse(readFileSync(join(TRANSLATIONS_DIR, lang, '_types.json'), 'utf8'))
    } catch { /* no types file for this lang */ }
  }
  return map
}

const typesMap = loadTypesMap()

function loadTranslations(id, type) {
  const translations = {}
  let langsDir
  try {
    langsDir = readdirSync(TRANSLATIONS_DIR)
  } catch {
    return translations
  }
  for (const lang of langsDir) {
    const file = join(TRANSLATIONS_DIR, lang, `${id}.json`)
    try {
      const data = JSON.parse(readFileSync(file, 'utf8'))
      if (typesMap[lang]?.[type]) data.type = typesMap[lang][type]
      translations[lang] = data
    } catch {
      // no term translation, but maybe we still have a type translation
      if (typesMap[lang]?.[type]) {
        translations[lang] = { type: typesMap[lang][type] }
      }
    }
  }
  return translations
}

export function loadTerms() {
  const files = readdirSync(GLOSSARY_DIR)
    .filter(f => extname(f) === '.md')
    .sort()

  const terms = []
  for (const filename of files) {
    const id = basename(filename, '.md')
    const parsed = matter.read(join(GLOSSARY_DIR, filename))
    const description = parsed.content.trim()
    const translations = loadTranslations(id, parsed.data.type)
    const term = { id, ...parsed.data, description, ...(Object.keys(translations).length ? { translations } : {}) }
    validateTerm(term, id)
    terms.push(term)
  }
  return terms
}

export function resolveWikiLinks(terms) {
  const lookup = new Map()
  for (const t of terms) {
    const candidates = [t.id, t.name, ...(t.keywords || [])]
    for (const c of candidates) {
      if (c) lookup.set(c.toLowerCase(), t.id)
    }
  }

  let total = 0
  // keyword (raw link text) -> Set of term IDs that reference it
  const unresolvedByKey = new Map()

  for (const term of terms) {
    const resolvedLinks = []
    for (const match of term.description.matchAll(LINK_RE)) {
      const display = match[1]
      const explicit = match[2]
      const lookupKey = (explicit || display).toLowerCase()
      const target = lookup.get(lookupKey) ?? null
      resolvedLinks.push({ key: display, link: explicit || null, target })
      total++
      if (!target) {
        const label = explicit ? `${display}|${explicit}` : display
        if (!unresolvedByKey.has(label)) unresolvedByKey.set(label, new Set())
        unresolvedByKey.get(label).add(term.id)
      }
    }
    term.resolvedLinks = resolvedLinks
  }

  return { total, unresolvedByKey }
}

function buildHistory(terms) {
  mkdirSync(HISTORY_DIR, { recursive: true })
  for (const term of terms) {
    const filename = `glossary/${term.id}.md`
    const commits = gitLog(filename)
    term.history = commits.map(({ hash, date, author, message }) => ({ hash, date, author, message }))
    if (commits.length > 0) {
      const snapshots = commits.map(commit => ({
        ...commit,
        state: gitShow(commit.hash, filename),
      }))
      writeFileSync(join(HISTORY_DIR, `${term.id}.json`), JSON.stringify(snapshots, null, 2), 'utf8')
    }
  }
}

function build() {
  console.log('Loading glossary entries...')
  const terms = loadTerms()

  console.log('Resolving wiki links...')
  const { total, unresolvedByKey } = resolveWikiLinks(terms)

  console.log('Building history...')
  buildHistory(terms)

  mkdirSync(TERMS_DIR, { recursive: true })

  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
  const index = {
    meta: {
      generated: new Date().toISOString(),
      count: terms.length,
      version: pkg.version,
    },
    terms,
  }

  const indexPath = join(DIST_DIR, 'index.json')
  writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8')
  console.log(`Written: ${indexPath}`)

  for (const term of terms) {
    writeFileSync(join(TERMS_DIR, `${term.id}.json`), JSON.stringify(term, null, 2), 'utf8')
  }
  console.log(`Written: ${terms.length} individual term files in ${TERMS_DIR}`)

  const jsPath = join(DIST_DIR, 'glossary.js')
  writeFileSync(jsPath, `export default ${JSON.stringify(index)};\n`, 'utf8')
  console.log(`Written: ${jsPath}`)

  const imported = terms.filter(t => t.imported).length
  console.log(`\nStats:`)
  console.log(`  Terms: ${terms.length} total, ${imported} imported, ${terms.length - imported} original`)
  console.log(`  Wiki links: ${total} total, ${unresolvedByKey.size} unresolved keywords`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  build()
}
