const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.table(data);
        displayProphets(data.prophets);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        cards.innerHTML = `<h1>${prophet.name}</h1>`;
    });
}

getProphetData(url);