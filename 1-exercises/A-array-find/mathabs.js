let array = [2, 2, 1, 0]
let numbers = [30, 20, 10, 40]



function smallEnough(a, limit) {
  return a.every(num => num <= limit)
    
}

// 


function filteredArray(arr, index){
    let newArray = arr.filter(num => index !== num);
    return newArray;
  }
//console.log(filteredArray(numbers, numbers[2]))

function sortArray(arr) {
    let sortedArr = arr.map(x => x).sort();
    return sortedArr;
  }
  

//console.log(sortArray(["a", "n", "c", "e", "z", "f"]));

/* Write a function that:
- Takes an array of strings as input.
- Removes any spaces in the beginning or end each string.
- Removes any forward slashes (/) in the strings.
- Makes the strings all lowercase.
*/

let sentence = [" Hey are you okay / ? ", "help Me I am lost "];
function tidyUpString(items) {
    for (let i of items) {
        return i.trim();
        
    }
   
    }
    
    
  

  console.log(tidyUpString([
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ]));
    console.log(tidyUpString(sentence));

   
  







