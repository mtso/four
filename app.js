// local app server

var express = require('express');

var app = express();
app.use('/four', express.static('public'));

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log('Serving to localhost:' + port);
});