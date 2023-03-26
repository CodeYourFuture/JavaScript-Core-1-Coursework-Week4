/* 
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "John Smith" you should return "John"
*/

let names = [
  "Tamzin Lindsay",
  "Jessica Tate",
  "Tony Holcomb",
  "Shae Patton",
  "Arron Graham",
];

names[0] = names[0].substring();
names[1] = names[1].substring();
names[2] = names[2].substring();
names[3] = names[3].substring();
names[4] = names[4].substring();

names.forEach((name) => {
  console.log(name);
});

/*Other function j

function getFirstNames (){
let splitNames =[]
for(let i =0; i<names.length; i++){
splitNames.push(names[i].split(" "))
}

console.log(splitNames)

let firstNames = []

for(let i =0; i<splitNames.length; i++){
firstNames.push(splitNames[i][0])
}

console.log(firstNames)
//returns names as an array
}

*/

/* EXPECTED OUTPUT 

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"
  
*/
