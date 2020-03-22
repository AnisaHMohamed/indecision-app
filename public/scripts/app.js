"use strict";

var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};
var user = {
  name: "Anisa Mohamed",
  cities: ["tokyo", "Mogadishu", "Tehran"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city + "!";
    });

    // this.cities.forEach((city) => {
    //   console.log(this.name + "has lived in " + city);
    // });
  }
};
console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 4, 5, 6],
  multiplyBy: 2,
  multipy: function multipy() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multipy());
