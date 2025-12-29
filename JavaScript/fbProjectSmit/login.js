function login() {
  let usersArr = JSON.parse(localStorage.getItem("usersData")) || [];
  let enteredEmail = document.getElementById("loginEmail").value;
  let enteredPass = document.getElementById("loginPass").value;

  console.log("Stored users:", usersArr);
  console.log(`Email entered: ${enteredEmail}`);
  console.log(`Password entered: ${enteredPass}`);

  // Find user by email
  let user = usersArr.find(u => u.contact === enteredEmail);

  if (user) {
    if (user.password === enteredPass) {
      alert("Login Successful");
    } else if (user.password !== enteredPass){
      alert("Incorrect password");
      return
    }
  } else {
    alert("User not registered");
    window.location = "reg.html";
    return
  }
   window.location = "dashboard.html";
}
