// TypeScript figures this out automatically
var count = 10; // inferred as number
var message = "Hi there"; // inferred as string
function add(a, b) {
    return a + b; // return type inferred as number
}
console.log(count + add(5, 7));
console.log(message.toUpperCase());
