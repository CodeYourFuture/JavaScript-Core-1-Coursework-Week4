//To tray the functions write   npm run extra-card   in the terminal

// onlyNumber is for check if in the string are only numbers
const onlyNumber = (number) => /^[0-9]{16}$/.test(number);

// oddLastNumber check if the last number is odd
const oddLastNumber = (number) => /[02468]$/.test(number);

// notOnlyOneNumber add all the number in a Set and if is more than one mean is not only one value
const notOnlyOneNumber = (number) => new Set([...String(number)]).size !== 1;

// moreThanSixteen check if sum of all the number is more than 16
const moreThanSixteen = (number) =>
  [...String(number)].reduce((a, b) => +a + +b) > 16;

// cardValidator check if all the function above are true
const cardValidator = (number) =>
  onlyNumber(number) &&
  oddLastNumber(number) &&
  notOnlyOneNumber(number) &&
  moreThanSixteen(number);

test("cardValidator function works - case 1", () => {
  expect(cardValidator(9999777788880000)).toEqual(true);
});

test("cardValidator function works - case 2", () => {
  expect(cardValidator(6666666666661666)).toEqual(true);
});

test("cardValidator function not works - case 1", () => {
  expect(cardValidator(6666666666666661)).toEqual(false);
});

test("cardValidator function not works - case 2", () => {
  expect(cardValidator(1111111111111110)).toEqual(false);
});
test("cardValidator function not works - case 1", () => {
  expect(cardValidator(4444444444444444)).toEqual(false);
});

test("cardValidator function not works - case 2", () => {
  expect(cardValidator("a92332119c011112")).toEqual(false);
});
