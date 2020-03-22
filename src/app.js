console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision",
  subtitle: "Let me help you decide!",
  options: ["One", "Two"]
};

var template = (
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

var name = "Anisa Mohamed";
var age = 29;
var locations = "Toronto";
var user = { name: "Anisa Mohamed", age: 29, locations: "Toronto " };
function getLocation(location) {
  if (location) {
    return <p>Location: {locations}</p>;
  }
}
var template2 = (
  <div>
    <h2>{user.name ? user.name : "Anonymous"} </h2>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.locations)}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
