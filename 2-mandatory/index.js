/*
let laptop = {
    make: "Dell",
    size: 15.6,
    processor: "i7", 
    installedRam: 6.0 + " GB", 
    isFingerPrint: false,
};

console.log(laptop.size);
laptop.size = 19;
console.log(laptop.size);
console.log(laptop);
*/
// let kitten = {
//     furColor: "orange",
//     age: "23",
// };

// let laptop2 = {
//     brand: "Lenovo",
//     ram: "5GB",
// }

// let phone = {
//     operatingSystem: "iOS",
//     hasStylus: true,
//     megapixels: 12,
//     batteryLife: "24 hours",
//     ["Battery life "]: "24",
// }
// phone.megapixels = 548;
// phone.make = "dell";
// console.log(phone.megapixels);
// console.log(phone);

// console.log(Object.values(phone));
// console.log(Object.keys(phone));
// console.log(Object.entries(phone));


// Exercise 1 
// let kitten = {
//   ageMonths: 3,
//   isFemale: true,
//   furColour: "brown",
// };

// kitten.name = "Gilbert";
// console.log(kitten.name);

// console.log(kitten.ageMonths);
// console.log(kitten.isFemale);
// console.log(kitten.furColour);

// Exercise 2

// let phone = {
//   brand:'iPhone',
//   model: 'iPhone X',
//   launchYear: 2017,
//   isUnlocked: true
// };

// let phoneBrand = phone.brand;
// let phoneLaunchYear = phone["launchYear"];

// console.log(phoneBrand);
// console.log(phoneLaunchYear);

// ************************************

// let phone = {
//   brand:'iPhone',
//   model: 'iPhone X',
//   launchYear: 2017,
//   isUnlocked: true,
//   colors: ["red", "blue", "pink"],
// };

// console.log(phone.colors);
// console.log(phone.colors[1]);

// ************************************

// More Complex Objects

// Exercise 1

// let house = {
//   address: "1 Kinning Park",
//   previousOwners: ["Claire M.", "John A."],
//   currentOwner: {
//     firstName: "Margaret",
//     lastName: "Conway",
//   },
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// // - change the address of "house" to '51 Berkley Road'
// // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// // - change the last name of the current owner of "house" to "Montgomery"

// house.address = '51 Berkley Road';
// house.previousOwners = ["Brian M.", "Fiona S."];
// house.currentOwner.lastName = "Montgomery";
// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
//   `Expected result: 51 Berkley Road. Actual result: ${house.address}`
// );
// console.log(
//   `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(
//   `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
// );


// Exercise 2

// let house = {
//   address: "1 Kinning Park",
//   previousOwners: ["Claire M.", "John A."],
//   currentOwner: {
//     firstName: "Margaret",
//     lastName: "Conway",
//   },
// };

// let newCurrentOwner = {
//   firstName: "Georgina",
//   lastName: "Hernandez",
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// // - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// // - from the list of previous owners, replace only "John A." with "Stephen B."
// // - give the house a new property called 'isForSale' with the value 'false'
// house.currentOwner = newCurrentOwner;
// house.previousOwners[1] = "Stephen B.";
// house.isForSale = false;

// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */
// console.log(
//   `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
//     house.currentOwner === newCurrentOwner
//   }`
// );
// console.log(
//   `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(`Expected result: false. Actual result: ${house.isForSale}`);

// Exercise 3

// let kinningParkHouse = {
//   address: "1 Kinning Park",
//   price: 180000,
//   currentOwner: {
//     firstName: "Margaret",
//     lastName: "Conway",
//     email: "margaret@fake-emails.com",
//   },
// };

// let parkAvenueHouse = {
//   address: "50 Park Avenue",
//   price: 195000,
//   currentOwner: {
//     firstName: "Marie",
//     lastName: "McDonald",
//     email: "marie.m@real-emails.com",
//   },
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// // returns the full name (first name + last name) of the owner of the house
// function getOwnerFullName(house1) {
//     return house1.currentOwner.firstName + " " + house1.currentOwner.lastName;
// }

// // returns an array of the owners' email addresses of the two houses
// function getEmailAddresses(house1, house2) {
//     return house1.currentOwner.email + ", " + house2.currentOwner.email
// }

// // returns the address for the cheapest house out of the two
// function getCheapestAddress(house1, house2) {
    
//     if (house1.price < house2.price) {
//         return house1.address;
//     } else {
//         return house2.address;
//     }
    
// }

// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */
// console.log(
//   `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
//     kinningParkHouse
//   )}`
// );
// console.log(
//   `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
//     kinningParkHouse,
//     parkAvenueHouse
//   )}`
// );
// console.log(
//   `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
//     parkAvenueHouse,
//     kinningParkHouse
//   )}`
// );

// Extra Exercise

