var data = require('../src/data');

describe('data', function() {

  it('should have the same number of words as definition keys', function() {
    var words = data.words;
    var definitions = data.definitions;
    expect(words.length).toEqual(Object.keys(definitions).length);
  });
});