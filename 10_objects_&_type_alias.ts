type Person = {
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

const capName = person.name.toUpperCase();
console.log(capName);



const person1: Person = {
    name: "Neha Rawat",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: ["author", "admin", "developer", "engineer"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

type Product = {
    name: string;
    price: number;
    quantity: number;
}

const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}

const totalPrize = (product:Product) => {
    return`Total price of the all laptops is ${product.price * product.quantity}`;
    
}
console.log(totalPrize(product));
