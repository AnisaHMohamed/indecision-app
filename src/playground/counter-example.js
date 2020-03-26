class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('count')
    const count = JSON.parse(json)
    if(count) {
      this.setState(() => ({ count }))
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if(this.state.count !== prevState.count) {
      const json = JSON.stringify(this.state.count)
      localStorage.setItem('count', json)
      console.log('updating state')
    }

  }

  componentDidunMount() {
console.log("component will unmount!");
  }

  handleAdd() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById("app"));
