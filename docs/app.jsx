
const WordList = React.createClass({
  render() {
    var words = this.props.words;
    words = words.map(word => ({ word, anchor: '#' + word }) ); // add anchor tag to words

    return <ul className="vertical menu docs-nav">
      {words.map(word =>
        <li><a href={word.anchor}>{word.word}</a></li>
      )}
    </ul>;
  }
});

const DefinitionPage = React.createClass({
  renderDefinition(word) {
    const definitions = this.props.data.definitions[word];

    return <div>
    <h3 id={word}>{word}</h3>
    <p>{definitions[0]}</p>
    </div>;
  },
  render() {
    return <div id="content">
    {this.props.data.words.map(this.renderDefinition)}
    </div>;
  }
})

ReactDOM.render(<div id="app" className="row">
  <div className="large-1 columns">
    <WordList words={four.data.words} />
  </div>
  <div className="large-11 columns">
    <DefinitionPage data={four.data} />
  </div>
</div>, document.getElementById('content'));