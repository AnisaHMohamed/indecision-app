import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    console.log("hdo", optionToRemove);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter Valid Value to add Option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((setPrev) => ({ options: [...setPrev.options, option] }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
        console.log("fetching state");
      }
    } catch (error) {}
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
