function formatPercentage(array) {
  for (let i=0; i<array.length; i++){
 let elemTemp=  array[i].toFixed(2);
     if (elemTemp >100) { elemTem=100}
     array[i]=elemTemp+"%";
  }
return array
}



let array=[
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ];

    let array2=[23, 18.103, 187.2, 0.372];

console.log(formatPercentage(array2))