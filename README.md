# Heterarchy Glossary

A curated glossary of terms for [The Heterarchy Society](https://heterarchy.cz). Source files are markdown with YAML frontmatter; a build script compiles them into static JSON deployed via GitHub Pages.

- **Browse:** [heterarchy.fyi/glossary](https://heterarchy.fyi/glossary)
- **API / bundle:** [glossary.heterarchy.fyi](https://glossary.heterarchy.fyi/)

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

Cross-reference other terms with [[wiki links]] or [[display text|term-id]] syntax.
```

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
