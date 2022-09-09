// Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.




function validateCreditCardNumber(number) {
       return !isNaN(number) && number.charAt(number.length -1) & 2 === 0 ;    
}

console.log(validateCreditCardNumber("23434"));