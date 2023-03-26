// Functions are one of the fundamental building blocks in Js, a Function is
// a set of statements that performs a task or calculates a value
// basic example - we declare a function with the keyword "function"
// than give it a name, for example "greet()", and than add "{}" - whatever is
// inside of the "{}" is reffered to as the body of the function.
function greet() {
  console.log("Hello World");
}

greet();

// Functions can have inputs, these inputs change how to function behaves,
// for example, instead of "Hello World", we want to display the name of the person
// For example "Hello John"
function greet(name) {
  console.log("Hello " + name);
}

greet("John");
greet("Mary");

// A function can have multiple parameters, we seperate parameters using a comma (,)
function greet(name, lastName) {
  console.log("hello " + name + " " + lastName);
}

greet("John", "Wick");
