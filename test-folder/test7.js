function sortAges(arr) {
  let newArr = [];
  for (const element of arr) {
      if (!isNaN(element) && Number.isInteger(element))     
      newArr.push(element);    
  }
  
  return newArr.sort((a,b)=>a-b);
}






console.log(sortAges([
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  "23",
  "🎖",
  "Ismeal",
]))