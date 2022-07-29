# Using Replace In A String

.replace() allows us to add something where we removed something

```js
let greeting = "Good Morning";
let result = greeting.replace("Morning", "Evening"); // returns Good Evening
console.log(result);
```

This works for whole words like above or for single letters

```js
let greeting = "Dog";
let result = greeting.replace("D", "F"); // Returns "Fog"
console.log(result);
```
