const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
const user = {
  name: "Anisa Mohamed",
  cities: ["tokyo", "Mogadishu", "Tehran"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city + "!");

    // this.cities.forEach((city) => {
    //   console.log(this.name + "has lived in " + city);
    // });
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 4, 5, 6],
  multiplyBy: 2,
  multipy() {
   return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multipy());
