// this function ensures the input credit card number is the correct length
// a constant has been set to hold the correct number of digits
function isCorrectLength(inputCreditCardNumber) {
  const correctLength = 16;
  return inputCreditCardNumber.length === correctLength;
}

//checks for a numeric card number using regular expression
function isNumeric(inputCreditCardNumber) {
  return /^[0-9]+$/.test(inputCreditCardNumber);
}

//checks to ensure there are at least 2 distinct digits in input
function containsDifferentNumbers(inputCreditCardNumber) {
  let splitDigits = inputCreditCardNumber.split("");
  let newDigits = [];
  for (digit of inputCreditCardNumber) {
    if (!newDigits.includes(digit)) {
      newDigits.push(digit);
    }
  }
  return newDigits.length > 1;
}

//checks to ensure last digit is even
function isLastDigitEven(inputCreditCardNumber) {
  let lastChar = inputCreditCardNumber.slice(-1);
  let lastDigit = parseInt(lastChar);
  return lastDigit % 2 === 0;
}

//checks sum of digits is at over 16
function isSumOfDigitsValid(inputCreditCardNumber) {
  const totalLimit = 16;
  let cardCharacters = inputCreditCardNumber.split("");
  let totalSoFar = 0;
  for (singleCharacter of cardCharacters) {
    totalSoFar += parseInt(singleCharacter);
  }
  return totalSoFar > totalLimit;
}

function isValidCardNumber(inputCreditCardNumber) {
  return (
    isCorrectLength(inputCreditCardNumber) &&
    isNumeric(inputCreditCardNumber) &&
    containsDifferentNumbers(inputCreditCardNumber) &&
    isLastDigitEven(inputCreditCardNumber) &&
    isSumOfDigitsValid(inputCreditCardNumber)
  );
}

console.log(isValidCardNumber("1234567890123456"));
console.log(isValidCardNumber("1234567890Q23456"));
console.log(isValidCardNumber("1234567890123455"));
console.log(isValidCardNumber("1111111111111111"));
console.log(isValidCardNumber("1111111111111112"));

console.log(isValidCardNumber("9999777788880000"));
console.log(isValidCardNumber("6666666666661666"));
console.log(isValidCardNumber("a92332119c011112"));
console.log(isValidCardNumber("4444444444444444"));
console.log(isValidCardNumber("1111111111111110"));
console.log(isValidCardNumber("6666666666666661"));
