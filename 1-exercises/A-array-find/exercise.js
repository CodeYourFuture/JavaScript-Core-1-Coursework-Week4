/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/
function findLongNameThatStartsWithA(names){
  let startA = names.charAt(0);
  let longname = names.length;
  if(startA === "A" && longname > 7 ){
    return names;
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

//let longNameThatStartsWithA =findLongNameThatStartsWithA(names);

let longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);



console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
