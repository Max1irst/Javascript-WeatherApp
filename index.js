const btnSearch = document.querySelector(".searcher button")

btnSearch.addEventListener("click", async function fetchAsync(){
    const cityName = document.querySelector(".searcher input").value 
    const server = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${ApiKey}`
    const response = await fetch(server)
    const data = response.json()
    console.log(data);
    document.querySelector(".searcher input").value = ""
})