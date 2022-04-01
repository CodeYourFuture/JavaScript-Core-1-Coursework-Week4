/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

//===== Alternative Solution (without .find()) =====
/*
function findLongNameThatStartsWithA(array) {
  for (i = 0; i < array.length; i++) {
    if (names[i].length > 7 && names[i].startsWith('A')) {
      return names[i];
    }
  }
}
*/

// ===== Solution =====
function findLongNameThatStartsWithA(array) {
  return array.find((nameInArray) => nameInArray.length > 7 && nameInArray[0] === "A");
}

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

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
