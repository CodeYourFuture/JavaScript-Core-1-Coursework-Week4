/*
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

// let statement = "I do not like programming";
let statement = "I like programming but I do not like be programmer";

// let result = "";
// let result = statement.substring(0, 4) + statement.substring(8);
// console.log(result);
//💫💫💫💫💫💫💫💫💫💫

function removeNot(str) {
  let arrStatement = str.split(" ");
  let indexOfNot = arrStatement.findIndex(e => e === "not");
  // delete arrStatement[indexOfNot];
  arrStatement.splice(indexOfNot, 1);
  return arrStatement.join(" ");
}
console.log(removeNot(statement));
/* EXPECTED OUTPUT

  "I do like programming"

*/
//This works well. If you wanted to reuse the method to remove
//"not" from different sentences, you could find the index of "not".
