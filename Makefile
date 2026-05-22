BUN := $(or $(shell which bun 2>/dev/null),$(HOME)/.bun/bin/bun)
ATLAS := $(BUN) x atlas

.PHONY: build validate test install clean unresolved stale translate resolve-authors help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-16s %s\n", $$1, $$2}'

build: ## Build dist/ from glossary sources
	$(ATLAS) build

validate: ## Validate all source files against schema
	$(ATLAS) validate

test: validate ## Run tests (alias for validate)

install: ## Install dependencies
	$(BUN) install

clean: ## Remove dist/
	rm -rf dist/

unresolved: ## Show unresolved [[wiki links]]
	$(ATLAS) unresolved

stale: ## Show translations with outdated source hash
	$(ATLAS) stale

translate: ## Translate missing/stale entries via Codex CLI (L=cs ID=bitcoin)
	$(ATLAS) translate $(L) $(ID)

resolve-authors: ## Resolve GitHub usernames from git emails (requires GITHUB_TOKEN)
	$(ATLAS) resolve-authors
