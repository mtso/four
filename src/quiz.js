var db = require('./db');
var data = require('./data');

/* 
the quiz app needs to be able to 
- get a random next word
- compare a text with a word's reference definition
- complete words by saving progress
*/

// returns a random word given an array of words
var randomWord = function(words) {
  var index = Math.floor( Math.random() * words.length );
  return words[index];
}

// filter words for incomplete ones and not current word
var nextWord = function(current) {
  var incompleteWords = data.words.filter(db.isIncomplete);
  incompleteWords.filter(function(word) {
    return word !== current;
  });
  return randomWord(incompleteWords);
}

var stripPunctuation = function(word) {
  return word.replace(/[,.]/, '');
}

var compare = function(text, reference) {
  if (text === '') {
    return [
      {isMatch: false, text: reference}
    ];
  }
  reference = reference.split(' ');
  return reference.map(function(word) { // word => {
    var pattern = new RegExp('(' + stripPunctuation( word.toLowerCase() ) + ')[,.]{0,1}');
    var match = text.match(pattern);
    if (match === null) {
      return {isMatch: false, text: word};
    } else {
      return {isMatch: true, text: word};
    }
  });
}

var renderHighlights = function(comparison) {
  return comparison.map(function(word) {
    if (word.isMatch) {
      return '<mark>' + word.text + '</mark>';
    } else {
      return word.text;
    }
  }).join(' ');
}

var highlight = function(text, reference) {
  var comparison = compare(text, reference);
  return renderHighlights(comparison);
}

module.exports = {
  highlight,
  nextWord
};