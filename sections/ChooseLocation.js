const timisoara = document.querySelector(".dropdown-item.timisoara");
const bucuresti = document.querySelector(".dropdown-item.bucuresti");
const cluj = document.querySelector(".dropdown-item.cluj");
const oradea = document.querySelector(".dropdown-item.oradea");
const sibiu = document.querySelector(".dropdown-item.sibiu");
const arad = document.querySelector(".dropdown-item.arad");
const brasov = document.querySelector(".dropdown-item.brasov");
const miercureaCiuc = document.querySelector(".dropdown-item.miercurea-ciuc");

function updateCurrentCity(city) {
    // selectam elem care contine orasul principal
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = city;
}

function updateWeather(city) {

    localStorage.setItem("city", city);

    updateCurrentCity(city);
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
