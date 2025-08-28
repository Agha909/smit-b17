//Agha Abdul Raafay
//chp12-13

//Q1
var char = prompt("Enter a single character:");

if (char !== null && char.length === 1) {
    var ascii = char.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57) {
        alert("The input is a number.");
    } else if (ascii >= 65 && ascii <= 90) {
        alert("The input is an uppercase letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        alert("The input is a lowercase letter.");
    } else {
        alert("The input is neither a number nor a letter.");
    }
} else {
    alert("Please enter exactly one character.");
}

//Q2
var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
        alert("The larger number is: " + num1);
    } else if (num2 > num1) {
        alert("The larger number is: " + num2);
    } else {
        alert("Both numbers are equal: " + num1);
    }
} else {
    alert("Please enter integers only.");
}

//Q3
var number = +prompt("Enter a number:");

if (!isNaN(number)) {
    if (number > 0) {
        alert("The number is positive.");
    } else if (number < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
} else {
    alert("Please enter a valid number.");
}

//Q4
var char = prompt("Enter a single character:");

if (char !== null && char.length === 1) {
    var lowerChar = char.toLowerCase();

    if (lowerChar === "a" || lowerChar === "e" || lowerChar === "i" || lowerChar === "o" || lowerChar === "u") {
        alert("true");
    } else {
        alert("false"); 
    }
} else {
    alert("Please enter exactly one character.");
}

//Q5
var correctPassword = "smitb17"; 
var userPassword = prompt("Enter your password:");

if (userPassword === null || userPassword === "") {
    alert("Please enter your password");
} else {
    if (userPassword === correctPassword) {
        alert("Correct!");
    } else {
        alert("Incorrect password");
    }
}

//Q6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);

//Q7
var time = +prompt("Enter time in 24-hour format (e.g. 1900 for 7 PM):");

if (!isNaN(time) && time >= 0 && time <= 2359) {
    if (time >= 0 && time < 1200) {
        alert("Good Morning!");
    } else if (time >= 1200 && time < 1700) {
        alert("Good Afternoon!");
    } else if (time >= 1700 && time < 2100) {
        alert("Good Evening!");
    } else if (time >= 2100 && time <= 2359) {
        alert("Good Night!");
    }
} else {
    alert("Please enter a valid time between 0000 and 2359.");
}



