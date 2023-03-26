// Functions, Conditionals and Loops
// Basic conditional statement:
if ("some string" === "another string") {
  console.log("the strings are equal");
} else {
  console.log("the strings are not equal");
}

// The basic conditional consists of: if(){}else;
// Some examples
const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber; //true

// example 1
if (jsExpression) {
  console.log("this expression is true");
}

// example 2
if (jsExpression) {
  console.log("this expression is true");
} else {
  console.log("this expression is false");
}

// example 3
if (jsExpression) {
  console.log("the expression is true");
} else if (firstNumber > 0) {
  console.log("the expression is false and the firstNumber is greater than 0");
} else {
  console.log("expression false, and firstNumber 0 or less");
}

// switch case statement - appropriate when there
// are a lot of conditions you're testing, example:

// array - indexing always starts from 0
const colors = ["orange", "green", "yellow", "purple", "blue"];
// Gets a random number between 0 and 4 and stores in a variable
const randomIndex = Math.floor(Math.random() * colors.length);
// remember to get a value from an array, we use bracket notation
// for example, to get "green", we use 'colors[1]'
// since randomIndex will be a random number between 0-4, we can
// pass this in as our index to retrieve a random color from the array
const randomColor = colors[randomIndex];
// conditional
if (randomColor === "orange") {
  console.log("the color is orange");
} else if (randomColor === "green") {
  console.log("the color is green");
} else if (randomColor === "yellow") {
  console.log("the color is yellow");
} else if (randomColor === "purple") {
  console.log("the color is purple");
} else if (randomColor === "blue") {
  console.log("the color is blue");
} else {
  console.log("no color found");
}
//same conditional in a switch case statement
switch (randomColor) {
  case "orange":
    console.log("the color is orange");
    break;
  case "green":
    console.log("the color is green");
    break;
  case "yellow":
    console.log("the color is yellow");
    break;
  case "purple":
    console.log("the color is purple");
    break;
  case "blue":
    console.log("the color is blue");
    break;
  default:
    console.log("no color found");
}

// Loops
const blogPosts = [
  {
    title: "what is javascript?",
    author: "Zach Gollwitzer",
    publishDate: "Dec 20, 2020",
    content: "some post content here",
  },
  {
    title: "how do arrays work?",
    author: "Zach Gollwitzer",
    publishDate: "Jan 1, 2021",
    content: "some post content here",
  },
  {
    title: "how long does it take to learn coding?",
    author: "Zach Gollwitzer",
    publishDate: "Jan 20, 2021",
    content: "some post content here",
  },
];

for (let i = 0; i < blogPosts.length; i++) {
  const postTitle = blogPosts[i].title;
  const postAuthor = blogPosts[i].author;
  const postDate = blogPosts[i].date;
  const postContent = blogPosts[i].content;

  //   Here, we would use these variables to do something with each post
  // i'll just print the values
  console.log(postTitle);
  console.log(postAuthor);
  console.log(postDate);
  console.log(postContent);
}

// Basic Js Loop
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// example
const arr = ["one", "two", "three", "four", "five", 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    console.log(arr[i]);
  }
}

// Functions
// basic function example, with functions we first declare them
// and execute them later.
function myFunction() {
  console.log("hello world, this is my first function");
}
myFunction();
// there is a way to declare and execute a function in one step
// it is rarely used, called immediately invoked functions.

function anotherFunction() {

}  