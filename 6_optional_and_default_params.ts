
// Default Parameters

const greet = (name:string, id:number = 1):string => {
    return `Hello ${name}, Your ID is ${id}`;
}

console.log(greet("Vikas"));



//  OPtional Parameters

const greet2 = (name: string, age?: number) => {
  if (age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}!`);
  }
}

greet2 ("Vikas");           
greet2 ("Vikas", 25);      
