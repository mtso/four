var four = require('../src/app').four;
var quiz = four.quiz;
var data = four.data;

describe('quiz', function() {
  describe('compareWord', function() {
    it('compares the text with a given word\'s definition', function() {
      var sampleText = 'a small restaurant';
      var highlight = [
        {isMatch: true, text: 'A'},
        {isMatch: true, text: 'small'},
        {isMatch: true, text: 'restaurant'},
        {isMatch: false, text: 'selling'},
        {isMatch: false, text: 'light'},
        {isMatch: false, text: 'meals'},
        {isMatch: false, text: 'and'},
        {isMatch: false, text: 'drinks.'},
      ];
      expect(quiz.compareWord(sampleText, 'cafe')).toEqual(highlight);
    })
  });

  describe('highlight', function() {
    it('highlights the reference definition', function() {
      var sampleText = 'a light press';
      var definition = 'Strike with a light blow.';
      var highlightedText = 'Strike with <mark>a</mark> <mark>light</mark> blow.';

      expect(quiz.highlight(sampleText, definition)).toEqual(highlightedText);
    });

    it('highlights words even if capitalized or has punctuation', function() {
      var sampleText = 'strike blow';
      var definition = 'Strike with a light blow.';
      var highlightedText = '<mark>Strike</mark> with a light <mark>blow.</mark>';

      expect(quiz.highlight(sampleText, definition)).toEqual(highlightedText);
    });

    it('is able to handle empty strings', function() {
      var sampleText = '';
      var definition = 'Strike with a light blow.';

      expect(quiz.highlight(sampleText, definition)).toEqual(definition);
    });
  });

  describe('highlightWord', function() {
    it('highlights a given text using a given word', function() {
      var sampleText = 'eight bits';
      var highlightedText = 'A group of binary digits or <mark>bits</mark> (usually <mark>eight)</mark> operated on as a unit.'
      
      expect(quiz.highlightWord(sampleText, 'byte')).toEqual(highlightedText);
    })
  })

  describe('getWord', function() {
    it('gets a random word', function() {
      var word = quiz.getWord();
      expect(word).toBeDefined();
    });
  });

  describe('complete', function() {
    it('marks a word as learned', function() {
      var word = quiz.getWord();
      expect(quiz.isComplete(word)).toEqual(false);
      quiz.complete(word);
      expect(quiz.isComplete(word)).toEqual(true);
    });
  });

  describe('reset', function() {
    it('resets the local storage progress', function() {
      var word = quiz.getWord();
      quiz.complete(word);
      expect(quiz.isComplete(word)).toEqual(true);
      quiz.reset();
      expect(quiz.isComplete(word)).toEqual(false);
    });
  });
});

describe('data', function() {
  it('should have the same number of words as definition keys', function() {
    var words = data.words;
    var definitions = data.definitions;
    expect(words.length).toEqual(Object.keys(definitions).length);
  });

  it('should have the same words as definition keys', function() {
    var words = data.words;
    var definitions = data.definitions;
    words.forEach(function(word) {
      expect(definitions[word]).toBeDefined();
    });
  });
});
