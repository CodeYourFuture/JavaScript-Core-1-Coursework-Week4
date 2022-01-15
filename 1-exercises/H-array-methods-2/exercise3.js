/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

const ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

const isInUK = (country) => ukNations.includes(country);

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
