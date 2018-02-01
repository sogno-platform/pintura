FROM node AS builder

RUN apt-get update && \
    apt-get install -y xsltproc make

RUN npm install -g handlebars

COPY . /pintura
WORKDIR pintura
RUN make local

FROM nginx

RUN mkdir -p /usr/share/nginx/html/templates

ADD --chown=nginx https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.runtime.js /usr/share/nginx/html/handlebars.runtime.js

COPY images /usr/share/nginx/html/images
COPY css /usr/share/nginx/html/css
COPY src /usr/share/nginx/html/src
COPY index.js /usr/share/nginx/html

COPY --from=builder /pintura/index.html /usr/share/nginx/html/
COPY --from=builder /pintura/templates/template.js /usr/share/nginx/html/templates/
COPY --from=builder /pintura/templates/add_components_menu.xml /usr/share/nginx/html/templates/
