/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

// function findLongNameThatStartsWithA(arr) {
//   let finalName;
//   for (const element of arr) {
//     if (element[0] === "A" && element.length > 7) {
//       // console.log(element);
//       finalName = element;
//       break;
//     }
//   }
//   return finalName;
// }


// const function2 = (element) => {
//   return element[0] === "A" && element.length > 7;
// };

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(
  names.find((element) => 
     element[0] === "A" && element.length > 7
  )
);
// console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
