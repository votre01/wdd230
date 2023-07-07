// 4eb999e92d892ed7069e6c7aec3abf13
// 49.78820126534471, 6.59517827172936

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.78&lon=6.59&units=imperial&appid=4eb999e92d892ed7069e6c7aec3abf13';

async function fetchWeatherApi() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      console.log(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

const displayResults = (weather) => {
    currentTemp.textContent = `${weather.main.temp}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `${weather.weather[0].main}`);
    captionDesc.textContent = `${weather.weather[0].description}`
};


fetchWeatherApi();