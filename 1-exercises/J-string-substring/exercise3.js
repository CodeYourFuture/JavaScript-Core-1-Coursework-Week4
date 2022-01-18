/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let firstPartSentence = statement.substring(0, 4);
let secondPartSentence = statement.substring(8, statement.length);
const statement2 = firstPartSentence.concat(secondPartSentence);
console.log(statement2);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
