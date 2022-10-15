/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arr3=[];
let arr5=[];
let arr35=[];
arr.forEach(function (i){
  if (i % 3 == 0){
    return arr3.push();
  }else if (i % 5 == 0){
    return arr5.push(i)}
  else (i % 3 == 0 && i % 5 == 0); {
    arr35.push(i);
  }
console.log(i)
})
// console.log(arr3)
// console.log(arr5)
// console.log(arr35)



/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
