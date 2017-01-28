var express = require('express');
var compression = require('compression');
var openurl = require("openurl");
var nodePath = require('path');

var app = express();


app.use(compression());
app.use(express.static("./dist"));

app.get('/*', function(req, res, next) {
    var ext = nodePath.extname(req.route.path);
    if (!ext) {
        // Just send the index.html for routes
        res.sendFile('index.html', { root: "./dist" });
    } else {
        return next();
    }
});

app.get('*', function(req, res){
  res.send('Not found', 404);
});

setTimeout(()=> openurl.open("http://localhost:8282"), 500);

app.listen(8282, function () {
  console.log('Listening on port 8282');
});
