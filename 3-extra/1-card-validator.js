// Task from  1-card-validator.md

function validateCreditCardNumber(creditCardNumber) {
    // i am assuming all arguments given are typeof number because from the instructions :
    // "The function should take one argument, the credit card number to validate."
    
    if (typeof creditCardNumber !== "number") {
        console.log("Error: You did not provide the correct input type: a number (a string is not a number!)");
        return false;
    }
    // check if the argument (the credit card number passed into the function) is a Number, if not reject it (return false)
    
    const creditCardNumberArray = creditCardNumber.toString().split("").map(element => Number(element));
    // turn the numbers into a string, split the string into an array, and map the individual elements back into numbers (so maths operations can be performed later)

    if (creditCardNumberArray.length !== 16) {
        console.log("Error: You did not provide all 16 digits");
        return false;
    }
    // check if the number provided was 16 digits long

    if (creditCardNumberArray[creditCardNumberArray.length -1] % 2 !== 0) {
        console.log("Error: The last digit is not an even number");
        return false;
    }
    // check if the final number is even, if not reject it (return false)

    if (creditCardNumberArray.reduce((acc, cv) => acc + cv, 0) <= 16) {
        console.log("Error: The sum of all the digits is not greater than 16");
        return false;
    }
    // check if the sum of all digits is greater than 16, if not reject it (return false)

    if(creditCardNumberArray.every((element, index, array) => element === array[0])) {
        console.log("Error: There are not at least two different digits");
        return false;
    }
    // check if every digit in the array is the same as the first digit,
    // if that is true then it doesn't have at least two different digits, so reject it (return false)

    // if (new Set(creditCardNumberArray).size < 2) {
    //     console.log("Error: There are not at least two different digits");
    //     return false;
    // }
    // alternate way to check if it has at least two different digits
    // create a new set (only unique numbers) from the array, check its size,
    // if the size is less than 2 that means there is only a single digit being used, so reject it (return false)

    return true;
    // if all the checks do not fail, then the credit card number is valid (return true)
}

console.log(validateCreditCardNumber(9999777788880000));
// true
console.log(validateCreditCardNumber(6666666666661666));
// true
console.log(validateCreditCardNumber("a92332119c011112"));
// false (invalid characters)
console.log(validateCreditCardNumber(4444444444444444));
// false (only one type of number)
console.log(validateCreditCardNumber(1111111111111110));
// false (sum less than 16)
console.log(validateCreditCardNumber(6666666666666661)); 
// false (odd final number)