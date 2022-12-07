const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn")
const logoText = document.querySelector(".logo-text")
const colorDisplay = document.querySelector(".color-display")

btn.addEventListener('click', function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNum]
    }
    logoText.style.color = hexColor
    colorDisplay.style.color = hexColor
    colorDisplay.innerHTML = hexColor
    document.body.style.backgroundColor = hexColor
})
