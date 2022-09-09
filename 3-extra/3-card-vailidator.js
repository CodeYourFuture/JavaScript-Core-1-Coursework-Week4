const sumDigits = (number) => {
  let res = 0;
  for (let i = 0; i < number.toString().length; i++) {
    res += parseInt(number.toString()[i]);
  }
  return res;
};

const isAllDigitsSame = (number) => {
  let x = parseInt(number.toString()[0]);
  for (let i = 1; i < number.toString().length; i++) {
    if (parseInt(number.toString()[i]) !== x) return false;
  }
  return true;
};

const isCardValid = (cardNumber) => {
  return (
    typeof cardNumber === "number" &&
    cardNumber.toString().length === 16 &&
    parseInt(cardNumber.toString()[cardNumber.toString().length - 1]) % 2 ===
      0 &&
    sumDigits(cardNumber) > 16 &&
    !isAllDigitsSame(cardNumber)
  );
};
