#!/usr/bin/env node

var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

let server=http.createServer(function (req, res) {
  console.log(req.method);
  if (req.method == "GET") {
    console.log(req.url)
    let tokens = req.url.split('/');
    console.log(tokens)
    if (tokens.length == 2 && tokens[1] == 'files') {
      res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
      res.write(JSON.stringify(files));
      res.end();
    }
    else if (tokens.length == 3 && tokens[1] == 'files') {
      let filename = tokens[2];
      let filepath = '/var/urlserver/' + filename;
      console.log(filepath)
      fs.readFile(filepath, (err, data)=>{
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write("Error: " + filepath+ '\n');
          res.write("Not found, sorry!");
          res.end();
        }
        else {
          console.log("Replying with file: ", filepath);
          res.writeHead(200, { "Content-Disposition": "attachment;filename=" + filename,
                               "Access-Control-Expose-Headers": "Content-Disposition",
                               "Content-Type": "text/plain",
                               "Access-Control-Allow-Origin": "*"});
          res.write(data);
          res.end();
        }
      });
    }
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
            console.log(file)
            let tokens = req.url.split('/');
            if (tokens.length == 3 && tokens[1] == 'files') {
              let filename = tokens[2];
              let filepath = '/var/urlserver/' + filename;
              let readStream = fs.createReadStream(file.path);
              let writeStream = fs.createWriteStream(filepath);
              readStream.on('error', (err)=>{
                res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                res.write(JSON.stringify({ msg: "Failed to read " + file.path + " because " + err }));
                res.end();
                console.error("Failed to write ", filepath, " because ", err);
              });
              writeStream.on('error', (err)=>{
                res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                res.write(JSON.stringify({ msg: "Failed to write " + filepath + " because " + err }));
                res.end();
                console.error("Failed to write ", filepath, " because ", err);
              });
              readStream.on('close', function () {
                fs.unlink(file.path, (err)=>{
                  if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                    res.write(JSON.stringify({ msg: "Failed to write " + filepath + " because " + err }));
                    res.end();
                    console.error("Failed to delete path: ", file.path);
                  }
                  else {
                    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
                    res.write(JSON.stringify({ msg: "File saved successfully." }));
                    res.end();
                    console.log("Succeeded with write ", filepath);
                  }
                });
              });
              readStream.pipe(writeStream);
            }
          }
        }
      });
    }
    else if(contentType == 'text/plain') {
      let body = '';
      let tokens = req.url.split('/');
      if (tokens.length == 3 && tokens[1] == 'files') {
        let filename = tokens[2];
        let filepath = '/var/urlserver/' + filename;
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          fs.writeFile(filepath, body.toString(), (err)=>{
            if(err) {
              res.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
              res.write(JSON.stringify({ msg: "Failed to write " + filepath + " because " + err }));
              res.end();
              console.error("Failed to write ", filepath, " because ", err);
            }
            else {
              res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
              res.write(JSON.stringify({ msg: "File saved successfully." }));
              res.end();
              console.log("Succeeded with write ", filepath);
            }
          });
        });
      }
    }
    else {
      console.error("Cannot parse content type : ", contentType);
    }
  }
}).listen(4040);

process.on('SIGINT', () => {
  // Stops the server from accepting new connections and finishes existing connections.
  let return_code=0;
  console.log("stopping")
  server.close(function (err) {
    if (err) {
      console.error(err)
      return_code=1;
    }
    process.exit(return_code)
  })
})
