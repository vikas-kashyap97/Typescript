class Persons {
    private _age: number | undefined;

    constructor(
        public name: string,          // accessible everywhere
        protected hobbies: string[]   // class + subclasses
    ) {}

    // setter with validation
    public set age(age: number) {
        if (age > 150 || age < 0) {
            throw new Error("Invalid age");
        }
        this._age = age; // ✅ use backing field
    }

    // getter with safety check
    public get age(): number {
        if (this._age === undefined) {
            throw new Error("Age is not set");
        }
        return this._age;
    }

    // method
    public introduceParent(): string {
        return `${this.name} is ${this.age} years old. Their hobbies include ${this.hobbies.join(", ")}`;
    }
}

// create persons
const person1 = new Persons("Vikas", ["Cricket", "Coding"]);
person1.age = 15;   // ✅ set age via setter

const person2 = new Persons("Neha", ["Reading", "Writing"]);
person2.age = 10;   // ✅ set age via setter

// output
// console.log(person1.introduceParent());
console.log(person2.introduceParent());
