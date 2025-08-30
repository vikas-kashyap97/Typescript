interface Person  {
    name: string;
    age: number;
    hobbies: string[];
    role: string[];
    address: {
        street: string;
        city: string;
        country: string;
    };
};



const person : Person = {
    name: "Vikas Kashyap",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: ["author", "admin", "developer", "engineer"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};


console.log(person.address.country);

person.address.country = "India";
console.log(person.address.country);