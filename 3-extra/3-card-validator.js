
function validateCreditCardNumber(cardNumber) {
    //Here we will check if the input is a string with 16 digits only.
    if (typeof cardNumber !== "string" || !/^\d{16}$/.test(cardNumber)) {
        return false;
    }
    //cardNumber.length === 16 && !isNaN(cardNumber) (this is just another way to see
    //wether the card number length is equal to 16 and the !isNaN means the input IS a number.)

      // Check if there are at least two different digits represented - this checks if the first
      //captured digit is the same as the remaining 15. If it is the same then it's no good.
  if (/^(\d)\1{15}$/.test(cardNumber)) {
    return false;
  }

//Now we check to see if the final digit is an even number.
if (cardNumber.charAt(15) % 2 !== 0) {
    return false;
}

//Now we calcualte the sum of all digits to see if the sum is above 16.
const sum = cardNumber.split("").reduce((acc, digit) => acc + parseInt(digit), 0)
if (sum <= 16) {
    return false;
}

//all checks are passed, we will return true.

return true;
}