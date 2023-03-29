// Challenge 1
// 1. Create a boolean variable called "myBoolean" and set it to true.
const myBoolean = true;
// 2. Create a string variable called "myString" and set it to "Hello World"
const myString = "hello world";
// 3. Create a number variable called "firstNumber" and set it equal to '20'
const firstNumber = 20;
// 4. Create another number variable called "secondNumber" and set it equal to "40"
let secondNumber = 40;
// Re-assign "secondNumber" and set it equal to 80
secondNumber = 80;
// 5. Create an array called "myArray" and put "myBoolean" at index 0, and "myString" at index 1
let myArray = [myBoolean, myString];
// 6. Create an object called "myObject" and assign "myArray" to a property called "firstProperty",
// and sum of "firstNumber" and "secondNumber" to a property called "sumProperty"
let myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber,
};
// 7. Print "myObject" to the console
console.log(myObject);
// 8. print the "sumProperty" of "myObject" to the console
console.log(myObject.sumProperty);
// 9. print the value at index 1 of "firstProperty"
console.log(myObject.firstProperty[1]);

// Challenge 2
/*
There are three things wrong with this code.
Find them and explain why they are wrong
*/
let someNumber = 20;
someNumber = 50;
// it needs to be someNumber, we can't redeclare a const variable so we should use "let",
// and it's missing a semi-colon

// Challenge 3
/*
What does "resultVariable" equal? what data type is it?
*/
const variable1 = 20;
const variable2 = "40";
const resultVariable = variable1 + variable2;
console.log(resultVariable);
console.log(typeof resultVariable);
// result variable is 2040 and it is a string

// Challenge 4
/*
Why is this code invalid? edit this until it is valid
*/
const objectVariable = {
  property1: "I am property 1",
  property2: "I am property 2",
  property3: [20, 30, 40],
};
console.log(objectVariable.property3[2]);
// in objects we seperate properties with a comma, not a semi-colon

// Challenge 5
/*
Why does this code not work? edit until it works
*/
const numberArray = [20, 30, 40];
console.log(numberArray[2]);
// there is no element by the index of "3" in numberArray, array indexing starts with 0
