// function first5(arr) {
//  return arr.slice(0,5)
// }

// console.log(first5([1,2,3,4,5,6,7,8]))


// function sortArray(arr) {
//   //return arr.sort((a,b)=> a-b);
//   return arr.sort();
// }

// console.log(sortArray([3,4,23,2,1,55,3232,5]))
// console.log(sortArray(["a", "t", "r", "b"]))

// function remove(arr, index) {
//    arr.splice(index,1,)
//    return arr
// }

// console.log(remove(["a","b","c"], 0))

// function formatPercentage(arr) {
//  return arr.map(item => {
//     if (item > 100) {
//         item = 100;
//     } else
//     item = Math.round((item + Number.EPSILON)*100)/100;
//     item.toString();    
//     item = item + "%";
//     return item;
//  })
// }

// console.log(formatPercentage([1, 2 ,3.3456 ,4 , 534]))

// item => {
//     if (item>=19.5 && item<=23.5) {
//       return item
//     }
//   }

  function findSafeOxygenLevel(arr) {
       arr = arr.filter(element => element && element.includes("%")) 
       arr = arr.map(item =>{
        item = item.substring(0,4);            
        item = Number(item);    
        return item;       
      })
      let first = arr.find(element => element >19.5 && element<23.5);
      if (first === undefined){
        return undefined
      } else {
      first.toString();
      first = first +"%"
      return   first 
    }
}


console.log(findSafeOxygenLevel(["24.2%","20", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"]))

console.log(findSafeOxygenLevel(["50"]))