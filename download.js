// downloads the definitions of the words in the text file

var http = require('http');
var fs = require('fs');
var unirest = require('unirest');
var path = require('path');
var Q = require('q');

var word_file_path = path.join(__dirname, 'data/four-letter-words.txt');

function requestString(word) {
  return 'https://wordsapiv1.p.mashape.com/words/' + word + '/definitions';
}

function save(result) {
  var filepath = './data/definition-' + word + '.txt';
  var data = JSON.stringify(result.body);
  fs.writeFile(filepath, data, checkError);
}

function checkError(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('saved ' + word);
  }
}

function parseWords(word_file_path) {
  var deferred = Q.defer();
  fs.readFile(word_file_path, 'utf8', function(err, data) {
    if (err) {
      return deferred.reject(err);
    }
    data = data.replace(/\n{2}/g, ' ');
    data = data.toLowerCase();
    words = data.split(' ');
    deferred.resolve(words);
  });
  return deferred.promise;
}

function beginsWithLetter(letter) {
  return function(word) {
    return word[0] === letter;
  }
}

var beginsWithA = beginsWithLetter('a');

// begin download
parseWords(word_file_path)
  .then(function(words) {
    console.log(words.filter(beginsWithA));
  })
  .catch(function(err) {
    console.error(err);
  });


// word = process.argv[2];
// if (word) {
//   var req = requestString(word);
//   unirest.get(req)
//     .header('X-Mashape-Key', process.env.MASHAPE_KEY)
//     .header('Accept', 'application/json')
//     .end(save);
// } else {
//   console.error('Please provide a word to define');
// }