// Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.




function validateCreditCardNumber(number) {
       function getSum(number) { //this function sums the digits in the number
              return String(number).split('').reduce((acc, curr) => {return acc + Number(curr);},0)
       };
       function checkSame(number) { //this function checks that number has at least 2 different digits
              var digit = number % 10;
              while (number != 0) {
                     var currentDigit = number % 10;
                     number = parseInt(number/10);
                     if (currentDigit != digit) {
                            return false
                     }
              }
              return true
       }
       // console.log(checkSame(number))
       // console.log(getSum(number))
      if (!isNaN(number) && (number&2===0)===0 && number.toString().length === 16 && getSum(number)>16 && checkSame(number)===false) {
       return true
}
else return false    
}

let number1 = 1234567890123456
let number2 = 11111111111111125
let number3 = 2222222222222222
let number4 = "1234567890123456"
let number5 = 1000064700000006
let number6 = 0000000000300003

console.log(`${number1} is ${validateCreditCardNumber(number1)}`);
console.log(`${number2} is ${validateCreditCardNumber(number2)}`)
console.log(`${number3} is ${validateCreditCardNumber(number3)}`)
console.log(`${number4} is ${validateCreditCardNumber(number4)}`)
console.log(`${number5} is ${validateCreditCardNumber(number5)}`)
console.log(`${number6} is ${validateCreditCardNumber(number6)}`)