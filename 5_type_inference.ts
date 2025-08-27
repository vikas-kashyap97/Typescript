// TypeScript figures this out automatically
let count = 10;   // inferred as number
let message = "Hi there"; // inferred as string

function add(a: number, b: number) {
    return a + b; // return type inferred as number
}

console.log(count + add(5, 7));
console.log(message.toUpperCase());
