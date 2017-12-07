# Copyright © 2016-2017, RWTH Aachen University
# Authors: Richard Marston

all: build_docker

posttar:
	rm templates/*.xsd

templates/%.xsd: PinturaDataModel/XSD/$(@F)
	cp PinturaDataModel/XSD/$(@F) templates

html.tgz: css images src templates/compile.sh templates/*.handlebars \
	  templates/*.xslt templates/Core.xsd templates/Topology.xsd templates/Wires.xsd
	tar zcvf html.tgz *.js $^

build_docker: templates/Core.xsd templates/Topology.xsd templates/Wires.xsd html.tgz posttar
	docker build -t pintura .

electron_deps:
	rm -f package.json
	cp package.json.head package.json
	npm install --save electron
	npm install --save-dev electron-mocha gulp gulp-cli gulp-jshint gulp-livereload gulp-mocha gulp-notify jshint mocha

templates: templates/templates.js

template_dir=$(PWD)/templates
templates/templates.js: templates/*.handlebars \
                        PinturaDataModel/XSD/Core.xsd \
                        PinturaDataModel/XSD/Topology.xsd \
                        PinturaDataModel/XSD/Wires.xsd
	${template_dir}/compile.sh ${template_dir}

run:
	# The environment variables are required for https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion
	docker run --rm --detach --publish 8082:443 --name=pintura \
		--env VIRTUAL_HOST=web.pintura.fein-aachen.org \
		--env LETSENCRYPT_HOST=web.pintura.fein-aachen.org \
		--env LETSENCRYPT_EMAIL=post@steffenvogel.de \
		pintura:latest

stop:
	docker container stop pintura

local: index.html templates/Core.xsd templates/Wires.xsd templates/Topology.xsd templates/templates.js

index.html: generateIndex.js
	node generateIndex.js > index.html
