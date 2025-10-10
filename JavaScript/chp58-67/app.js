//Q1

var mainContent = document.getElementById("main-content");
console.log(mainContent);

console.log(mainContent.children);

var renders = document.getElementsByClassName("render");
for (var i = 0; i < renders.length; i++) {
    document.write(renders[i].innerHTML + "<br>");
}

document.getElementById("first-name").value = "Agha Abdul Raafay";
document.getElementById("last-name").value = "Muhammad";
document.getElementById("email").value = "agharafay123@gmail.com";

//Q2

var form = document.getElementById("form-content")
console.log("Node type of form-content => " + form.nodeType)

var lName = document.getElementById("lastName")
console.log("Node type of lastName => " + lName.nodeType)
console.log("Node type of lastName's child:", lastName.firstChild.nodeType);

lastName.firstChild.nodeValue = "Last Name: Raafay";
console.log("Updated child node:", lastName.textContent);

var mainContent = document.getElementById("main-content");
console.log("First child of main-content:", mainContent.firstChild);
console.log("Last child of main-content:", mainContent.lastChild);

console.log("Next sibling of lastName:", lastName.nextElementSibling);
console.log("Previous sibling of lastName:", lastName.previousElementSibling);

var email = document.getElementById("email");
console.log("Parent node of email:", email.parentNode);
console.log("Node type of email:", email.nodeType);