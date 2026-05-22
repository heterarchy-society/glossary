import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const LINK_RE = /\[\[([^\|\]]+)\|?([^\]]*)\]\]/g

// Built once on first transform call, reused for subsequent terms
let lookup = null

function buildLookup(allItems) {
  if (lookup) return lookup
  lookup = new Map()
  for (const t of allItems) {
    for (const c of [t.id, t.name, ...(t.keywords || [])]) {
      if (c) lookup.set(c.toLowerCase(), t.id)
    }
  }
  return lookup
}

function resolveLinks(term, allItems) {
  const lu = buildLookup(allItems)
  const resolvedLinks = []
  for (const match of term.description.matchAll(LINK_RE)) {
    const display = match[1]
    const explicit = match[2]
    const target = lu.get((explicit || display).toLowerCase()) ?? null
    resolvedLinks.push({ key: display, link: explicit || null, target })
  }
  return resolvedLinks
}

function loadTypesMap(rootDir) {
  const translationsDir = join(rootDir, 'translations')
  const map = {}
  let langs
  try { langs = readdirSync(translationsDir) } catch { return map }
  for (const lang of langs) {
    try {
      map[lang] = JSON.parse(readFileSync(join(translationsDir, lang, '_types.json'), 'utf8'))
    } catch { /* no types file for this lang */ }
  }
  return map
}

function loadTranslations(id, type, rootDir, typesMap) {
  const translationsDir = join(rootDir, 'translations')
  const translations = {}
  let langs
  try { langs = readdirSync(translationsDir) } catch { return translations }
  for (const lang of langs) {
    const file = join(translationsDir, lang, `${id}.json`)
    try {
      const data = JSON.parse(readFileSync(file, 'utf8'))
      if (typesMap[lang]?.[type]) data.type = typesMap[lang][type]
      translations[lang] = data
    } catch {
      if (typesMap[lang]?.[type]) translations[lang] = { type: typesMap[lang][type] }
    }
  }
  return translations
}

// Loaded once per build
let typesMap = null

export function transform(item, { allItems, rootDir }) {
  if (!typesMap) typesMap = loadTypesMap(rootDir)

  const translations = loadTranslations(item.id, item.type, rootDir, typesMap)
  const resolvedLinks = resolveLinks(item, allItems)

  return {
    ...item,
    ...(Object.keys(translations).length ? { translations } : {}),
    resolvedLinks,
  }
}
