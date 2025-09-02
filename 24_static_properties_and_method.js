var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.multiply = function (num1, num2) {
        return num1 * num2;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log("Value of PI:", MathOperations.PI);
console.log("Addition:", MathOperations.add(5, 10));
console.log("Multiplication:", MathOperations.multiply(5, 10));
