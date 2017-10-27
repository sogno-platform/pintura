#!/bin/bash
template_dir=$1
xsltproc $template_dir/cim_xml_scheme.xslt \
  $template_dir/Core.xsd | \
  csplit --digits=3  --quiet --prefix=$template_dir/template - "/</ul>/+1" "{*}"
xsltproc $template_dir/cim_xml_scheme.xslt \
  $template_dir/Wires.xsd | \
  csplit --digits=3  --quiet --prefix=$template_dir/template - "/</ul>/+1" "{*}"
for file in $(ls $template_dir/template0*); do
  echo ${file}
  TYPE=$(sed -n 's/.*id="\(.*\)" base.*/\1/p' ${file})
  echo ${TYPE};
  if [ "${TYPE}" != "" ]; then
    mv ${file} $template_dir/${TYPE}.handlebars;
  else
    echo "Clearing up invalid file: $file"
    rm $file
  fi;
done;
handlebars \
  ${template_dir}/*.handlebars \
> ${template_dir}/template.js
