
const quiz = four.quiz;

const AnswerInput = React.createClass({
  getInitialState() {
    return {
      value: '',
      highlight: []
    };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: '',
      highlight: []
    });
  },
  check(event) {
    event.preventDefault();
    var highlight = quiz.compareWord(this.state.value.toLowerCase(), this.props.word);
    this.setState({highlight: highlight});
  },
  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  },
  renderWord(word) {
    if (word.isMatch) {
      return <span><mark>{word.text}</mark> </span>;
    } else {
      return word.text + ' ';
    }
  },
  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} value={this.state.value} />
          <input type="submit" className="button secondary" onClick={this.check} value="Check" />
        </form>
        <div>
          {this.state.highlight.map(this.renderWord)}
        </div>
      </div>
    );
  }
});

const PracticeApp = React.createClass({
  getInitialState() {
    return {word: this.props.word};
  },
  nextWord: function(event) {
    this.setState({
      word: four.quiz.getWord(this.state.word)
    });
  },
  complete: function(event) {
    quiz.complete(this.state.word);
    this.nextWord();
  },
  reset: function(event) {
    quiz.reset();
    this.nextWord();
  },
  render() {
    return (
      <div id="prompt" className="columns">
        <h1>
          Define "{this.state.word}" <button 
          onClick={this.nextWord} className="button default">Skip</button> <button 
          onClick={this.complete} className="button success">Complete</button> <button 
          onClick={this.reset} className="button alert">Reset</button>
        </h1>
        <AnswerInput word={this.state.word}/>
      </div>
    );
  }
});

ReactDOM.render(<div id="app" className="row">
  <PracticeApp word={four.quiz.getWord()}/>
</div>, document.getElementById('content'));