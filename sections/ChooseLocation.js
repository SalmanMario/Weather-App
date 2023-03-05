const timisoara = document.querySelector(".dropdown-item.timisoara");
const bucuresti = document.querySelector(".dropdown-item.bucuresti");
const cluj = document.querySelector(".dropdown-item.cluj");
const oradea = document.querySelector(".dropdown-item.oradea");
const sibiu = document.querySelector(".dropdown-item.sibiu");
const arad = document.querySelector(".dropdown-item.arad");
const brasov = document.querySelector(".dropdown-item.brasov");
const miercureaCiuc = document.querySelector(".dropdown-item.miercurea-ciuc");
const sannicolauMare = document.querySelector(".dropdown-item.sannicolau-mare");
const satuMare = document.querySelector(".dropdown-item.satu-mare");
const bacau = document.querySelector(".dropdown-item.bacau");

function updateCurrentCity(city) {
    // selectam elem care contine orasul principal
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = city;
}

function updateWeather(city) {

    localStorage.setItem("city", city);

    updateCurrentCity(city);
    displayWeatherForecast(city);
    displayCurrentWeather(city);
}

// adaugam evenimente de click pt fiecare element din dropdown
timisoara.addEventListener("click", function () {
    console.log("S-a selectat timisoara");
    updateWeather("Timisoara");
});

bucuresti.addEventListener("click", function () {
    console.log("S-a selectat bucuresti");
    updateWeather("București");
});

cluj.addEventListener("click", function () {
    console.log("S-a selectat cluj");
    updateWeather("Cluj");
});

oradea.addEventListener("click", function () {
    console.log("S-a selectat oradea");
    updateWeather("Oradea");
});

sibiu.addEventListener("click", function () {
    console.log("S-a selectat sibiu");
    updateWeather("Sibiu");
});

arad.addEventListener("click", function () {
    console.log("S-a selectat arad");
    updateWeather("Arad");
});

brasov.addEventListener("click", function () {
    console.log("S-a selectat brasov");
    updateWeather("Brasov");
});

miercureaCiuc.addEventListener("click", function () {
    console.log("S-a selectat miercurea ciuc");
    updateWeather("Miercurea Ciuc");
});

sannicolauMare.addEventListener("click", function () {
    console.log("S-a selectat Sannicolau Mare");
    updateWeather("Sannicolau Mare");
});

satuMare.addEventListener("click", function () {
    console.log("S-a selectat Satu Mare");
    updateWeather("Satu Mare");
});

bacau.addEventListener("click", function () {
    console.log("S-a selectat Bacau");
    updateWeather("Bacau");
});
