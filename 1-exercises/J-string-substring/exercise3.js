/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = "";
let wordToRemove ="not"
let index = statement.indexOf(wordToRemove);
result = statement.substring(0, index) + statement.substring(index + wordToRemove.length);
console.log(result);



// statement = statement.substring();
// let wordToRemove =" and dogs"
// let index = statement.indexOf(wordToRemove);
// let newSentence = statement.substring(0, index) + statement.substring(index + wordToRemove.length);
// console.log(newSentence);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
