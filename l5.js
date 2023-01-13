// // Exercise 1:  Create a “car” object with the properties “make”, “model”, and “color”.
// let value1 = "first value";

// let make = value1;
// let model = "value2";

// let car = {
//   make: value1,
//   model: "value2",
//   color: 5,
//   "speed of the car": "fast",
// };
// console.log(car);

// // // Exercise 2: Think of 5 real “things” you could describe with objects. Add as many properties as you’d like.

// // // Exercise 3: Fix the syntax issues found in the following objects (on Slack).

// // Exercise 1:  Using your objects from the last exercise, log out a few of the properties.
// console.log(car.make);
// console.log(car["model"]);
// console.log(car["speed of the car"]);

// // Exercise 2: Starting with the following code, add the “name” and “age” properties to the  person object.
// let person = {};
// person.name = "Natalie";
// person.age = 27;

// console.log(person);
// // Exercise 3: Change the given code so that it prints the expected values (see Slack)
// let dog = {
//   name: "Billy",
//   wantsToPlay: false,
// };

// // WRITE CODE ABOVE THIS LINE
// dog.name = "Rex";
// dog.wantsToPlay = true;
// console.log(dog.name);
// console.log(dog.wantsToPlay);

// // -> it should output:
// // Rex
// // true

// Exercise 1:  Given the following object, log out the “firstName” property of the nested “currentOwner” object
// let house = {
//   currentOwner: {
//     firstName: "Margaret",
//     lastName: "Conway",
//   },
// };
// console.log(house.currentOwner.firstName)

// Exercise 2: Given the following code (see Slack), follow the instructions to get the expected result.
// Exercise 2 Code:
let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};
/*
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW

*/
house.address = "51 Berkley Road";
house.previousOwners = ["Brian M.", "Fiona S."];
house.currentOwner.lastName = "Montgomery";
// - change the address of “house” to ‘51 Berkley Road’
// - change the previous owners of “house” to [“Brian M.“, “Fiona S.“]
// - change the last name of the current owner of “house” to “Montgomery”
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: 51 Berkley Road. Actual result: ${house.address}`
);
console.log(
  `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
);
console.log(
  `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
);

// Exercise 3: Given the following code (see Slack), follow the instructions to get the expected result

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};
let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return house.currentOwner.firstName + " " + house.currentOwner.lastName;
}
// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  return [house1.currentOwner.email, house2.currentOwner.email];
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  let price1 = house1.price;
  let price2 = house2.price;
  if (price1 > price2) {
    return house2.address;
  } else house1.address;
}
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);
