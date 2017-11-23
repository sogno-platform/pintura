#!/bin/bash

template_dir=$1

attribute_lists_dir=$template_dir/generated_attribute_lists
if [ ! -d "${attribute_lists_dir}" ]; then
  mkdir "${attribute_lists_dir}"
fi
xsltproc $template_dir/cim_xml_scheme.xslt \
  $template_dir/Core.xsd | \
  csplit --digits=3  --quiet --prefix=${attribute_lists_dir}/template_c_ - "/</ul>/+1" "{*}"
xsltproc $template_dir/cim_xml_scheme.xslt \
  $template_dir/Wires.xsd | \
  csplit --digits=3  --quiet --prefix=${attribute_lists_dir}/template_w_ - "/</ul>/+1" "{*}"
xsltproc $template_dir/cim_xml_scheme.xslt \
  $template_dir/Topology.xsd | \
  csplit --digits=3  --quiet --prefix=${attribute_lists_dir}/template_t_ - "/</ul>/+1" "{*}"
for file in $(ls $attribute_lists_dir/template_?_*); do
  echo ${file}
  TYPE=$(sed -n 's/.*id="\(.*\)" base.*/\1/p' ${file})
  echo ${TYPE};
  if [ "${TYPE}" != "" ]; then
    mv ${file} ${attribute_lists_dir}/${TYPE}.handlebars;
  else
    echo "Clearing up invalid file: $file"
    rm $file
  fi;
done;

add_components_dir=$template_dir/generated_add_components
if [ ! -d "${add_components_dir}" ]; then
  mkdir "${add_components_dir}"
fi
echo '<menu>' > $add_components_dir/menu.xml
echo '  <ul class="floating-panel-list">' >> $add_components_dir/menu.xml
xsltproc $template_dir/cim_add_components_menu.xslt \
  $template_dir/Core.xsd $template_dir/Topology.xsd $template_dir/Wires.xsd \
  | grep -v "^$" >> $add_components_dir/menu.xml
echo '  </ul>' >> $add_components_dir/menu.xml
echo '</menu>' >> $add_components_dir/menu.xml

handlebars \
  ${template_dir}/*.handlebars \
  ${attribute_lists_dir}/*.handlebars \
> ${template_dir}/template.js
