const vanes = require('../index');

let str = "Hello, {var}!";
let value = "World";

let result = vanes(str, {var: value});

if (result == "Hello, World!"){
    console.log("Test Case Passed.");
}
else {
    console.log("Test Case Failed.");
}

