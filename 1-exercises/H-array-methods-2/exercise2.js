/*
  Array methods - .join()
  -------------------------
  Complete the capitalize function 
  It should return a string with the first letter in uppercase
  For example, capitalize("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalize(str) {
  str = str.split('');
  return str.shift().toUpperCase() + str.join('') 
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = "daniel";

console.log(capitalize(name));
console.log(capitalize("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
