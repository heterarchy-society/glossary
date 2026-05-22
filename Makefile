BUN := $(or $(shell which bun 2>/dev/null),$(HOME)/.bun/bin/bun)

.PHONY: build validate test install clean import unresolved stale translate resolve-authors help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-12s %s\n", $$1, $$2}'

build: ## Build dist/ from glossary sources
	$(BUN) lib/build.js

validate: ## Validate all source files against schema
	$(BUN) lib/validate.js

test: validate ## Run tests (alias for validate)

install: ## Install dependencies
	$(BUN) install

clean: ## Remove dist/
	rm -rf dist/

import: ## Re-import all entries from parallelpolis/glossary
	$(BUN) lib/import.js

unresolved: ## Show unresolved [[wiki links]] grouped by keyword
	$(BUN) lib/unresolved.js

stale: ## Show translations with outdated source hash
	$(BUN) lib/stale.js

resolve-authors: ## Resolve GitHub usernames from git emails (requires GITHUB_TOKEN)
	$(BUN) lib/resolve-authors.js

translate: ## Translate missing/stale entries via Codex CLI (L=cs ID=bitcoin)
	$(BUN) lib/translate.js $(L) $(ID)
