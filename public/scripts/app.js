"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision",
  subtitle: "Let me help you decide!",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    " ",
    app.options && app.options.length > 0 ? 'Here are your Options:' : 'No Options'
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "hwy"
    ),
    React.createElement(
      "li",
      null,
      "jheb"
    )
  )
);

var name = "Anisa Mohamed";
var age = 29;
var locations = "Toronto";
var user = { name: "Anisa Mohamed", age: 29, locations: "Toronto " };
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      locations
    );
  }
}
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    user.name ? user.name : "Anonymous",
    " "
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.locations)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
