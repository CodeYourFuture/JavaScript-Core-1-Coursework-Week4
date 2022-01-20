/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

const capitalise = (str) => {
  let capitalFirstLetter = str.split("")[0].toUpperCase();
  let restToLowerCase = str.slice(1).toLowerCase();
  let firstLetterCapitalWord = capitalFirstLetter.concat(restToLowerCase);

  return firstLetterCapitalWord;
};

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
