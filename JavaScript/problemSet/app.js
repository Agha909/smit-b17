//challenge 1

let firstName;
let lastName;

firstName = "Agha Abdul Raafay";
lastName = "Muhammad";

let address = "main street";

address = "first street";

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Address:", address);

//challenge 2
let country = "Pakistan";
let street = "First Street";

let fullMailingAddress = street + ", " + address + ", " + country;

console.log("Full Mailing Address:", fullMailingAddress);

//challenge 3
let score1 = 56;
let score2 = 78;
let score3 = 90;

let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;
console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore);

//challenge 3 part 2
let plates = 20;
let people = 7;

let remainingPlates = plates % people;
remainingPlates += 1;

let message = "There are " + remainingPlates + " plates available.";
console.log(message);

//challenge 4
let fruits = ["apple", "banana", "orange",23];
console.log("Fruits Array:", fruits);

let firstFruit = fruits[0];
fruits[fruits.length - 1] = "grape";

console.log("First Fruit:", firstFruit);
console.log("Updated Fruits Array:", fruits);


