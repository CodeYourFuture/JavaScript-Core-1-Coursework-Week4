/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let firstPart = statement.substring(0,4);
let partTwo = statement.substring(8, statement.length);
let result = firstPart.concat(partTwo)


console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
