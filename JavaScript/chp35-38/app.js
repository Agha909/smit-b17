// Agha Abdul Raafay

//Q1
function dateTime() {
    var currentDT = new Date();
    console.log(currentDT);
}

dateTime();

//Q2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName);
}

greetUser("Agha", "Abdul Raafay");

//Q3
function add(num1, num2) {
    return num1 + num2;
}

var firstNum = +prompt("Enter first number:");
var secondNum = +prompt("Enter second number:");

var sum = add(firstNum, secondNum);

console.log("The sum of " + firstNum + " and " + secondNum + " is: " + sum);

//Q4
function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero";
        }
    } else {
        result = "Invalid operator";
    }

    return result;
}

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operator = prompt("Enter operator (+, -, *, /):");

var output = calculator(num1, num2, operator);

console.log("Result: " + output);

//Q5
function square(num) {
    return num * num;
}

var userNum = +prompt("Enter a number to square:");
var result = square(userNum);

console.log("The square of " + userNum + " is: " + result);

//Q6
function factorial(n) {
    var result = 1;
    if (n < 0) {
        return "Error: Factorial not defined for negative numbers.";
    }
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

var userNum = +prompt("Enter a number to find its factorial:");
var result = factorial(userNum);

console.log("Factorial of " + userNum + " is: " + result);

//Q7
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}

var startNum = +prompt("Enter the start number:");
var endNum = +prompt("Enter the end number:");

counting(startNum, endNum);

//Q8
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);

    var hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}

var base = +prompt("Enter the base of the triangle:");
var perpendicular = +prompt("Enter the perpendicular of the triangle:");

var result = calculateHypotenuse(base, perpendicular);
console.log("Hypotenuse of right-angled triangle: " + result);

//Q9
function area(width, height) {
    return width * height;
}

// i
var area1 = area(5, 10);
console.log("Area of rectangle (values): " + area1);

// ii 
var w = 7;
var h = 3;
var area2 = area(w, h);
console.log("Area of rectangle (variables): " + area2);

//Q10
function isPalindrome(str) {

    str = str.toLowerCase();

    var reversed = str.split("").reverse().join("");

    return str === reversed;
}

var userInput = prompt("Enter a word to check if it's a palindrome:");

if (isPalindrome(userInput)) {
    console.log(userInput + " is a palindrome.");
} else {
    console.log(userInput + " is NOT a palindrome.");
}

//Q11
function capitalizeWords(str) {
    
    var words = str.split(" ");
    var result = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }

    return result.join(" ");
}

var input = "the quick brown fox";
var output = capitalizeWords(input);

console.log("Example string: " + input);
console.log("Expected output: " + output);

//Q12
function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

var input = "Web Development Tutorial";
var output = findLongestWord(input);

console.log("Example string: " + input);
console.log("Expected output: " + output);


//Q13
function countOccurrences(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}

var inputString = "JSResourceS.com";
var inputLetter = "o";
var result = countOccurrences(inputString, inputLetter);

console.log("String: " + inputString);
console.log("Letter to count: " + inputLetter);
console.log("Number of occurrences: " + result);

//Q14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

var r = +prompt("Enter the radius of the circle:");

calcCircumference(r);
calcArea(r);
