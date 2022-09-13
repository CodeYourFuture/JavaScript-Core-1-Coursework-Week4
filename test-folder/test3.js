// function isBushSafe(berryArray) {
//      let bool = berryArray.every(item => item === "pink");
//      if (bool === true) {
//       return "Bush is safe to eat from"
//      } else return "Toxic! Leave bush alone!"
// }



// console.log(isBushSafe(["pink", "pink", "pink", "neon", "pink", "transparent"]));
// console.log(isBushSafe(["pink", "pink", "pink", "pink"]));

function getEligibleStudents(arr) {
    const names = [];
    arr.filter(element=>{
    if (element[1]>=8) {
        names.push(element[0])      
   }
})     
  return names;
}

const attendance = [
    
    ["Adam", 7],
    
  ];

console.log(getEligibleStudents(attendance))




