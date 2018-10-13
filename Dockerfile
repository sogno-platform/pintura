FROM node:8-stretch AS builder

COPY . /pintura
WORKDIR pintura
RUN rm -rf node_modules
RUN npm install
RUN npm run build

FROM nginx

RUN mkdir -p /usr/share/nginx/html/templates

COPY images /usr/share/nginx/html/images
COPY css /usr/share/nginx/html/css
COPY index.js /usr/share/nginx/html

COPY --from=builder /pintura/lib /usr/share/nginx/html/lib/
COPY --from=builder /pintura/index.html /usr/share/nginx/html/
COPY --from=builder /pintura/generated/template.js /usr/share/nginx/html/generated/
COPY --from=builder /pintura/generated/add_components_menu.xml /usr/share/nginx/html/generated/
COPY --from=builder /pintura/generated/add_all_components_menu.xml /usr/share/nginx/html/generated/

LABEL \
	org.label-schema.schema-version = "1.0" \
	org.label-schema.name = "Pintura" \
	org.label-schema.license = "GPL-3.0" \
	org.label-schema.vendor = "Institute for Automation of Complex Power Systems, RWTH Aachen University" \
	org.label-schema.author.name = "Richard Marston" \
	org.label-schema.author.email = "rmarston@eonerc.rwth-aachen.de" \
	org.label-schema.maintainer.name = "Steffen Vogel" \
	org.label-schema.maintainer.email = "stvogel@eonerc.rwth-aachen.de" \
	org.label-schema.description = "Pintura is a graphical editor for CIM XML-RDF files. CIM refers to the Common Information Model (CIM) standard (i.e. IEC61970/61968/62325) for the energy sector." \
	org.label-schema.url = "http://fein-aachen.org/projects/pintura/" \
	org.label-schema.vcs-url = "http://git.rwth-aachen.de/acs/core/cim/pintura"
