
from nginx 

run apt-get update
run apt-get install -y curl gnupg
run curl -sL https://deb.nodesource.com/setup_6.x | bash -s
run apt-get install -y nodejs xsltproc
copy web/default.conf /etc/nginx/conf.d/
run  mkdir -p /var/www/html/
add  html.tgz /var/www/html/
run  curl https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.runtime.js -o /var/www/html/handlebars.runtime.js
run npm install -g handlebars
env template_dir=/var/www/html/templates
run ${template_dir}/compile.sh $template_dir
run node /var/www/html/generateIndex.js > /var/www/html/index.html
run rm /var/www/html/generateIndex.js
