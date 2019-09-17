
from node:alpine
workdir /bin
run npm install http fs formidable
expose 4040
copy files/file1.xml /var/urlserver/file1.xml
copy files/file2.zip /var/urlserver/file2.zip
copy urlServer.js /bin/urlServer.js
cmd /bin/urlServer.js
