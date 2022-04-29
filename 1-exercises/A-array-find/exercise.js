/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
  var array = [10,20,30,40,50];
  var result = array.find( x=> x>30);

  let data = [1, 2, 3, 4, 5];
  let firstEvenNumber = data.find(value => value % 2 === 0);
  console.log(firstEvenNumber);
*/

// write your code here

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

let findLongNameThatStartsWithA = names.find(element => element.length > 7 && element[0] === "A");
console.log(findLongNameThatStartsWithA); 


function isNameIsLong (names) {
  return names.length > 7 && names[0] === "A";
}

function findLongNameThatStartsWithA (names) {
  return names.find(isNameIsLong);

}

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);


console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
