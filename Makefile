.PHONY: build validate test install clean import unresolved stale translate help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-12s %s\n", $$1, $$2}'

build: ## Build dist/ from glossary sources
	node lib/build.js

validate: ## Validate all source files against schema
	node lib/validate.js

test: validate ## Run tests (alias for validate)

install: ## Install npm dependencies
	npm install

clean: ## Remove dist/
	rm -rf dist/

import: ## Re-import all entries from parallelpolis/glossary
	node lib/import.js

unresolved: ## Show unresolved [[wiki links]] grouped by keyword
	node lib/unresolved.js

stale: ## Show translations with outdated source hash
	node lib/stale.js

translate: ## Translate missing/stale entries via Codex CLI (L=cs ID=bitcoin)
	node lib/translate.js $(L) $(ID)
