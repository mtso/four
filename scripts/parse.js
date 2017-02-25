// parse the words

var fs = require('fs');
var path = require('path');

var word_file_path = path.join(__dirname, 'four-letter-words.txt');

fs.readFile(word_file_path, 'utf8', function(err, data) {
  if (err) {
    return console.error(err);
  }
  data = data.replace(/\n{2}/g, ' ');
  var words = data.split(' ');
  console.log(words);
});
