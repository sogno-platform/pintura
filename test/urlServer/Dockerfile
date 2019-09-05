
from node:alpine
workdir /bin
copy urlServer.js /bin/urlServer.js
run npm install http fs formidable
expose 8080
cmd /bin/urlServer.js
