//Agha Abdul Raafay

//Chp 14-16 Arrays

//Q1
var studentNames = [];

//Q2
var studentNames = new Array();

//Q3
var stringsArray = ["Eren", "Chinatsu", "Mikasa", "Hina"];

//Q4
var numbersArray = [10, 20, 30, 40, 50];

//Q5
var booleanArray = [true, false, true, false];

//Q6
var mixedArray = ["Geto", 25, true, null, "Student"];

//Q7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualifications in Pakistan:</h2>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");

//Q8
var studentNames = ["Azif", "Hassam", "Agha"];

var studentScores = [320, 450, 370];

var totalMarks = 500;

document.write("<h2>Students Scores & Percentages</h2>");

document.write("Score of " + studentNames[0] + " is " + studentScores[0] +
    ". Percentage: " + (studentScores[0] / totalMarks * 100) + "%<br>");

document.write("Score of " + studentNames[1] + " is " + studentScores[1] +
    ". Percentage: " + (studentScores[1] / totalMarks * 100) + "%<br>");

document.write("Score of " + studentNames[2] + " is " + studentScores[2] +
    ". Percentage: " + (studentScores[2] / totalMarks * 100) + "%<br>");

//Q9
var colorNames = ["Gold", "Aqua", "Yellow"];

//part a
var color = prompt("Enter the color you want to add at the beginning");
colorNames.unshift(color);
console.log("Updated array: ", colorNames)

//part b
var color = prompt("Enter the color you want to add at the end");
colorNames.push(color);
console.log("Updated array: ", colorNames)

//part c
var color = prompt("Enter the color you want to add at the beginning");
colorNames.unshift(color);
var color = prompt("Enter the color you want to add at the beginning");
colorNames.unshift(color);
console.log("Updated array: ", colorNames)

//part d
colorNames.shift();
console.log("Updated array: ", colorNames)

//part e
colorNames.pop();
console.log("Updated array: ", colorNames)

//part f
var pos = prompt("Enter the position you want to add the color on");
var color = prompt("Enter the color you want to add");
colorNames[pos] = color;
console.log("Updated array: ", colorNames) 

//part g
var pos = +prompt("Enter the position you want to delete the color from");
var count = +prompt("Enter how many colors to delete");
colorNames.splice(pos,count);
console.log("Updated array: ", colorNames) 

//Q10
var scores = [320, 230, 480, 120];

document.write("<h3>Original Scores:</h3>" + scores.join(", ") + "<br><br>");
scores.sort();

document.write("<h3>Sorted Scores (Ascending - Default Sort):</h3>" + scores.join(", "));

//Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(1, 4); 

document.write("<h3>Cities List:</h3>" + cities.join(", ") + "<br><br>");
document.write("<h3>Selected Cities:</h3>" + selectedCities.join(", "));

//Q12
var arr = ["This ", " is ", " my ", " cat"];

var singleString = arr.join("");

document.write("<h3>Array:</h3>" + arr + "<br><br>");
document.write("<h3>String:</h3>" + singleString);

//Q13
var queue = [];

queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.write("<h3>Devices (Stored Order):</h3>" + queue.join(", ") + "<br><br>");

document.write("<h3>FIFO Output:</h3>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>"); 
document.write(queue.shift() + "<br>"); 

//Q14
var queue = [];

queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.write("<h3>Devices (Stored Order):</h3>" + queue.join(", ") + "<br><br>");

document.write("<h3>LIFO Output:</h3>");
document.write(queue.pop() + "<br>");
document.write(queue.pop() + "<br>");
document.write(queue.pop() + "<br>"); 
document.write(queue.pop() + "<br>"); 

//Q15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Select a Phone Manufacturer:</h3>");
document.write("<select>");

document.write("<option>" + manufacturers[0] + "</option>");
document.write("<option>" + manufacturers[1] + "</option>");
document.write("<option>" + manufacturers[2] + "</option>");
document.write("<option>" + manufacturers[3] + "</option>");
document.write("<option>" + manufacturers[4] + "</option>");
document.write("<option>" + manufacturers[5] + "</option>");

document.write("</select>");