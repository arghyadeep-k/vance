# Vanes : Format strings with placeholders (Node.js)
![npm](https://img.shields.io/npm/v/vanes)      ![npm](https://img.shields.io/npm/dt/vanes)    ![NPM](https://img.shields.io/npm/l/vanes?color=blue)

This package can help you format your strings easily with placeholders. Comes in handy when you are importing the strings from another module.

## Why Vanes?
When you're importing a string from a module, it is not possible to use $-based placeholders because the variables serving as the placeholders may not exist in the module where the strings are declared. To solve this, we came up with Vanes.

Using Vanes, you can place any keyword as your placeholder as long as you tie them in with braces (Remember: no spaces between the braces and the keyword). When you import the string in your other module, just pass that string and a comma separated key-value object where keys are the placeholders in the string and values are the variables or constants you want to replace them with. 

And, voila! Vanes will return you a string with all the values replaced.

## Installation
```
npm install --save vanes
```

## Basic Usage
```javascript
const vanes = require('vanes');

let str = `Hello, {var}!`;
let value = 'World';

let result = vanes(str, {var: value});

console.log(result) 

//Output - Hello, World!
```

## API

**vanes(string, {key: value})**

- **string**: input string with placeholders in it

- **key**: variable serving as the placeholder in the string

- **value**: variable name/constant value that needs to replace the placeholder(key) in the string

Multiple key-value pairs can be sent separated by comma.

## License

Vanes is published under the MIT license. For more information, see the accompanying LICENSE file. 
