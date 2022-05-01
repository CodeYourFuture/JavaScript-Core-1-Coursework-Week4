"use strict";

/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/
var statement = "I do not like programming";
var start = statement.substring(0, statement.indexOf("not"));
var end = statement.substring(statement.indexOf("not") + "not ".length, statement.length - 1);
var result = start + end;
console.log(result);
/* EXPECTED OUTPUT 

  "I do like programming"
  
*/