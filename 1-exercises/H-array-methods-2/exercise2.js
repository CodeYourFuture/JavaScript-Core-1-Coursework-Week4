/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

const capitalise = (str) => str[0].toUpperCase() + str.slice(1);

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
const name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/*
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
