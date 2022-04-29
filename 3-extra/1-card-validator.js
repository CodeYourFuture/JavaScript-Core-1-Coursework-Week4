function cardValidator(cardNum) {
  let card = cardNum.toString();
  let cardArr = card.split("");
  ///differentDigitsArr goes through all the numbers in the card numbers and filters for different digits
  ///we use it to check if the card number has at  2 different digits
  let differentDigitsArr = [];
  cardArr.filter((item) => {
    if (!differentDigitsArr.includes(item)) {
      differentDigitsArr.push(item);
    }
  });
  let sumOfDigits = cardArr.reduce((a, b) => Number(a) + Number(b));
  ///sumOfDigits adds all the numbers in the array
  let lastDigitEven = card[15] % 2 === 0;
  ///lastDigitEven checks if the last digit is even
  let length = card.length === 16;
  let differentDigits = differentDigitsArr.length >= 2;
  ///differentDigits checks if the differentDigitsArr has at least 2 different digits
  return (
    Number.isInteger(cardNum) &&
    length &&
    lastDigitEven &&
    differentDigits &&
    sumOfDigits > 16
  );
}
