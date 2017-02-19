var Datastore = require('nedb');

var db = new Datastore({ filename: './data/definitions.db', autoload: true });

db.find({ word: 'word' }, function (err, docs) {
  docs.forEach(function(doc) {
    console.log(JSON.stringify(doc));
  });
});