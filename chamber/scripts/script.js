
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
