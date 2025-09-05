// Agha Abdul Raafay

//chp 31-34

//Q1
var currentDT = new Date();
console.log(currentDT);

//Q2
var currentMonth = currentDT.getMonth();
var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

console.log(months[currentMonth]);

//Q3
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDayNo = currentDT.getDay();

var currentDay = days[currentDayNo].slice(0,3);
console.log(currentDay);

//Q4
if (currentDay === "Sun" || currentDay === "Sat")
{
    console.log("Its fun day")
}