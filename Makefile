# Copyright © 2016-2018, RWTH Aachen University
# Authors:
#  - Richard Marston
#  - Steffen Vogel

docker_image=rwthacs/pintura
docker_opts?=--rm

template_dir=templates
attribute_dir=$(template_dir)/attributes

all: build_docker

clean:
	rm -f $(template_dir)/template.js
	rm -f $(template_dir)/add_components_menu.xml
	rm -fr $(attribute_dir)

electron_deps:
	rm -f package.json
	cp package.json.head package.json
	npm install --save electron
	npm install --save-dev electron-mocha jshint mocha webpack

local: index.html $(template_dir)/template.js $(template_dir)/add_components_menu.xml

develop: local
	docker run --rm --detach --publish 80:80 --name pintura-dev \
		--volume $(shell pwd):/usr/share/nginx/html \
		nginx

index.html: generateIndex.js
	node $<  > $@

# Docker related targets
run_docker:
	docker run $(docker_opts) --detach --publish 8082:80 --name=pintura $(docker_image):latest
	echo "Access Pintura at http://localhost:8082"

build_docker:
	docker build -t $(docker_image) .

stop_docker:
	docker container stop pintura

# Create templates
templates: $(template_dir)/template.js

$(template_dir)/template.js: $(handlebars) $(handlebars_attr)
	npm install
	npm run build

# Create non-existent directories
.SECONDEXPANSION:
.PRECIOUS: %/
%/:
	mkdir -p $@

.PHONY: all clean electron_deps templates run_docker build_docker local
