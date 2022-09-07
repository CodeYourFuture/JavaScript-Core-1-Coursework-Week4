
function getSumOfDigits(num) {
  return String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}

function cardValidator(number){
   if (parseInt(number)!==NaN && parseInt(number)!==undefined ){
    const sum=getSumOfDigits(number)
    const even= number % 2===0;
   }
     
    }
//     const str=number.toString();
// str.length > 16;
//  let strUniqueChar=str
//     .split('')
//     .filter(function(item, pos, self) {
//       return self.indexOf(item) == pos;
//     })
//     .join('');

//     const check=
//         str.length === 16
//     &&
//         /^[0-9]+$/.test(str)
//     &&
//         sum > 16 
//     && 
//         even
//     && 
//         strUniqueChar.length >=2
//   if (check){
//     return "The card number is valid"
//   }
//   else{
//         return "The card number is invalid"

//   }



console.log(cardValidator('a92332119c011112'))
