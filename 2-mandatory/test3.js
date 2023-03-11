function findSafeOxygenLevel(planets) {
  const levels1 = planets.filter((planet) => Number(planet) + 10);
  console.log(" level 1   = " + levels1);
  console.log("\n\n\n");
  const levels2 = planets.map((plane) => Number(plane) + 10);
  console.log(" level 2   = " + levels2);
}

/* ======= TESTS - DO NOT MODIFY ===== */

findSafeOxygenLevel(["24", "11", "19", "23", "29", "20"]); // .toEqual("19.9%");
