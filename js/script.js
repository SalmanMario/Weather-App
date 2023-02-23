let currentCity = localStorage.getItem("city");
console.log("Current City", currentCity);

if (!currentCity) {
    localStorage.setItem("city", "Timisoara");
    currentCity = "Timisoara";
}

updateCurrentCity(currentCity);
displayCurrentWeather(currentCity);