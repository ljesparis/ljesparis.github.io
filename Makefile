.PHONY: run build deploy

DOMAIN ?= ljesparis.me

run:
	@npm run dev

build:
	@npm run build && echo "$(DOMAIN)" > dist/CNAME

deploy: build
	@npm run deploy