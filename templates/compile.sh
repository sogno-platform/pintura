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
handlebars templates/cim2svg.handlebars > templates/template.js
