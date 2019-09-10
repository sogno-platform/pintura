
from node:alpine
workdir /bin
run npm install http fs formidable
expose 4040
copy files/1.xml /var/urlserver/file1.xml
copy urlServer.js /bin/urlServer.js
cmd /bin/urlServer.js
