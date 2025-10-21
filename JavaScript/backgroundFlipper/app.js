let colors = ["green", "purple", "blue", "yellow", "cyan", "red", "pink"]

function changeBackground() {

    var randomNum = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNum]
    document.getElementsByTagName("span")[0].innerText = colors[randomNum]

}