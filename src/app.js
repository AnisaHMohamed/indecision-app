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
    <p> {(app.options && app.options.length > 0) ? 'Here are your Options:': 'No Options'}</p>
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
const template2 = (
  <div>
    <h2>{user.name ? user.name : "Anonymous"} </h2>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.locations)}
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
