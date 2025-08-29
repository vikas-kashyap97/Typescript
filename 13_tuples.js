var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDrivingLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driving License: ").concat(hasDrivingLicense ? "Yes" : "No"));
};
var person1 = ["Vikas", 23, true];
var person2 = ["Neha", 21, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
var displayProductDetails = function (product) {
    var productName = product[0], price = product[1], quantity = product[2];
    console.log("Product Name: ".concat(productName, ", Price: ").concat(price, ", Quantity: ").concat(quantity));
};
var product1 = ["Laptop", 50000, 2];
var product2 = ["Smartphone", 20000, 5];
displayProductDetails(product1);
displayProductDetails(product2);
