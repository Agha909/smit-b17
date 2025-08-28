// Agha Abdul Raafay

//Chp 21-25

//Q1
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);

//Q2
// var message = prompt("What is your favorite mobile phone model?");
// var lengthString = message.length;
// console.log("Length of string is " + lengthString);

//Q3
// var a = "Pakistani";
// var b = a.indexOf("n");
// console.log("Index of n: " + b);

//Q4
// var a = "Hello World";
// var b = a.lastIndexOf("l");
// console.log("Last index of l: " + b);

//Q5
// var a = "Pakistani";
// var b = a.charAt(3);
// console.log("Character at index 3: " + b);

//Q6
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// var fullName = firstName.concat(lastName);
// alert("Welcome " + fullName);

//Q7
// var city = "Hyderabad";
// var a = city.slice(5);
// var b = "Islam";
// city = b + a;
// console.log(city);

//Q8
// var message = "Ali and Sami are best friends. They play cricket and football together";
// message = message.replaceAll("and", "&");
// console.log(message);

//Q9
// var a = "472";
// var num = Number(a);
// console.log(a);
// console.log(typeof(a));
// console.log(num);
// console.log(typeof(num));

//Q10
// var inp = prompt("Enter anything");
// inp = inp.toUpperCase();
// console.log(inp);

//Q11
// var inp = prompt("Enter anything");
// var a = inp.slice(0,1);
// a = a.toUpperCase();
// var b = inp.slice(1);
// var result = a + b;
// console.log(result);

//Q12
// var num = 35.36;
// var str = String(num);
// var a = str.slice(0,2) + str.slice(3,5);
// console.log(a);

//Q13
// Ask user for username
// var username = prompt("Enter your username:");

// if (username.indexOf("@") !== -1 || 
//     username.indexOf(".") !== -1 || 
//     username.indexOf(",") !== -1 || 
//     username.indexOf("!") !== -1) {
    
//     console.log("Please enter a valid username without @ . , !");
// } else {
//     console.log("Username added: " + username);
// }

//Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome! What do you want to order?");

// var searchItem = userInput.toLowerCase();

// if (A.indexOf(searchItem) !== -1) {
//     console.log(userInput + " is available at index " + A.indexOf(searchItem));
// } else {
//     console.log(userInput + " is not available in our bakery.");
// }

//Q15

//Q16
// var university = "University of Karachi";

// var arr = university.split("");

// console.log(arr);

// //Q17
// var a = prompt("Enter some text:");

// var b = a.charAt(userInput.length - 1);

// console.log("User input: " + a);
// console.log("Last character: " + b);


//Q18
// var text = "The quick brown fox jumps over the lazy dog";

// var lowerText = text.toLowerCase();

// var words = lowerText.split(" ");

// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// console.log("Text: " + text);
// console.log("Number of occurrences of 'the': " + count);


