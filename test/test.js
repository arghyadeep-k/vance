const vanes = require('../index');

// let str = "Hello, {var}!";
// let value = "World";

// let result = vanes(str, {var: value});

// if (result == "Hello, World!"){
//     console.log("Test Case Passed.");
// }
// else {
//     console.log("Test Case Failed.");
// }

test('Single parameter', () => {
    expect(vanes("Hello, {var}!", {var: 'World'})).toMatch("Hello, World!")
});

test('Multiple parameters', () => {
    expect(vanes("{var1}, {var2}!", {var1: "Hello", var2: 'World'})).toMatch("Hello, World!")
});