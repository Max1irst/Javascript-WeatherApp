const btnSearch = document.querySelector(".searcher button")

btnSearch.addEventListener("click", async function fetchAsync(){
    const cityName = document.querySelector(".searcher input").value 
    const server = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=cddb3309931925c9b79ddc5a03842829`
    const response = await fetch(server)
    const data = response.json()
    console.log(data);
    document.querySelector(".searcher input").value = ""
})