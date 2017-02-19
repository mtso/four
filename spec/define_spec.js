var define = require('../define.js');

describe('define', function() {
  it('returns the definition of a word', function() {
    var expectedDefinition = 'a unit of language';
    define('word', function(definition) {
      expect(definition).toBe(expectedDefinition);
    });
  });
});