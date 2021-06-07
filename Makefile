test:
	npm test

clean:
	rm -Rf .parcel-cache
	rm -Rf dist

build: clean test
	npx parcel build ./src/index.js

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

release-pre: build tag-pre publish-pre changelog-commit cleanup

release-patch: build tag-patch publish changelog-commit cleanup

release-minor: build tag-minor publish changelog-commit cleanup

release-major: build tag-major publish changelog-commit cleanup
