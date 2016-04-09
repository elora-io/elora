var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8080;
var publicPath = path.join(__dirname, '../dist');

if (isProduction) {
  app.use(express.static(publicPath));
  app.get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  });
}

app.get('/v1/test', function (req, res) {
  res.send('back-end works');
});

var server = http.createServer(app).listen(port, function() {
  console.log('Server running on port ' + port);
});

