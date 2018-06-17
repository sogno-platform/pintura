## Main project Makefile
#
# @author Richard Marston <rmarston@eonerc.rwth-aachen.de>
# @author Steffen Vogel <stvogel@eonerc.rwth-aachen.de>
# @copyright 2017, Institute for Automation of Complex Power Systems, EONERC
# @license GNU General Public License (version 3)
#
# VILLASnode
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
###################################################################################

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
