const weatherForm = document.querySelector('.form')
const inputCity = document.querySelector('.city')
const result = document.querySelector('.result')
const apiKey = '69624d7789ebeb0613f5d83cbaa8c575'

weatherForm.addEventListener('submit', async event => {

    event.preventDefault()

    const city = inputCity.value

    if(city){
        try{
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)
        }catch(error){
            console.error(error)
            displayError(error)
        }

    }else{
        displayError('please enter city: ')
    }
})

async function getWeather(City){
    const apiUrl = ``
}
function weatherInfo(data){

}
function displayError(message){
    const errorDisplay = document.createElement('p')
    errorDisplay.textContent = message
    errorDisplay.classList.add('error')

    result.textContent = ''
    result.style.display = 'flex'
    result.appendChild(errorDisplay)
}