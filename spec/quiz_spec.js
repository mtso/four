var four = require('../src/app').four;
var quiz = four.quiz;

describe('quiz', function() {
  
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

  describe('getWord', function() {
    it('gets a random word', function() {
      var word = quiz.getWord();
      expect(word).toBeDefined();
    });
  });

  describe('complete', function() {

  })

  describe('reset', function() {
    it('resets the local storage progress', function() {

    })
  })
  
});