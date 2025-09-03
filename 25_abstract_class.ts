
//  Circle
abstract class CircleShape {
    constructor(protected color: string) {}

    abstract calculateArea(): number; 
    abstract displayArea: () =>  void; 
}

class Circle extends CircleShape {
    constructor(color: string, protected radius: number) {
        super(color);
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    displayArea = () => {
        console.log(`Circle Area: ${this.calculateArea()} and Color is ${this.color}`);
    }
}
const circle = new Circle("Red", 5);
console.log(circle.calculateArea());
console.log(circle.displayArea());



// Square
abstract class SquareShape {
    constructor(protected color: string) {}

    abstract calculateArea(): number; 
    abstract displayArea: () =>  void; 
}

class Square extends SquareShape {
    constructor(color: string, protected sideLength: number) {
        super(color);
    }

    public calculateArea(): number {
        return this.sideLength * this.sideLength;
    }

    displayArea = () => {
        console.log(`Square Area: ${this.calculateArea()} and Color is ${this.color}`);
    }
}

const square = new Square("Blue", 4);
console.log(square.calculateArea());
console.log(square.displayArea());