console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "Indecision",
  subtitle: "Let me help you make a decision",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render();
};
const removeAll = () => {
  app.options = [];
  render();
};
const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random()*app.options.length)
  const option = app.options[randomNumber]
  alert(option)

}
const appRoot = document.getElementById("app");


function render() {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {" "}
        {app.options && app.options.length > 0
          ? "Here are your Options:"
          : "No Options"}
      </p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0}  onClick={onMakeDecision }>What Shall I do? </button>
      <button onClick={removeAll}>Remove All</button>

   
      <ol>
       { app.options.map((option) => <li key={option}>{option}</li>)
      }
     
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const user = { name: "Anisa Mohamed", age: 29, locations: "Toronto " };
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
render();
