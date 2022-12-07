/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is 
  longer than 7 letters.
*/

// write your code here

function findLongNameThatStartsWithA(lists){
   
   for (let list of lists){
    if(list.length > 7 && list[0] === "A" ) {
        return list;
      }
    }
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
