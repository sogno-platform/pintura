FROM node AS builder

COPY . /pintura
WORKDIR pintura
RUN npm install
RUN npm run build

FROM nginx

RUN mkdir -p /usr/share/nginx/html/templates

COPY images /usr/share/nginx/html/images
COPY css /usr/share/nginx/html/css
COPY html /usr/share/nginx/html/html
COPY index.js /usr/share/nginx/html

COPY --from=builder /pintura/index.html /usr/share/nginx/html/
COPY --from=builder /pintura/templates/template.js /usr/share/nginx/html/templates/
COPY --from=builder /pintura/templates/add_components_menu.xml /usr/share/nginx/html/templates/
