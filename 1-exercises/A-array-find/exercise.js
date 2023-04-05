/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/



function findName(names) {
  let longNameThatStartsWithA = names.find(
    (name) => name.startsWith("A") && name.length > 7
  );
  console.log(longNameThatStartsWithA);
}
// i format it by add a space before and after operators (=).

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

findName(names);



/* EXPECTED OUTPUT */
// "Alexandra"
