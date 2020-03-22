var nonVar = "Anisa";
var nonVar = "Mike";
let name = "Jen";
name = "julie";
const nameconst = "Frank";
function getPetName() {
  var petName = "pow";
  return petName;
}
const petName = getPetName();
console.log(petName);
//Block Scoping Practice
var fullName = "Anisa Mohamed";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName)
}
console.log(firstName)