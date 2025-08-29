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


function logAndReturn<T>(value: T): T {
  console.log(value);
  return value;
}

const numberResult = logAndReturn<number>(42);
const stringResult = logAndReturn<string>("Hello, Generics!");
const booleanResult = logAndReturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
