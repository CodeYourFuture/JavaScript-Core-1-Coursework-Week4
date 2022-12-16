/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = statement.substring(0, 5).concat(statement.substring(9, statement.length));

//console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/

let test = " I do/ not like/ programming";

function tidyUpString(arr) {
  return (arr.toLowerCase().replaceAll("/", "")).substring(1, arr.length -1);
}
console.log(tidyUpString(test));

let oxy = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"]

function findSafeOxygenLevel(oxygenLevels) {

   return oxygenLevels.find(n => n >= "19" && n <= "23.5");
  }

  // names.find(n => n.startsWith('A') && n.length > 7);



console.log(findSafeOxygenLevel(oxy));


//Below is me testing mandatory exercise 1 part 4

//let percent = [10.05, 15, 20.678]

//function formatPercentage(arr) {
//    arr.forEach(function formatted(item) {
//    console.log(item.toFixed(2).concat("%").toString())
//    })
// }
 

//formatPercentage(percent);