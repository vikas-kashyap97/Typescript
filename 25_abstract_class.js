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
//  Circle
var CircleShape = /** @class */ (function () {
    function CircleShape(color) {
        this.color = color;
    }
    return CircleShape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        _this.displayArea = function () {
            console.log("Circle Area: ".concat(_this.calculateArea(), " and Color is ").concat(_this.color));
        };
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(CircleShape));
var circle = new Circle("Red", 5);
console.log(circle.calculateArea());
console.log(circle.displayArea());
// Square
var SquareShape = /** @class */ (function () {
    function SquareShape(color) {
        this.color = color;
    }
    return SquareShape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, sideLength) {
        var _this = _super.call(this, color) || this;
        _this.sideLength = sideLength;
        _this.displayArea = function () {
            console.log("Square Area: ".concat(_this.calculateArea(), " and Color is ").concat(_this.color));
        };
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return this.sideLength * this.sideLength;
    };
    return Square;
}(SquareShape));
var square = new Square("Blue", 4);
console.log(square.calculateArea());
console.log(square.displayArea());
