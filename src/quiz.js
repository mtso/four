
function compare(text, reference) {
  if (text === '') {
    return [
      {isMatch: false, text: reference}
    ];
  }
  reference = reference.split(' ');
  return reference.map(function(word) { // word => {
    var pattern = new RegExp('(' + word.toLowerCase() + ')[,.]{0,1}');
    var match = text.match(pattern);
    if (match === null) {
      return {isMatch: false, text: word};
    } else {
      return {isMatch: true, text: word};
    }
  });
}

function renderHighlights(comparison) {
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
  return renderHighlights(comparison);
}

module.exports = {
  highlight
};