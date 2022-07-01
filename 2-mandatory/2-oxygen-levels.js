/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.

    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring().
*/
/*const isAcceptedLevel = (level) => {
  let newLevel;
  if (level.substring(level.length - 1) === "%") {
    newLevel = Number(level.replace("%", ""));
  } else {
    return false;
  }
  return newLevel > 19.5 && newLevel < 23.5;
};*/
const isAcceptedLevel = (level) => {
  let newLevel = level.replace("%", "");
  return level.includes("%") && newLevel > 19.5 && newLevel < 23.5;
};

const findSafeOxygenLevel = (oxygenLevel) => oxygenLevel.find(isAcceptedLevel);

/*function findSafeOxygenLevel(oxygenLevels) {
  const safeLevel = oxygenLevels
    .filter((level) => level.endsWith("%"))
    .find((level) => {
      level = parseFloat(level.replace("%", ""));
      const lowerLimit = 19.5;
      const upperLimit = 23.5;
      return lowerLimit < level && level < upperLimit;
    });
  return safeLevel;
}*/
/*const findSafeOxygenLevel = (planets) =>
  planets.find((planet) =>
    planet[planet.length - 1] === "%" &&
    parseFloat(planet) > 19.5 &&
    parseFloat(planet) < 23.5
      ? planet
      : false
  );*/

/* ======= TESTS - DO NOT MODIFY ===== */

test("findSafeOxygenLevel function works - case 1", () => {
  expect(
    findSafeOxygenLevel(["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"])
  ).toEqual("19.9%");
});

test("findSafeOxygenLevel function works - case 2", () => {
  expect(
    findSafeOxygenLevel(["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"])
  ).toEqual("20.2%");
});

test("findSafeOxygenLevel function filters out invalid percentages", () => {
  expect(
    findSafeOxygenLevel(["200%", "-21.5%", "20", "apes", "21.1%"])
  ).toEqual("21.1%");
});

test("findSafeOxygenLevel function returns undefined if no valid planets found", () => {
  expect(findSafeOxygenLevel(["50"])).toBeUndefined();
});
