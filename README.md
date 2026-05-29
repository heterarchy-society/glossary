# Heterarchy Glossary

A curated glossary of terms for [The Heterarchy Society](https://heterarchy.cz). Source files are markdown with YAML frontmatter; a build script compiles them into static JSON deployed via GitHub Pages.

- **Browse:** [heterarchy.fyi/glossary](https://heterarchy.fyi/glossary)
- **API / bundle:** [glossary.data.heterarchy.fyi](https://glossary.data.heterarchy.fyi/)

## Adding or editing terms

Each term lives in `glossary/{id}.md`. The filename (without `.md`) becomes the term's ID — use lowercase kebab-case (e.g. `zero-knowledge-proof.md`).

**Frontmatter fields:**

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `name` | yes | string | Display name of the term |
| `type` | yes | string | Category (e.g. `concept`, `movement`, `tool`, `person`) |
| `keywords` | no | string[] | Alternate names or aliases |
| `related` | no | string[] | IDs of related terms |
| `year` | no | string\|number | Year of origin |
| `resources` | no | object[] | External references (`title` + `url` required) |
| `links` | no | object[] | Additional links (`title` + `url` required) |
| `imported` | no | boolean | `true` for entries imported from parallelpolis/glossary |

**Example:**

```markdown
---
name: Zero-Knowledge Proof
type: cryptographic concept
keywords:
  - ZKP
  - zero knowledge
resources:
  - title: Wikipedia
    url: https://en.wikipedia.org/wiki/Zero-knowledge_proof
---

A zero-knowledge proof is a method by which one party can prove to another that they know a value, without conveying any information apart from the fact that they know the value.

Cross-reference other terms with `[[term-id]]` or MediaWiki `[[term-id|display text]]` (id left, visible label right).
```

## Writing guidelines

This glossary is not a textbook. It's a shared map — built by people exploring the same territory, updated as understanding grows. An entry should read like something a knowledgeable person shows you, not something an institution publishes. Write as if you're pointing something out to someone curious, not certifying it for someone skeptical.

### Frontmatter

- **`name`** — title case matching common usage (e.g. `Bitcoin`, `Zero-Knowledge Proof`, `Peer-to-Peer`).
- **`type`** — a short, lowercase noun phrase. Prefer an existing value over inventing a new one. Common values: `concept`, `philosophy`, `technology`, `protocol`, `tool`, `movement`, `security measure`, `cryptographic concept`. Avoid catch-alls like `idea` or `thing`.
- **`keywords`** — genuine alternate names, abbreviations, or aliases someone might search for (e.g. `ZKP`, `btc`). Not synonyms or related concepts — those belong in the body or `related`.
- **`related`** — IDs of closely connected terms. 2–5 is typical. Every ID must correspond to an actual file in `glossary/`.
- **`resources`** — the canonical sources: the original whitepaper, the founding text, the Wikipedia article. Use descriptive titles, not bare URLs (`Wikipedia article "Bitcoin"`, not `Wikipedia`). 1–3 is usually enough; secondary links go in `links`.
- **`year`** — include when the origin year is well-established and meaningful (invention, first publication, founding event). Omit when there is no clear moment.

### Body text

**Structure.** Three paragraphs, roughly equal weight:

1. **What it is** — a plain definition. Open with the term itself so the sentence works standalone. Don't open with "This is…".
2. **How it works or where it came from** — the mechanism, the history, the key people. Technical detail lives here.
3. **Why it matters here** — how it connects to the question of living and organising without hierarchy. This isn't a sales pitch; it's context. Note tensions too — tools of liberation become platforms, and the glossary shouldn't pretend otherwise.

**Tone.** Write from the inside, not from above. The glossary has a perspective — decentralisation, individual sovereignty, voluntary association — but that perspective shows in what you choose to explain and how, not in adjectives. Avoid the voice of the expert certifying facts; prefer the voice of someone who found something interesting and wants to share it clearly.

**Tensions are worth noting.** Many of these technologies and ideas carry contradictions: surveillance tools repurposed for privacy, consensus mechanisms that consolidate power, philosophies that become orthodoxies. A good entry doesn't flatten these — it names them.

**Length.** 80–150 words per paragraph. Shorter feels thin; longer loses focus. If a term needs more depth, add a fourth paragraph rather than bloating the three.

**Cross-references.** Two syntaxes, depending on where the target lives:

| Target | Syntax | Example |
|--------|--------|---------|
| Another glossary term | `[[term-id]]` or `[[term-id\|display text]]` | `[[bitcoin]]`, `[[peer-to-peer\|P2P]]` |
| A person in the people dataset | `[Name](people:person-id)` | `[Satoshi Nakamoto](people:satoshi-nakamoto)` |
| A writing in the writings dataset | `[Title](writings:writing-id)` | `[Bitcoin whitepaper](writings:bitcoin-whitepaper)` |

For glossary links, pipe order is MediaWiki-style: `[[target|label]]` — left is the term id, right is what readers see. Link each term the first time it appears, not on every mention. Prefer linking concepts central to understanding the entry — typically 3–8 links per entry.

**A few things to avoid:**
- Bullet lists or headers inside the body — prose only.
- Filler emphasis: "crucially", "importantly", "it must be noted".
- Starting multiple paragraphs the same way, or repeating the definition in paragraph 3.

## Development

```bash
bun install
make test         # validate all source files against schema
make build        # generate dist/ output
make translate    # translate missing entries to Czech via Codex CLI
make unresolved   # show unresolved [[wiki links]]
make stale        # show translations with outdated source hash
```

## Output

The build generates:
- `dist/index.json` — all terms with metadata
- `dist/terms/{id}.json` — individual term files
- `dist/history/{id}.json` — per-term commit history with diffs
- `dist/changelog.json` — all commits with referenced term changes
- `dist/glossary.js` — ES module export

## Deployment

Pushing to `main` triggers GitHub Actions to build and deploy `dist/` to GitHub Pages. Enable Pages in your repository settings with source set to **GitHub Actions**.

## Attribution

Many entries are imported from [parallelpolis/glossary](https://github.com/parallelpolis/glossary) (MIT license) and are marked with `imported: true`.
