var quiz = require('../src/quiz');

describe('quiz', function() {
  
  it('highlights the reference definition', function() {
    var sampleText = 'a light press';
    var definition = 'Strike with a light blow.';
    var highlightedText = 'Strike with <mark>a</mark> <mark>light</mark> blow.';

    expect(quiz.highlight(sampleText, definition)).toEqual(highlightedText);
  });

  it('is able to handle empty strings', function() {
    var sampleText = '';
    var definition = 'Strike with a light blow.';

    expect(quiz.highlight(sampleText, definition)).toEqual(definition);
  });
});