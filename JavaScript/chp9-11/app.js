// Agha Abdul Raafay
//chp9-11

//Q1
var city = prompt("Enter city name:");

if (city !== null) {
    if (city === "karachi") {
        alert("Welcome to city of lights");
    } else {
        alert("Welcome to " + city);
    }
} else {
    alert("No city entered");
}

//Q2
var gender = prompt("Enter your gender (male/female):");

if (gender !== null) {
    if (gender === "male") {
        alert("Good Morning Sir");
    } else if (gender === "female") {
        alert("Good Morning Maam");
    } else {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
} else {
    alert("No gender entered");
}

//Q3
var signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

if (signalColor !== null) {
    if (signalColor === "red") {
        alert("Must Stop");
    } else if (signalColor === "yellow") {
        alert("Ready to move");
    } else if (signalColor === "green") {
        alert("Move now");
    } else {
        alert("Invalid color. Please enter Red, Yellow, or Green.");
    }
} else {
    alert("No color entered");
}

//Q4
var fuel = prompt("Enter remaining fuel in litres:");

if (fuel !== null) {
        if (fuel < 0.25) {
            alert("Please refill the fuel in your car");
        } else {
            alert("You have enough fuel");
        }
    } else {
    alert("No input entered");
}

//Q5
//part a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//part b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//part c
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//part d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//part e
if (true){
alert("True");
}
if (false){
alert("False");
}
//part f
if("car" < "cat"){
alert("car is smaller than cat");
}


//Q6
var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));


var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

//Q7
var secretNumber = 7; 
var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (!isNaN(guess)) {
    if (guess === secretNumber) {
        alert("Bingo! Correct answer");
    } else if (guess + 1 === secretNumber) {
        alert("Close enough to the correct answer");
    } else {
        alert("Wrong guess. Try again!");
    }
} else {
    alert("Invalid input. Please enter a number.");
}

//Q8
var number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
    if (number % 3 === 0) {
        alert("The number is divisible by 3");
    } else {
        alert("The number is not divisible by 3");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}

//Q9
var number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert("The number is even");
    } else {
        alert("The number is odd");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}

//Q10
var temperature = parseFloat(prompt("Enter the temperature in °C:"));

if (!isNaN(temperature)) {
    if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } else if (temperature > 20) {
        alert("Todays Weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Todays weather is so Cool.");
    } else {
        alert("It's very cold today.");
    }
} else {
    alert("Invalid input. Please enter a number.");
}

//Q11
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");

if (!isNaN(num1) && !isNaN(num2) && operation !== null) {
    var result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Error: Division by zero");
        }
    } else if (operation === "%") {
        if (num2 !== 0) {
            result = num1 % num2;
        } else {
            alert("Error: Division by zero");
        }
    } else {
        alert("Invalid operation. Please enter +, -, *, /, or %.");
    }
} else {
    alert("Invalid input. Please enter valid numbers.");
}

