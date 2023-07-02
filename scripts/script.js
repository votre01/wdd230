
/*
 * Author: Trevor Ngwenya
 * Date: 06 July 2023
 */

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



const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}