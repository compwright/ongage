build:
	npx parcel build ./src/index.js --target node --out-file node.js --no-minify --no-source-maps
	npx parcel build ./src/index.js --target browser --out-file browser.min.js

build-commit: build
	git add -A
	git diff-index --quiet HEAD || git commit -m "Build"

tag-pre:
	npm version prerelease

tag-patch:
	npm version patch

tag-minor:
	npm version minor

tag-major:
	npm version major

publish-pre:
	npm publish --tag pre --access public

publish:
	npm publish --access public

changelog:
	github_changelog_generator -u compwright -p ongage

changelog-commit: changelog
	git add CHANGELOG.md
	git diff-index --quiet HEAD || git commit -m "Updating changelog"

cleanup: changelog-commit
	git push origin --tags

release-pre: build-commit tag-pre publish-pre cleanup

release-patch: build-commit tag-patch publish cleanup

release-minor: build-commit tag-minor publish cleanup

release-major: build-commit tag-major publish cleanup
