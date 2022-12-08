//num.toString()            --->all parament value become number
//isLengthSixteen           ---against--->Number must be 16 digits
//isAllNumber               ---against--->invalid characters
//isMornThanTwoTypeNumber   ---against--->only one type of number
//isSumGreaterEqualSixteen  ---against--->sum less than 16
//isLastNumberEven          ---against--->odd final number
const cardVailidator = (num) => {
  const n = num.toString();
  const isLengthSixteen = n.length === 16;
  const isAllNumber = typeof Number(n) === 'number';
  const isMornThanTwoTypeNumber = new Set(n.split('').map(Number)).size > 1;
  const isSumGreaterEqualSixteen =
    n
      .split('')
      .map(Number)
      .reduce((total, cur) => (total += cur)) >= 16;

  const isLastNumberEven = n % 2 === 0;
  if (!isLengthSixteen) return `the card number length isn't 16`;
  if (!isAllNumber) return `the card digits all are not number`;
  if (!isMornThanTwoTypeNumber)
    return `the card number has to has 2 type number`;
  if (!isSumGreaterEqualSixteen)
    return `the card number sum isn't greater or equal 16`;
  if (!isLastNumberEven) return `the card last number even is not even`;

  if (
    isLengthSixteen &&
    isAllNumber &&
    isMornThanTwoTypeNumber &&
    isSumGreaterEqualSixteen &&
    isLastNumberEven
  ) {
    return `the card is valid`;
  }
};
