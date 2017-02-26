// var db = require('./db');
var data = require('./data');

/* 
the quiz app needs to be able to 
- get a random next word
- compare a text with a word's reference definition
- complete words by saving progress
*/

function Quiz(db, data) {
  var words = data.words;
  var definitions = data.definitions;

  function randomWord(words) {
    var index = Math.floor( Math.random() * words.length );
    return words[index];
  }

  function stripPunctuation (word) {
    return word.replace(/[(),.]/g, '');
  }

  function compare(text, reference) {
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

  function renderHighlight(comparison) {
    return comparison.map(function(word) {
      if (word.isMatch) {
        return '<mark>' + word.text + '</mark>';
      } else {
        return word.text;
      }
    }).join(' ');
  }

  function highlight(text, reference) {
    var comparison = compare(text, reference);
    return renderHighlight(comparison);
  }

  function highlightWord(text, word) {
    var reference = definitions[word][0];
    var comparison = compare(text, reference);
    return renderHighlight(comparison);
  }

  function getWord(current) {
    var isIncompleteAndNotCurrent = function(word) {
      return !db.isComplete(word) && word !== current;
    }
    var incompleteWords = words.filter(isIncompleteAndNotCurrent);
    return randomWord(incompleteWords);
  }

  this.highlight = highlight;
  this.highlightWord = highlightWord;
  this.getWord = getWord;

  this.isComplete = db.isComplete;
  this.complete = db.complete;
  this.reset = db.reset;
}

module.exports = Quiz;