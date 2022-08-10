/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

function removeWord(str, word) {
  var n = str.search(word);
  while (str.search(word) > -1) {
    n = str.search(word);
    str = str.substring(0, n) + str.substring(n + word.length, str.length);
    str = str.replace(/  /g, " ");
  }
  return str;
}

let result = removeWord(statement, "not");

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
