// IMP: when we use generic and non generic type together then while calling the function we need to define the type in a manner but with non generics we don't
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }




// Generic function
function add<T, U>(a: T, b: U, c: boolean): void {
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
}

// Using the generic function
const result1 = add<number, string>(5, "Vikas", true);
const result2 = add<string, number>("Hello, ", 5, false);

// Normal add function
// const addTwo = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// console.log(addTwo(5, 10));
