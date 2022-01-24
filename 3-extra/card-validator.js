function creditCardValidator(cardNumber) {
  let valuesInCardNumber = cardNumber.toString().split(""); //converts the cardNumber to an array
  let isAllNumbers = valuesInCardNumber.every((value) => typeof parseInt(value) === "number"); //checks that every element is a number
  let totalSumOfNumbers = valuesInCardNumber.reduce((totalSumSoFar, currentNumber) => {
    return parseInt(totalSumSoFar) + parseInt(currentNumber);
  }, 0); //checks that the sum of the numbers is more than 16
  let lastNumberIsEven = valuesInCardNumber[valuesInCardNumber.length - 1] % 2 === 0; //checks the last number in the array is even
  let hasMoreThanOneDigit = [...new Set(valuesInCardNumber)]; //removes all duplicates in the array, if the length of this set is more than 1, the cardNumber has more than one number
  if (
    valuesInCardNumber.length === 16 &&
    isAllNumbers &&
    totalSumOfNumbers > 16 &&
    lastNumberIsEven &&
    totalSumOfNumbers > 16 &&
    hasMoreThanOneDigit.length > 1
  ) {
    return true;
  }
  return false;
}
 
console.log(creditCardValidator(4567899786778496));
console.log(creditCardValidator("9999777788880000"));
console.log(creditCardValidator(6666666666661666));
console.log(creditCardValidator("a92332119c011112"));
console.log(creditCardValidator("4444444444444444"));
console.log(creditCardValidator("1111111111111110"));
console.log(creditCardValidator("6666666666666661"));
