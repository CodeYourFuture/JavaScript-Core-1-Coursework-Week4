/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(ar) {
  //  return ar.map(n => n % 3 === 0 ?  "Fizz" : n % 5 === 0 ? "Buzz" : (n % 3 === 0 && n % 5 === 0) ?   "FizzBuzz" : n)

  // return ar.map(num => {
  //   if (num % 3 === 0 && num % 5 === 0) {
  //       num = "FizzBuzz";
  //   } else if (num % 5 === 0) {
  //       num = 'Buzz';
  //   } else if (num % 3 === 0) {
  //       num = 'Fizz';
  //   }
  //   return num;
  //  })

  return ar.forEach(function(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      num = "FizzBuzz";
    } else if (num % 5 === 0) {
      num = "Buzz";
    } else if (num % 3 === 0) {
      num = "Fizz";
    }
    return num;
  });
}

console.log(fizzBuzz(arr));
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
