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
        console.table(data);
        // setLinks(data.links);
    }
}

getLinksData(linksURL);


