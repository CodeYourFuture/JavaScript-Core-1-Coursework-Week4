/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = statement.substring(0, 4);
let result2 = statement.substring(8, 25);


console.log(result + result2);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
