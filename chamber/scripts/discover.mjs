import { setupNavigation, setupWayfinding } from "./utils.mjs";
setupWayfinding();
setupNavigation();
import { places } from "../data/places.mjs";

const showHere = document.querySelector("#all-places");

// Loop through the places array and create a card for each place
function displayPlaces() {
    if (!showHere) return;

    const fragment = document.createDocumentFragment();

    places.forEach((place, index) => {
        const card = document.createElement("article");
        card.className = "place-card";

        const photo = document.createElement("img");
        photo.src = place["image-url"];
        photo.alt = place.name;
        photo.width = 300;
        photo.height = 200;
        photo.decoding = "async";

        if (index === 0) {
            photo.loading = "eager";
            photo.fetchPriority = "high";
        } else {
            photo.loading = "lazy";
        }

        const title = document.createElement("h2");
        title.textContent = place.name;

        const address = document.createElement("p");
        address.className = "place-address";
        address.textContent = place.address;

        const description = document.createElement("p");
        description.className = "place-description";
        description.textContent = place.description;

        const button = document.createElement("button");
        button.className = "btn";
        button.type = "button";
        button.textContent = "Learn More";

        // Preserve the existing design while avoiding nested buttons.
        card.append(photo, title, address, description, button);
        fragment.appendChild(card);
    });

    showHere.appendChild(fragment);
}

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