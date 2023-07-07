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
        const card = document.createElement('div');
        card.innerHTML = `<h2>${prophet.name} ${prophet.lastname}</h2>
                          <p>Date of birth: ${prophet.birthdate}</p>
                          <p>Place of birth: ${prophet.birthplace}</p>
                          <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}">`;
        cards.append(card);
    });
}

getProphetData(url);