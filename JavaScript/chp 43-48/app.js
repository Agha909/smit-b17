//Q1
// function showAlert() {
//             alert("Link clicked!");
// }

// Q2
// function showPurchase() {
//             alert("Thanks for purchasing a mobile from us");
// }

// Q4
// window.onload = function() {
//     var img = document.getElementById("myImage");

//     img.onmouseover = function() {
//         img.src = "./assets/image2.jfif"; 
//     };

//     img.onmouseout = function() {
//         img.src = "./assets/image1.jfif"; 
//     };
// };


//Q5
var count = 0; 

function increase() {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
}

function decrease() {
    count = count - 1;
    document.getElementById("counter").innerHTML = count;
}

