const fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];

const newUpdatedFruits = fruits.push("Kiwi");

console.log(newUpdatedFruits);
console.log(fruits);

const removedFruits = fruits.pop();
console.log(removedFruits);
console.log(fruits);


// Iteration in Array

// for loop
for (let i = 0; i< fruits.length; i++) {
  console.log(fruits[i]);
    }

// for...of loop
for (const fruit of fruits) {
    console.log(fruit);
    
}

// forEach loop
fruits.forEach((curVal) => {
    console.log(curVal);
    
});

