# Vanes : Format strings with placeholders (Node.js)

This package can help you format your strings easily with placeholders. Comes in handy when you are importing the strings from another module.

## Basic Usage
```javascript
const vanes = require('vanes');

let str = `Hello, {var}!`;
let value = 'World';

let result = vanes(str, {var: value});

console.log(result) //Will output - Hello, World!
```
