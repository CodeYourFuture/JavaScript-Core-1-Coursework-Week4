/*
 Before we go to the big story, we will introduce some more string methods.
 Some of the methods you're using on arrays are similar to ones you can use on strings.
 Methods like: IndexOf, Include, Search, Slice , Spilt and more.

 You can always Google how a method of a string works!
 Here are links to some of those:
  - https://www.w3schools.com/js/js_string_methods.asp
  - https://javascript.info/string#quotes
 Now let's do this small exercise

 Using string methods update the checkCodeIsThere() function
  - The function will have a string as a paramter
  - The function should check if the word "code" exists in the string
  - If it does exist, return the index of it, if not return "Not found"

 Hint: search for string methods like Includes and IndexOf.
*/

function checkCodeIsThere(stringText) {
  let magicWord = "code";
  //edit code below
  if (stringText) {
    return stringText;
  } else {
    return "Not found";
  }
}

/*
  I am new to London and would like to know what transport I can take to different famous locations.
  The input provided contains a list of locations in London. Each of locations is followed by a list
  of transport modes that can be used to get there.
  Let's see an example:

  To take to Tower Bridge, you can use tube or river boat. This information will represented as
    ["Tower Bridge", "tube", "river boat"]

  Where
    the 1st element says the name of the location,
    and rest of them say the transport modes.

  You will then get a list of this information, e.g:
  [
    ["Tower Bridge", "tube", "river boat"],
    ["Abbey road", "double decker"],
    ["London Eye", "tube", "river boat", "bus"]
  ]

  You have to finish up the body of journeyPlanner function that should tell me where I can go if I only
  want to use a specific mode of transport. But before jumping straight to the main function, we will
  break down the whole task into smaller steps that make our job easier.

  This technique is also referred to as "problem decomposition". It helps you to reduce the scope of the problem
  by only focusing on a small chunk of the whole problem at a time.
*/

/*
  Implement the function getTransportModes that
   - Accepts an array containing the location and available transport modes
     e.g: ["Tower Bridge", "tube", "river boat"]
   - Returns an array including the available transport modes to the given location
     e.g: ["tube", "river boat"]

  Hint: Use the corresponding array method to split the array.
*/
function getTransportModes() {}

/*
  Implement the function isAccessibleByTransportMode that

   - Accepts two parameters:
     1) First parameter is an array of transport modes
        e.g: ["tube", "river boat"]
     2) Second parameter is a string containing a transport mode
        e.g: "river boat"

   - Returns
     * True if the location in the first parameter is accessible by the transport mode given in second parameter
     * Otherwise, returns false

  Hint: Use the corresponding array method to decide if an element is included in an array.
*/
function isAccessibleByTransportMode() {}

/*
  Implement the function getLocationName that

   - Accepts a location and available transports in an array
      e.g:["Tower Bridge", "tube", "river boat"]

   - Returns the name of the location
      e.g: "Tower Bridge"
*/
function getLocationName() {}

/*
 We arrived at the final method. it won't take long if you use the previously implemented functions wisely.

 Finish up the implementation of the function journeyPlanner that

  - Accepts two parameters:
    1) An array with a list of locations' and their transports
       e.g:
       [
         ["Angel", "tube", "bus"],
         ["London Bridge", "tube", "river boat"]
       ]

    2) A string containing a transport mode
       e.g: "bus"

  - Returns an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the location names should be returned, not the name of transports.

  HINTS:
   - Use the function you implemented above.
   - Use array method to remove locations that are not accessible by the given transportMode.
   - Use array method to manipulate its elements.

  Advanced challange: try to use arrow function when invoking an array method.
*/
function journeyPlanner(locations, transportMode) {
  // Implement the function body
}

/* ======= TESTS - DO NOT MODIFY ===== */

const string1 = "I Love coding and perfect code makes me happy";
const string2 = "I don't like to do coding";
const string3 = "Can you scan the barcode for me";

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

describe("checkCodeIsThere", () => {
  test("finds code", () => {
    expect(checkCodeIsThere(string1)).toEqual(26);
  });

  test("returns `Not found` if no code", () => {
    expect(checkCodeIsThere(string2)).toEqual("Not found");
  });

  test("finds code as part of a word", () => {
    expect(checkCodeIsThere(string3)).toEqual(20);
  });
});

test("getTransportModes function works", () => {
  expect(getTransportModes(["Angel", "tube", "bus"])).toEqual(["tube", "bus"]);
});

describe("isAccessibleByTransportMode", () => {
  test("positive case", () => {
    expect(isAccessibleByTransportMode(["tube", "bus"], "tube")).toEqual(true);
  });

  test("negative case", () => {
    expect(isAccessibleByTransportMode(["tube", "bus"], "river boat")).toEqual(
      false
    );
  });

  test("ignores substring matches", () => {
    expect(
      isAccessibleByTransportMode(["tube", "bus", "river boat"], "boat")
    ).toEqual(false);
  });
});

describe("getLocationName", () => {
  test("example 1", () => {
    expect(getLocationName(["London Bridge", "tube", "river boat"])).toEqual(
      "London Bridge"
    );
  });

  test("example 1", () => {
    expect(getLocationName(["Angel", "tube", "bus"])).toEqual("Angel");
  });
});

describe("journeyPlanner", () => {
  test("river boat", () => {
    expect(journeyPlanner(londonLocations, "river boat")).toEqual([
      "London Bridge",
      "Greenwich",
    ]);
  });

  test("bus", () => {
    expect(journeyPlanner(londonLocations, "bus")).toEqual([
      "Angel",
      "Tower Bridge",
      "Greenwich",
    ]);
  });

  test("tube", () => {
    expect(journeyPlanner(londonLocations, "tube")).toEqual([
      "Angel",
      "London Bridge",
      "Tower Bridge",
    ]);
  });
});
