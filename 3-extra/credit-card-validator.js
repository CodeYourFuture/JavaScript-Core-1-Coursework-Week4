//helper function to check if there are only numbers, has 16 digits and last one is even
function checkIfOnlyNumbers(number) {
  return /^[0-9]{15}[02468]$/.test(number);
}

//function checking validity of the credit card number 
function checkIfCreditCardNumberIsValid(cardNumber) {
  //using helper function to check some of the conditions
  return (
    checkIfOnlyNumbers(cardNumber) &&
    
    //checking if the sum is greater than 16
    cardNumber.split("").reduce((total, num) => total + Number(num), 0) >= 16 &&
    
    //check if all numbers are not the same
    cardNumber != cardNumber[0].repeat(16)
  );
}
