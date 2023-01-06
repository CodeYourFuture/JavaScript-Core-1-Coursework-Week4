function validateCreditCard(creditCardNumber) {
  const characters = creditCardNumber.split("");

  if (characters.length !== 16) return false;

  const allNumberical = characters.every((character) =>
    /[0-9]/.test(character)
  );
  if (!allNumberical) return false;

  const allDigitsSame = characters.every(
    (character) => character === Characters[0]
  );
  if (allDigitsSame) return false;

  const finalCharacter = +characters[characters.length - 1];
  if (finalCharacter % 2 === 1) return false;

  const digitSum = characters.reduce(
    (total, digit) => total + parseInt(digit),
    0
  );
  if (digitSum < 16) return false;

  return true;
}
