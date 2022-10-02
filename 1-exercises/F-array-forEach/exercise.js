/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fuzzFucntion(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 15 === 0) {
      num[i] = "FuzzBuz";
    } else if (num[i] % 5 === 0) {
      num[i] = "Buzz";
    } else if (num[i] % 3 === 0) {
      num[i] = "Fuzz";
    } else (
      num[i]
    )
  }
  return num;
}

// console.log(fuzzFucntion(arr));
const fuzzBuz = [];
 arr.forEach(element => {
  if (element % 15 === 0) {
   fuzzBuz.push("FuzzBuzz");
  } else if (element % 5 === 0) {
    fuzzBuz.push("Buzz");
  } else if (element % 3 === 0) {
    fuzzBuz.push("Fuzz");
  } else { 
    return fuzzBuz.push(element);
}
})

console.log(fuzzBuz)

/*
 arr.forEach((element, index, array) => {
  if (array[element] % 15 === 0) {
    array[element] = "FuzzBuz";
  } else if (array[element] % 5 === 0) {
    array[element] = "Buzz";
  } else if (array[element] % 3 === 0) {
    array[element] = "Fuzz";
  } else { 
  array[element]
}
})
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
