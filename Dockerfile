
from nginx 

run apt-get update
run apt-get install -y curl gnupg
run curl -sL https://deb.nodesource.com/setup_6.x | bash -s
run apt-get install -y nodejs xsltproc
copy web/default.conf /etc/nginx/conf.d/
run  mkdir -p /var/www/html/
add  html.tgz /var/www/html/
run  curl https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.runtime.js -o /var/www/html/handlebars.runtime.js
run  mkdir -p /etc/nginx/ssl
run  openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/server.key \
        -out /etc/nginx/ssl/server.crt \
        -subj "/C=UK/ST=Warwickshire/L=Leamington/O=OrgName/OU=IT Department/CN=192.168.1.204"
run npm install -g handlebars
env template_dir=/var/www/html/templates
run ${template_dir}/compile.sh $template_dir
run node /var/www/html/generateIndex.js > /var/www/html/index.html
run rm /var/www/html/generateIndex.js
expose 8082
