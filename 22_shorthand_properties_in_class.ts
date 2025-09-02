class Persons {
    constructor(
        public name: string,          // accessible everywhere
        protected age: number,        // only inside class + subclasses
        private address: string,      // only inside Persons
        protected hobbies: string[]   // class + subclasses
    ) {}

    // public method can still use private/protected fields internally
    public introduce(): string {
        return `${this.name} is ${this.age} years old and lives in ${this.address}. Their hobbies include ${this.hobbies.join(", ")}`;
    }

    // getter method to safely expose private field
    public getAddress(): string {
        return this.address;
    }
}

class Students extends Persons {
    constructor(
        name: string,
        age: number,
        address: string,
        hobbies: string[],
        public grade: number           // declared directly
    ) {
        super(name, age, address, hobbies);
    }

    // override introduce
    public introduce(): string {
        // ✅ can use `age` (protected)
        // ❌ cannot use `address` (private in Persons)
        return `${this.name} is ${this.age} years old, lives at [hidden], is in grade ${this.grade}, and enjoys ${this.hobbies.join(", ")}.`;
    }
}

const person1 = new Persons("Vikas", 12, "Hardoi", ["Cricket", "Coding"]);
const person2 = new Persons("Neha", 10, "Sitapur", ["Reading", "Writing"]);
const student1 = new Students("Rawat", 10, "Sitapur", ["Reading", "Writing"], 9);

// ❌ ERROR: Property 'address' is private and only accessible within class 'Persons'.
// console.log(person1.address);
// console.log(student1.address);

// ✅ Correct way: use getter
console.log(person1.getAddress());
console.log(student1.introduce());
