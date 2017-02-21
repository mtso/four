var data = require('../src/data');
var four = require('../src/app');

describe('data', function() {

  it('should have the same number of words as definition keys', function() {
    var words = data.words;
    var definitions = data.definitions;
    expect(words.length).toEqual(Object.keys(definitions).length);
  });
});

describe('data persistence', function() {
  beforeEach(function() {
    four.initializeStorage();
  });

  describe('save', function() {
    it('should persist current progress', function() {
      expect(four.isComplete('cafe')).toEqual(false);
      four.complete('cafe');
      expect(four.isComplete('cafe')).toEqual(true);
    });
  });
});