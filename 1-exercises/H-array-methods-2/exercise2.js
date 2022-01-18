/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let array=str.split('');
  return array[0].toUpperCase()+ array.splice(1,str.length).join(''); 
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let names = "daniel";

console.log(capitalise(names));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
