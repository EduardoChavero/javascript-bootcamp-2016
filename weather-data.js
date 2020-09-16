"use strict";

function Weather (cityName, description){
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function () {
        return this._temperature;
    },
    set: function (temperature) {
        this._temperature = (temperature * 1.8 + 32).toFixed(2) + 'F';
    }
});