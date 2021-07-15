document.addEventListener('DOMContentLoaded', () => {
    fetchCountryData()
})

function fetchCountryData(){
    fetch ('https://restcountries.eu/rest/v2/all')
    .then (resp => resp.json())
    .then (data => displayQuiz(data))
}  

function displayQuiz(countries) {
    countries.forEach(country => {
        const countriesUL = document.querySelector('.countries-list')
        const countryName = document.createElement('li')
        countryName.id = country.name
        countryName.textContent=`${country.name}`
        countryName.addEventListener('click', e => {
            countryName.textContent=`In ${country.languages[0].name}, the country is called ${country.nativeName}`
        })
        countriesUL.append(countryName)
        const userAnswer = document.createElement('form')
        userAnswer.addEventListener('submit', e => validateAnswer(e, country))
        const userAnswerInput = document.createElement('input')
        userAnswerInput.setAttribute('type', "text")
        userAnswerInput.setAttribute('name', "userGuess")
        userAnswer.append(userAnswerInput)
        countriesUL.append
        (userAnswer)

   
    })   
}
//we know this one works, don't touch it
function validateAnswer(e, country){
    e.preventDefault()
    if (e.target.userGuess.value === country.capital) {
        document.getElementById(country.name).style.color = "green"}
    else document.getElementById(country.name).style.color = "red"
    }

//wrong answer three times reveals correct answer

let count = 0
function wrongAnswer(){
    count = count + 1
    if (count%3 === 1){
        
    }
    return something 
}    

//advanced feature: identify a close answer, i.e. accept upper and/or lowercase. later: only one letter is missing or letters are all present but not in correct positions