var express = require('express');
var compression = require('compression');
var openurl = require("openurl");
var nodePath = require('path');

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

setTimeout(()=> openurl.open("http://localhost:8181"), 500);

app.listen(8181, function () {
  console.log('Listening on port 8181');
});
