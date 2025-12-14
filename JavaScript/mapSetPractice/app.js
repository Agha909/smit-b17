//MAP AND SET PRACTICE

//SET

//duplicate values

let num = [1,2,3,2,4,1,5,5,2];

let uniqueNum = new Set(num);

console.log(uniqueNum); 


//checking for a value's existence

let fruits = new Set(["apple", "banana", "mango"]);

console.log(fruits.has("banana")); 
console.log(fruits.has("orange"));


//adding and deleting items
let students = new Set();

students.add("Agha");
students.add("Ali");
students.add("Ahmed");

console.log(students)

students.delete("Ali");

console.log(students);


//counting 
let text = "javascript";

let uniqueChars = new Set(text);

console.log(uniqueChars.size);

//common values
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let set1 = new Set(arr1);
let common = [];

for (let value of arr2) {
  if (set1.has(value)) {
    common.push(value);
  }
}

console.log(common); 

//MAP

//storing marks
let marks = new Map();

marks.set("Agha", 90);
marks.set("Ali", 85);
marks.set("Ahmed", 88);

console.log(marks.get("Agha")); 

//loop in map

let countryCodes = new Map();

countryCodes.set("Pakistan", "+92");
countryCodes.set("India", "+91");
countryCodes.set("USA", "+1");

for (let [country, code] of countryCodes) {
  console.log(`${country} => ${code}`);
}

//key checking
let user = new Map();

user.set("name", "Agha");
user.set("age", 20);

console.log(user.has("name"));
console.log(user.has("email"));

//object to map
let obj = {
  name: "Agha",
  course: "CS",
  semester: 5
};

let objMap = new Map(Object.entries(obj));

console.log(objMap);
