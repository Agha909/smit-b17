// // Agha Abdul Raafay

// //CHP 26-30

// //Q1
// var number = +prompt("Enter a positive integer:");

// console.log("Number: " + number);
// console.log("Round off value: " + Math.round(number));
// console.log("Floor value: " + Math.floor(number));
// console.log("Ceil value: " + Math.ceil(number));

// //Q2
// var number = +prompt("Enter a negative floating point number:");

// console.log("Number: " + number);
// console.log("Round off value: " + Math.round(number));
// console.log("Floor value: " + Math.floor(number));
// console.log("Ceil value: " + Math.ceil(number));

// //Q3
// var number = +prompt("Enter a number:");

// console.log("The absolute value of " + number + " is " + Math.abs(number));

// //Q4
// var dice = Math.floor(Math.random() * 6) + 1;

// console.log("Dice value: " + dice);

// //Q5
// var toss = Math.floor(Math.random() * 2); 

// if (toss === 0) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }

// //Q6
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log("Random number between 1 and 100: " + randomNumber);

// //Q7
// var weightInput = prompt("Enter your weight:");

// var weight = parseFloat(weightInput);

// console.log("Your weight is: " + weight + " kilograms");

//Q8
var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = +prompt("Guess a number between 1 and 10:");

if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the secret number " + secretNumber);
} else {
    console.log("Sorry, the secret number was " + secretNumber);
}
