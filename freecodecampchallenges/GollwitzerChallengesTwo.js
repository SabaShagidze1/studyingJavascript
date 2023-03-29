/*
Challenge #1
Why doesn't this code work? try to make it work and
guess what the result will be

Answer: We cant change a constant variable, it needs to be "let",
++ means +1 so the answer will be 3
*/
let numberVariable = 0;
numberVariable++;
numberVariable++;
numberVariable++;
console.log(numberVariable);

/*
Challenge #2
do the following two blocks of code result in the same answer?
if not, which one would you recommend using and why?

Answer: they do not result in the same answer, the first code block
will result in false because "===" operator checks if the types are the same too,
so firstNumber is a number type and second is a string, the answer is false, the 
"==" operator on the other hand does not check the type so here a number 20 and a
string 20 are equal, answer is true.
*/
// Snippet 1
const firstNumber = 20;
const secondNumber = "20";
const result = firstNumber === secondNumber;
console.log(result);
// Snippet 2
const firstNumber2 = 20;
const secondNumber2 = "20";
const result2 = firstNumber2 == secondNumber2;
console.log(result2);

/*
Challenge #3
What does "Expression5" evaluate to? How could you write this in a single line of code
(for exercise purposes only; you would never want to combine all this in one line)
*/
const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

const expressionFinal = !(100 % 50 < 100 / 50 && 300 + 5 === 305);
console.log(expressionFinal);

/*
Challenge #4
What does "result" evaluate to? you might want to review the previous lesson for this one.
Answer: True
*/
const myObj = {
  prop1: "first value",
  prop2: 20,
};
const myArray = [40, 50, 2];
const resultCh4 = myObj.prop2 === myArray[0] / myArray[2];
console.log(resultCh4);

/*
Challenge #5
What does "result evaluate to?"
Answer: True 
*/
const myObj2 = {
  nestedObject1: {
    price: 100,
    quantity: 5,
  },
  nestedObject2: {
    price: 150,
    quantity: 2,
  },
};
const myArray2 = [myObj2.nestedObject1, myObj2.nestedObject2];
const resultCh5 =
  myArray2[0].price * myArray2[0].quantity >
  myArray2[1].price * myArray2[1].quantity;
console.log(resultCh5);
