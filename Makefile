.PHONY: run build 

SHELL := /bin/bash

run: 
	@ENV="DEV" npm run dev

build:
	@ENV="PRO" npm run build

