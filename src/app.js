import React from "react";
import ReactDOM from "react-dom";
import AddOption from "./components/AddOption";
import Option from "./components/Option";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {

    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    if(options) {
    this.setState(() => ({ options }));
    console.log("fetching state");
  }
      
    } catch (error) {
      
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving state");
    }
  }

  componentWillUnmount() {
    console.log("component will unmount!");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    console.log("hdo", optionToRemove);
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
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
    this.setState(setPrev => ({ options: [...setPrev.options, option] }));
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
    {props.options.length === 0 && <p>Please Add an Option to get started!</p> }
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));