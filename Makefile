clean:
	rm -Rf .parcel-cache
	rm -Rf dist

build: clean
	npx parcel build ./src/index.js

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

cleanup:
	git push origin master
	git push origin --tags

release-pre: build-commit tag-pre publish-pre changelog-commit cleanup

release-patch: build-commit tag-patch publish changelog-commit cleanup

release-minor: build-commit tag-minor publish changelog-commit cleanup

release-major: build-commit tag-major publish changelog-commit cleanup
