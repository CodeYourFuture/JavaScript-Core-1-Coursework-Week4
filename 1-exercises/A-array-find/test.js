arr = [23, 18.103, 187.2, 0.372];

// function formatPercentage(arr) {
  
//     function isMoreThanHundred(num){
//         if(num > 100) {
//          num = 100;
//          return num;
//         } else return num;
//     } 

//     function toDecimals(num) {
//     return num.toFixed(2);
//     }

//     let finalArr = arr.map(isMoreThanHundred).map(toDecimals).map(num => num + "%");
    
//     return finalArr;
// }

function formatPercentage(arr) {
  function isMoreThan100(val) {
    if (val > 100) {
      val = 100;
    }
    return val;
  }
  let morethan100 = arr.map(isMoreThan100);
  let editArr = morethan100.map((el) => el.toFixed(2));
  let cleanedArr = editArr.map((el) => `${el}%`);
  return cleanedArr;
}


console.log(formatPercentage(arr));