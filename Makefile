build: npm_build copy_docs push_docs

npm_build:
	npm run build

copy_docs:
	rm -rf docs/*
	cp -r dist/* docs/

push_docs:
  git init
	git add docs
	git commit -m "updated build distribution $$(date '+%Y-%m-%d %H:%M:%S')"
	git push origin main
