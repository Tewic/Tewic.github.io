const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const GenerateBtn = document.querySelector(".btn");



fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(function(data) {
    let jsonQuote = data.quotes
    GenerateBtn.addEventListener('click', function () {
            let randomNum = Math.floor(Math.random() * jsonQuote.length);
            quote.innerHTML = jsonQuote[randomNum].quote;
            person.innerHTML = jsonQuote[randomNum].author;
        })
    }).catch(function(err) {
        console.log("error")
        alert("Error")
    })
