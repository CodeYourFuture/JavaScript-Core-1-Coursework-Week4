function twoDifferentDigits (num){
    let number = num.split("");  
    let twoDifferent = number.some(x => x !== number[0]); // to find any number that is not the same as the first number
   return twoDifferent;
}

function lastDigitEven (num){
    last = num.charAt(num.length -1); //to access the last number
if(num % 2 == 0 && last){    //to check if the number is even
  return true;
} else {return false;}
}

function sumGreaterThan16(num){
    let numbers = num.split("");
    const newArr =  [];
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++){
      newArr.push(parseInt(numbers[i]));   // changes string to number and pushes to new array
      sum +=  newArr[i];
    } return sum > 16;
}





function cardValidator(num){
      if(num.length === 16 &&
          !/\D/.test(num) &&  // to check if num  is a number
          twoDifferentDigits (num) &&
          lastDigitEven (num) &&
          sumGreaterThan16(num)){
              return "Your card is Valid";
          } else {
              return "Your card is Invalid";
          }
    }
console.log(cardValidator('a92332119c011112'));       //Should be invalid
console.log(cardValidator('4444444444444444'));       //Should be invalid
console.log(cardValidator('1111111111111110'));       //Should be invalid
console.log(cardValidator('6666666666666661'));       //Should be invalid

console.log(cardValidator('9999777788880000'));       //Should be valid
console.log(cardValidator('6666666666661666'));       //Should be valid


