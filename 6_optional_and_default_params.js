// Default Parameters
var greet = function (name, id) {
    if (id === void 0) { id = 1; }
    return "Hello ".concat(name, ", Your ID is ").concat(id);
};
console.log(greet("Vikas"));
//  OPtional Parameters
var greet2 = function (name, age) {
    if (age) {
        console.log("Hello ".concat(name, ", you are ").concat(age, " years old."));
    }
    else {
        console.log("Hello ".concat(name, "!"));
    }
};
greet2("Vikas");
greet2("Vikas", 25);
