var Q = require('q');
var data = require('./data.js');

function define(word) {
  return data.definitions[word];
}

function words() {
  return data.words;
}

function search(text) {
  return data.words.filter(function(word) {
    return text === word.substring(0, text.length);
  });
}

module.exports = {
  define: define,
  search: search,
  getWords: words
}

// function(word, callback) {
//   return define(word);
//   // var deferred = Q.defer();
//   // return deferred.promise;
//   // var definition = '';
//   // return callback(definition);
// }
