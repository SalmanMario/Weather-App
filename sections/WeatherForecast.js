async function displayWeatherForecast(city) {
    const data = await getForecast(city);

    console.log(data);

    const weatherForecastContainer = document.querySelector(".weather-forecast");
    weatherForecastContainer.innerHTML = '';

    const { list } = data;
    console.log(list);

    // <h3 class="text-primary">Miercuri</h3>

    const forecastMap = {};
    list.forEach(element => {
        const { dt } = element;

        const day = getDayOfTheWeek(dt);
        const hour = getHour(dt);
        console.log(element);
        console.log(hour);
        console.log(day);

        // daca aveam ziua saptamanii in obiect ii adaugam prognoza, 
        if (forecastMap[day]) {
            forecastMap[day].push(element);
            // altfel adaugam ziua saptamanii in obiect alaturi de prima prognoza
        } else {
            forecastMap[day] = [element];
        }
    });
    console.log(forecastMap);

    for (const key in forecastMap) {
        console.log(key);

        weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;

        const prognoze = forecastMap[key];
        console.log(prognoze);
        prognoze.forEach(prognoza => {
            const { dt, main, weather } = prognoza;

            const hour = getHour(dt);

            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);

            const weatherDescription = weather[0].description;
            const weatherIcon = getWeatherIcon(weather[0].icon);

            weatherForecastContainer.innerHTML += `
                
                <div class="d-flex align-items-center border p-3 justify-content-between rounded">
                  <p class="fs-4">${hour}</p>
                  <div>
                    <img src="${weatherIcon}" alt="vreme" />
                  </div>
                  <strong class="fs-4">${temperature}°C</strong>
                  <p>${weatherDescription}</p>
                  <p class="fs-5 real-feal">${realFeel} <strong>3°C</strong></p>
                </div>`;
        });
    }
}