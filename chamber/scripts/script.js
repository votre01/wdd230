
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation');
const hambuttom = document.querySelector('#menu');
const welcomeMessage = document.querySelector('#welcomeMessage');
const currentDate = new Date();
const msToDays = 84600000;

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});

// Check if title matches regex
const userTitle = document.querySelector('#title');
const titleMessage = document.querySelector('#titleMessage');
const regex = /^[a-zA-Z\s-]{7,}$/;

userTitle.addEventListener("focusout", checkSame);
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