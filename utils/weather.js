function getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;

    //http://openweathermap.org/img/wn/10d@2x.png
}

function windToKmPerHour(meterPerSec) {
    return meterPerSec * 3.6;
}