"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision",
  subtitle: "Let me help you make a decision",
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
    app.options && app.options.length > 0 ? "Here are your Options:" : "No Options"
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

var user = { name: "Anisa Mohamed", age: 29, locations: "Toronto " };
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}
var count = 0;
var myId = "javascriptID";
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var template2 = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " Count: ",
      count,
      " "
    ),
    React.createElement(
      "button",
      { id: myId, className: "button", onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1 "
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset "
    )
  );
  ReactDOM.render(template2, appRoot);
};
renderCounterApp();
