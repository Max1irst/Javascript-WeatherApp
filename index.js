const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const img = document.querySelector(".img")
const feelsLike = document.querySelector(".feelsLike")


const ApiKey = 'cddb3309931925c9b79ddc5a03842829'
const btnSearch = document.querySelector(".searcher button")

async function fetchAsync(){
    const cityName = document.querySelector(".searcher input").value 
    const server = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`
    fetch(server)
    .then (function(response){return response.json()})
    .then(function(data){
        console.log(data);
        city.textContent = data.name
        temp.innerHTML = Math.round(data.main.temp -273.15) + "&deg"
        img.innerHTML= `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        feelsLike.innerHTML = "<p>Ощущается как:</p><br>" + (Math.round(data.main.feels_like -273.15) + "&deg")

    })
    city.value = ""
    temp.value = ""
    img.value = ""
    feelsLike.value = ""
    document.querySelector(".searcher input").value = ""
}
btnSearch.addEventListener("click", fetchAsync)