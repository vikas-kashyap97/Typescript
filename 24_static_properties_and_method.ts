class MathOperations {
   public static PI: number = Math.PI;

   public static add (num1: number, num2: number): number {
        return num1 + num2
    }
    public static multiply(num1: number, num2: number): number {
          return num1 * num2
    }
}

console.log("Value of PI:", MathOperations.PI);
console.log("Addition:", MathOperations.add(5, 10));
console.log("Multiplication:", MathOperations.multiply(5, 10));

