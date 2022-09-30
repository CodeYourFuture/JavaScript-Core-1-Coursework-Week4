function checkSameNumber(cardNumber) {
  const splitAllNumbers = cardNumber.toString().split("");
  const firstDigitCardNumber = splitAllNumbers[0];
  return splitAllNumbers.every((number) => number === firstDigitCardNumber); //check if all numbers are different from the first one
}

function checkLastNumberEven(cardNumber) {
  const splitAllNumbers = cardNumber.toString().split("");
  const quantityNumbersCardNumber = splitAllNumbers.length;
  const lastDigitCardNumber = splitAllNumbers[quantityNumbersCardNumber - 1]; //Get the last digit from card
  return parseInt(lastDigitCardNumber) % 2 === 0 ? true : false; //Check if the number is divisible by 2 and the result is equal 0, if it is true will be an even number
}

function checkSumNumbers(cardNumber) {
  const sum = cardNumber
    .toString()
    .split("")
    .reduce((previousSum, currentSum) => {
      return parseInt(previousSum) + parseInt(currentSum); //sum every number previous value + currentValue -> 0 + 1 -> 2 + 1 -> 5 + 3 ...
    });

  return sum > 16 ? true : false;
}

// main function that will branch to other functions
function checkCreditCardNumberValid(cardNumber) {
  //Check if length = 16
  if (cardNumber.toString().length !== 16) {
    return false;
    //Check if it is a number
  } else if (typeof cardNumber !== "number") {
    return false;
    //Check if last number is even
  } else if (!checkLastNumberEven(cardNumber)) {
    return false;
    //Check sum all numbers greater than 16
  } else if (!checkSumNumbers(cardNumber)) {
    return false;
    // check if all numbers are the same
  } else if (checkSameNumber(cardNumber)) {
    return false;
  }
  return true;
}

// this is a code that will check if the person typed exactly 16 number, no more and no less
test.each([
  [15146, false],
  [445815195115151, false],
  [5146515455159864, true],
  [5151515, false],
  [4685986579856326, true],
])("must be 16 digits", (input, expected) => {
  expect(checkCreditCardNumberValid(input)).toEqual(expected);
});

// this is a test that will check if the person has typed only numbers and not letters or symbols

test("all must be numbers", () => {
  expect(checkCreditCardNumberValid("878435adfa£%£^")).toBe(false);
  expect(checkCreditCardNumberValid("1568958695£^451a")).toBe(false);
  expect(checkCreditCardNumberValid(1586523566426859)).toBe(false);
});

// this is a code that will check if the last card number is even
test("the last digit must be even", () => {
  expect(checkCreditCardNumberValid(6526539865748597)).toBe(false);
  expect(checkCreditCardNumberValid(5469546545156155)).toBe(false);
  expect(checkCreditCardNumberValid(8984785698593254)).toBe(true);
});

//this is a code that will check if the sum of all the numbers between them is greater than 16
test("the sum of all numbers between them must be greater than 16", () => {
  expect(checkCreditCardNumberValid(1111111111111111)).toBe(false);
  expect(checkCreditCardNumberValid(6565985585828282)).toBe(true);
  expect(checkCreditCardNumberValid(3562511455442552)).toBe(true);
});

// this is a test that will check if the person typed different numbers in sequence
test.each([
  [1111111111111111, false],
  [2222222222222222, false],
  [5685658689685456, true],
])(
  "the numbers in sequence must be different from each other",
  (input, expected) => {
    expect(checkCreditCardNumberValid(input)).toEqual(expected);
  }
);
