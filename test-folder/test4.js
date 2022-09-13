// function checkCodeIsThere(stringText) {
//   let magicWord = "code";
//   //edit code below
//   if (stringText.includes(magicWord)) {
//     return stringText;
//   } else {
//     return "Not found";
//   }
// }

// const string1 = "I Love coding and perfect code makes me happy";
// const string2 = "I don't like to do coding";
// const string3 = "Can you scan the barcode for me";

// console.log(checkCodeIsThere(string1));
// console.log(checkCodeIsThere(string2));
// console.log(checkCodeIsThere(string3));

function getTransportModes(arr) {
  return arr.slice(1, arr.length)
}

// console.log(getTransportModes([1,2,3,4,5,6]))

function isAccessibleByTransportMode(arr,element) {
    return arr.some(item => item === element);
}

// console.log(isAccessibleByTransportMode([1,2,4], 'boat'))

function getLocationName(arr) {
  return arr.slice(0, 1);
}

// console.log(getLocationName(["Tower Bridge", "tube", "river boat"]))

function journeyPlanner(locations, transportMode) {
  let finalArray =  locations.map(item=>{
    let transModes = getTransportModes(item);
    if (isAccessibleByTransportMode(transModes,transportMode)) 
    return getLocationName(item).toString()
  })
  return finalArray.filter(element => {return element !== undefined});
}

console.log(journeyPlanner([
         ["Angel", "tube", "bus"],
         ["London Bridge", "tube", "river boat"],
         ["Walsall","bus"]
       ], 'bus'))