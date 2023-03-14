function stepCounter(distance) {
  let steps = 0;
  steps = distance * 2;
  return steps;
}

console.log(`my steps is ${steps}`);
let saqibSteps = 17;
let elenaSteps = 50;

let malkitDistance = 40;
let malkitSteps = stepCounter(malkitDistance);

let totalSteps = saqibSteps + elenaSteps + malkitSteps;
console.log(`In total everyone did ${totalSteps} steps`);
