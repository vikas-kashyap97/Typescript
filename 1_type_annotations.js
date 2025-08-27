// Explicitly saying: this is a string
var username = "Vikas";
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet(username)); // Invocation
