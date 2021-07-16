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
        countryName.textContent=`${country.name}`
        countryName.id = country.name
        let count = 0
        countryName.addEventListener('click', e => {
            count = count +1;
            if (count%2 === 1) {
                countryName.textContent=`In ${country.languages[0].name}, the country is called ${country.nativeName}`
            }
            else countryName.textContent=`${country.name}`  
        })
        countriesUL.append(countryName)
        // const countryHiddenPart = document.createElement('p')
        // countryName.append(countryHiddenPart)
        // countryHiddenPart.textContent = ""
        
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

function validateAnswer(e, country){
    e.preventDefault()
    if (e.target.userGuess.value === country.capital) {
        document.getElementById(country.name).style.color = "green"
    }
    else document.getElementById(country.name).style.color = "red"
    }


//later:
//wrong answer three times reveals correct answer
//identify a close answer, i.e. accept upper and/or lowercase. later: only one letter is missing or letters are all present but not in correct positions