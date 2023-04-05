/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

statement = statement.substring();
let wordToRemove =" and dogs"
let index = statement.indexOf(wordToRemove);
let newSentence = statement.substring(0, index) + statement.substring(index + wordToRemove.length);
console.log(newSentence);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
