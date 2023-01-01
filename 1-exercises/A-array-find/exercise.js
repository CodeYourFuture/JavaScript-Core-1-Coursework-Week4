/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
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

let longNameThatStartsWithA = names.find(n => n.startsWith('A') && n.length > 7);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"

girlsName = ["Becca", "Risa", "Amy", "Carla", "Andrea"];


function nameStartsWith(name) {
  for (let item of name){
    if(item.startsWith('A')){
    console.log(item, item.startsWith('A'))
    }
  }
  // return item.startsWith('A');
}

const filteredArray = girlsName.filter((item)=>{
  return item.startsWith('A')
})

console.log('filtered: ', filteredArray);



console.log(nameStartsWith(girlsName));