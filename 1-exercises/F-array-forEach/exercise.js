/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  arr.forEach(function(name,index){
        for(let index=1; index<=5;index++){
          arr.splice((index*3-1),1,`'Fizz'`);
        } 
        for(let index=2; index<=3;index++){
          arr.splice((index*index),1,`'Buzz'`);
       }
          arr.splice((arr.length-1),1,`'FizzBuzz'`);
        
       console.log(name)
  })
/*
  arr.forEach(function(name,index){
    for (let i= 2; i < arr.length; i++){
        index += 3;
        console.log(arr.splice(index,1,'Fizz'))
    }
  } )
*/
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
