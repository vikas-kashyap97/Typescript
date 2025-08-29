var student1 = {
    name: "Vikas Kashyap",
    age: 23,
    gender: "Male",
    greet: function (country) {
        return "Hello, My name is ".concat(student1.name, ". I am ").concat(student1.age, " years old and my gender is ").concat(student1.gender, ". I am from ").concat(country, ".");
    }
};
var student2 = {
    name: "Neha Rawat",
    age: 21,
    gender: "Female",
    greet: function (country) {
        return "Hello, My name is ".concat(student2.name, ". I am ").concat(student2.age, " years old and my gender is ").concat(student2.gender, ". I am from ").concat(country, ".");
    }
};
var introduction = function (student1) {
    console.log("Hello, My name is ".concat(student1.name, ". I am ").concat(student1.age, " years old and my gender is ").concat(student1.gender, "."));
    console.log(student1.greet("India"));
};
// introduction(student1);
console.log(student1.greet("India"));
console.log(student2.greet("India"));
