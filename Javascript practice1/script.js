const color = ["#FF6961","#AEC6CF","#77DD77","#FDFD96","#F8C8DC"]
const btn = document.getElementById("btn")
const logoText = document.querySelector(".logo-text")
const colorDisplay = document.querySelector(".color-display")

btn.addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * color.length);
    logoText.style.color = color[randomNum]
    colorDisplay.style.color = color[randomNum]
    colorDisplay.innerHTML = color[randomNum]
    document.body.style.backgroundColor = color[randomNum]
} )
