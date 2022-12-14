/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let removedWords = statement.substring(0, 5);
console.log(removedWords);

let secondRemovedWords = statement.substring(9, statement.length);
console.log(secondRemovedWords);

let result = removedWords.concat(secondRemovedWords);

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
