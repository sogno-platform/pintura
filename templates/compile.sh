#!/bin/bash

# check handlebars is installed
handlebars 2> /dev/null
handlebars_inst=$?
if [ ${handlebars_inst} -ne 0 ];
then
  echo "Please install handlebars: sudo npm -g handlebars"
  echo "Please install handlebars: sudo npm -g handlebars"
  echo "Please install handlebars: sudo npm -g handlebars"
  exit 1
fi

# ok, do the work
handlebars \
  /var/www/html/templates/cim2svg.handlebars \
  /var/www/html/templates/pintura2html.handlebars \
  /var/www/html/templates/pintura2diaglist.handlebars \
> /var/www/html/templates/template.js
