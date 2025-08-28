const numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    num = num ** 2
    console.log(num);
});

// map method
const squareNum:number[] = numbers.map((num:number) => num ** 2);
console.log(squareNum);

const stringNum:string[] = numbers.map((num:number) => num.toString());
console.log(stringNum);

// filter method
const biggerThanThree:number[] = numbers.filter((num:number) => num > 3);
console.log(biggerThanThree);

const evenNumbers:number[] = numbers.filter((num:number) => num % 2 === 0);
console.log(evenNumbers);


const names:string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const longNames:string[] = names.filter((name:string) => name.length > 4);
console.log(longNames);