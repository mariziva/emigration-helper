document.addEventListener('DOMContentLoaded', () => {
    fetchCountryData()
    //criteriaChooser()
})

function fetchCountryData(){
    fetch ('https://restcountries.eu/rest/v2/all')
    .then (resp => resp.json())
    .then (data => displayCountries(data))
}  

function displayCountries (countries) {
    countries.forEach(country => {
    const countriesUL = document.querySelector('.countries-list')
    const countryName = document.createElement('li')
    countryName.textContent=`${country.name}`
    countriesUL.append(countryName)
    countryName.addEventListener('click', e => {
        countryName.innerHTML=`In ${country.name}, they speak ${country.languages[0].name}`
        
    })
    countryName.addEventListener('mouseover', e => {
        countryName.textContent=`${country.capital}`
    })
    countryName.addEventListener('mouseout', e => {
        countryName.textContent=`${country.name}`
    })
})
}



// function criteriaChooser () {
//     if (document.getElementsByClassName('.criteria').value==="language"){ let languageDiv = document.querySelector('.language')
//         let languageDropdown = document.createElement('select').innerHTML = `<select name="languageList" onchange="displayCountries()">
//         <option value="Spanish">Spanish</option>
//         <option value="French">French</option>
//       </select>`
//       languageDiv.append(languageDropdown)
//     } else if (document.getElementsByClassName('.criteria').value==="time-zone") {
//         let timezoneDiv = document.querySelector('.time-zone')
//         let timezoneDropdown = document.createElement('select').innerHTML = `<select name="timezoneList" onchange="displayCountries()">
//         <option value="UTC800">UTC 8:00</option>
//         <option value="UTC600">UTC 6:00</option>
//       </select>`
//       timezoneDiv.append(timezoneDropdown)
//     }

// }



    


// whichever one the user chooses creates a new div right underneath, text: "I speak:" with dropdown of available languages or "I want to be in this time zone:" with dropdown of available timezones

// div container for countries list, result of the above populates the list