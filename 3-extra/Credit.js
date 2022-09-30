// You must have at least two different digits represented (all of the digits cannot be the same).
function checkDifferntdigits(cardnumber) {
  let digits = cardnumber.toString().split("");
  let firstDigit = digits[0];
  return digits.every((number) => number === firstDigit);
}
console.log(checkDifferntdigits(999999999));
// - Number must be 16 digits, all of them must be numbers.
function checkInputnumber(cardnumber) {
  return typeof cardnumber === "number" ? true : false;
}
console.log(checkInputnumber("999o"));
//  The sum of all the digits must be greater than 16.
function sum(cardnumber) {
  let sum = 0;
}
