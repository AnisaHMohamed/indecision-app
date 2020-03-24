class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }
 
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    console.log('hdo', optionToRemove)
    this.setState((prevState) => ({ options: prevState.options.filter((option) =>  optionToRemove !== option) }) 
       
      
    )
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter Valid Value to add Option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(setPrev => ({ options: [...setPrev.options, option]})
    );
  }
  render() {
    const subtitle = "Let me help you decide!";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  const handlePick = () => {
    alert("Handlepick");
  };
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I do?{" "}
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map(option => (
        <Option 
        key={option} 
        optionText={option} 
        handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
    
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button 
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
      >
      Remove
      </button>

    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.option.value = "";
    this.setState(() =>  ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
// const User = (props) => {
//   return (
//     <div>
//        <p>Name:{props.name}</p>
//       <p>Age: {props.age} </p>

//     </div>
//   )
// }
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
// JSX - JavaScript XML
