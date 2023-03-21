function getLanes(streets) {
  return streets.filter((street) => street.includes("Lane"));
}

const streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
];

console.log(getLanes(streetNames));
