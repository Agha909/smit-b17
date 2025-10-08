//Q1
// window.onload = function() {
//     var form = document.getElementById("signupForm");

//     form.onsubmit = function() {
        

//         var name = document.getElementById("name").value;
//         var email = document.getElementById("email").value;
//         var password = document.getElementById("password").value;

//         var outputDiv = document.getElementById("output");

//         outputDiv.innerHTML = 
//             "<h3>Submitted Data:</h3>" +
//             "<p><strong>Name:</strong> " + name + "</p>" +
//             "<p><strong>Email:</strong> " + email + "</p>" +
//             "<p><strong>Password:</strong> " + password + "</p>";
//             return false; 
//     };
// };

//Q2
// window.onload = function() {

//     var moreText = document.createElement("span");
//     moreText.id = "more";
//     moreText.style.display = "none";
//     moreText.innerHTML = 
//         " These headphones come with a long-lasting battery, comfortable ear pads," +
//         " and Bluetooth 5.0 connectivity for fast pairing. You can also take calls" +
//         " hands-free with the built-in microphone.";

//     var desc = document.getElementById("description");
//     desc.appendChild(moreText);
// };

// function toggleReadMore() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btn = document.getElementById("readBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btn.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btn.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }



