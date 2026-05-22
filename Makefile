.PHONY: build validate test install clean import unresolved

build:
	node lib/build.js

validate:
	node lib/validate.js

test: validate

install:
	npm install

clean:
	rm -rf dist/

import:
	node lib/import.js

unresolved:
	node lib/unresolved.js
