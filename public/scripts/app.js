"use strict";

var square = function square(number) {
  return number * number;
};
console.log(square(8));

var getFirstName = function getFirstName(fullName) {
  return console.log(fullName.split(" ")[0]);
};
getFirstName("Anisa Mohamed");

var getFirstNameLong = function getFirstNameLong(fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName);
};
getFirstNameLong("Anisa Mohamed");
