var fruits = ["Apple", "Banana", "Orange", "Mango"];
var newUpdatedFruits = fruits.push("Kiwi");
console.log(newUpdatedFruits);
console.log(fruits);
var removedFruits = fruits.pop();
console.log(removedFruits);
console.log(fruits);
// Iteration in Array
// for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for...of loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// forEach loop
fruits.forEach(function (curVal) {
    console.log(curVal);
});
