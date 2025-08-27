// Explicitly saying: this is a string
let username: string = "Vikas";

function greet(name: string): string {  // param is string, return is string
    return `Hello, ${name}!`;
}

console.log(greet(username));  // Invocation
