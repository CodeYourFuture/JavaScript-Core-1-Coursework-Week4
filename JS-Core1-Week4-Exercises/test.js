// arr = [23, 18.103, 187.2, 0.372];

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

// function formatPercentage(arr) {
//   function isMoreThan100(val) {
//     if (val > 100) {
//       val = 100;
//     }
//     return val;
//   }
//   let morethan100 = arr.map(isMoreThan100);
//   let editArr = morethan100.map((el) => el.toFixed(2));
//   let cleanedArr = editArr.map((el) => `${el}%`);
//   return cleanedArr;
// }


// console.log(formatPercentage(arr));

// oxygens = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];

// function findSafeOxygenLevel(oxygens) {
// if(oxygens >= 19.5 && oxygens <= 23.5) {
//   // let oxygen = num;
//   return oxygens;
//   }
  
// }
// console.log(findSafeOxygenLevel(oxygens));

// TASK1

// Write a function solution that, given an integer D (between 1 and 5) and a string (only "one", "two", "three", "four", "five"), returns the result of multiplying D and S expressed as an integer.

// For example, given D = 4 and S = "two", your function should return 8,


// TASK2

// Days of week represened as three-letter-strings ("Mon", Tue, Wed, Thu, Fri, Sat, Sun).D

// Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500, inclusive), returns the day of the week that is K days localStorage.clear
// For example, given S = "Wed" and K = 2, the function should return "Fri".at
// Given S = "Sat" and K = 23, the function should return "Mon".


// Solution1

// function solution(D, S) {
//   if(S === "one") {
//     return D * 1;
//   }
//     if(S === "two") {
//     return D * 2;
//   }
//     if(S === "three") {
//     return D * 3;
//   }
//     if(S === "four") {
//     return D * 4;
//   }
//     if(S === "five") {
//     return D * 5;
//   }
// }

// let numArr = [" ", "one", "two", "three", "four", "five"];

// let val = numArr.indexOf(s)
//   let finalNo = val + 1;
//   return D * val;


// function testMultiplyByString() {
//   let answer = solution(1,"two");
//   if(answer === 2) {
//     console.log("Passed");
//   } else {
//     console.log("failed");
//   }
// }

// let solution(D, S => D * numArr.indexOf(S) + 1);
// console.log solution(1, "three");

let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function solution(s,k) {
  let dayIndex = daysOfWeek.indexOf(s); //for "Fri" answer = 4;
  let nextDay = (dayIndex + k) % daysOfWeek.length; // advance//move forward 14 days. nextDay = 18;
  //Next day must be between 0 and 6;
  let nextDayString = daysOfWeek[nextDay]; //daysOfWeek[18] = 'undefined';
  return nextDayString;
}

function testMondayPlus1Day(){
  let result = solution("Mon", 1);
  if(result === "Tue") {
    console.log("Passed");
  } else {console.error("failed");}
}

function testFriPlusDay(){
  let result = solution("Fri", 15);
  if(result === "Sat") {
    console.log("Passed");
  } else {console.error("failed");}
}

testMondayPlus1Day();
testFriPlusDay();


let capitalCities = {
  scotland: "Edinburgh",
  kenya: "Nairobi",
  australia: "Canberra",
  canada: "Ottawa",
};

let highScores = {
  55: "Alistair",
  100: "David",
  89: "Hannah",
  34: ["Sergi", "Frank"],
};

// ONLY EDIT BELOW HERE

let capitalCitiesKeys = Object.keys(capitalCities);
let highScoresKeys = Object.keys(highScores);
let capitalCitiesValues = Object.values(capitalCities);
let highScoresValues = Object.values(highScores);
// capitalCities.forEach(el => console.log(el));

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys);
// prints ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues);
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']

let storeBranches = {
  glasgow: {
    manager: "Andrew",
    assistant: "Laura",
    interns: {
      head_intern: "Mozafar",
      intern: "James",
    },
  },

  edinburgh: {
    director: "Kelly",
    manager: "Sally",
    assistant: "Derek",
    interns: {
      head_intern: "John",
      intern: "Sarah",
    },
  },
};

// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log(Object.keys(storeBranches));

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log(Object.keys(storeBranches.glasgow));

// # 3
// prints [ 'head_intern', 'intern' ]
// console.log(Object.keys(storeBranches.interns));

// ONLY EDIT ABOVE THIS LINE


// const flowers = {
//   tulip: 20,
//   rose: 10,
//   lily: 15,
// };

// Looping through the array created from Object.keys
// const flowerKeys = Object.keys(flowers);

// flowerKeys.forEach((key) => {
//   console.log(`${key}: ${flowers[key]}`);
// });

// Prints
// tulip: 20
// rose: 10
// lily: 15

const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
}

// const higherThan18 = Object.keys(traineeGrades);

let traineeGradesKeys = Object.keys(traineeGrades);
console.log(traineeGradesKeys);


traineeGradesKeys.forEach(key) => {

  if(traineeGrades[key] > 18) {
  console.log(`${key.toUpperCas()}: ${traineeGrades[key]}`);
}
}

// traineeGrades.forEach((key) => value > 18 ;  console.log(`${key}: ${traineeGrades[value]}`)); 
 


// Prints
// TOM - 20
// ABDUL - 19