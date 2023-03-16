/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
let str1 = str.split('');
str1[0] = str1[0].toUpperCase() + str1[0].slice(1);
return str1.join('');
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
