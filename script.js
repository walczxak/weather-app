const weatherData = {
    'warszawa': {
        temp: 22,
        description: 'słonecznie',
        humidity: 65,
        wind: 12
    },
    'kraków': {
        temp: 20,
        description: 'pochmurno',
        humidity: 70,
        wind: 8
    }
};

function getWeather() {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.toLowerCase().trim();

    if (city === '') {
        alert('Wpisz nazwę miasta!');
        return;
    }

    const weather = weatherData[city];

    if (weather) {
        document.getElementById('temp').textContent = weather.temp;
        document.getElementById('description').textContent = weather.description;
        document.getElementById('city').textContent = city;
        document.getElementById('humidity').textContent = weather.humidity;
        document.getElementById('wind').textContent = weather.wind;
    } else {
        alert('Nie znaleziono miasta. Spróbuj: Warszawa lub Kraków');
    }
}

document.getElementById('city-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeather();
    }
}); 