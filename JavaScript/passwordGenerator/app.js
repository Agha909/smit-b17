

var randomValue = "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$#%^&*()_1234567890;";



function generatePassword(){
    var pass = "";
    for (var i = 0; i < 8; i++) {

  var ranNum = Math.floor(Math.random() * randomValue.length );
  pass += randomValue[ranNum];

}

console.log("Your Random Password ==>", pass);

let password = document.getElementById("password");
password.innerText = pass
}
