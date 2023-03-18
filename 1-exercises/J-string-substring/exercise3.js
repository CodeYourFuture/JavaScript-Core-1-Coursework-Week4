/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let notIndex = statement.indexOf("not");
let firsStatement = statement.substring(0, notIndex);
let secondStatement = statement.substring( notIndex + 4);


let result = firsStatement + secondStatement;

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
