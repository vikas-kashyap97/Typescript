// Type 

// type Person = {
//   name: string;
//   age: number;
// };

// type PersonAdd= {
//     city: string,
//     state: string
// }

// type Data = Person | PersonAdd

// const bioData: Data = {
//     name: "Vikas",
//     city: "Hardoi",
//     state: "UP"
// }
// console.log(bioData);

// interface

interface Person {
  name: string;
  age: number;
};

interface PersonAdd {
    city: string,
    state: string
}

interface Data extends Person , PersonAdd {}

const bioData: Data = {
    name: "Neha",
    age: 21,
    city: "Hardoi",
    state: "UP"
}
console.log(bioData);