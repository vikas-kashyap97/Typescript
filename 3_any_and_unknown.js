// "any" turns off TypeScript’s strictness
var randomValue = 42;
function logAnything(value) {
    console.log("Logging:", value);
}
randomValue = "Now I'm a string"; // Allowed
randomValue = { foo: "bar" }; // Still allowed
logAnything(randomValue);
var userInput;
function processInput(input) {
    if (typeof input === "string") {
        console.log("It's a string with length:", input.length);
    }
    else if (typeof input === "number") {
        console.log("It's a number squared:", input * input);
    }
    else {
        console.log("Unknown type, can't process directly");
    }
}
userInput = "Hello!";
processInput(userInput);
userInput = 123;
processInput(userInput);
