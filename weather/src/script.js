window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("input");
    const locationText = document.getElementById("location-text");
    const temperatureText = document.getElementById("temperature-text");
    const conditionIcon = document.getElementById("condition-icon");
    const conditionText = document.getElementById("condition-text");
    const cloudText = document.getElementById("cloud-text");
    const humidityText = document.getElementById("humidity-text");
    const windText = document.getElementById("wind-text");
    const windDirectionText = document.getElementById("wind-direction-text");
    const forecastList = document.getElementById("forecast-list");

    const apiKey = "80f3f342ba1e46a9bc480837241512";
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    

    function fetchWeatherData(location) {
        if (!location) return;
        // const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=yes`;
        fetch(apiUrl)
            .then(response => response.json())
        .then(data => {
            if (!data) return;
            console.log({data});
            const {current, location, forecast} = data;
            conditionIcon.src = current.condition.icon;
            conditionText.textContent = current.condition.text;
            locationText.textContent = location.name + ", " + location.country;
            temperatureText.innerHTML = current.temp_c + " &deg;C";
            cloudText.textContent = current.cloud + "%";
            humidityText.textContent = current.humidity + "%";
            windText.textContent = current.wind_kph + " km/h";
            windDirectionText.textContent = current.wind_dir;

            console.log({x: forecast.forecastday});

            if (forecast?.forecastday?.length > 0) {
                const content = forecast.forecastday.map(forecastDay => {
                    const {day} = forecastDay;
                    return `
                    <div class="flex flex-col items-center gap-2 rounded-md border border-gray-200 w-full p-4 flex-shrink-0 snap-start snap-always">
                        <img src="${day.condition.icon}" alt="forecast-icon" class="w-[100px] h-[100px]">
                        <p id="forecast-condition" class="text-xl font-medium">${day.condition.text}</p>
                        <p id="forecast-date" class="font-medium">${days[new Date(forecastDay.date).getDay()]}</p>
                        <p id="forecast-date" class="font-medium">${forecastDay.date}</p>
                        <p id="forecast-temp" class="font-medium">${day.mintemp_c}&deg;C - ${day.maxtemp_c}&deg;C</p>
                    </div>
                    `;
                });
                forecastList.innerHTML = content.join("\n");
            }
        })
        .catch(error => console.error(error));
    }

    fetchWeatherData('Dhaka');

    searchInput.addEventListener("change", (event) => {
        const value = event.target.value;
        fetchWeatherData(value);
    });
});