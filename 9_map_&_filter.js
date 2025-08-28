var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    num = Math.pow(num, 2);
    console.log(num);
});
// map method
var squareNum = numbers.map(function (num) { return Math.pow(num, 2); });
console.log(squareNum);
var stringNum = numbers.map(function (num) { return num.toString(); });
console.log(stringNum);
// filter method
var biggerThanThree = numbers.filter(function (num) { return num > 3; });
console.log(biggerThanThree);
var evenNumbers = numbers.filter(function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
var longNames = names.filter(function (name) { return name.length > 4; });
console.log(longNames);
