const MainContainer = document.querySelector('.Container');
const ThankContainer = document.querySelector('.thankyou');
const SubmitBtn = document.getElementById('submit')
const ReturnBtn = document.getElementById('return')
const RateBtn = document.querySelectorAll('.btn')
const Rating = document.querySelector('.rating')

SubmitBtn.addEventListener("click", () => {
    ThankContainer.classList.remove('hidden')
    MainContainer.style.display = "none"
})

ReturnBtn.addEventListener("click", () => {
    ThankContainer.classList.add('hidden')
    MainContainer.style.display = "block"
})

RateBtn.forEach((rate) => {
    rate.addEventListener("click", () =>{
        Rating.innerHTML = rate.innerHTML
    })
})
