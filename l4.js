//1

// function double(n) {
//   return n * 2;
// }

// function triple(n) {
//   return n * 3;
// }

// function doubleEachElement(arr) {
//   let newArr = [];
//   for (let element of arr) {
//     let newValue = double(element);
//     newArr.push(newValue);
//   }
//   return newArr;
// }

// function update(arr, func) {
//   let newArr = [];
//   for (let element of arr) {
//     let newValue = func(element);
//     newArr.push(newValue);
//   }
//   return newArr;
// }

// let arr = [2, 3, 4];
// let doublesValue = update(arr, double);
// let triplesValues = update(arr, triple);
// console.log(doublesValue);
// console.log(triplesValues);

//2

// ● Create a new function called goodBye - which will be
// similar to the hello function, except it will output “Good
// bye <team member>”
// ● Modify the notifyPeople function - so we can decide
// whether we want to say “Hello” or “Good bye” to each of
// the team members, whenever we call the function
// ● Hint: notifyPeople will need to accept a function as an
// argument

// function hello(teamMember) {
//   console.log("Hello " + teamMember);
// }

// function goodBye(teamMember) {
//   console.log("Good bye " + teamMember);
// }

// function notifyPeople(team, func) {
//   for (teamMember of team) {
//     func(teamMember);
//   }
// }
// let people = ["Anna", "Mary", "Oliver", "Jack", "Katie"];
// let helloGreeting = notifyPeople(people, goodBye);
// let goodByeGreeting = notifyPeople(people, hello);
// helloGreeting;
// goodByeGreeting;

//3

// let shoppingList = ["bananas", "milk", "bread"];
// shoppingList.forEach((item) => {
//   console.log(`We need to buy ${item}`);
// });

// let data = [1, 2, 3, 4, 5];
// let newArr = data.map(number => number * 2);
// console.log(newArr);

// let data = [1, 2, 3, 4, 5];
// let evenNumbers = data.filter(value => value % 2 === 0);
// let firstEvenNumber = data.find((value) => value % 2 === 0);
// console.log(evenNumbers);
// console.log(firstEvenNumber);

// let data = [1, 2, 3, 4, 5];
// data

//   .filter((value) => value % 2 === 0)
//   .map((value) => value * 3)
//   .forEach((value) => console.log(value));

// exersice 5

let channels = [
  "bbc1",
  "BBC2",
  "ITV",
  "channel4",
  "Channel5",
  "bbc3",
  "bbc4",
  "itv2",
  "ITV3",
  "itv4",
];

let upperCaseChannels = channels.map((channel) => channel.toUpperCase());

let itvChannels = upperCaseChannels.filter((channel) =>
  channel.includes("ITV")
);

itvChannels.forEach((channel) => {
  console.log(channel);
});
