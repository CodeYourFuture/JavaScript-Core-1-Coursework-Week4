/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let javscrpt = statement.substring(8);
let like = statement.substring(0, 4);

let result = like + '' + javscrpt;

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
