/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their 
    attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended
    AT LEAST 8 classes
*/

function getEligibleStudents(arrays) {
    //create an empty array to store the arr who will sit an exam
     const sitExamName = [];
     //loop through the array of arrays
     for ( arr of arrays ){
    // check if the array includes a name with 8 attendance counts
       if(arr[1] >= 8){
        //add the arr to the sitExamName array
        sitExamName.push(arr)
       }
     }
     //pick up the name from the new array with map()method.
      return sitExamName.map(x=>x[0]);
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("getEligibleStudents function works", () => {
  const attendance = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ];
  expect(getEligibleStudents(attendance)).toEqual([
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina",
  ]);
});

test("getEligibleStudents function can return empty array", () => {
  const attendance = [["Jacob", 7]];
  expect(getEligibleStudents(attendance)).toEqual([]);
});
