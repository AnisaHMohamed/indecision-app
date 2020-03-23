class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return ` Hi I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation} `;
    }
    return greeting;
  }
}

const me = new Student("Anisa", 29, "Computer Science");
const other = new Student("aefhh");
const no = new Person();
const traveller = new Traveller("anisa Traveller", 22, "New york");
const traveller2 = new Traveller("anisa Traveller no locATION", 22);

console.log(me);
console.log(other);
console.log(no);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());
console.log(no.getGreeting());
console.log(no.getDescription());
console.log(traveller.getGreeting());
console.log(traveller.getDescription());
console.log(traveller2.getGreeting());
console.log(traveller2.getDescription());
