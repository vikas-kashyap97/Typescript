var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(name, age, address, hobbies) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
    }
    // public method can still use private/protected fields internally
    Persons.prototype.introduce = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old and lives in ").concat(this.address, ". Their hobbies include ").concat(this.hobbies.join(", "));
    };
    // getter method to safely expose private field
    Persons.prototype.getAddress = function () {
        return this.address;
    };
    return Persons;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, address, hobbies, grade) {
        var _this = _super.call(this, name, age, address, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    // override introduce
    Students.prototype.introduce = function () {
        // ✅ can use `age` here because it's `protected`
        // ❌ can't use `address` directly because it's private in Persons
        return "".concat(this.name, " is ").concat(this.age, " years old, lives at [hidden], is in grade ").concat(this.grade, ", and enjoys ").concat(this.hobbies.join(", "), ".");
    };
    return Students;
}(Persons));
var person1 = new Persons("Vikas", 12, "Hardoi", ["Cricket", "Coding"]);
var person2 = new Persons("Neha", 10, "Sitapur", ["Reading", "Writing"]);
var student1 = new Students("Rawat", 10, "Sitapur", ["Reading", "Writing"], 9);
// ❌ ERROR: Property 'address' is private and only accessible within class 'Persons'.
// console.log(person1.address);
// console.log(student1.address);
// ✅ Correct way: use getter
console.log(person1.getAddress());
console.log(student1.introduce());
