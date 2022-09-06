// Check if the cardNumber hold just numbers
function isValidNumber(cardNumber) {
  let regex = /^\d{16,}$/;
  return regex.test(cardNumber);
}

// Check if the cardNumber last digit is even
function isEvenNumber(cardNumber) {
  let lastDigit = parseInt(cardNumber[cardNumber.length - 1]);
  return lastDigit % 2 == 0 ? true : false;
}

// Check if the cardNumber digits sum is greater than 16
function isValidSum(cardNumber) {
  let sum = 0;
  for (const character of cardNumber) {
    let number = parseInt(character);
    sum += number;
  }
  return sum > 16 ? true : false;
}

// Check if that all of the digits cannot be the same
function checkDifferentDigits(cardNumber) {
  for (let i = 0; i < cardNumber.length - 1; i++) {
    if (cardNumber[i] !== cardNumber[i + 1]) {
      return true;
    }
  }
  return false;
}

// Main function
function isValidCard(cardNumber) {
  return (
    isValidNumber(cardNumber) &&
    isEvenNumber(cardNumber) &&
    isValidSum(cardNumber) &&
    checkDifferentDigits(cardNumber)
  );
}

/* ======= TESTS  ===== */

test("Example 1", () => {
  expect(isValidCard("a92332119c011112")).toEqual(false);
});

test("Example 2", () => {
  expect(isValidCard("6666666666661666")).toEqual(true);
});

test("Example 3", () => {
  expect(isValidCard("1111111111111110")).toEqual(false);
});

test("Example 4", () => {
  expect(isValidCard("444444444444444")).toEqual(false);
});

test("Example 5", () => {
  expect(isValidCard("6666666666666661")).toEqual(false);
});
