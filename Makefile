# Copyright © 2016-2017, RWTH Aachen University
# Authors: Richard Marston

all: build_docker

html.tgz: css images index.html src templates/compile.sh templates/cim2svg.handlebars templates/pintura2html.handlebars templates/pintura2diaglist.handlebars
	tar zcvf html.tgz *.js $?

build_docker: html.tgz
	docker build -t pintura .

deps:
	rm -f package.json
	cp package.json.head package.json
	npm install --save electron
	npm install --save-dev electron-mocha gulp gulp-cli gulp-jshint gulp-livereload gulp-mocha gulp-notify jshint mocha
