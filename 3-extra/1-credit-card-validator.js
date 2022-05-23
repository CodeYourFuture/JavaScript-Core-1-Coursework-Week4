const creditCardValidator = (creditCardNum) => {
  //Number must be 16 digits, all of them must be numbers.
  const isValidLength = creditCardNum.length === 16;
  const isDataTypeNumber = (isNum) => {
    for (let i = isNum.length - 1; i >= 0; i--) {
      const isDigit = isNum.charCodeAt(i);
      if (isDigit < 48 || isDigit > 57) return false;
    }
    return true;
  };

  //You must have at least two different digits represented (all of the digits cannot be the same).
  const isAtLeastTwoDifferentDigits = (num) => {
    let obj = {};
    for (let i = 0; i < num.length; i++) {
      obj[num[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
      return false;
    }
    return true;
  };
  //The final digit must be even.
  const isFinalDigitEven = creditCardNum[creditCardNum.length - 1] % 2 === 0;

  //The sum of all the digits must be greater than 16.
  const isSumGreaterThan16 =
    [...creditCardNum].reduce((acc, number) => {
      return acc + +number;
    }, 0) > 16;

  return (
    isValidLength &&
    isFinalDigitEven &&
    isDataTypeNumber(creditCardNum) &&
    isAtLeastTwoDifferentDigits(creditCardNum) &&
    isSumGreaterThan16
  );
};

test("creditCardValidator - case 1", () => {
  expect(creditCardValidator("9999777788880000")).toEqual(true);
});
test("creditCardValidator - case 2", () => {
  expect(creditCardValidator("6666666666661666")).toEqual(true);
});
test("creditCardValidator - case 3", () => {
  expect(creditCardValidator("a92332119c011112")).toEqual(false);
});
test("creditCardValidator - case 4", () => {
  expect(creditCardValidator("4444444444444444")).toEqual(false);
});
test("creditCardValidator - case 5", () => {
  expect(creditCardValidator("1111111111111110")).toEqual(false);
});
test("creditCardValidator - case 6", () => {
  expect(creditCardValidator("6666666666666661")).toEqual(false);
});

