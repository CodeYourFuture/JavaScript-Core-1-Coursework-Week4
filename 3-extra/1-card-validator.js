function cardValidatorCheck(cardNumber) {
  // check input is a number
  if (typeof cardNumber !== "number") {
    return `please provide valid numbers`;
  }

  // turn numbers to array
  const cardNumberArr = cardNumber.toString().split("");

  // check if it's 16 digit or not
  if (cardNumberArr.length < 16 || cardNumberArr.length > 16) {
    return `must provide 16 digit numbers`;
  }

  // check last digit is even or not
  if (cardNumberArr[cardNumberArr.length - 1] % 2 !== 0) {
    return `wrong input`;
  }

  // check sum of number is greater than 16
  if (cardNumberArr.reduce((acc, cur) => acc + cur , 0) <= 16) {
    return `wrong input`;
  }

  // check at least we have two different numbers 
  if (cardNumberArr.every((el, i, arr) => el === arr[0])) {
    return "wrong input";
  }

  return `Card number is valid`;
}

console.log(cardValidatorCheck(1123));

console.log(cardValidatorCheck("dsh343"));

console.log(cardValidatorCheck(3748526374816381));

console.log(cardValidatorCheck(1111111111111111));

console.log(cardValidatorCheck(1111111001111111));

console.log(cardValidatorCheck(2222222222222222));

console.log(cardValidatorCheck(3748526374816384));
