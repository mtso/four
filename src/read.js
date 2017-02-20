var Datastore = require('nedb');

var db = new Datastore({ filename: './data/definitionsA.db', autoload: true });
var search = process.argv[2];

db.find({ word: search }, function (err, docs) {
  if (err) throw err;
  docs.forEach(function(doc) {
    console.log(doc.word);
    doc.definitions.forEach(function(def, i) {
      console.log( (i + 1) + ': ' + def.definition);
    });
  });
});