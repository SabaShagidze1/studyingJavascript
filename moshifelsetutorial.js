// Hour
// If hour is between 6pm and 12pm: Good Morning!
// If it is betweeen 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

if (condition) {
  statement;
} else if (anotherCondition) {
  statement;
} else if (yetAnotherCondition) {
  statement;
} else statement;

let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else console.log("Good Evening");
