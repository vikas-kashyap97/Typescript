1. Type Annotation

Type annotation is when you explicitly declare the type of a variable, function parameter, or return value. It’s like telling the compiler, “This variable will always be this type, trust me.”

2. BigInt

What it is:
A numeric type for integers larger than the safe limit of JavaScript’s regular number.
Use it when working with massive numbers (like IDs or cryptography).

3. Boolean

What it is:
A type with only two possible values: true or false. Useful for flags, conditions, and logic.

4. Any

The any type basically disables TypeScript’s type checking. It says: “Don’t check me, I know what I’m doing.” Dangerous, but sometimes useful when migrating code.

5. Unknown

unknown is like any, but safer. You can assign anything to it, but before using it, you must do a type check. Think of it as “I don’t know what this is yet, but I’ll verify later.”

6. Declaration, Invocation, Return Type

Declaration: Writing the function.
Invocation: Calling (using) the function.
Return type: The kind of value the function gives back.

7. Type Inference

Type inference is when TypeScript figures out the type for you, without you writing it explicitly. For example, let x = 5; automatically makes x a number.

8. Optional Parameters

An optional parameter may or may not be passed into a function. In code:

9. Default Parameters

A default parameter has a predefined value. If no argument is given, TypeScript uses the default.

10. Arrays

Arrays in TypeScript are collections of elements of a specific type. Example:

11. Array Operations & Iterations

You can iterate over arrays with loops or use array methods like forEach, map, filter, and reduce. TypeScript ensures the types are consistent.

12. Map & Filter

map: Transforms each element into something new.

filter: Returns only the elements that match a condition.
Both preserve type safety in TypeScript.

13. Objects & Type Alias

Objects represent structured data.
A type alias is a custom name you give to a type for reuse.

14. Call Signatures

Call signatures describe how functions should be called: the parameter types and return type.

15. Enums

Enums are sets of named constants. They make code more readable and less error-prone.

16. Tuples

Tuples are arrays with fixed lengths and specific types in each position.

17. Union and Intersection

Union (|): A type can be one of several. Example: string | number.

Intersection (&): A type must satisfy multiple types at once. Example: {name: string} & {age: number}.

18. Generics

Generics let you write reusable, type-safe code by parameterizing types.

19. Multiple Type Variables

Generics can take multiple variables for flexibility.

20. Interface

An interface defines the shape of an object. Unlike type aliases, interfaces can be extended.

21. TypeScript Compiler & Project Configuration

TypeScript compiles .ts files into .js.
tsc: The compiler command.
tsconfig.json: The project’s config file where you set compiler options, include/exclude files, strictness, etc.

