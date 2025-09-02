class Persons {
    name: string;
    age: number;
    address: string;
    hobbies: string[];

    constructor(name: string, age: number, address: string, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
    }

    introduce(): string {
        return `${this.name} is ${this.age} years old and lives in ${this.address}. Their hobbies include ${this.hobbies.join(", ")}`;
    }
}

class Students extends Persons {
    grade: number;

    constructor(name: string, age: number, address: string, hobbies: string[], grade: number) {
        super(name, age, address, hobbies);
        this.grade = grade;
    }

    introduce(): string {
        return `${super.introduce()} and in grade ${this.grade}.`;
    }
}

const person1 = new Persons("Vikas", 12, "Hardoi", ["Cricket", "Coding"]);
const person2 = new Persons("Neha", 10, "Sitapur", ["Reading", "Writing"]);
const student1 = new Students("Rawat", 10, "Sitapur", ["Reading", "Writing"], 9);

// console.log(person1.introduce());
// console.log(person2.introduce());
console.log(student1.introduce());
