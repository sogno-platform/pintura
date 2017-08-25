#!/bin/bash
template_dir=$1
handlebars \
  ${template_dir}/cim2svg.handlebars \
  ${template_dir}/pintura2html.handlebars \
  ${template_dir}/pintura2diaglist.handlebars \
> ${template_dir}/template.js
