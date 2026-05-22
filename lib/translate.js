/**
 * Translate missing or stale glossary entries using Codex CLI.
 * Usage: node lib/translate.js [lang] [id]
 *   lang  — language code, default: cs
 *   id    — specific term ID (skips interactive mode, translates immediately)
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import { createInterface } from 'node:readline'
import matter from 'gray-matter'
import { parse as parseToml } from 'smol-toml'
import { sourceHash } from './hash.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const GLOSSARY_DIR = join(ROOT, 'glossary')
const TRANSLATIONS_DIR = join(ROOT, 'translations')

function loadConfig() {
  try {
    return parseToml(readFileSync(join(ROOT, 'config.toml'), 'utf8'))
  } catch {
    return { languages: { default: 'cs' } }
  }
}

function codexModel() {
  try {
    const config = readFileSync(join(homedir(), '.codex', 'config.toml'), 'utf8')
    const match = config.match(/^model\s*=\s*"([^"]+)"/m)
    return match ? match[1] : 'unknown'
  } catch {
    return 'unknown'
  }
}

function ask(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans.trim()) }))
}

const config = loadConfig()
const defaultLang = config.languages?.default ?? 'cs'
const model = codexModel()
const lang = process.argv[2] || defaultLang
const onlyId = process.argv[3] || null

const langName = config.languages?.[lang]?.name ?? lang

mkdirSync(join(TRANSLATIONS_DIR, lang), { recursive: true })

const allFiles = readdirSync(GLOSSARY_DIR).filter(f => f.endsWith('.md')).sort()

function needsTranslation(filename) {
  const id = filename.replace(/\.md$/, '')
  const destPath = join(TRANSLATIONS_DIR, lang, `${id}.json`)
  const parsed = matter.read(join(GLOSSARY_DIR, filename))
  const hash = sourceHash({ name: parsed.data.name, description: parsed.content.trim() })
  if (!existsSync(destPath)) return { id, filename, hash, reason: 'missing' }
  const existing = JSON.parse(readFileSync(destPath, 'utf8'))
  if (existing.source_hash !== hash) return { id, filename, hash, reason: 'stale' }
  return null
}

function translateTerm({ id, filename, hash }) {
  const prompt = `Translate the glossary term in glossary/${filename} to ${langName}. ` +
    `Write the result to translations/${lang}/${id}.json with exactly two fields: ` +
    `"name" (translated term name) and "description" (translated body text). ` +
    `Keep all [[wiki links]] and markdown formatting intact — do not translate text inside [[ ]]. ` +
    `Do not add any other fields. Do not include source_hash.`

  execSync(
    `codex exec --sandbox workspace-write --dangerously-bypass-approvals-and-sandbox ${JSON.stringify(prompt)}`,
    { cwd: ROOT, stdio: 'inherit' }
  )

  const destPath = join(TRANSLATIONS_DIR, lang, `${id}.json`)
  const { name, description } = JSON.parse(readFileSync(destPath, 'utf8'))
  writeFileSync(destPath, JSON.stringify({
    source_hash: hash,
    model,
    translated_at: new Date().toISOString(),
    name,
    description,
  }, null, 2) + '\n', 'utf8')
}

// Non-interactive mode: specific ID given
if (onlyId) {
  const filename = `${onlyId}.md`
  const entry = needsTranslation(filename)
  if (!entry) {
    console.log(`${onlyId}: already up to date`)
  } else {
    console.log(`Translating ${onlyId} (${entry.reason})...`)
    translateTerm(entry)
    console.log(`✓ Done`)
  }
  process.exit(0)
}

// Interactive mode: prompt for each missing/stale term
const pending = allFiles.map(needsTranslation).filter(Boolean)

if (pending.length === 0) {
  console.log(`All ${lang} translations are up to date.`)
  process.exit(0)
}

console.log(`${pending.length} term(s) need translation to ${langName}.\n`)

let translated = 0
let skipped = 0

for (const entry of pending) {
  const label = entry.reason === 'stale' ? `${entry.id} (stale)` : entry.id
  const answer = await ask(`Translate "${label}"? [y/n/q] `)

  if (answer === 'q') {
    console.log('\nAborted.')
    break
  }
  if (answer !== 'y') {
    skipped++
    continue
  }

  try {
    translateTerm(entry)
    console.log(`✓ ${entry.id}\n`)
    translated++
  } catch (err) {
    console.error(`✗ ${entry.id}: ${err.message}\n`)
  }
}

console.log(`Done: ${translated} translated, ${skipped} skipped`)
