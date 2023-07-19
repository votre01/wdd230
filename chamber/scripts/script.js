
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation');
const hambuttom = document.querySelector('#menu');
const welcomeMessage = document.querySelector('#welcomeMessage');
const currentDate = new Date();
const msToDays = 84600000;

const userTitle = document.querySelector('#title');
const titleMessage = document.querySelector('#titleMessage');
const regex = /^[a-zA-Z\s-]{7,}$/;

const directory = document.querySelector('#directory');
const membersUrl = 'https://votre01.github.io/wdd230/chamber/data/members.json';
const dirToggle = document.querySelector('#dirToggle');

const spotSelection = document.querySelector('#spotSelection');


// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});

// Check if title matches regex
// userTitle.addEventListener("focusout", checkSame);

function checkSame() {
	if (!regex.test(userTitle.value)) {
		titleMessage.textContent = "*Title should contain at least 7 alpha characters!";
		titleMessage.style.color = "red";
		titleMessage.style.visibility = "show";
		userTitle.style.backgroundColor = "#fff0f3";
		userTitle.value = "";
		userTitle.focus();
	} else {
		titleMessage.style.display = "none";
		userTitle.style.backgroundColor = "#fff";
		userTitle.style.color = "#000";
	}
}

// Get weather
const weatherInfo = document.querySelector('#weatherInfo');
const forecastInfo = document.querySelector('#forecastInfo');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.83&lon=31.05&units=imperial&appid=4eb999e92d892ed7069e6c7aec3abf13';

const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.83&lon=31.05&exclude=curent,minutely&appid=4eb999e92d892ed7069e6c7aec3abf13';

async function fetchWeatherApi(url, placement) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data, placement);
      console.log(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

const displayResults = (weather, placement) => {
    placement.innerHTML = `<img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.weather[0].main}"> <span>${weather.main.temp}&#8457; - ${weather.weather[0].description}</span>`;
};

fetchWeatherApi(url, weatherInfo);
fetchWeatherApi(forecastUrl, forecastInfo);

// Get member data
async function getMemberData(url) {
    const response = await fetch(membersUrl);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayMembers(data.members, directory);
        // spotlight(data.members);
    }
}


function spotlight(members) {
    const selection1 = assignSelection(members, selection1);
    const selection2 = assignSelection(members, selection2);

    const selectedMembers = [members[selection1], members[selection2]];
    displayMembers(selectedMembers, spotSelection);
}

const assignSelection = (members, selection) => {
    let memberIndex = Math.floor(Math.random() * members.length) + 1;

    if (members[memberIndex].membershipLevel == 'Silver' || members[memberIndex].membershipLevel == 'Gold') {
        selection = memberIndex;
        console.log(selection);
    } else {
        selection = 4;
    }

    return selection;
}

const displayMembers = (members, placement) => {    
    members.forEach((member) => {
        const directoryCard = document.createElement('div');
        directoryCard.innerHTML = `<img src="${member.profilePic}" title="${member.name}">
                                   <h3>${member.name}</h3>
                                   <p>⭐${member.membershipLevel}⭐</p>
                                   <p>${member.address}</p>
                                   <p>${member.phone}</p>
                                   <a href="${member.website}" target="_blank">Website</a>`;
        
        placement.append(directoryCard);
    });
};


getMemberData(membersUrl);

// Toggle List/Grid view directory
dirToggle.addEventListener('click', toggleDirectoryView);

function toggleDirectoryView() {
    if (dirToggle.textContent == 'List View') {
        directory.classList.remove('dirGrid');
        directory.classList.add('dirList');
        dirToggle.textContent = 'Grid View';        
    } else {
        directory.classList.remove('dirList');        
        directory.classList.add('dirGrid');
        dirToggle.textContent = 'List View';
    }
}

// Local Storage
const now = new Date();
const timestampField = document.querySelector("#timestamp");
timestampField.value = now.toISOString();

// Store latest visit date on local storage
if (!localStorage.getItem('lastV')) {
    welcomeMessage.textContent = 'Welcome! Let us know if you have any questions.';
    localStorage.setItem('lastV', JSON.stringify(currentDate));

} else {   
    let lastVisited = new Date(getLastVisitDate());    
    let daysSinceVisit = (Date.now() - lastVisited.getTime()) / msToDays;
    console.log(lastVisited);
    console.log(currentDate);

    if (daysSinceVisit < 1) {
        welcomeMessage.textContent = 'Back so soon! Awesome!';        
    } else {
        welcomeMessage.textContent = `You last visited ${daysSinceVisit} days ago.`;
    }
      
    localStorage.setItem('lastV', (currentDate));
}

function getLastVisitDate() {
    return localStorage.getItem('lastV');
}