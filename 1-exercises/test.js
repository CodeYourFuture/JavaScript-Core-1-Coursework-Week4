
// let phone = {
//     operatingSystem: "iOS",
//     hasStylus: true,
//     megapixels :12,
//     batteryLife: "24 hours"
// }
// // console.log(phone.operatingSystem , phone.hasStylus);
// function Phone(os, battery){
//     this.os;
//     this.battery;
// }

// let phoneone = new Phone("IOS",70);
// let print =phoneone.os;
// console.log(print);


/*
    Console.log the values of each property of "kitten"
*/

// let kitten = {
//   ageMonths: 3,
//   isFemale: true,
//   furColour: "brown",
// };
// console.log(kitten)
// let phone = {
//   brand:'iPhone',
//   model :'iPhone X',
//   launchYear: 2017,
//   isUnlocked: true
// };

// let phoneBrand = phone.brand;
// let phoneLaunchYear = phone["launchYear"];

// console.log(phoneBrand);
// console.log(phoneLaunchYear);
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
// house.address="51 Berkley Road";
// house.previousOwners = ["Brian M.", "Fiona S."];
// house.currentOwner.lastName = "Montgomery";
// // - change the address of "house" to '51 Berkley Road'
// // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// // - change the last name of the current owner of "house" to "Montgomery"

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

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
// house.currentOwner.firstName ="Georgina";
// house.currentOwner.lastName="Hernandez"; 
// house.previousOwners[1] = "Stephen B.";
// house.isForSale = false;
// house.currentOwner = newCurrentOwner;
// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
// console.log(
//   `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
//     house.currentOwner === newCurrentOwner
//   }`
// );
// console.log(
//   `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(`Expected result: false. Actual result: ${house.isForSale}`);



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

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
// function getOwnerFullName(house) {
//   return house=parkAvenueHouse.firstName + parkAvenueHouse.lastName;
// }

// // returns an array of the owners' email addresses of the two houses
// function getEmailAddresses(house1, house2) {
//   return kinningParkHouse
// }

// // returns the address for the cheapest house out of the two
// function getCheapestAddress(house1, house2) {}

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



//HOW TO MAKE OBJECTS WITH THE CONSTRUCTOR
// object constructor. It is a template for us to create objects.
// ```
// function Person(email, uname, age, gender, previousPurchase) {
//     this.email = email,
//     this.uname = uname,
//     this.age = age,
//     this.gender= gender,
//     this.previousPurchase = previousPurchase
//   }
// ```
// USE CONSTRCUTOR TO BUILD OBJECTS QUICKLY
// ```
// let personOne = new Person('ryu@ninjas.com', 'ryu', 20, "M", "£50");
// let personTwo = new Person('anna@mariocorp.com', 'anna', 33, "F", "£90" );
// ```
//======================================================================================
function Account(randomDate, name,accountNumber, balance, password){
this.year=randomDate,
this.name=name,
this.accountNumber=accountNumber,
this.balance=balance,
this.password=password
}
let customer1=new Account(2009,'Ahmed',07233,20,1234);
let customer2=new Account(2008,'Alex',072222,40,1111);
let customer3=new Account(2007,'Danti',08,70,22222);
let customer4=new Account(2006,'Hala',77777,80,3333);
let customer5=new Account(2012,'Hasaan',07,90,4444);

let arrayCustomer=[];
arrayCustomer.push(customer1,customer2,customer3,customer4,customer5);

// 
//TASKS - DO THIS IN PAIRS
// In teams.
// You are going to  build a small banking app.
// 1/ make 5 customer objects with properties of account opening date, name, account number, balance, password
// 2/ set 3 customers balance as above 50
// 3/ set 2 customers balance less than 50
// 4/ set 4 customers account opening date before or equals 2010
// 5/ set 1 customer account opening date after 2010
// CREATE
// 6/ create an array
// 7/ add all customer objects to the array
// READ
// 8/ write a function that takes the array of customers and a year as input and return the names of customers who opened an account that year
//     - test with the year 2009, 2010, 2011
function takeArray(arrayCo,year){
 const found = arrayCo.find(function (coustomer) {
    return coustomer.year === year;
  });

  return found.name;
}
console.log(takeArray(arrayCustomer,2009))
// console.log(arrayCustomer);
// UPDATE
// 9/ write a function takes an account number and amount as input and adds that amount inputed to the balence of the account
//     - give the customer who opened an account after 2010 with a GBP of 1000
function cheackAcoount(array6,number,amount){
const findTheAmount=array6.find(function (key){
  return key.year > 2010;
}).balance+amount;
return findTheAmount;
}
console.log(cheackAcoount(arrayCustomer, 07233,1000));
// READ
// 10/ write a function that takens an account number and the array of customers and returns a balance.
//     - did the balence of the customer who opend an account after 2010 increase by GBP 1000?
// ==================================================================================
// Give your code to another pair and get them to check it.#
function rangeOfNumbers(startNum, endNum) {

  if ( endNum < startNum ) {
    return [];
  } else {
    let count = rangeOfNumbers( startNum ,endNum -1)
    count.push(endNum);
    return count ;
  }
};
console.log(rangeOfNumbers(5,10));