
const quiz = four.quiz;

const AnswerInput = React.createClass({
  getInitialState() {
    return {
      value: '',
      highlight: [],
      word: this.props.word
    };
  },
  check(event) {
    event.preventDefault();
    var highlight = quiz.compareWord(this.state.value, this.props.word);
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
          <textarea onChange={this.handleChange}>{this.state.value}
          </textarea>
          <input type="submit" className="button secondary" onClick={this.check} value="Check" />
        </form>
        <div>
          {this.state.highlight.map(this.renderWord)}
        </div>
      </div>
    );
  }
});

const Prompt = React.createClass({
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
  <Prompt word={four.quiz.getWord()}/>
  <div className="large-1 columns">
  </div>
  <div className="large-11 columns">
  </div>
</div>, document.getElementById('content'));