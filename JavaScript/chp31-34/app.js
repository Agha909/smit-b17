// Agha Abdul Raafay

//chp 31-34

//Q1
var currentDT = new Date();
console.log(currentDT);

//Q2
var currentDT = new Date();
var currentMonth = currentDT.getMonth();
var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

console.log(months[currentMonth]);

//Q3
var currentDT = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDayNo = currentDT.getDay();

var currentDay = days[currentDayNo].slice(0,3);
console.log(currentDay);

//Q4
var currentDT = new Date();
if (currentDay === "Sun" || currentDay === "Sat")
{
    console.log("Its fun day")
}

//Q5
var currentDT = new Date();
var dayOfMonth = currentDT.getDate();

if (dayOfMonth < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

//Q6
var currentDT = new Date();
var millis = currentDT.getTime();

minutesSince1970 = Math.floor(millis / (1000 * 60));

console.log("Minutes since midnight, Jan 1, 1970: " + minutesSince1970);

//Q7
var currentDT = new Date();
var hours = currentDT.getHours();

if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}

//Q8
var currentDT = new Date();
var laterDate = new Date(2020, 11, 31);  

console.log("Later Date: " + laterDate);

//Q9
var currentDT = new Date();
var ramadanStart = new Date(2015, 5, 18);  

var diffMillis = currentDT.getTime() - ramadanStart.getTime();

var daysPassed = Math.floor(diffMillis / (1000 * 60 * 60 * 24));

alert(daysPassed + " days have passed since 1st Ramadan, 2015.");

//Q10
var currentDT = new Date();
var start2015 = new Date(2015, 0, 1); 

var diffMillis = currentDT.getTime() - start2015.getTime();

var secondsPassed = Math.floor(diffMillis / 1000);

console.log("On reference date " + currentDT);
console.log(secondsPassed + " seconds had passed since beginning of 2015.");

//Q11
var currentDT = new Date();
var currentHours = currentDT.getHours();

console.log("Current hours: " + currentHours);

currentDT.setHours(currentHours + 1);

console.log("Updated Date (1 hour ahead): " + currentDT);

//Q12
var currentDT = new Date();
currentDT.setFullYear(currentDT.getFullYear() - 100);

alert("Date 100 years back: " + currentDT);

//Q13
var currentDT = new Date();
var age = +prompt("Enter your age:");

var currentYear = currentDT.getFullYear();

var birthYear = currentYear - age;

console.log("Your age is: " + age);
console.log("Your birth year is: " + birthYear);

//Q14
var customerName = "Agha Abdul Raafay";   
var currentDT = new Date();
var months = ["January","February","March","April","May","June","July",
              "August","September","October","November","December"];
var currentMonth = months[currentDT.getMonth()];

var numberOfUnits = 410;       
var chargesPerUnit = 16;     
var latePaymentSurcharge = 350; 

var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

netAmount = netAmount.toFixed(2);
grossAmount = grossAmount.toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");




