/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  // return str.charAt(0).toUpperCase() + str.slice(1);
  const chars = str.split("");
  console.log(chars[0].join(""));
}

function capitalise(str) {
  // split the string into an array of words
  const words = str.split(" ");

  // iterate over each word and capitalise the first letter
  const capitalisedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // join the capitalised words back into a string and return it
  return capitalisedWords.join(" ");
}


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
