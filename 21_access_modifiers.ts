class Persons {
    public name: string;        // can be accessed everywhere
    protected age: number;      // only inside Persons and subclasses
    private address: string;    // only inside Persons
    public hobbies: string[];   // accessible everywhere

    constructor(name: string, age: number, address: string, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
    }

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
    public grade: number;

    constructor(name: string, age: number, address: string, hobbies: string[], grade: number) {
        super(name, age, address, hobbies);
        this.grade = grade;
    }

    // override introduce
    public introduce(): string {
        // ✅ can use `age` here because it's `protected`
        // ❌ can't use `address` directly because it's private in Persons
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
