
var forward = 0;
var backward = 1600;

function fight () {
    console.log(event.keyCode, event.key)
    var iori = document.getElementById("iori")

    if( event.keyCode == 68 && forward < 1000) {
        forward = forward + 30
        iori.src = "assets/iori-moving.gif"
        iori.style.left = forward + "px"
        iori.style.width = "300px"
        iori.style.height = "300px"
    }
    if( event.keyCode == 65 && forward > 0) {
        forward = forward - 30
        iori.src = "assets/iori-moving.gif"
        iori.style.left = forward + "px"
        iori.style.width = "300px"
        iori.style.height = "300px"
    }

    if(event.keyCode == 32) {
        iori.src = "assets/iori-attack.gif"
        iori.style.width = "400px"
        iori.style.height = "400px"
    }
}

function fight2 () {
    console.log(event.keyCode, event.key)
    var orochi = document.getElementById("orochi")

    if( event.keyCode == 37 && backward > 0) {
        backward = backward - 30
        orochi.src = "assets/orochi-standStance.gif"
        orochi.style.left = backward + "px"
        orochi.style.width = "300px"
        orochi.style.height = "300px"
    }
    if( event.keyCode == 39 && backward < 1600) {
        backward = backward + 30
        orochi.src = "assets/orochi-standStance.gif"
        orochi.style.left = backward + "px"
        orochi.style.width = "300px"
        orochi.style.height = "300px"
    }

    if(event.keyCode == 96) {
        orochi.src = "assets/orochi-attack.gif"
        orochi.style.width = "400px"
        orochi.style.height = "400px"
    }
}

window.addEventListener("keyup", fight);
window.addEventListener("keyup", fight2);
