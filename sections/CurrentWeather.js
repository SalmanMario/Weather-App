async function displayCurrentWeather(city) {
    const currentWeatherData = await getCurrentWeather(city);

    const { dt, main, weather, wind, name } = currentWeatherData;
    const temperature = Math.round(main.temp);
    const realFeel = Math.round(main.feels_like);

    console.log("Temperatura,", temperature);
    console.log("Cum se simte", realFeel);
    console.log("Data la care s-a facut cererea", dt);

    const day = getDayOfTheWeek(dt);
    const hours = getHour(dt);

    // Atentie Weather este un array care are un singur element
    const weatherDescription = weather[0].description;
    const weatherIcon = getWeatherIcon(weather[0].icon);

    console.log("Descrierea vremii", weatherDescription);
    console.log("Iconita vremii", weatherIcon);

    const windSpeed = Math.round(windToKmPerHour(wind.speed));
    console.log("Viteza vantului", windSpeed);
    // viteza vantului in km/h
    // wind.speed ATENTIE,primim metri pe secunda

    const currentWeatherElem = document.querySelector(".current-weather");

    currentWeatherElem.innerHTML = `
        <div class="d-flex justify-content-evenly">
        <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="fs-5"><strong>${day}</strong>, ${hours}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${weatherIcon}" alt="vreme" />
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Se simte ca <strong>${realFeel}°C</strong></p>
          <p class="fs-5">${weatherDescription}</p>
          <p class="fs-5">Viteza vantului: <strong>${windSpeed}km/h</strong></p>
        </div>
      </div>`;
}