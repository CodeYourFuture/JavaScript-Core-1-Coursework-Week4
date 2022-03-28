/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.

    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring().
*/

function findSafeOxygenLevel(oxygenLevel) {
  const safe02Level = oxygenLevel.filter(levelOf02 => levelOf02.endsWith('%')).find(levelOf02 => {
  /* ^ Variable filters through each element of the oxygenLevel array, looking for the ones that end with a % symbol. */

    levelOf02 = parseFloat(levelOf02.replace("%", ""));
    // ^ Replaces % sign with nothing, effectively removing it & then passes the float value(number with a decimal) of levelOf02 back into levelOf02.

    const lowest02Level = 19.5; // Variable that stores value of the lowest level of oxygen allowed.
    const highest02Level = 23.5; // Variable that stores value of the hightest level of oxygen allowed.
    return lowest02Level < levelOf02 && levelOf02 < highest02Level;
    /* ^ Compares lowest level of oxygen allowed with level of oxygen present, and checks if the former is less than the latter.
    Also compares level of oxygen present with with highest level of oxygen allowed, and checks if the former is less than the latter.
    The oxygen value is then returned ONLY if both prior sentences are true */
  })
  return safe02Level; // Returns value of the safe level of oxygen variable.
}

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
