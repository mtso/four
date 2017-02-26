
var four = window.four;

console.log(four.data.words);

const Prompt = React.createClass({
  render() {
    return <h1>hi</h1>;
  }
});


ReactDOM.render(<div id="app" className="row">
  <Prompt />
  <div className="large-1 columns">
  </div>
  <div className="large-11 columns">
  </div>
</div>, document.getElementById('content'));