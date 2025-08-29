type PersonInfo = readonly [string, number, boolean];

const displayPersonInfo = (person: PersonInfo): void => {
    const [name, age, hasDrivingLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driving License: ${hasDrivingLicense ? "Yes" : "No"}`);
}


let person1:PersonInfo = ["Vikas", 23, true];

let person2:PersonInfo = ["Neha", 21, false];

displayPersonInfo(person1);
displayPersonInfo(person2);


type ProductDeatails = readonly [string, number, number];

const displayProductDetails = (product: ProductDeatails): void => {
    const [productName, price, quantity] = product;
    console.log(`Product Name: ${productName}, Price: ${price}, Quantity: ${quantity}`);
}

let product1:ProductDeatails = ["Laptop", 50000, 2];
let product2:ProductDeatails = ["Smartphone", 20000, 5];
displayProductDetails(product1);
displayProductDetails(product2);