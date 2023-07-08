
/*
 * Author: Trevor Ngwenya
 * Date: 06 July 2023
 */

// -17.83129568510987, 31.05410106805462

// Set dates
const currentYear = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

currentYear.innerText = new Date().getFullYear();
lastModified.innerText = `Last Modification: ${document.lastModified}`;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation');
const hambuttom = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});

// Set dark mode
const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');
const body = document.querySelector('body');
const mainHeader = document.querySelector('#mainHeader');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('☑️')) {
        body.style.backgroundColor = '#242423';
        main.style.color = '#e8eddf';
        mainHeader.style.color = '#e8eddf';
        modeButton.textContent = '❎';
    } else {
        body.style.backgroundColor = '#fff';
        main.style.color = '#333533';
        mainHeader.style.color = '#333533';
        modeButton.textContent = '☑️';
    }
});

// Get weather
const weatherInfo = document.querySelector('#weatherInfo');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.83&lon=31.05&units=imperial&appid=4eb999e92d892ed7069e6c7aec3abf13';

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
    weatherInfo.innerHTML = `<img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.weather[0].main}"> <span>${weather.main.temp}&#8457; - ${weather.weather[0].description}</span>`;
};

fetchWeatherApi();

// Local storage - page visit counter

const pageVisits = document.querySelector('#pageVisits');
let visitCount = 0;

window.addEventListener('load', function() {
    if (!localStorage.getItem('siteVisits')) {
        localStorage.setItem('siteVisits', 1);
    } else {
        visitCount = localStorage.getItem('siteVisits');
        visitCount++;
        this.localStorage.setItem('siteVisits', visitCount);
        pageVisits.textContent = `Page visits: ${localStorage.getItem('siteVisits')}`;
    }
});


// Range slider for ratings
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#message");

kp2.addEventListener("focusout", checkSame);
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Passwords DO NOT MATCH!";
		message.style.color = "red";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}