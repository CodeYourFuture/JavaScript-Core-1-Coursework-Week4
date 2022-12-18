function cardValidator(cardNumber) {
  let cardNumberArray = cardNumber.toString().split(""); //this will create an array with each the digit as an element
  return (
    cardNumberArray.every((digit) => digit >= "0" && digit <= "9") && //check if the digit between 0 - 9
    cardNumberArray.length === 16 && // check the length of the card number equal to '16'
    !cardNumberArray.every((digit) => digit === cardNumberArray[0]) && // to check if there is at least two different numbers by loop through the digit and compare it with the first digit
    cardNumberArray[cardNumberArray.length - 1] % 2 === 0 && //check if the final number is even
    cardNumberArray
      .map((digit) => +digit) // convert the digits from string to number in order to use .reduce method
      .reduce(
        // calculate the sum of the array
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) > 16 // check if the sum is greater than 16
  );
}

console.log(cardValidator(9999777788880000));
console.log(cardValidator(6666666666661666));
console.log(cardValidator("a92332119c011112"));
console.log(cardValidator(4444444444444444));
console.log(cardValidator(1111111111111110));
console.log(cardValidator(6666666666666661));
