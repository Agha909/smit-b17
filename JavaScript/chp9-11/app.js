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
var gender = prompt("Enter your gender:");

if (gender !== null) {
    if (gender === "male") {
        alert("Good Morning Sir");
    } else if (gender === "female") {
        alert("Good Morning Maam");
    } else {
        alert("Please enter 'male' or 'female'.");
    }
} else {
    alert("No gender entered");
}

//Q3
var signalColor = prompt("Enter the color of the traffic signal:");

if (signalColor !== null) {
    if (signalColor === "red") {
        alert("On your marks");
    } else if (signalColor === "yellow") {
        alert("Get set");
    } else if (signalColor === "green") {
        alert("GO GO GO!");
    } else {
        alert("Please enter Red, Yellow, or Green.");
    }
} else {
    alert("No color entered");
}

//Q4
var fuel = prompt("Enter remaining fuel in litres:");

if (fuel !== null) {
        if (fuel < 0.25) {
            alert("Petrol bharwa le gareeb");
        } else {
            alert("Tanki full ha ustaad");
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
var subject1 = +prompt("Enter marks obtained in Subject 1:");
var subject2 = +prompt("Enter marks obtained in Subject 2:");
var subject3 = +prompt("Enter marks obtained in Subject 3:");
var totalMarks = +prompt("Enter total marks:");


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
    grade = "Suplee";
    remarks = "Agli bar suplee clear krlena";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

//Q7
var secretNumber = 7; 
var guess = +prompt("Guess the secret number (between 1 and 10):");

if (!isNaN(guess)) {
    if (guess === secretNumber) {
        alert("Bingo!");
    } else if (guess + 1 === secretNumber) {
        alert("Qareeb ho");
    } else {
        alert("Galat");
    }
} else {
    alert("Please enter a number.");
}

//Q8
var number = +prompt("Enter a number:");

if (!isNaN(number)) {
    if (number % 3 === 0) {
        alert("The number is divisible by 3");
    } else {
        alert("The number is not divisible by 3");
    }
} else {
    alert("Please enter a valid number.");
}

//Q9
var number = +prompt("Enter a number:");

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert("The number is even");
    } else {
        alert("The number is odd");
    }
} else {
    alert("Please enter a valid number.");
}

//Q10
var temperature = parseFloat(prompt("Enter the temperature in °C:"));

if (!isNaN(temperature)) {
    if (temperature > 40) {
        alert("Luh chal rahi ha.");
    } else if (temperature > 30) {
        alert("Garmi ha.");
    } else if (temperature > 20) {
        alert("Mosam acha ha.");
    } else if (temperature > 10) {
        alert("Thand ha.");
    } else {
        alert("Baraf parh rahi ha.");
    }
} else {
    alert("Please enter a number.");
}

//Q11
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
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
        alert("Please enter +, -, *, /, or %.");
    }
} else {
    alert("Please enter valid numbers.");
}

