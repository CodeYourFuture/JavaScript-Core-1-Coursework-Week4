const creditCardNumberValidator = (cardNumber) => {
  // DEFINE TESTS
  const isAllNumbers = (cardNumber) => {
      return null !== cardNumber.match(/^\d*$/);
    },
    isMultipleNumbers = (cardNumber) => {
      const numberArray = cardNumber.split("");
      // LOOK THROUGH ARRAY AND CHECK IF THERE IS AT LEAST ONE NUMBER CHARACTER THAT ISN'T THE 1ST CHARACTER
      return numberArray.some((number) => numberArray[0] !== number);
    },
    isGreaterThan16 = (cardNumber) => {
      const numberArray = cardNumber.split(""),
        sum = numberArray.reduce((prevNum, currentNum) => {
          return prevNum + Number(currentNum);
        }, 0);
      return 16 < sum;
    },
    hasEvenFinalNumber = (cardNumber) => {
      return Number(cardNumber[cardNumber.length - 1]) % 2 === 0;
    };

  // RUN TESTS
  return (
    isAllNumbers(cardNumber) &&
    isMultipleNumbers(cardNumber) &&
    isGreaterThan16(cardNumber) &&
    hasEvenFinalNumber(cardNumber)
  );
};

// TEST EXAMPLE INPUT / OUTPUT

test("Valid Number 1", () => {
  let input = "9999777788880000",
    output = creditCardNumberValidator(input),
    expectedOutput = true;
  expect(output).toEqual(expectedOutput);
});

test("Valid Number 2", () => {
  let input = "6666666666661666",
    output = creditCardNumberValidator(input),
    expectedOutput = true;
  expect(output).toEqual(expectedOutput);
});

test("Invalid Number 1: Presence of invalid characters!", () => {
  let input = "a92332119c011112",
    output = creditCardNumberValidator(input),
    expectedOutput = false;
  expect(output).toEqual(expectedOutput);
});

test("Invalid Number 2: Only one number character!", () => {
  let input = "4444444444444444",
    output = creditCardNumberValidator(input),
    expectedOutput = false;
  expect(output).toEqual(expectedOutput);
});

test("Invalid Number 3: Sum isn't greater than 16!", () => {
  let input = "1111111111111110",
    output = creditCardNumberValidator(input),
    expectedOutput = false;
  expect(output).toEqual(expectedOutput);
});

test("Invalid Number 4: Last number is odd!", () => {
  let input = "6666666666666661",
    output = creditCardNumberValidator(input),
    expectedOutput = false;
  expect(output).toEqual(expectedOutput);
});
