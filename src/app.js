class IndecisionApp extends React.Component {
  render() {
    const title ='Indecision'
    const subtitle = 'Let me help you decide!'
    const options = ['thing1','thing2', 'thing3']
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action />
      <Options options={options} />
      <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}
class Action extends React.Component {
  handlePick() {
    alert('Handlepick');
  }; 
  render() {

    return (
      <div>
      <button onClick={this.handlePick}>What Should I do? </button>
      </div>
    )
  }
}
class Options extends React.Component {
  constructor(props){
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind( this)
  }
  handleRemoveAll() {
    console.log(this.props.options)
    
  }
  render() {
    return (
      <div>
      {this.props.options.map(option=> <Option key={option} optionText={option}  />)}
     <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
      <p>{this.props.optionText}</p>
      </div>
    )
  }
}

class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault()
    const option =e.target.elements.option.value.trim()
    if(option) {
      alert(option)
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
      <input type='text' name="option"></input>
      <button>Add Option</button>
      </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));
// JSX - JavaScript XML


