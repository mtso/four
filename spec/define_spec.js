var defineA = require('../src/define.js');

describe('define', function() {
  it('returns the definition of a word', function() {
    var expected = [
      "A small restaurant selling light meals and drinks.",
      "A bar or nightclub.",
      "A shop selling sweets, cigarettes, newspapers, etc. and staying open after normal hours."
    ];
    expect(defineA('cafe')).toEqual(expected);
    // var expectedDefinition = 'a unit of language';
    // define('word', function(definition) {
    //   expect(definition).toBe(expectedDefinition);
    // });
  });
});