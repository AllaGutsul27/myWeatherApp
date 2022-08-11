   //----- Date ------//
let now = new Date();

let week = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"];
let day = week[now.getDay()];
let date = now.getDate();

let months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
let year = now.getFullYear();

let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
let hours = now.getHours();
if (hours < 10) {
    hours = "0" + hours;
}

let h4 = document.querySelector("h4");
h4.innerHTML = `${hours}:${minutes}, ${day} ${month} ${date}, ${year}`;
      


//----- Зміна міста (головного) і температури ------//


function showTemperatureMain(response) {
    let degreesValueMain = document.querySelector(".search-degrees");
    degreesValueMain.innerHTML = Math.round(response.data.main.temp);
    let wind = document.querySelector(".wind-value");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let humidity = document.querySelector(".humidity-value");
    humidity.innerHTML = response.data.main.humidity;

}

    function search(event) {
    event.preventDefault();
    let inputSearch = document.querySelector("#input-search");
    let searchCity = document.querySelector(".search-city");
    let inputSearchValue = inputSearch.value;
    searchCity.innerHTML = `${inputSearchValue}`;
    
    let apiKey = "bd8f88829f2ceba868beb54f335a28f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearchValue}&appid=bd8f88829f2ceba868beb54f335a28f8&units=metric`;
    
    axios.get(apiUrl).then(showTemperatureMain);    
}

let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("submit", search);




//----- Температура за поточним місцем знаходження (кнопка Current) ------//
function showTemperatureCurrent(response) {
    let degreesValueCurrent = document.querySelector(".search-degrees");
    degreesValueCurrent.innerHTML = Math.round(response.data.main.temp);
    let searchCity = document.querySelector(".search-city");
    searchCity.innerHTML = response.data.name;

    let wind = document.querySelector(".wind-value");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let humidity = document.querySelector(".humidity-value");
    humidity.innerHTML = response.data.main.humidity;

}

    function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "28b89a027ca36429077890b9084e664e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperatureCurrent);
}


function getCurrentLocation(event) {
    event.preventDefault;
    navigator.geolocation.getCurrentPosition(showPosition);
}

let current = document.querySelector("#current");
current.addEventListener("click", getCurrentLocation);
    



    

//   document.querySelector("#description").innerHTML =
//     response.data.weather[0].main;
// }
















