# Copyright © 2016-2018, RWTH Aachen University
# Authors:
#   - Richard Marston
#  - Steffen Vogel

template_dir=templates
attribute_dir=$(template_dir)/attributes

xsds=$(wildcard PinturaDataModel/XSD/*.xsd)
attributes=$(shell xsltproc $(template_dir)/attribute_list.xslt $(xsds))
handlebars_attr=$(patsubst %,$(attribute_dir)/%.handlebars,$(attributes))
handlebars=$(wildcard $(template_dir)/*.handlebars)

all: build_docker

clean:
	rm -f $(template_dir)/template.js
	rm -f $(template)/add_components_menu.xml
	rm -fr $(attribute_dir)

electron_deps:
	rm -f package.json
	cp package.json.head package.json
	npm install --save electron
	npm install --save-dev electron-mocha gulp gulp-cli gulp-jshint gulp-livereload gulp-mocha gulp-notify jshint mocha

templates: $(template_dir)/template.js

handlebars.runtime.js:
	wget -O $@ 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.runtime.js'

$(attribute_dir)/%.handlebars: $(template_dir)/cim_xml_scheme.xslt $(xsds) | $(attribute_dir)/
	xsltproc --stringparam attribute $* $^ > $@

$(template_dir)/template.js: $(handlebars) $(handlebars_attr)
	handlebars $(template_dir) > $@
#	handlebars $^ > $@

$(template_dir)/add_components_menu.xml: $(template_dir)/cim_add_components_menu.xslt $(template_dir)/sort_menu.xslt | $(template_dir)/
	xsltproc $(template_dir)/cim_add_components_menu.xslt $(xsds) > temp.xml
	echo "<menu><ul class=\"floating-panel-list\">$$(cat temp.xml)</ul></menu>" > unsorted.xml
	xsltproc $(template_dir)/sort_menu.xslt unsorted.xml > $@
	rm -rf unsorted.xml temp.xml

run_docker:
	# The environment variables are required for https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion
	docker run --rm --detach --publish 8082:443 --name=pintura \
		--env VIRTUAL_HOST=web.pintura.fein-aachen.org \
		--env LETSENCRYPT_HOST=web.pintura.fein-aachen.org \
		--env LETSENCRYPT_EMAIL=post@steffenvogel.de \
		pintura:latest

build_docker:
	docker build -t pintura .

stop_docker:
	docker container stop pintura

local: index.html $(template_dir)/template.js $(template_dir)/add_components_menu.xml handlebars.runtime.js

develop: local
	docker run --rm --detach --publish 80:80 --name pintura-dev \
		--volume $(shell pwd):/usr/share/nginx/html \
		nginx

index.html: generateIndex.js
	node $<  > $@

# Create non-existent directories
.SECONDEXPANSION:
.PRECIOUS: %/
%/:
	mkdir -p $@

.PHONY: all clean electron_deps templates run_docker build_docker local
