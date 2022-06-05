const validateCreditCart = (number) => {
  const numberCharacter = number.split("");

  if (numberCharacter.length !== 16) return false;
  if (!numberCharacter.every((character) => /[0-9]/.test(character)))
    return false;

  if (!numberCharacter.every((character) => character === character[0]))
    return false;

  if (numberCharacter[numberCharacter.length - 1] % 2) return false;

  console.log(
    numberCharacter.reduce((total, digit) => total + parseInt(digit), 0)
  );

  if (
    numberCharacter.reduce((total, digit) => total + parseInt(digit), 0) <= 16
  )
    return false;

  return true;
};
console.log(validateCreditCart("1234567891234568"));
