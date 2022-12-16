var test1 = [1,2,3,4,5];

let people = [1, 3, 5, 3];
function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
let mappedArray = array.map(x => x * 2);
console.log(mappedArray);
}

console.log(double(people));
console.log(people);