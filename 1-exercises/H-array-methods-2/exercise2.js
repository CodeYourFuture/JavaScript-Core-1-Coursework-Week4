/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {

  let letters = str.toLowerCase().split(' ');
  for(let i = 0; i < letters.length; i++){
    letters[i] = letters[i].substring(0, 1).toUpperCase() + letters[i].substring(1);
  }
  return letters.join('');
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
