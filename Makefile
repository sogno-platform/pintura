## Main project Makefile
#
# @author Richard Marston <rmarston@eonerc.rwth-aachen.de>
# @author Steffen Vogel <stvogel@eonerc.rwth-aachen.de>
# @copyright 2017, Institute for Automation of Complex Power Systems, EONERC
# @license GNU General Public License (version 3)
#
# Pintura
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

DOCKER_IMAGE=rwthacs/pintura
DOCKER_OPTS?=--rm

TEMPLATE_DIR=generated
ATTRIBUTE_DIR=$(TEMPLATE_DIR)/attributes
GIT_COMMIT=$(shell git log -1 --format=%h)

all: docker

dev: cimsvg cimmenu
	docker build \
		--file Dockerfile.dev \
		--tag $(DOCKER_IMAGE) \
		--iidfile $@ \
		--build-arg GIT_COMMIT=git[${GIT_COMMIT}] \
		.

docker: cimsvg cimmenu
	docker build \
		--tag $(DOCKER_IMAGE) \
		--iidfile $@ \
		--build-arg GIT_COMMIT=git[${GIT_COMMIT}] \
		.

start: stop
	docker run $(DOCKER_OPTS) --detach --publish 8082:80 --name=pintura $(DOCKER_IMAGE):latest
	echo "Access Pintura at http://localhost:8082"

stop:
	$(shell echo ./stop_docker.sh)

.PHONY: all dev docker start stop
