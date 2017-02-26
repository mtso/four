// Local app server.

var express = require('express');
var app = express();

app.use('/four', express.static('docs'));
app.use('/*', function(req, res) {
  res.redirect('/four');
});

var port = process.env.PORT || 4444;
app.listen(port, function() {
  console.log('Serving to localhost:' + port + '/four');
});