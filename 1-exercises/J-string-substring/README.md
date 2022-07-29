# Using Substring On A String

.substring() allows us to remove things from strings.

To remove the start of a string you can start with 0. For example

```js
let dessert = "ice cream and pancakes";
let newDessert = dessert.substring(0, 9);
console.log(newDessert); // outputs "ice cream"
```

To remove the end of the string you can use .length

```js
let dessert = "ice cream and pancakes";
let newDessert = dessert.substring(10, dessert.length);
console.log(newDessert); // outputs "and pancakes"
```
