
function getSumOfDigits(num) {
  return String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}

function cardValidator(number){
  let sum=0;
  let even=false;
  let strUniqueChar="0";
   if ( /^[0-9]+$/.test(number) ){
       sum = getSumOfDigits(number)
       even= /^[0,2, 4, 6, 8]+$/.test(number[number.length-1]);
       strUniqueChar=number
          .split('')
          .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
          })
          .join('');
          console.log( /^[0-9]+$/.test(number))
        }
       const check=
        number.length === 16
        &&
        sum > 16 
        && 
        even
        && 
        strUniqueChar.length >=2;
       
  if (check){
    return "The card number is valid"
  }
  else{
        return "The card number is invalid"

  }
   }


console.log(cardValidator('1111111111111110'))
