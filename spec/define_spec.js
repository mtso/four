var w = require('../src/define.js');

describe('define', function() {

  it('returns the definition of a word', function() {
    var expected = [
      "A small restaurant selling light meals and drinks.",
      "A bar or nightclub.",
      "A shop selling sweets, cigarettes, newspapers, etc. and staying open after normal hours."
    ];
    expect(w.define('cafe')).toEqual(expected);
  });

  it('searches the word list', function() {
    var expected = [
      'cafe'
    ];
    expect(w.search('c')).toEqual(expected);
    expect(w.search('caf')).toEqual(expected);

    expected = [
      "aahs",
      "aals",
      "abac"
    ];
    expect(w.search('a')).toEqual(expected);
    expect(w.search('aa')).toEqual(expected.slice(0, 2));
  });
});