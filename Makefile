## Main project Makefile
#
# @author Richard Marston <rmarston@eonerc.rwth-aachen.de>
# @author Steffen Vogel <stvogel@eonerc.rwth-aachen.de>
# @copyright 2017, Institute for Automation of Complex Power Systems, EONERC
#
# Pintura
#
# SPDX-License-Identifier: MPL-2.0
#
###################################################################################

DOCKER_IMAGE=rwthacs/pintura
DOCKER_OPTS?=--rm

TEMPLATE_DIR=generated
ATTRIBUTE_DIR=$(TEMPLATE_DIR)/attributes
GIT_COMMIT=$(shell git log -1 --format=%h)

all: docker

libcimmenu:
	docker build -f Dockerfile.menu -t cimmenu .


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

start-cimmenu:
	docker run $(DOCKER_OPTS) --detach --publish 8084:80 --name=libcimmenu cimmenu:latest
	echo "Access Pintura at http://localhost:8082"

stop:
	$(shell echo ./stop_docker.sh)

.PHONY: all dev docker libcimmenu start stop start-cimmenu
