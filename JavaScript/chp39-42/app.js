// Agha Abdul Raafay

//chp38-42

// //Q1
// function power(a, b) {
//     var result = 1;
//     for (var i = 1; i <= b; i++) {
//         result = result * a;
//     }
//     return result;
// }

// console.log(power(2, 3)); 
// console.log(power(5, 4)); 


// //Q2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;  
//     } else {
//         return false; 
//     }
// }

// console.log(isLeapYear(2012)); 
// console.log(isLeapYear(2016)); 
// console.log(isLeapYear(2020)); 
// console.log(isLeapYear(1900)); 
// console.log(isLeapYear(2000)); 

// //Q3
// function triangleArea(a, b, c) {
//     var S = (a + b + c) / 2;
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// console.log(triangleArea(3, 4, 5)); 

// //Q4
// function findAverage(m1, m2, m3) {
//     var avg = (m1 + m2 + m3) / 3;
//     return avg;
// }

// function findPercentage(m1, m2, m3, total) {
//     var obtained = m1 + m2 + m3;
//     var per = (obtained / total) * 100;
//     return per;
// }

// function mainFunction(m1, m2, m3, total) {
//     var avg = findAverage(m1, m2, m3);
//     var per = findPercentage(m1, m2, m3, total);
//     console.log("Average: " + avg);
//     console.log("Percentage: " + per + "%");
// }

// mainFunction(80, 75, 90, 300);

// //Q5
// function customIndexOf(str, ch) {
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === ch) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(customIndexOf("hello", "e")); 
// console.log(customIndexOf("hello", "l")); 
// console.log(customIndexOf("hello", "z")); 

// //Q6
// function deleteVowels(sentence) {
//     var result = "";
//     for (var i = 0; i < sentence.length; i++) {
//         var ch = sentence.charAt(i).toLowerCase();
//         if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
//             result += sentence.charAt(i);
//         }
//     }
//     return result;
// }

// console.log(deleteVowels("This is a test")); 

// //Q7
// function countSuccessiveVowels(text) {
//     var count = 0;
//     var vowels = "aeiouAEIOU";

//     for (var i = 0; i < text.length - 1; i++) {
//         var first = text.charAt(i);
//         var second = text.charAt(i + 1);

//         switch (true) {
//             case (vowels.indexOf(first) !== -1 && vowels.indexOf(second) !== -1):
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// console.log(countSuccessiveVowels("Pleases read this application and give me gratuity")); 


// //Q8
// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// function mainFunction(km) {
//     console.log("Meters: " + toMeters(km));
//     console.log("Feet: " + toFeet(km));
//     console.log("Inches: " + toInches(km));
//     console.log("Centimeters: " + toCentimeters(km));
// }

// mainFunction(5);

// //Q9
// function calculateOvertime(hoursWorked) {
//     var overtimePay = 0;
//     if (hoursWorked > 40) {
//         var overtimeHours = hoursWorked - 40;
//         overtimePay = overtimeHours * 12;
//     }
//     return overtimePay;
// }

// console.log("Overtime Pay: Rs." + calculateOvertime(45)); 
// console.log("Overtime Pay: Rs." + calculateOvertime(38)); 

// //Q10
// function cashier(amount) {
//     var hundreds = parseInt(amount / 100);
//     var fifties = parseInt((amount % 100) / 50);
//     var tens = parseInt(((amount % 100) % 50) / 10);

//     console.log("You have " + hundreds + " hundred notes, " + fifties + " fifty notes, " + tens + " ten notes");
// }

// cashier(1660);






