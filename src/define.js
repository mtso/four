var Q = require('q');
var data = require('./data.js');

function define(word) {
  return data.definitions[word];
}

module.exports = function(word, callback) {
  return define(word);
  // var deferred = Q.defer();
  // return deferred.promise;
  // var definition = '';
  // return callback(definition);
}
