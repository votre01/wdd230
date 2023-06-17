
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation');
const hambuttom = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});