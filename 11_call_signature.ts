type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country:string) => string;
}

const student1: Student = {
    name: "Vikas Kashyap",
    age: 23,
    gender: "Male",
    greet: (country: string) : string => {
        return `Hello, My name is ${student1.name}. I am ${student1.age} years old and my gender is ${student1.gender}. I am from ${country}.`;
    }
}
const student2: Student = {
    name: "Neha Rawat",
    age: 21,
    gender: "Female",
    greet: (country: string) : string => {
        return `Hello, My name is ${student2.name}. I am ${student2.age} years old and my gender is ${student2.gender}. I am from ${country}.`;
    }
}
const introduction : (student1: Student) => void = (student1: Student) : void => {

    console.log(`Hello, My name is ${student1.name}. I am ${student1.age} years old and my gender is ${student1.gender}.`);
    console.log(student1.greet("India"));
}
// introduction(student1);

console.log(student1.greet("India"));
console.log(student2.greet("India"));
