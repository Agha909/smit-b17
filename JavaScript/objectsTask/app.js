// //Objects task

// //Q1

// var itemsArray = [
//     { name: "juice", price: 50, quantity: 3 },
//     { name: "cookie", price: 30, quantity: 9 },
//     { name: "shirt", price: 880, quantity: 1 },
//     { name: "pen", price: 100, quantity: 2 }
// ];

// var totalAllItems = 0;


// for (var i = 0; i < itemsArray.length; i++) {
//     var item = itemsArray[i];
//     var totalItemPrice = item.price * item.quantity;
//     console.log(item.name + " total price = " + totalItemPrice);
//     totalAllItems += totalItemPrice;
// }

// console.log("Total price of all items = " + totalAllItems);

// //Q2
// var person = {
//     name: "Ali",
//     email: "ali@example.com",
//     password: "12345",
//     age: 22,
//     gender: "Male",
//     city: "Karachi",
//     country: "Pakistan"
// };

// console.log("age" in person);
// console.log("country" in person);
// console.log("firstName" in person);
// console.log("lastName" in person);

// //Q3
// function Student(name, age, gender, course) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.course = course;
// }

// var student1 = new Student("Agha", 22, "Male", "Computer Science");
// var student2 = new Student("Irfan", 22, "Female", "Software Engineering");
// var student3 = new Student("Hadis", 21, "Female", "Information Technology");

// console.log(student1);
// console.log(student2);
// console.log(student3);


//Q4

function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var population = [];

function addRecord() {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    if (!name || !gender || !address || !education || !profession) {
        alert("Please fill all fields!");
        return;
    }

    var person = new Person(name, gender, address, education, profession);
    population.push(person);

    displayRecords();

    document.getElementById("populationForm").reset();
}

function displayRecords() {
    var recordDiv = document.getElementById("records");
    recordDiv.innerHTML = "";

    population.forEach(function (person, index) {
        recordDiv.innerHTML += `<p><b>Record ${index + 1}</b><br>
        Name: ${person.name}<br>
        Gender: ${person.gender}<br>
        Address: ${person.address}<br>
        Education: ${person.education}<br>
        Profession: ${person.profession}</p><hr>`;
    });
}

