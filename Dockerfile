
from nginx 

copy web/default.conf /etc/nginx/conf.d/
run  mkdir -p /var/www/html/
add  html.tgz /var/www/html/
run  mkdir -p /etc/nginx
add  ssl.tgz /etc/nginx
expose 443
