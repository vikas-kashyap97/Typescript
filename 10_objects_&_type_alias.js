var person = {
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
var capName = person.name.toUpperCase();
console.log(capName);
var person1 = {
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
var product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
var totalPrize = function (product) {
    return "Total price of the all laptops is ".concat(product.price * product.quantity);
};
console.log(totalPrize(product));
