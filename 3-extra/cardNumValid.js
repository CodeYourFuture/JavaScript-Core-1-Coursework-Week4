
// is input 16 characters long and all numbers
function lengthAndNumbers(cardnumber){
    cardnumber = cardnumber.toString();
    return (cardnumber.toString().split('').length === 16 && cardnumber.toString().split('').map(x => typeof x === 'number'));

}

// Use Set to test if unique 
function nonUniqueNumbers(cardnumber){
  let arr = [];
  arr = cardnumber.toString().split('');
  let set = new Set(arr)
  return (new Set(arr)).size !== arr.length;
  
}

// Access last element in string and check if even
function lastIsEven(cardnumber){
    return String(cardnumber).substr(-1) % 2 === 0;
}

function sumAllNumbers(cardnumber){

   let arr =  cardnumber.toString().split('');
   arr = arr.map(x => Number(x));
   let answer = arr.reduce((a,b) => a + b);
   return answer > 16;
}

function cardValidator(cardnumber){

    return lengthAndNumbers(cardnumber)
    && nonUniqueNumbers(cardnumber) 
    && lastIsEven(cardnumber)
    && sumAllNumbers(cardnumber);
    
}


//invalid
 console.log(cardValidator('a92332119c011112'))
// console.log(cardValidator(1111111111111110))
// console.log(cardValidator(6666666666666661))

console.log(cardValidator('6666666666661666'))

//valid
