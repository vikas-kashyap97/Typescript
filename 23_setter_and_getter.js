var Persons = /** @class */ (function () {
    function Persons(name, // accessible everywhere
    hobbies // class + subclasses
    ) {
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Persons.prototype, "age", {
        // getter with safety check
        get: function () {
            if (this._age === undefined) {
                throw new Error("Age is not set");
            }
            return this._age;
        },
        // setter with validation
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("Invalid age");
            }
            this._age = age; // ✅ use backing field
        },
        enumerable: false,
        configurable: true
    });
    // method
    Persons.prototype.introduceParent = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old. Their hobbies include ").concat(this.hobbies.join(", "));
    };
    return Persons;
}());
// create persons
var person1 = new Persons("Vikas", ["Cricket", "Coding"]);
person1.age = 15; // ✅ set age via setter
var person2 = new Persons("Neha", ["Reading", "Writing"]);
person2.age = 10; // ✅ set age via setter
// output
// console.log(person1.introduceParent());
console.log(person2.introduceParent());
