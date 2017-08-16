# Copyright © 2016-2017, RWTH Aachen University
# Authors: Richard Marston

all: build_docker

html.tgz: css images index.html src handlebars-latest.js
	tar zcvf html.tgz css images index.html src *.js

build_docker: html.tgz ssl.tgz
	docker build --no-cache -t pintura .

handlebars-latest.js:
	wget http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-latest.js

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
