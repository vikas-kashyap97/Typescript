var Persons = /** @class */ (function () {
    function Persons(name, age, address, hobbies) {
        this.name = "Vikas";
        this.age = 12;
        this.address = "Hardoi";
        this.hobbies = ["Cricket", "Coding"];
        this.name = name;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var person1 = new Persons("Vikas", 12, "Hardoi", ["Cricket", "Coding"]);
var person2 = new Persons("Neha", 10, "Sitapur", ["Reading", "Writing"]);
console.log(person1);
console.log(person2);
