"use strict";

/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/
var statement = "I do not like programming";
var notIndex = statement.indexOf("not");
var firsStatement = statement.substring(0, notIndex);
var secondStatement = statement.substring(notIndex + 4);
var result = firsStatement + secondStatement;
console.log(result);
/* EXPECTED OUTPUT 

  "I do like programming"
  
*/