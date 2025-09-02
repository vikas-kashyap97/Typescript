class Persons {
    name: string = "Vikas";
    age: number = 12;
    address: string = "Hardoi";
    hobbies: string[] = ["Cricket", "Coding"];

    constructor(name:string, age:number,address:string, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;

    }
}

const person1 = new Persons("Vikas", 12, "Hardoi", ["Cricket", "Coding"]);
const person2 = new Persons("Neha", 10, "Sitapur", ["Reading", "Writing"]);
console.log(person1);
console.log(person2);

