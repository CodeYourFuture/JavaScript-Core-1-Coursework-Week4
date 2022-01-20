/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  return str
    .charAt(0)
    .toUpperCase()
    .concat(str.split('').slice(1, str.length).join(''))
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = 'daniel'

console.log(capitalise(name))
console.log(capitalise('hello'))

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
