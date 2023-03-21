function isBushSafe(berryArray) {
  if (berryArray.some((berry) => berry !== "pink")) {
    return "Toxic! Leave bush alone!";
  } else return "Bush is safe to eat from";
}

let b = ["pink", "pink", "pink", "neon", "pink", "transparent"];

let d = ["pink", "pink"];

console.log(isBushSafe(b));
console.log(isBushSafe(d));
