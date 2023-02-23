//validateCardNumber function checks if the creditCardNumber meets criteria to be valid.

let validateCardNumber = (creditCardNumber) => {
  let arrayOfChars = creditCardNumber.toString().split("");
  let arrayOfNumbers = arrayOfChars.map((char) => +char);
  let isSumMoreThan16 = arrayOfNumbers.reduce((a, b) => a + b) > 16; // Checks if the total of digits is greater than 16

  let isValid =
    arrayOfNumbers.length === 16 &&
    typeof creditCardNumber === "number" &&
    isSumMoreThan16 &&
    arrayOfNumbers[arrayOfNumbers.length - 1] % 2 === 0;

  console.log(isValid);
  return isValid;
};

validateCardNumber(5344446); // return false number of digits is not 16
validateCardNumber(5344446111111127); // return false as the last digit is not even number
validateCardNumber("53444461a%*!127"); // return false as the input is not a number
validateCardNumber(5344446111111112); // return true as it contains all the criteria
