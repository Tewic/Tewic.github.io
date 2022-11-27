const text = document.getElementById("input-text")
const submitBtn = document.getElementById("input-Btn")
const display = document.getElementById('display')
const clearList = document.getElementById('clear')
const tom = document.getElementById('tom')

console.log("hello world")

function log () {
    var paragraph = document.createElement('p')
    paragraph.innerText = text.value;
    display.appendChild(paragraph)
    text.value = ""
}

function clear () {
    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }
}

submitBtn.addEventListener("click",log);
clearList.addEventListener('click',clear)
