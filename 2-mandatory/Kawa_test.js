function findSafeOxygenLevel(arrayOxygen) {
  let tempNum=0;
  let index=0;
  let boo=true;
  while (index <arrayOxygen.length && boo) {
     tempNum=parseFloat( arrayOxygen[index].replace("%",""));
    if ( tempNum >=19.5 && tempNum <= 23.5 ) {
      console.log("first nearest planet is planet number "
      + index 
      + " which is " +  arrayOxygen[index]);
      boo=false;
    }
    else{
      index++;
    }
  };
}




let planetOxygen=["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
findSafeOxygenLevel(planetOxygen)