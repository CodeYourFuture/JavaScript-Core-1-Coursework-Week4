/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

/*let result = story
              .replaceAll("dog", "cat")
              .replaceAll("day", "night")
              .replaceAll("10", "100000")
              .replaceAll("great", "brilliant");*/
              let result =story.split(" ").map((value) => {
                if (value.includes("dog")) {
                  return value.replace("dog", "cat");
                } else if (value.includes("day")) {
                  return value.replace("day", "night");
                } else if (value.includes("10")) {
                  return value.replace("10", "100000");
                } else if (value.includes("great")) {
                  return value.replace("great", "brilliant");
                } else {
                  return value;
                }
              }).join(" ");


/* EXPECTED OUTPUT */
const util = require("util");

function test(test_name, actual, expected) {
  console.log("");
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: \nexpected: ${util.inspect(
      expected
    )} \nbut your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "1. Original story has not been changed",
  story,
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."
);

test(
  "2. The result of the replace is correct",
  result,
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
);
