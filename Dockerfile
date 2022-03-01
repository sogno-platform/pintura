FROM node AS builder

# copy data approximately in order of how often they change / how big they are
COPY data_model /pintura/data_model
COPY images /pintura/images
COPY test/ /pintura/test
COPY cimmenu /pintura/cimmenu
COPY cimsvg /pintura/cimsvg
COPY index.html Makefile package-lock.json package.json /pintura/

WORKDIR /pintura
RUN npm install
RUN npm run build

FROM nginx

RUN mkdir -p /usr/share/nginx/html/templates

COPY images   /usr/share/nginx/html/images

COPY --from=builder /pintura/dist /usr/share/nginx/html/dist/
COPY --from=builder /pintura/index.html /usr/share/nginx/html/

COPY example/example.zip /usr/share/nginx/html/example.zip

ARG GIT_COMMIT
LABEL \
	org.label-schema.schema-version = "1.0" \
	org.label-schema.name = "Pintura" \
	org.label-schema.license = "MPL-2.0" \
	org.label-schema.vendor = "Institute for Automation of Complex Power Systems, RWTH Aachen University" \
	org.label-schema.author.name = "Richard Marston" \
	org.label-schema.author.email = "rmarston@eonerc.rwth-aachen.de" \
	org.label-schema.maintainer.name = "Steffen Vogel" \
	org.label-schema.maintainer.email = "stvogel@eonerc.rwth-aachen.de" \
	org.label-schema.description = "Pintura is a graphical editor for CIM XML-RDF files. CIM refers to the Common Information Model (CIM) standard (i.e. IEC61970/61968/62325) for the energy sector." \
	org.label-schema.url = "http://fein-aachen.org/projects/pintura/" \
	org.label-schema.vcs-url = "http://git.rwth-aachen.de/acs/public/cim/pintura" \
	org.label-schema.vcs-commit = $GIT_COMMIT
