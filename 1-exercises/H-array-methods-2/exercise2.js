/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  // return str.toLowerCase().replace(/(?<= )[^\s]|^./g, (a) => a.toUpperCase());

  // return str.replace(str[0], str[0].toUpperCase());

  // return str.split(" ").map((str) => str.substring(0, 1).toUpperCase() + str.substring(1, str.length)).join(" ");

  let splitStr = str.split("");
  return splitStr[0].toUpperCase() + splitStr.slice(1).join("");
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
