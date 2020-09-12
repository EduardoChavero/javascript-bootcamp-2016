"use strict";

// cbacb54bffc7c3a26031154c387221dc
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    var cityName = searchCity.value;
    if(cityName.trim().length === 0){
        return alert ('Ingrese un nombre de ciudad!');

    }
    console.log('valor del imput:', searchCity.value);
    var requestWeatherService = new XMLHttpRequest();
    var apiKey = 'cbacb54bffc7c3a26031154c387221dc';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    var requestMethod = 'GET';
    requestWeatherService.open(requestMethod, url);
    requestWeatherService.send();
    requestWeatherService.onreadystatechange (function () {
        if (requestWeatherService.state === XMLHttpRequest.DONE && requestWeatherService.status === 200){

        }else if(requestWeatherService.state === XMLHttpRequest.DONE){
            alert('Algo salio mal!);
                }

    });

}
