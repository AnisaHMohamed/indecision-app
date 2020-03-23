class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        {this.state.visibility ? (
          <button onClick={this.handleToggleVisibility}>Hide Details</button>
        ) : (
          <button onClick={this.handleToggleVisibility}>Show Details</button>
        )}
        {this.state.visibility && <p> Peek a boo!</p>}
      </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));
