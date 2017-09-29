#!/bin/bash
template_dir=$1
handlebars \
  ${template_dir}/cim2svg.handlebars \
  ${template_dir}/pintura2html.handlebars \
  ${template_dir}/basejson2sidebar.handlebars \
> ${template_dir}/template.js
