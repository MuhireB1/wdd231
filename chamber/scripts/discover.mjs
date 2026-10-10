import { setupNavigation, setupWayfinding } from "./utils.mjs";
setupWayfinding();
setupNavigation();
import { places } from "../data/places.mjs";

const showHere = document.querySelector("#all-places");

// Loop through the places array and create a card for each place
function displayPlaces() {
    places.forEach(place => {
        // build card element
        const card = document.createElement("div");
        //Build photo elememnt
        const photo = document.createElement("img");
        photo.src = place["image-url"];
        photo.alt = place.name;
        photo.width = 300;
        photo.height = 200;
        
        card.appendChild(photo);
        // build the title
        const title = document.createElement("h2");
        title.innerHTML = place.name;
        card.appendChild(title);
        // build address
        const address = document.createElement("p");
        address.innerHTML = place.address;
        card.appendChild(address);
        // build description
        const description = document.createElement("address");
        description.innerHTML = place.description;
        card.appendChild(description);
        // Create button
        const btn = document.createElement("button");
        btn.innerHTML = `<button class ="btn">Learn More</button>`;
        card.appendChild(btn); 
        // append the card to the container
        showHere.appendChild(card);
    });
};

displayPlaces();

// Using localStorage to generate the visitor message
const visitMessage = document.querySelector("#visit-message");
const lastVisit = "lastVisit";

function displayVisitMessage() {
    if (!visitMessage) return;

    const nowTime = Date.now();
    const previousVisit = localStorage.getItem(lastVisit);

    if (previousVisit === null) {
        visitMessage.textContent =
            "Welcome! Let us know if you have any questions.";
    } else {
        const previousTime = Number(previousVisit);

        if (
            !Number.isFinite(previousTime) ||
            previousTime > nowTime ||
            previousTime <= 0
        ) {
            visitMessage.textContent =
                "Welcome! Let us know if you have any questions.";
        } else {
            const timeSpan = nowTime - previousTime;
            const oneDay = 1000 * 60 * 60 * 24;

            if (timeSpan < oneDay) {
                visitMessage.textContent =
                    "Back so soon! Awesome!";
            } else {
                const days = Math.floor(timeSpan / oneDay);
                const unit = days === 1 ? "day" : "days";

                visitMessage.textContent =
                    `You last visited ${days} ${unit} ago.`;
            }
        }
    }

    // Save the current visit timestamp
    localStorage.setItem(lastVisit, String(nowTime));
}

displayVisitMessage();