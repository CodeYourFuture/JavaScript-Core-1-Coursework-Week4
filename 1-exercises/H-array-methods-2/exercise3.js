/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

let ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {
  for (let ukNation of ukNations){
   const isInUK = ukNations.includes(country);
   return isInUK;
  }; // complete this statement
}
const isFrance = isInUK("France");
const isRepublicOfIreland = isInUK("Republic of Ireland");
const isEngland = isInUK("England");


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
