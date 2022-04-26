const city = document.querySelector(".city")
const weather = document.querySelector(".weather")
const img = document.querySelector(".img")
const comment = document.querySelector(".comment")


const ApiKey = 'cddb3309931925c9b79ddc5a03842829'
const btnSearch = document.querySelector(".searcher button")

async function fetchAsync(){
    const cityName = document.querySelector(".searcher input").value 
    const server = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},uk&appid=${ApiKey}`
    fetch(server)
    .then (function(response){return response.json()})
    .then(function(data){
        console.log(data);
        city.textContent = data.name
    })
    document.querySelector(".searcher input").value = ""
}
btnSearch.addEventListener("click", fetchAsync)