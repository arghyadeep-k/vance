# Vance : Format strings with placeholders (Node.js)

This package can help you format your strings easily with placeholders. Comes in handy when you are importing the strings from another module.

## Basic Usage
```javascript
const vance = require('vance');

let str = `Hello, {var}!`;
let value = 'World';

let result = vance(str, {var: value});

console.log(result) //Will output - Hello, World!
```
