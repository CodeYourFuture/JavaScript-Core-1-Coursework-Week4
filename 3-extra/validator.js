function creditCardNumberValidator(cardNumber) {
  let cardNumberElement = cardNumber.toString().split("");
  if (!cardNumberElement.every((element) => /[0-9]/.test(element))) {
    return false + "Your card is invalid!";
  }
  if (cardNumberElement.length !== 16) {
    return false + ", Your card is invalid!";
   
  }
  if (cardNumberElement.every((element) => element !== element[0])) {
    return false + ", Your card is invalid!";
  }
  if (cardNumberElement[cardNumberElement.length - 1] % 2) {
    return false + ", Your card is invalid!";
  }
  
  if (
    cardNumberElement.map(Number).reduce((total, digit) => (total += digit)) <
    16
  ) {
    return false + ", Your card is invalid!";
  }

  return true  + ", Your card is valid!";
}
console.log(creditCardNumberValidator(9999777788880000));