// Web Dev Simplified - Learn Switch Statements In 7 Minutes

const favoriteAnimal = "cat";

if (favoriteAnimal === "cat") {
  console.log("Cats are great");
} else if (favoriteAnimal === "dog") {
  console.log("Dogs are kinda loud");
} else if (favoriteAnimal === "shark") {
  console.log("That's an interesting choice");
} else {
  console.log("I have never heard of that Animal");
}

switch (favoriteAnimal) {
  case "cat": {
    console.log("Cat");
    break;
  }
  case "dog": {
    console.log("Dog");
    break;
  }
  case "shark": {
    console.log("Shark");
    break;
  }
  default:
    console.log("i have never heard of that animal ");
}
