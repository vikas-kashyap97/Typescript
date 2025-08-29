// function logAndReturn(value: number | string): number | string {
//   console.log(value);
//   return value;
// }
// const numberResult = logAndReturn(42);
// const stringResult = logAndReturn("Hello, Generics!");
// // ❌ This will fail because `boolean` isn’t allowed
// // const booleanResult = logAndReturn(true);
// console.log(numberResult);
// console.log(stringResult);
function logAndReturn(value) {
    console.log(value);
    return value;
}
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello, Generics!");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
