var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var fileBuf = new Buffer(fs.readFileSync("index.html"));

app.get('/', function(request, response) {
    fileBuf.toString();
    response.send(fileBuf.write());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
