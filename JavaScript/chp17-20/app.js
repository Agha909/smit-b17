//Agha Abdul Raafay

//chp17-20

//Q1
var multiArray = [[], [], []];

//Q2

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

document.write("<h3>Matrix:</h3>");
document.write(matrix[0] + "<br>");
document.write(matrix[1] + "<br>");
document.write(matrix[2] + "<br>");

//Q3
for(var i=1;i<=10;i++){
    console.log(i);
}

//Q4
var tableNo = +prompt("Enter the table number");
var tableLen = +prompt("Enter the table length");

for(var i=1;i<=tableLen;i++){
    console.log(tableNo + " X " + i + " = " + (i*tableNo));
}

//Q5
var fruits = ["apple", "banana", "mango", "orange",
"strawberry"]

for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
for(var i=0;i<fruits.length;i++){
    console.log("Element at index "+i+" is " + fruits[i]);
}

//Q6
// a. Counting
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
    document.write(i +  ", ");
}

// b. Reverse counting
document.write("<h3>Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// c. Even
document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

// d. Odd
document.write("<h3>Odd:</h3>");
for (var i = 1; i < 20; i += 2) {
    document.write(i + ", ");
}

// e. Series (with k)
document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k" + ", ");
}

//Q7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

userInput = userInput.toLowerCase();

var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        document.write(userInput + " is available at index " + i + " in our bakery.");
        break;
    }
}

if (!found) {
    document.write("We are sorry, " + userInput + " is not available in our bakery.");
}

//Q8
var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The largest number is " + largest);

//Q9
var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The smallest number is " + smallest);

//Q10
document.write("<h3>Multiples of 5 (1 to 100):</h3>");

for (var i = 5; i <= 100; i += 5) {
    document.write(i +", ");
}
