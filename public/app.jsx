
// const Prompt = React.createClass();

const Hello = React.createClass({
  render() {
    return <h1>HELLO WORLD</h1>;
  }
});

// window.onload = () => {
//   ReactDOM.render(<div id="app">
//     <Hello />
//     <script>console.log('hi~');</script>
//   </div>, document.body);
// }

ReactDOM.render(<div id="app">
  <Hello />
  <script>console.log('hi~');</script>
</div>, document.body);