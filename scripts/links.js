/*
 * Author: Trevor Ngwenya
 * Date: 08 July 2023
 */

const baseURL = 'https://votre01.github.io/wdd230/';
const linksURL = 'https://votre01.github.io/wdd230/data/links.json';

async function getLinksData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayLinks(data);
    }
}

const displayLinks = (weeks) => {
    weeks.weeks.forEach(week => {
        const weekLinks = document.createElement('li');
            weekLinks.innerHTML = `${week.week} `;
            week.links.forEach(link => {
                weekLinks.innerHTML += ` | <a href="${link.url}">${link.title}</a>`;
            });
        lessonLinks.append(weekLinks);         
    });
}

getLinksData(linksURL);


