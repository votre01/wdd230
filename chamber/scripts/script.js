
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


// Get member data
async function getMemberData(url) {
    const response = await fetch(membersUrl);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayMembers(data.members);
    }
}

const displayMembers = (members) => {    
    members.forEach((member) => {
        const directoryCard = document.createElement('div');
        directoryCard.innerHTML = `<img src="${member.profilePic}" title="${member.name}">
                                   <h3>${member.name}</h3>
                                   <p>${member.membershipLevel}
                                   <p>${member.address}</p>
                                   <p>${member.phone}</p>
                                   <a href="${member.website}" target="_blank">Website</a>`;
        directory.append(directoryCard);
    });
};

getMemberData(membersUrl);

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