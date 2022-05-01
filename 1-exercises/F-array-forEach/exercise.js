/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr.forEach((element) => 
          
    
    {

     if (element % 3 == 0 && element % 5 == 0){
        console.log("FizzBuzz")
      } 
    
     else  if (element % 3 == 0){
        console.log("Fizz")
      }
      else if (element % 5 == 0){
        console.log("Buzz")
      }

      else {
        console.log(element);
      }
      

    
      
    }

);

/*
//printing all elements using for loop
for (let element of arr){
  console.log(element)
}
*/


/*
const a = ["a", "b", "c"];
for (const element of a) { // You can use `let` instead of `const` if you like
    console.log(element);
}
// a
// b
// c
}
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
