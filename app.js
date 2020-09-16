"use strict";

// cbacb54bffc7c3a26031154c387221dc
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    weatherContainer.style.display = 'none';
    loadContainer.style.display = 'block';
    var cityName = searchCity.value;
    if(cityName.trim().length === 0){
        return alert ('Ingrese un nombre de ciudad!');
    }
    console.log('valor del imput:', searchCity.value);
    var requestWeatherService = new XMLHttpRequest();
    var apiKey = 'cbacb54bffc7c3a26031154c387221dc';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    var requestMethod = 'GET';
    requestWeatherService.open(requestMethod, url);
    requestWeatherService.send();
    requestWeatherService.onreadystatechange = function () {
        if (requestWeatherService.readyState === XMLHttpRequest.DONE && requestWeatherService.status === 200){
            var response = JSON.parse(requestWeatherService.responseText);
            var weather = new Weather(response.name, response.weather[0].description);
            weather.temperature = response.main.temp;
            console.log('weather', weather);
            updateWeatherCard(weather);
        }else if(requestWeatherService.readyState === XMLHttpRequest.DONE){
            alert('Algo salio mal!');
        }
    };
}
function updateWeatherCard(weather) {
    loadContainer.style.display = 'none';
    weatherContainer.style.display = 'block';
    cityNameContainer.textContent = weather.cityName;
    descriptionContainer.textContent = weather.description;
    temperatureContainer.textContent = weather.temperature;
}