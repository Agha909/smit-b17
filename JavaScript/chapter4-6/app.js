// Agha Abdul Raafay

//CHAPTER 4

//Q1
var var1, var2, var3;

//Q2
var name;
var _name;
var $name;
var name1;
var full2name;
/* illegal variables
var 1name;
var #name;
var 12;
var %name;
var full name;
*/

//Q3
// part a
document.writeln("<h1> Rules for naming JS variables </h1>");
//part b
document.writeln("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable" + "</br>");
//part c
document.writeln("Variables must begin with a letter, $ or _. For example $name, _name or name" + "</br>");
//part d
document.writeln("Variables are case sensitive" + "</br>");
//part e
document.writeln("Variables should not be JS keywords" + "</br>" + "</br>" + "</br>");


//CHAPTER 5

//Q1
var num1 = 4;
var num2 = 6;
var answer = num1 + num2;
document.writeln("Sum of " + num1 + " and " + num2 + " is " + answer + "</br>");

//Q2
var num1 = 4;
var num2 = 6;
var answer = num1 - num2;
document.writeln("Difference of " + num1 + " and " + num2 + " is " + answer + "</br>");

var num1 = 4;
var num2 = 6;
var answer = num1 * num2;
document.writeln("Multiplication of " + num1 + " and " + num2 + " is " + answer + "</br>");

var num1 = 4;
var num2 = 6;
var answer = num1 / num2;
document.writeln("Division of " + num1 + " and " + num2 + " is " + answer + "</br>");

var num1 = 4;
var num2 = 6;
var answer = num1 % num2;
document.writeln("Remainder of " + num1 + " and " + num2 + " is " + answer + "</br>" );

//Q3
//part a
var num;
//part b
document.writeln("Value after variable declaration is: " + num + "</br>");
//part c
num = 7;
//part d
document.writeln("Initial value: " + num + "</br>");
//part e
num = num + 1;
//part f
document.writeln("Value after increment is: " + num + "</br>");
//part g
num = num + 7;
//part h
document.writeln("Value after addition is: " + num + "</br>");
//part i
num = num - 1;
//part j
document.writeln("Value after decrement is: " + num + "</br>");
//part k
num = num % 3;
//part l
document.writeln("The remainder is: " + num + "</br>");

//Q4
var cost = 600;
var newCost = 600 * 5;
document.writeln("Total cost to buy 5 tickets to a movie is " + newCost + "PKR" + "</br>");

//Q5
var num = 5;
document.writeln("Table of " + num + "</br>");
document.writeln(num + "x 1 = " + (num*1) + "</br>");
document.writeln(num + "x 2 = " + (num*2) + "</br>");
document.writeln(num + "x 3 = " + (num*3) + "</br>");
document.writeln(num + "x 4 = " + (num*4) + "</br>");
document.writeln(num + "x 5 = " + (num*5) + "</br>");
document.writeln(num + "x 6 = " + (num*6) + "</br>");
document.writeln(num + "x 7 = " + (num*7) + "</br>");
document.writeln(num + "x 8 = " + (num*8) + "</br>");
document.writeln(num + "x 9 = " + (num*9) + "</br>");
document.writeln(num + "x 10 = " + (num*10) + "</br>");

//Q6
var tempCelsius = 37.5;
var tempFahren = (tempCelsius * 9/5) + 32;
document.writeln(tempCelsius + "C is " + tempFahren + "F"  + "</br>");

var tempFahren = 99.5;
var tempCelsius  = (tempFahren - 32) * 5/9;
document.writeln(tempFahren + "F is" + tempCelsius + "C"  + "</br>");

//Q7
var item1 = 2450;
var item2 = 1140;
var quanItem1 = 3;
var quanItem2 = 5;
var shipCharge = 220;
var totalCost = (item1 * quanItem1) + (item2 * quanItem2) + shipCharge;
 
document.writeln("<h1>Shopping Cart</h1>");
document.writeln("Price of item 1 is " + item1 + "</br>");
document.writeln("Quantity of item 1 is " + quanItem1 + "</br>");
document.writeln("Price of item 2 is " + item2 + "</br>");
document.writeln("Quanity of item 2 is " + quanItem2 + "</br>");
document.writeln("Shipping charges " + shipCharge + "</br>");
document.writeln("Total cost of your order is " + totalCost + "</br>");

//Q8
var mark1 = 56;
var mark2 = 73;
var marksObtained = mark1 + mark2;
var totalMarks = 200
var percentage = (marksObtained / totalMarks) * 100;

document.writeln("<h1>Marks Sheet</h1>");
document.writeln("Total marks: " + totalMarks + "</br>");
document.writeln("Marks obtained " + marksObtained + "</br>");
document.writeln("Percentage: " + percentage + "%" + "</br>");

//Q9
var dollar = 10;
var riyal = 25;
var pkr = (10 * 104.80) + ( 25 * 28);
document.writeln("<h1>Currency in PKR</h1>");
document.writeln("Total currency in PKR: " + pkr + "</br>");

//Q10
var num = 6;
num = (num + 5) * 10 / 2;
document.writeln("Number: " + num + "</br>");

//Q11
var currentYear = 2025;
var birthYear = 2003;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.writeln("They are either " + age2 + " or " + age1 + " years old" +  "</br>");

//Q12
var radius = 4;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.writeln("<h1>The Geometrizer</h1>");
document.writeln("Radius of a cricle is " + radius + "</br>");
document.writeln("The circumference is " + circumference + "</br>");
document.writeln("The area is " + area + "</br>");

//Q13
var snack = " chips ";
var currentAge = 22;
var maximumAge = 45;
var estimatedAmount = 3;
var totalAmount = 700;
document.writeln("<h1>The Lifetime Supply Calculator</h1>");
document.writeln("You will need " + totalAmount + snack + "to last you until the ripe old age of " + maximumAge +"</br>");


//CHAPTER 6

//Q1
var z = 5;
document.writeln("Result:" + "</br>");
document.writeln("The value of z is: " + z + "</br>");
document.writeln("----------------------" +  "</br>" + "</br>");

++z;
document.writeln("The value of ++z is: " + z + "</br>");
document.writeln("Now the value of z is: " + z + "</br>" + "</br>");

z++;
document.writeln("The value of z++ is: " + z + "</br>");
document.writeln("Now the value of z is: " + z + "</br>" + "</br>");

--z;
document.writeln("The value of --z is: " + z + "</br>");
document.writeln("Now the value of z is: " + z + "</br>" + "</br>");

z--;
document.writeln("The value of z-- is: " + z + "</br>");
document.writeln("Now the value of z is: " + z + "</br>" + "</br>");


