/*
 Sometimes we want to repeat an action multiple times,
For that in Js we use loops, we have various types of loops:
For loops, While loops, Do... While loops, For... in loops,
for... of loops. All these loops essentially do the same thing.
*/

// Basic "For" Loop - for(initialStatement; condition; incrementExpression)
// The loop below will log "Hello World" 5 times.
for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

// Second Example - we want to display odd numbers between 1 and 5
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// Reverse loop
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}
