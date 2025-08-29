// Union Types 
// const inputValue = (value: string | number |boolean): void => {
//     if (typeof value === "string") {
//         console.log(`String value: ${value}`);
//     } else if (typeof value === "number") {
//         console.log(`Number value: ${value}`);
//     } else if (typeof value === "boolean") {
//         console.log(`Boolean value: ${value}`);
//     } else {
//         console.log("Unsupported type");
//     }
// }

// inputValue("Hello");
// inputValue(42);
// inputValue(true);



// const UserInput = (value: string | number): void  => {
//     if (typeof value === "string") {
//         console.log(`String value: ${value.toUpperCase()}`);
//     } else if (typeof value === "number") {
//         console.log(`Number value: ${value**2}`);
//     } else {
//         console.log("Unsupported type");
//     }
// }

// UserInput('vikas');
// UserInput(5)

// Intersection Types

type Person = {
    name: string;
    age: number;
}

type Employee = {
    employee_Id: number;
    department: string;
}

type EmployeeDetails = Person & Employee;

const emp1: EmployeeDetails = {
    name: "Vikas",
    age: 25,
    employee_Id: 101,
    department: "IT"
}
console.log(emp1);