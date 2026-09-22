const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");

// async/await function to fetch prophets data
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let DOB = document.createElement('p');
        let POB = document.createElement('p');
        let portrait = document.createElement("img");

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build Date and place of Birth 
        DOB.textContent =  `Date of Birth: ${prophet.birthdate}`;
        POB.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image attributtes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loadng', "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute('height', '440');

        // Append the section card with the created elements
        card.appendChild(fullName);
        card.appendChild(DOB);
        card.appendChild(POB);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}