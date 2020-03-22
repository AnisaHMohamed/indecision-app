console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "Indecision",
  subtitle: "Let me help you make a decision",
  options: ["One", "Two"]
};

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
    <ol>
      <li>hwy</li>
      <li>jheb</li>
    </ol>
  </div>
);

const user = { name: "Anisa Mohamed", age: 29, locations: "Toronto " };
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
let count = 0;
const myId = "javascriptID";
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1> Count: {count} </h1>
      <button id={myId} className="button" onClick={addOne}>
        +1
      </button>
      <button onClick={minusOne}>-1 </button>
      <button onClick={reset}>reset </button>
    </div>
  );
  ReactDOM.render(template2, appRoot);
};
renderCounterApp();
