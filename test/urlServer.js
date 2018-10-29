#!/usr/bin/env node

var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function (req, res) {
  console.log(req.method);
  if (req.method == "GET") {
    fs.readFile('.' + req.url, (err, data)=>{
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("Error: " + req.url + '\n');
        res.write("Not found, sorry!");
        res.end();
      }
      else {
        console.log("Replying with file: ", req.data);
        res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
        res.write(data);
        res.end();
      }
    });
  }
  else if (req.method == "POST") {
    let contentType = req.headers['content-type'].split(';')[0];
    console.log("Attempting to parse content of type: ", contentType)
    if(contentType == 'multipart/form-data') {
      let body;
      let form = new formidable.IncomingForm();
      form.parse(req, function(err, fields, files) {
          if(err) {
              console.log("ERROR: ", err)
          }
          else {
              for (let item in files) {
                  let file = files[item]
                  let readStream = fs.createReadStream(file.path);
                  let writeStream = fs.createWriteStream('.' + req.url);
                  readStream.on('error', (err)=>{
                      res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                      res.write(JSON.stringify({ msg: "Failed to read " + file.path + " because " + err }));
                      res.end();
                      console.error("Failed to write ", req.url, " because ", err);
                  });
                  writeStream.on('error', (err)=>{
                      res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                      res.write(JSON.stringify({ msg: "Failed to write " + req.url + " because " + err }));
                      res.end();
                      console.error("Failed to write ", req.url, " because ", err);
                  });
                  readStream.on('close', function () {
                       fs.unlink(file.path, (err)=>{
                           if (err) {
                               res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                               res.write(JSON.stringify({ msg: "Failed to write " + req.url + " because " + err }));
                               res.end();
                               console.error("Failed to delete path: ", file.path);
                           }
                           else {
                               res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                               res.write(JSON.stringify({ msg: "File saved successfully." }));
                               res.end();
                               console.log("Succeeded with write ", req.url);
                           }
                       });
                  });
                  readStream.pipe(writeStream);
              }
          }
      });
    }
    else if(contentType == 'text/plain') {
      let body = '';
      req.on('data', chunk => {
          body += chunk;
      });
      req.on('end', () => {
          fs.writeFile('.' + req.url, body.toString(), (err)=>{
              if(err) {
                  res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                  res.write(JSON.stringify({ msg: "Failed to write " + req.url + " because " + err }));
                  res.end();
                  console.error("Failed to write ", req.url, " because ", err);
              }
              else {
                  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                  res.write(JSON.stringify({ msg: "File saved successfully." }));
                  res.end();
                  console.log("Succeeded with write ", req.url);
              }
          });
      });
    }
    else {
      console.error("Cannot parse content type : ", contentType);
    }
  }
}).listen(8080);
