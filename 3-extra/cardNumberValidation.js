function cardNumberValidation(creditNo) {
  const digits = creditNo.split("");
  const sameDigits = digits.every((char) => char === digits[0]);
  const lastDigit = digits[digits.length - 1];
  const sum = digits.reduce((total, digit) => total + Number(digit), 0);
  if (Number(digits.length) !== 16) return false;
  else if (sameDigits) return false;
  else if (lastDigit % 2 === 1) return false;
  else if (sum < 16) return false;
  else return true;
}

console.log(cardNumberValidation("1111111111111110"));

/*const allNumerical = characters.every((character) => /[0-9]/.test(character));
if (!allNumerical) return false;

const allDigitsSame = characters.every(
  (character) => character === characters[0]
);
if (allDigitsSame) return false;

const finalCharacter = +characters[characters.length - 1];
if (finalCharacter % 2 === 1) return false;

const digitSum = characters.reduce(
  (total, digit) => total + parseInt(digit),
  0
);
if (digitSum < 16) return false;

return true;*/
