//Number must be 16 digits, all of them must be numbers.
function checkNumbersAmount(num) {
  return num.toString().length === 16;
}

// You must have at least two different digits represented (all of the digits cannot be the same).
function checkDifferentDigits(num) {
  // Find the last digit
  var digit = num % 10;

  while (num != 0) {
    // Find the current last digit
    var current_digit = num % 10;
    // Update the value of N
    num = parseInt(num / 10);

    // If there exists any distinct digit, then return true
    if (current_digit != digit) {
      return true;
    }
  }
  // Otherwise, return false
  return false;
}

//The final digit must be even.
function checkLastDigitIsEven(num) {
  const lastDigit = String(num).slice(-1);
  return Number(lastDigit) % 2 === 0;
}

//The sum of all the digits must be greater than 16.
function checkSumOfAllDigits(num) {
  //splitting all digits of number into array
  const digits = String(num)
    .split("")
    .map((number) => {
      return Number(number);
    });
  //creating a count and looping through array and adding every digit to sum
  let sum = 0;
  digits.forEach((element) => {
    sum += element;
  });

  return sum > 16;
}

function checkCardValidation(cardNumber) {
  //checking all rules, if all are true - card is valid, if not - the card is not valid
  if (
    checkNumbersAmount(cardNumber) &&
    checkDifferentDigits(cardNumber) &&
    checkLastDigitIsEven(cardNumber) &&
    checkSumOfAllDigits(cardNumber)
  ) {
    return true;
  }
  return false;
}

console.log("checking validation system...");
console.log(checkCardValidation(9999777788880000));
console.log(checkCardValidation(6666666666661666));

console.log(checkCardValidation("a92332119c011112"));
console.log(checkCardValidation(4444444444444444));
console.log(checkCardValidation(1111111111111110));
console.log(checkCardValidation(6666666666666661));
