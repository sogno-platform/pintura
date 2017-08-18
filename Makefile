# Copyright © 2016-2017, RWTH Aachen University
# Authors: Richard Marston

all: build_docker

html.tgz: css images index.html src templates/template.js handlebars.runtime.js
	tar zcvf html.tgz css images index.html src *.js templates/template.js

build_docker: html.tgz ssl.tgz
	docker build -t pintura .

handlebars.runtime.js:
	wget https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.runtime.js

templates/template.js: templates/cim2svg.handlebars templates/pintura2html.handlebars templates/pintura2diaglist.handlebars
	templates/compile.sh

ssl.tgz:
	mkdir -p ssl
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ssl/server.key -out ssl/server.crt \
		-subj "/C=UK/ST=Warwickshire/L=Leamington/O=OrgName/OU=IT Department/CN=192.168.1.204"
	tar zcvf ssl.tgz ssl

deps:
	rm -f package.json
	cp package.json.head package.json
	npm install --save electron
	npm install --save-dev electron-mocha gulp gulp-cli gulp-jshint gulp-livereload gulp-mocha gulp-notify jshint mocha
