1. Type annotation

Type annotation is the practice of explicitly declaring the type of a variable, function parameter, or return value. It’s essentially you telling the compiler, “Hey, this thing should always be of this type.”

2. BigInt

What it is:
A special numeric type that can represent very large integers beyond the safe limit of JavaScript’s regular number type.

3. boolean

What it is:
A type that can only take two possible values: true or false.

4. any

The any type disables TypeScript’s type checking for that variable. It’s basically saying: “Hey TypeScript, don’t bother me, I’ll take care of this myself.”

5. unknown

The unknown type is like any but safer. It means: “This could be anything, but before you use it, you have to prove what it is.”

Declaration = writing the function.
Invocation = using (calling) the function.
Return type = what kind of value the function gives back.

5. Type Inference

Type inference in TypeScript is when the compiler automatically figures out the type of a variable, parameter, or return value without you explicitly writing it down.