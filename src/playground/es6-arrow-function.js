const square = number => number * number;
console.log(square(8))

const getFirstName = fullName =>console.log(fullName.split(" ")[0])
getFirstName("Anisa Mohamed")

const getFirstNameLong = (fullName) => {
  const firstName = fullName.split(" ")[0];
  console.log(firstName)
}
getFirstNameLong("Anisa Mohamed")
