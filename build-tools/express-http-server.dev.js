var express = require('express');
var compression = require('compression');
var openurl = require("openurl");
var nodePath = require('path');
const spdy = require('spdy');
const fs = require('fs')

var app = express();

app.use(express.static("./"));

app.get('/*', function(req, res, next) {
    var ext = nodePath.extname(req.path);
    if (!ext) {
        // Just send the index.html for routes
        res.sendFile('./index.html', { root: "./" });
    } else {
        return next();
    }
});

app.get('*', function(req, res){
  res.send('Not found', 404);
});

const options = {
    key: fs.readFileSync('./server.key'),
    cert:  fs.readFileSync('./server.crt')
}

setTimeout(()=> openurl.open("https://localhost:443"), 500);
spdy
  .createServer(options, app)
  .listen(443, function () {
	console.log('Listening on port 443');
  });
