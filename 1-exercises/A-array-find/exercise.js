/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

function findLongNameThatStartsWithA(names) {
  //  a_name.split("");
  //   console.log(firstName[String(a_name[0]).toUpperCase()]);
  const new_name = new Array();
  for (const i in names) {
    if (names[i].startsWith("A") && names[i].length <= 7) {
      new_name.push(names[i]);
    }
  }
  return new_name;
}

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
