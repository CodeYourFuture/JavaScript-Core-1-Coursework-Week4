//must be 16 digits
//must have 2 digits represented, all digits cannot be the same
//final digit must be even
//sum of all digits must be greater than 16
//return a boolean from function to say whether or not card is valid

const cardValidator = (cardNum) => {

}

//helper functions

const greaterThan16 = (nums) => {
    return nums > 16;
}

const twoOrMore = (nums) => {
    
}

const finalDigitCheck = (nums) =>{
    return nums.lastIndexOf(nums % 2 === 0)
}

const sumOfDigits = (nums) => {
    return nums.forEach(num => (num += num) > 16)
}